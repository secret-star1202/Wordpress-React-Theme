<?php
register_post_type('now_playing',
    array(
        'labels' => array(
            'name' => __('Now Playing'),
            'singular_name' => __('Now Playing')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true
    )
);
