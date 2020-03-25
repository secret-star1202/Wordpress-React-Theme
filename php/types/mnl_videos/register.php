<?php
register_post_type('mnl_video',
    array(
        'labels' => array(
            'name' => __('MNL Video'),
            'singular_name' => __('MNL Videos')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
    )
);
