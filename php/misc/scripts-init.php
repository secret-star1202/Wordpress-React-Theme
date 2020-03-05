<?php
function init_scripts()
{
    wp_enqueue_script('jquery-js', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), '1.0', true);

    wp_enqueue_style('twbs-css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
    wp_enqueue_script('twbs-js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery-js'), '1.0', true);

    wp_enqueue_style('fa-css', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

    wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/main.css');


    wp_enqueue_script('typekit-script', 'https://use.typekit.net/kdq4qji.js', array(), '1.0', true);
    wp_enqueue_script('custom-react-theme-script', get_template_directory_uri() . '/dist/app.js', array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'init_scripts');
