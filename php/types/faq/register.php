<?php
register_post_type('frequently_asked',
    array(
        'labels' => array(
            'name' => __('Frequently Asked'),
            'singular_name' => __('Frequently Asked')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true
    )
);
