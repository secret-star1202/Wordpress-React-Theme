<?php
register_rest_route('wp/v2', '/banner_text', array(
  array(
    'methods' => 'GET',
    'callback' => function() {
      $str = get_option('banner_enabled') ? get_option('banner_text') : '';
      return new \WP_REST_Response($str, 200);
    }
  )
));

register_rest_route('wp/v2', '/support_text', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $str = get_option('support_text');
        return new \WP_REST_Response($str, 200);
    }
));

register_rest_route('wp/v2', '/stream_url', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $str = get_option('stream_url');
        return new \WP_REST_Response($str, 200);
    }
));

register_rest_route('wp/v2', '/fallback_stream_url', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $str = get_option('fallback_stream_url');
        return new \WP_REST_Response($str, 200);
    }
));
