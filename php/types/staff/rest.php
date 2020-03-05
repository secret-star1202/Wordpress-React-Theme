<?php
register_rest_field('staff', 'member_name', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'member_name');
    }
));

register_rest_field('staff', 'member_role', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'member_role');
    }
));

register_rest_field('staff', 'member_bio', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'member_bio');
    }
));
register_rest_field('staff', 'member_photo', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'member_photo');
    }
));
