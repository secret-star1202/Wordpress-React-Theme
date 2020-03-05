<?php
require('php/misc/settings-init.php');
require('php/misc/scripts-init.php');
require('php/misc/email-setup.php');

function get_rest_featured_image($object, $field_name, $request)
{
    if ($object['featured_media']) {
        $img = wp_get_attachment_image_src($object['featured_media'], 'app-thumb');
        return $img[0];
    }
    return false;
}

function create_posttype()
{
    add_theme_support('post-thumbnails');

    /* Type registration */
    require('php/types/charts/register.php');
    require('php/types/dj_bios/register.php');
    require('php/types/events/register.php');
    require('php/types/faq/register.php');
    require('php/types/latest_epi/register.php');
    require('php/types/mnl_videos/register.php');
    require('php/types/now_playing/register.php');
    require('php/types/playlist/register.php');
    require('php/types/podcast/register.php');
    require('php/types/podcast_series/register.php');
    require('php/types/reviews/register.php');
    require('php/types/staff/register.php');
    require('php/types/timeline/register.php');
    require('php/types/wpspin_profiles/register.php');
}

/* Save hooks */
require('php/types/reviews/save.php');
require('php/types/charts/save.php');

add_action('init', 'create_event_tax');

function create_event_tax()
{
    register_taxonomy(
        'event',
        array(
            'label' => __('Event'),
            'rewrite' => array('slug' => 'event'),
            'hierarchical' => true,
        )
    );
}

add_action('init', 'create_posttype');

add_action('rest_api_init', function () {
    require('php/misc/open-routes.php');
    require('php/misc/spin-fxns.php');

    require('php/types/charts/rest.php');
    require('php/types/dj_bios/rest.php');
    require('php/types/events/rest.php');
    require('php/types/faq/rest.php');
    require('php/types/latest_epi/rest.php');
    require('php/types/mnl_videos/rest.php');
    require('php/types/now_playing/rest.php');
    require('php/types/podcast/rest.php');
    require('php/types/podcast_series/rest.php');
    require('php/types/posts/rest.php');
    require('php/types/reviews/rest.php');
    require('php/types/settings/rest.php');
    require('php/types/staff/rest.php');
    require('php/types/timeline/rest.php');
    require('php/types/wpspin_profiles/rest.php');
});
