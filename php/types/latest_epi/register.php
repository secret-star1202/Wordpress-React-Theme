<?php
register_post_type('latest_epi',
    array(
        'labels' => array(
            'name' => __('Latest Episodes'),
            'singular_name' => __('Latest Episode')
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes')
    )
);
