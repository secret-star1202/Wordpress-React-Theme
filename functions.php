<?php

function init_scripts() {
  wp_enqueue_script('jquery-js', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), '1.0', true);

  wp_enqueue_style('twbs-css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
  wp_enqueue_script('twbs-js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery-js'), '1.0', true);

  wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/main.css');

  wp_enqueue_script('typekit-script', 'https://use.typekit.net/kdq4qji.js', array(), '1.0', true);
  wp_enqueue_script('custom-react-theme-script', get_template_directory_uri() . '/dist/app.js' , array(), '1.0', true);
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

function get_menus() {
    $menus = wp_get_nav_menus();
    array_map(function(&$m) {
        $m->items = wp_get_nav_menu_items($m);
    }, $menus);
    return $menus;
}

function create_posttype() {
    add_theme_support( 'post-thumbnails' );

    register_post_type( 'review',
        array(
            'labels' => array(
                'name' => __( 'Reviews' ),
                'singular_name' => __( 'Review' )
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes')
        )
    );

    register_post_type( 'playlist',
            array(
                'labels' => array(
                    'name' => __( 'Playlists' ),
                    'singular_name' => __( 'Playlist' )
                ),
                'public' => true,
                'has_archive' => true,
                'show_in_rest' => true
            )
        );

   register_post_type( 'now_playing',
       array(
           'labels' => array(
               'name' => __( 'Now Playing' ),
               'singular_name' => __( 'Now Playing' )
           ),
           'public' => true,
           'has_archive' => false,
           'show_in_rest' => true,
      )
   );

  register_post_type( 'timeline',
      array(
          'labels' => array(
              'name' => __( 'Timelines' ),
              'singular_name' => __( 'Timeline' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );

  register_post_type( 'frequently_asked',
      array(
          'labels' => array(
              'name' => __( 'Frequently Asked' ),
              'singular_name' => __( 'Frequently Asked' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );
}

function update_now_playing($artist, $song) {
  $p = get_posts(array(
    'post_type' => 'now_playing',
    'numberposts' => 1
  ));
  $i = $p[0]->ID;
  update_post_meta($i, 'artist', $artist);
  update_post_meta($i, 'song', $song);
}

add_action( 'init', 'create_posttype' );

add_action('rest_api_init', function() {
    register_rest_route( 'wp/v2', '/spin', array(
        array(
          'methods' => 'POST',
          'callback' => function(WP_REST_Request $request) {
            update_now_playing($request['artist'], $request['song']);
          }
        )
    ));

    register_rest_route( 'wp/v2', '/menus', array(
        'methods' => 'GET',
        'callback' => 'get_menus'
    ));

    register_rest_field('review', 'img_url', array(
            'get_callback' => 'get_rest_featured_image'
        )
    );

    register_rest_field('post', 'img_url', array(
                'get_callback' => 'get_rest_featured_image'
            )
        );

    register_rest_field('review', 'year', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'year' );
      }
     ));
     register_rest_field('review', 'label', array(
        'get_callback' => function($obj) {
              return get_post_meta($obj['id'], 'label' );
        }
       ));
     register_rest_field('review', 'title', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'title' );
      }
     ));
     register_rest_field('review', 'artist', array(
       'get_callback' => function($obj) {
             return get_post_meta($obj['id'], 'artist' );
       }
      ));
     register_rest_field('review', 'rating', array(
       'get_callback' => function($obj) {
             return get_post_meta($obj['id'], 'rating' );
       }
      ));

    register_rest_field('now_playing', 'artist', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'artist' );
      }
     ));

    register_rest_field('now_playing', 'song', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'song' );
      }
     ));

    register_rest_field('now_playing', 'timestamp', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'timestamp' );
      }
     ));

    register_rest_field('timeline', 'nodes', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id']);
      }
     ));

    register_rest_field('frequently_asked', 'data', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id']);
      }
     ));
});
add_action('wp_enqueue_scripts', 'init_scripts');
