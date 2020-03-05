<?php
register_rest_field('latest_epi', 'show_id', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'show_id');
    }
));
register_rest_field('latest_epi', 'ktuh_latest_show_archive', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'ktuh_latest_show_archive');
    }
));

register_rest_route('wp/v2', 'showlink_for', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $ps = get_posts(array(
                'post_type' => 'latest_epi',
                'posts_per_page' => '-1',
                'meta_query' => array(array(
                    'key' => 'show_id',
                    'value' => $request['show_id'],
                    'compare' => '='
                )),
                'post_status' => 'publish')
        );
        $array = [];
        $controller = new \WP_REST_Posts_Controller('latest_epi');
        foreach ($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
        }
        return new \WP_REST_Response($array, 200);
    }
));
