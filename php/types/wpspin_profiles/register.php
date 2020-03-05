<?php
register_post_type('wpspin_profiles',
    array(
        'labels' => array(
            'name' => __('DJ Profiles'),
            'singular_name' => __('DJ Profile')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
    )
);
