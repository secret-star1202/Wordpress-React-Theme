<?php
register_rest_field('event', 'event_name', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_name');
        }
    ));
    register_rest_field('event', 'location', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'location');
        }
    ));
    register_rest_field('event', 'event_date', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_date');
        }
    ));
    register_rest_field('event', 'extra_info', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'extra_info');
        }
    ));
    register_rest_field('event', 'event_location_link', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_location_link');
        }
    ));
    register_rest_field('event', 'event_time', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_time');
        }
    ));
    register_rest_field('event', 'location_address', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'location_address');
        }
    ));
    register_rest_field('event', 'minor_age', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'minor_age');
        }
    ));
    register_rest_field('event', 'adult_age', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'adult_age');
        }
    ));
    register_rest_field('event', 'event_description', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_description');
        }
    ));
    register_rest_field('event', 'event_time', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_time');
        }
    ));
    register_rest_field('event', 'event_lineup', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_lineup');
        }
    ));
    register_rest_field('event', 'event_link', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_link');
        }
    ));
    register_rest_field('event', 'event_image', array(
        'get_callback' => function ($obj) {
            return get_post_meta($obj['id'], 'event_image');
        }
    ));