<?php
    register_rest_field('review', 'label', array(
                'get_callback' => function ($obj) {
                    return get_post_meta($obj['id'], 'label');
                }
            ));
            register_rest_field('review', 'artist', array(
                'get_callback' => function ($obj) {
                    return get_post_meta($obj['id'], 'artist');
                }
            ));
            register_rest_field('review', 'rating', array(
                'get_callback' => function ($obj) {
                    return get_post_meta($obj['id'], 'rating');
                }
            ));

            register_rest_field('review', 'year', array(
                    'get_callback' => function ($obj) {
                        return get_post_meta($obj['id'], 'year');
                    }
                ));

            register_rest_field('review', 'img_url', array(
                        'get_callback' => 'get_rest_featured_image'
                    )
                );

                 register_rest_field('review', 'date', array(
                        'get_callback' => function ($obj) {
                            return get_post_meta($obj['id'], 'date');
                        }
                    ));

    register_rest_route('wp/v2', '/num_reviews', array(
           'methods' => 'GET',
           'callback' => function () {
               return new \WP_REST_Response(wp_count_posts('review')->publish, 200);
           }
       ));

register_rest_route('wp/v2', 'review_search_count', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $allsearch = new WP_Query('post_type=review&s=' . $request['s'] . '&showposts=-1');
            $count = $allsearch->found_posts;
            return new \WP_REST_Response(strval($count), 200);
        }
    ));
