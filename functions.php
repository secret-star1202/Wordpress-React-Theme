<?php

function init_scripts() {
  wp_enqueue_script('jquery-js', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), '1.0', true);

  wp_enqueue_style('twbs-css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
  wp_enqueue_script('twbs-js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery-js'), '1.0', true);

  wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/main.css');

  wp_enqueue_script('typekit-script', 'https://use.typekit.net/kdq4qji.js', array(), '1.0', true);
  wp_enqueue_script('mediaelement-script', 'https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.10/mediaelement-and-player.min.js', array(), '1.0', true);
  wp_enqueue_script('custom-react-theme-script', get_template_directory_uri() . '/dist/app.js' , array(), '1.0', true);
}

function create_posttype() {
    register_post_type( 'review',
        array(
            'labels' => array(
                'name' => __( 'Reviews' ),
                'singular_name' => __( 'Review' )
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true
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

    register_rest_field('review', 'year');
    register_rest_field('review', 'label');
    register_rest_field('review', 'title');
    register_rest_field('review', 'artist');
    register_rest_field('review', 'rating');
}

add_action( 'init', 'create_posttype' );
add_action('wp_enqueue_scripts', 'init_scripts');
