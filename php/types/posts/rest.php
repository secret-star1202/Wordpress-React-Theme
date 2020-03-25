<?php
register_rest_route('wp/v2', '/num_posts', array(
        'methods' => 'GET',
        'callback' => function () {
            return new \WP_REST_Response(wp_count_posts()->publish, 200);
        }
    ));

register_rest_field('post', 'img_url', array(
        'get_callback' => 'get_rest_featured_image'
    )
);

register_rest_field('post', 'author', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'author');
    }
));

register_rest_route('wp/v2', 'post_search_count', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $allsearch = new WP_Query('post_type=post&s=' . $request['s'] . '&showposts=-1');
        $count = $allsearch->found_posts;
        return new \WP_REST_Response(strval($count), 200);
    }
));

register_rest_route('wp/v2', '/all_posts', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $ps = get_posts(array(
                'posts_per_page' => '-1',
                'post_status' => 'publish')
        );
        $array = [];
        $controller = new \WP_REST_Posts_Controller('post');
        foreach ($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
        }
        return new \WP_REST_Response($array, 200);
    }
));
