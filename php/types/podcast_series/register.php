<?php
register_post_type('podcast_series',
    array(
        'labels' => array(
            'name' => __('Podcast Series'),
            'singular_name' => __('Podcast Series')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes'),
        'rewrite' => array(
          'slug' => 'podcasts',
          'with_front' => false
        )
    )
);

flush_rewrite_rules();

register_meta('podcast_series', 'itunes', array(
    'show_in_rest' => true
));

register_meta('podcast_series', 'spotify', array(
    'show_in_rest' => true
));
