<?php
register_rest_route('wp/v2', '/open_sesame', array(
        array(
            'methods' => 'POST',
            'callback' => function (WP_REST_Request $request) {
                wp_insert_post(array(
                    'post_author' => 1,
                    'post_title' => $request['title'],
                    'post_content' => $request['content'],
                    'post_excerpt' => $request['excerpt'],
                    'post_status' => 'publish',
                    'post_date' => $request['date']
                ));
            }
        )
    ));

    register_rest_route('wp/v2', '/open_barley', array(
        array(
            'methods' => 'POST',
            'callback' => function (WP_REST_Request $request) {
                $id = wp_insert_post(array(
                    'post_author' => 1,
                    'post_type' => 'review',
                    'post_title' => $request[artist] . ' - ' . $request['title'],
                    'post_content' => $request['content'],
                    'post_status' => 'publish'
                ));
                update_post_meta($id, 'artist', $request['artist']);
                update_post_meta($id, 'title', $request['title']);
                update_post_meta($id, 'year', $request['year']);
                update_post_meta($id, 'label', $request['label']);
                update_post_meta($id, 'rating', $request['rating']);
            }
        )
    ));

register_rest_route('wp/v2', 'approve_post', array(
  'methods' => 'GET',
  'callback' => function(WP_REST_Request $request) {
    if (get_post_status($request['id']) == 'pending') {
      $code = wp_update_post(array(
        'ID' =>  $request['id'],
        'post_status' => 'publish'
      ), true);
      if ($code == $request['id']) {
        return new \WP_REST_Response('Post approved', 200);
      }
      else {
        return new \WP_REST_Response('There was an error trying to approve the post.', 200);
      }
    }
    else if (get_post_status($request['id']) == 'publish') {
      return new \WP_REST_Response("Post already approved.", 200);
    }

    return new \WP_REST_Response(get_post_status($request['id']), 200);
  }
));

function get_menus()
{
    $menus = wp_get_nav_menus();
    array_map(function (&$m) {
        $m->items = wp_get_nav_menu_items($m);
    }, $menus);
    return $menus;
}

register_rest_route('wp/v2', '/menus', array(
    'methods' => 'GET',
    'callback' => 'get_menus'
));

register_rest_route('wp/v2', '/search', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        if (isset($request['s'])) {
            $ps = get_posts(array(
                    's' => $request['s'],
                    'posts_per_page' => $request['per_page'],
                    'page' => $request['page'],
                    'post_type' => $request['type'],
                    'post_status' => 'publish')
            );
            $array = [];
            $controller = new \WP_REST_Posts_Controller($request['type']);
            foreach ($ps as $p) {
                $data = $controller->prepare_item_for_response($p, $request);
                $array[] = $controller->prepare_response_for_collection($data);
            }
            return new \WP_REST_Response($array, 200);
        }
    }
));
