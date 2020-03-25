<?php
/*
 *  Event meta
 */
function event_name_meta($event) {
    wp_nonce_field(basename(__FILE__), 'event_name_meta_box_nonce');

    $id = $event->ID;

    $name = get_post_meta($id, 'event_name');

    ?>
    <div class="inside">
      <label for="event_name">Year</label>
      <input id="event_name_input" name="event_name" type="text" value="<?php echo is_array($name) ? $name[0] : $name; ?>" />
    </div><?php
}

function event_location_meta($event) {
    wp_nonce_field(basename(__FILE__), 'event_location_meta_box_nonce');

    $id = $event->ID;

    $location = get_post_meta($id, 'location');

    ?>
    <div class="inside">
      <label for="event_location">Year</label>
      <input id="event_location_input" name="event_location" type="text" value="<?php echo is_array($location) ? $location[0] : $location; ?>" />
    </div><?php
}

function event_date_meta($event) {
   wp_nonce_field(basename(__FILE__), 'event_date_meta_box_nonce');

    $id = $event->ID;

    $date = get_post_meta($id, 'event_date');

    ?>
    <div class="inside">
      <label for="event_date">Year</label>
      <input id="event_date_input" name="event_date" type="date" value="<?php echo is_array($date) ? $date[0] : $date; ?>" />
    </div><?php
}

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

register_post_type('event',
        array(
            'labels' => array(
                'name' => __('Events'),
                'singular_name' => __('Event')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
             'register_meta_box_cb' => function($review) {
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('location', 'Event Location', 'event_location_meta', 'event', 'side', 'low');
                add_meta_box('event_date', 'Event Date', 'event_date_meta', 'event', 'side', 'low');
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');

             }
        )
    );