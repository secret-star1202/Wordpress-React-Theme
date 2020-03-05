<?php
register_post_type('podcast',
    array(
        'labels' => array(
            'name' => __('Podcasts'),
            'singular_name' => __('Podcast')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true
    )
);
