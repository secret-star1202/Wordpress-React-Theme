<?php
register_rest_field('podcast_series', 'playlist_id', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'playlist_id');
    }
));
register_rest_field('podcast_series', 'title', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'title');
    }
));
register_rest_field('podcast_series', 'description', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'description');
    }
));
register_rest_field('podcast_series', 'photo', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'photo');
    }
));

register_rest_field('podcast_series', 'time', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'time');
    }
));

register_rest_field('podcast_series', 'host', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'host');
    }
));
