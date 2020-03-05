<?php
register_rest_field('now_playing', 'artist', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'artist');
        }
    ));

    register_rest_field('now_playing', 'show', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'show');
        }
    ));

    register_rest_field('now_playing', 'song', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'song');
        }
    ));

    register_rest_field('now_playing', 'timestamp', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'timestamp');
        }
    ));

    function update_now_playing($artist, $song, $show) {
        $p = get_posts(array(
            'post_type' => 'now_playing',
            'numberposts' => 1
        ));
        $i = $p[0]->ID;
        update_post_meta($i, 'artist', $artist);
        update_post_meta($i, 'song', $song);
        update_post_meta($i, 'show', $show);
    }

  register_rest_route('wp/v2', '/spin', array(
      array(
          'methods' => 'POST',
          'callback' => function (WP_REST_Request $request) {
              update_now_playing($request['artist'], $request['song'], $request['show']);
          }
      )
  ));
