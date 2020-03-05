<?php
register_post_type('timeline',
    array(
        'labels' => array(
            'name' => __('Timelines'),
            'singular_name' => __('SubmitPodcast')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true
    )
);
