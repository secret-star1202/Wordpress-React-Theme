<?php
register_post_type('dj_bios',
    array(
        'labels' => array(
            'name' => __('DJ Bios'),
            'singular_name' => __('DJ Bio')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
    )
);

register_meta('dj_bios', 'persona_id', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'website_url', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'show_url', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'soundcloud_link', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'mixcloud_link', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'twitter_link', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'instagram_link', array(
    'show_in_rest' => true
));

register_meta('dj_bios', 'facebook_link', array(
    'show_in_rest' => true
));
