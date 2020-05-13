<?php

add_action('admin_init', 'my_settings_init');

/*
 *  Register custom settings
 */
function my_settings_init() {
  // Spinitron API Key
  register_setting(
    'general',
    'spinitron_key',
    'my_settings_sanitize'
  );

  add_settings_field(
    'spinitron_key',
    'Spinitron API Key',
    'spinitron_callback',
    'general',
    'api-credentials'
  );

  // Google Calendar ID
  register_setting(
    'general',
    'calendar_id',
    'my_settings_sanitize'
  );

  add_settings_field(
    'calendar_id',
    'Google Calendar ID',
    'calendar_id_callback',
    'general',
    'api-credentials'
  );

  // Google Calendar API Key
  register_setting(
    'general',
    'calendar_key',
    'my_settings_sanitize'
  );

  add_settings_field(
    'calendar_key',
    'Google Calendar API Key',
    'calendar_key_callback',
    'general',
    'api-credentials'
  );

    // Support Text
    register_setting(
        'general',
        'support_text',
        'my_settings_sanitize'
    );

    add_settings_field(
        'support_text',
        'Support Text',
        'support_text_callback',
        'general',
        'misc-settings'
    );

    // Banner On/Off
    register_setting(
        'general',
        'banner_enabled',
        'my_settings_sanitize'
    );

    add_settings_field(
      'banner_enabled',
      'Enable Banner',
      'banner_enabled_callback',
      'general',
      'misc-settings'
    );

    // Banner Text
    register_setting(
        'general',
        'banner_text',
        'my_settings_sanitize'
    );

    add_settings_field(
      'banner_text',
      'Banner Text',
      'banner_text_callback',
      'general',
      'misc-settings'
    );

    // Stream URL
    register_setting(
        'general',
        'stream_url',
        'my_settings_sanitize'
    );

    add_settings_field(
       'stream_url',
        'Stream URL',
        'stream_url_callback',
        'general',
        'misc-settings'
    );

    // Fallback Stream URL
    register_setting(
        'general',
        'fallback_stream_url',
        'my_settings_sanitize'
    );

    add_settings_field(
       'fallback_stream_url',
        'Fallback Stream URL',
        'fallback_stream_url_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Host
    register_setting(
        'general',
        'smtp_host',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_host',
        'SMTP Host',
        'smtp_host_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Auth
    register_setting(
        'general',
        'smtp_auth',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_auth',
        'SMTP Auth',
        'smtp_auth_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Port
    register_setting(
        'general',
        'smtp_port',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_port',
        'SMTP Port',
        'smtp_port_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Secure
    register_setting(
        'general',
        'smtp_secure',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_secure',
        'SMTP Secure',
        'smtp_secure_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Username
    register_setting(
        'general',
        'smtp_username',
        'my_settings_sanitize'
    );

     add_settings_field(
        'smtp_username',
        'SMTP Username',
        'smtp_username_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP Password
    register_setting(
        'general',
        'smtp_password',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_password',
        'SMTP Password',
        'smtp_password_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP From Address
    register_setting(
        'general',
        'smtp_from',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_from',
        'SMTP From',
        'smtp_from_callback',
        'general',
        'misc-settings'
    );

    // Email SMTP From Name
    register_setting(
        'general',
        'smtp_fromname',
        'my_settings_sanitize'
    );

    add_settings_field(
        'smtp_fromname',
        'SMTP From Name',
        'smtp_fromname_callback',
        'general',
        'misc-settings'
    );

    // Email To Address
    register_setting(
        'general',
        'email_to',
        'my_settings_sanitize'
    );

    add_settings_field(
      'email_to',
      'Email To',
      'email_to_callback',
      'general',
      'misc-settings'
    );

    // RSS Feed URL
    register_setting(
      'general',
      'rss_feed_url',
      'my_settings_sanitize'
    );

    add_settings_field(
      'rss_feed_url',
      'RSS Feed URL',
      'rss_feed_url_callback',
      'general',
      'misc-settings'
    );

    add_settings_section('api-credentials', 'API Credentials',
        'station_credentials_fxn', 'general');

    add_settings_section('misc-settings', 'API Credentials',
        'misc_settings_fxn', 'general');
}

function spinitron_callback() {
    ?>
  <label for="spinitron_key">
    <input id="spinitron_key" type="textbox" name="spinitron_key" value="<?php echo get_option('spinitron_key'); ?>"/>
  </label>
    <?php
}

function calendar_id_callback()
{
    ?>
  <label for="calendar_id">
    <input id="calendar_id" type="textbox" name="calendar_id" value="<?php echo get_option('calendar_id'); ?>"/>
  </label>
    <?php
}

function calendar_key_callback()
{
    ?>
  <label for="calendar_key">
    <input id="calendar_key" type="textbox" name="calendar_key" value="<?php echo get_option('calendar_key'); ?>"/>
  </label>
    <?php
}

function support_text_callback()
{
    ?>
  <label for="support_text">
    <textarea id="support_text" name="support_text"><?php echo get_option('support_text'); ?></textarea>
  </label>
    <?php
}

function banner_enabled_callback() {
    ?><label for="banner_enabled">
  <input id="banner_enabled" name="banner_enabled" type="checkbox" value="1" <?php checked(1, get_option('banner_enabled'), true); ?> />
  </label><?php
}

function banner_text_callback() {
    ?><label for="banner_text">
  <input id="banner_text" name="banner_text" type="text" value="<?php echo get_option('banner_text'); ?>"/>
  </label><?php
}

function stream_url_callback()
{
    ?><label for="stream_url">
  <input id="stream_url" name="stream_url" type="url" value="<?php echo get_option('stream_url'); ?>"/>
  </label><?php
}

function fallback_stream_url_callback()
{
    ?><label for="fallback_stream_url">
  <input id="fallback_stream_url" name="fallback_stream_url" type="url" value="<?php echo get_option('fallback_stream_url'); ?>"/>
  </label><?php
}

function smtp_host_callback(){
  ?><label for="smtp_host">
    <input id="smtp_host" name="smtp_host" type="text" value="<?php echo get_option( 'smtp_host' ); ?>" />
  </label><?php
}

function smtp_auth_callback() {
  ?><label for="smtp_auth">
    <input id="smtp_auth" name="smtp_auth" type="text" value="<?php echo get_option( 'smtp_auth' ); ?>" />
  </label><?php
}

function smtp_port_callback() {
  ?><label for="smtp_port">
    <input id="smtp_port" name="smtp_port" type="text" value="<?php echo get_option( 'smtp_port' ); ?>" />
  </label><?php
}

function smtp_secure_callback() {
  ?><label for="smtp_secure">
    <input id="smtp_secure" name="smtp_secure" type="text" value="<?php echo get_option( 'smtp_secure' ); ?>" />
  </label><?php
}

function smtp_username_callback() {
  ?><label for="smtp_username">
    <input id="smtp_username" name="smtp_username" type="text" value="<?php echo get_option( 'smtp_username' ); ?>" />
  </label><?php
}

function smtp_password_callback() {
  ?><label for="smtp_password">
    <input id="smtp_password" name="smtp_password" type="password" value="<?php echo get_option( 'smtp_password' ); ?>" />
  </label><?php
}

function smtp_from_callback() {
  ?><label for="smtp_from">
    <input id="smtp_from" name="smtp_from" type="text" value="<?php echo get_option( 'smtp_from' ); ?>" />
  </label><?php
}

function smtp_fromname_callback() {
  ?><label for="smtp_fromname">
    <input id="smtp_fromname" name="smtp_fromname" type="text" value="<?php echo get_option( 'smtp_fromname' ); ?>" />
  </label><?php
}

function email_to_callback() {
  ?><label for="email_to">
    <input id="email_to" name="email_to" type="text" value="<?php echo get_option( 'email_to' ); ?>" />
  </label><?php
}

function rss_feed_url_callback() {
  ?><label for="rss_feed_url">
    <input id="rss_feed_url" name="rss_feed_url" type="text" value="<?php echo get_option( 'rss_feed_url' ); ?>" />
  </label><?php
}

function my_settings_sanitize( $input ){
    return $input;
}

function station_credentials_fxn($arg)
{
    echo '<p>Enter credentials here.</p>';
}

function misc_settings_fxn($arg)
{
    echo '<h2>Miscellaneous Settings</h2>';
}
