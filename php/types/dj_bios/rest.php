<?php
register_rest_field('dj_bios', 'persona_id', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'persona_id');
    }
));

register_rest_field('dj_bios', 'website_url', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'website_url');
    }
));

register_rest_field('dj_bios', 'show_url', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'show_url');
    }
));

register_rest_field('dj_bios', 'soundcloud_link', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'soundcloud_link');
    }
));

register_rest_field('dj_bios', 'mixcloud_link', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'mixcloud_link');
    }
));

register_rest_field('dj_bios', 'twitter_link', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'twitter_link');
    }
));

register_rest_field('dj_bios', 'instagram_link', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'instagram_link');
    }
));

register_rest_field('dj_bios', 'facebook_link', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'facebook_link');
    }
));

register_rest_route('wp/v2', 'dj_bio_by_id', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $s = isset($request['slug']) ? $request['slug'] : $request['id'];
        $ps = get_posts(
              isset($request['id']) ? array(
                'posts_per_page' => -1,
                'post_type' => 'dj_bios',
                'post_status' => 'publish',
                'meta_query' => array(
                  array(
                     'key'     => 'persona_id',
                     'value'   => array($s)
                  )
                )
              ) : array(
                'posts_per_page' => -1,
                'post_type' => 'dj_bios',
                'post_status' => 'publish',
                'name' => $s
              )
            );
        $array = [];
        $controller = new \WP_REST_Posts_Controller('dj_bios');
        foreach ($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
        }
        return new \WP_REST_Response($array, 200);
    }
));

register_rest_route('wp/v2', '/dj_bio_by_slug', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $ps = get_posts(
          array(
            'posts_per_page' => -1,
            'post_type' => 'dj_bios',
            'post_status' => 'publish',
            'name' => $request['slug']
          )
        );
        $array = [];
        $controller = new \WP_REST_Posts_Controller('dj_bios');
        foreach ($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
        }

        return new \WP_REST_Response($array, 200);
    }
));
