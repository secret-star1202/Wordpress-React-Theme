function init_scripts() {
  wp_enqueue_script('custom-react-theme-script', get_template_directory_uri() . '/dist/app.js' , array(), '1.0', true);
}

add_action('wp_enqueue_scripts, 'init_scripts');
