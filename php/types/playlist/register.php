<?php
register_post_type('playlist',
    array(
        'labels' => array(
            'name' => __('Playlists'),
            'singular_name' => __('Playlist')
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true
    )
);
