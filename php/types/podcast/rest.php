<?php
    register_rest_field('podcast', 'podcast_id', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'podcast_id');
        }
    ));

    register_rest_field('podcast', 'podcast_type', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'podcast_type');
        }
    ));
    register_rest_field('podcast', 'podcast_name', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'podcast_name');
        }
    ));
    register_rest_field('podcast', 'podcast_date', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'podcast_date');
        }
    ));
