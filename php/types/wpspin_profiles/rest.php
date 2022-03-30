<?php
register_rest_route('wp/v2', '/wpspin_profiles', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $s = isset($request['slug']) ? $request['slug'] : $request['id'];
            $ps = get_posts(
                  isset($request['id']) ? array(
                    'posts_per_page' => -1,
                    'post_type' => 'wpspin_profiles',
                    'post_status' => 'publish',
                    'meta_query' => array(
                      array(
                         'key'     => 'show_page_id',
                         'value'   => array($s)
                      )
                    )
                  ) : array(
                    'posts_per_page' => -1,
                    'post_type' => 'wpspin_profiles',
                    'post_status' => 'publish',
                    'name' => $s
                  )
                );
            $array = [];
            $controller = new \WP_REST_Posts_Controller('wpspin_profiles');
            foreach ($ps as $p) {
                $data = $controller->prepare_item_for_response($p, $request);
                $array[] = $controller->prepare_response_for_collection($data);
            }
            return new \WP_REST_Response($array, 200);
        }
    ));

register_rest_field('wpspin_profiles', 'facebook_link', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'facebook_link');
        }
    ));
    register_rest_field('wpspin_profiles', 'instagram_link', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'instagram_link');
        }
    ));
    register_rest_field('wpspin_profiles', 'soundcloud', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'soundcloud');
        }
    ));
    register_rest_field('wpspin_profiles', 'mixcloud_link', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'mixcloud_link');
        }
    ));
    register_rest_field('wpspin_profiles', 'website', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'website');
        }
    ));
    register_rest_field('wpspin_profiles', 'show_page_id', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'show_page_id');
        }
    ));