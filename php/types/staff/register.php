<?php
register_post_type('staff',
    array(
        'labels' => array(
            'name' => __('Staff Member'),
            'singular_name' => __('Staff Members')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
    )
);
