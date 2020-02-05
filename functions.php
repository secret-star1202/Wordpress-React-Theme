<?php

add_action( 'admin_init', 'my_settings_init' );

function my_settings_init(){
    register_setting(
        'general',             // Options group
        'spinitron_key',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'calendar_id',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'calendar_key',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'support_text',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'stream_url',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_host',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_auth',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_port',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_secure',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_username',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_password',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_from',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'smtp_fromname',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'email_to',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    register_setting(
        'general',             // Options group
        'rss_feed_url',      // Option name/database
        'my_settings_sanitize' // Sanitize callback function
    );

    add_settings_section('api-credentials', 'API Credentials',
      'station_credentials_fxn', 'general');

    add_settings_section('misc-settings', 'API Credentials',
      'misc_settings_fxn', 'general');

    add_settings_field(
        'spinitron_key',
        'Spinitron API Key',
        'spinitron_callback',
        'general',
        'api-credentials'
    );

    add_settings_field(
        'calendar_id',
        'Google Calendar ID',
        'calendar_id_callback',
        'general',
        'api-credentials'
    );

    add_settings_field(
        'calendar_key',
        'Google Calendar API Key',
        'calendar_key_callback',
        'general',
        'api-credentials'
    );

    add_settings_field(
        'support_text',
        'Support Text',
        'support_text_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'stream_url',
        'Stream URL',
        'stream_url_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_host',
        'SMTP Host',
        'smtp_host_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_auth',
        'SMTP Auth',
        'smtp_auth_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_port',
        'SMTP Port',
        'smtp_port_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_secure',
        'SMTP Secure',
        'smtp_secure_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_username',
        'SMTP Username',
        'smtp_username_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_password',
        'SMTP Password',
        'smtp_password_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_from',
        'SMTP From',
        'smtp_from_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
        'smtp_fromname',
        'SMTP From Name',
        'smtp_fromname_callback',
        'general',
        'misc-settings'
    );

    add_settings_field(
      'email_to',
      'Email To',
      'email_to_callback',
      'general',
      'misc-settings'
    );

    add_settings_field(
      'rss_feed_url',
      'RSS Feed URL',
      'rss_feed_url_callback',
      'general',
      'misc-settings'
    );
}

function spinitron_callback(){
    ?>
    <label for="spinitron_key">
      <input id="spinitron_key" type="textbox" name="spinitron_key" value="<?php echo get_option( 'spinitron_key' ); ?>" />
    </label>
    <?php
}

function calendar_id_callback(){
    ?>
    <label for="calendar_id">
      <input id="calendar_id" type="textbox" name="calendar_id" value="<?php echo get_option( 'calendar_id' ); ?>" />
    </label>
    <?php
}

function calendar_key_callback(){
    ?>
    <label for="calendar_key">
      <input id="calendar_key" type="textbox" name="calendar_key" value="<?php echo get_option( 'calendar_key' ); ?>" />
    </label>
    <?php
}

function support_text_callback(){
    ?>
    <label for="support_text">
      <textarea id="support_text" name="support_text"><?php echo get_option( 'support_text' ); ?></textarea>
    </label>
    <?php
}

function stream_url_callback(){
  ?><label for="stream_url">
    <input id="stream_url" name="stream_url" type="url" value="<?php echo get_option( 'stream_url' ); ?>" />
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
    return $input ;
}

function station_credentials_fxn($arg) {
  echo '<p>Enter credentials here.</p>';
}

function misc_settings_fxn($arg) {
  echo '<h2>Miscellaneous Settings</h2>';
}

function init_scripts() {
  wp_enqueue_script('jquery-js', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), '1.0', true);

  wp_enqueue_style('twbs-css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
  wp_enqueue_script('twbs-js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery-js'), '1.0', true);

  wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/main.css');


  wp_enqueue_script('typekit-script', 'https://use.typekit.net/kdq4qji.js', array(), '1.0', true);
  wp_enqueue_script('custom-react-theme-script', get_template_directory_uri() . '/dist/app.js' , array(), '1.0', true);
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

function get_menus() {
    $menus = wp_get_nav_menus();
    array_map(function(&$m) {
        $m->items = wp_get_nav_menu_items($m);
    }, $menus);
    return $menus;
}

function chart_meta($post) {
  wp_nonce_field( basename( __FILE__ ), 'chart_meta_box_nonce' );

  $current_table = get_post_meta($post->ID, 'chart_table', true) ?
  get_post_meta($post->ID, 'chart_table', true) : array();

  $html = '<div class="inside"><h3>Chart Table</h3>';
  $html .= '<p><input type="file" id="chart_csv" name="chart_csv" /></p>';

  echo $html;
}

function create_posttype() {
    add_theme_support( 'post-thumbnails' );

    register_post_type( 'latest_epi',
        array(
            'labels' => array(
                'name' => __( 'Latest Episodes' ),
                'singular_name' => __( 'Latest Episode' )
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes')
        )
    );

    register_post_type( 'review',
        array(
            'labels' => array(
                'name' => __( 'Reviews' ),
                'singular_name' => __( 'Review' )
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes')
        )
    );

    register_post_type( 'event',
        array(
            'labels' => array(
                'name' => __( 'Events' ),
                'singular_name' => __( 'Event' )
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true
        )
    );

    register_post_type( 'playlist',
            array(
                'labels' => array(
                    'name' => __( 'Playlists' ),
                    'singular_name' => __( 'Playlist' )
                ),
                'public' => true,
                'has_archive' => true,
                'show_in_rest' => true
            )
        );

   register_post_type( 'now_playing',
       array(
           'labels' => array(
               'name' => __( 'Now Playing' ),
               'singular_name' => __( 'Now Playing' )
           ),
           'public' => true,
           'has_archive' => false,
           'show_in_rest' => true,
      )
   );

  register_post_type( 'timeline',
      array(
          'labels' => array(
              'name' => __( 'Timelines' ),
              'singular_name' => __( 'SubmitPodcast' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );

  register_post_type( 'frequently_asked',
      array(
          'labels' => array(
              'name' => __( 'Frequently Asked' ),
              'singular_name' => __( 'Frequently Asked' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );

  register_post_type( 'podcast',
      array(
          'labels' => array(
              'name' => __( 'Podcasts' ),
              'singular_name' => __( 'Podcast' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );

  register_post_type( 'podcast_series',
      array(
          'labels' => array(
              'name' => __( 'Podcast Series' ),
              'singular_name' => __( 'Podcast Series' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
     )
  );

  register_post_type( 'chart',
      array(
          'labels' => array(
              'name' => __('Charts'),
              'singular_name' => __( 'Chart' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
          'register_meta_box_cb' => function($post) {
              add_meta_box('chart_table', 'Chart Table', 'chart_meta', 'chart', 'side', 'low');
          }
    )
  );

  register_post_type( 'mnl_video',
      array(
          'labels' => array(
              'name' => __('MNL Video'),
              'singular_name' => __( 'MNL Videos' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
    )
  );

  register_post_type( 'staff',
      array(
          'labels' => array(
              'name' => __('Staff Member'),
              'singular_name' => __( 'Staff Members' )
          ),
          'public' => true,
          'has_archive' => false,
          'show_in_rest' => true,
    )
  );

  register_meta('chart', 'chart_table', array(
    'show_in_rest' => true
  ));
}

function save_custom_meta_data($id) {
  if('chart' == $_POST['post_type']) {
      if(!current_user_can('edit_page', $id)) {
        return $id;
      }
    } else {
        if(!current_user_can('edit_page', $id)) {
            return $id;
        }
    }

  if (!empty($_FILES['chart_csv']['name'])) {
    $supported_types = array('text/csv');

    $arr_file_type = wp_check_filetype(basename($_FILES['chart_csv']['name']));
    $uploaded_type = $arr_file_type['type'];
        if(in_array($uploaded_type, $supported_types)) {
            $upload = file_get_contents($_FILES['chart_csv']['tmp_name']);
            update_post_meta($id, 'chart_table', $upload);
        } else {
            wp_die('The file you\'ve uploaded is not a CSV.');
        }
  }
}

add_action('save_post', 'save_custom_meta_data');
add_action( 'init', 'create_event_tax' );

function create_event_tax() {
    register_taxonomy(
        'event',
        array(
            'label' => __( 'Event' ),
            'rewrite' => array( 'slug' => 'event' ),
            'hierarchical' => true,
        )
    );
}


function update_now_playing($artist, $song, $show) {
  $p = get_posts(array(
    'post_type' => 'now_playing',
    'numberposts' => 1
  ));
  $i = $p[0]->ID;
  update_post_meta($i, 'artist', $artist);
  update_post_meta($i, 'song', $song);
  update_post_meta($i, 'show', $show);
}

add_action( 'init', 'create_posttype' );

add_action('rest_api_init', function() {
    register_rest_route( 'wp/v2', '/open_sesame', array(
        array(
          'methods' => 'POST',
          'callback' => function(WP_REST_Request $request) {
              wp_insert_post(array(
				        'post_author' => 1,
        				'post_title' => $request['title'],
        				'post_content' => $request['content'],
        				'post_excerpt' => $request['excerpt'],
        				'post_status' => 'publish',
                'post_date' => $request['date']
			       ));
          }
        )
    ));

    register_rest_route( 'wp/v2', '/open_barley', array(
        array(
          'methods' => 'POST',
          'callback' => function(WP_REST_Request $request) {
             $id = wp_insert_post(array(
				        'post_author' => 1,
                'post_type' => 'review',
        				'post_title' => $request[artist] . ' - ' .  $request['title'],
        				'post_content' => $request['content'],
        				'post_status' => 'publish'
			       ));
            update_post_meta($id, 'artist', $request['artist']);
            update_post_meta($id, 'title', $request['title']);
            update_post_meta($id, 'year', $request['year']);
            update_post_meta($id, 'label', $request['label']);
            update_post_meta($id, 'rating', $request['rating']);
          }
        )
    ));

    register_rest_route( 'wp/v2', '/spin', array(
        array(
          'methods' => 'POST',
          'callback' => function(WP_REST_Request $request) {
            update_now_playing($request['artist'], $request['song'], $request['show']);
          }
        )
    ));

    register_rest_route( 'wp/v2', '/menus', array(
        'methods' => 'GET',
        'callback' => 'get_menus'
    ));

    register_rest_route( 'wp/v2', '/all_posts', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
          $ps = get_posts(array(
            'posts_per_page' => '-1',
            'post_status' => 'publish')
          );
          $array = [];
          $controller = new \WP_REST_Posts_Controller('post');
          foreach($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
          }
          return new \WP_REST_Response($array, 200);
        }
    ));

    register_rest_route( 'wp/v2', '/search', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
          if(isset($request['s'])) {
            $ps = get_posts(array(
              's' => $request['s'],
              'posts_per_page' => $request['per_page'],
              'page' => $request['page'],
              'post_type' => $request['type'],
              'post_status' => 'publish')
            );
            $array = [];
            $controller = new \WP_REST_Posts_Controller($request['type']);
            foreach($ps as $p) {
              $data = $controller->prepare_item_for_response($p, $request);
              $array[] = $controller->prepare_response_for_collection($data);
            }
            return new \WP_REST_Response($array, 200);
          }
        }
    ));

    register_rest_route( 'wp/v2', '/next_on_air', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $ch = curl_init();
            $url = "https://spinitron.com/api/shows?access-token=" . $key . '&count=2';
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $str = curl_exec($ch);
            curl_close($ch);
            return new \WP_REST_Response(json_decode($str, true)['items'][1], 200);
          }
    ));

    register_rest_route( 'wp/v2', '/schedule', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            function parse_that_date($that_date) {
              $ts = strtotime($that_date);
              $dt = new DateTime("@$ts", new DateTimeZone('Pacific/Honolulu'));
              return getdate(date_timestamp_get($dt));
            }

            $key = get_option('spinitron_key');
            $ch = curl_init();
            $url = "https://spinitron.com/api/shows?access-token=" . $key . "&count=100&perPage=100&expand=personas";
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $str = curl_exec($ch);
            curl_close($ch);

            $original_data_json = json_decode($str, true);
            $original_data = $original_data_json["items"];
            $schedule = [];

            for ($d = 0; $d < 7; $d++) {
              $schedule[$d] = [];
            }

            foreach($original_data as $show) {
              $ts = strtotime($show['start']);
              $wdat = getdate(date_timestamp_get(new DateTime("@$ts")))['wday'];
              $schedule[$wdat][] = $show;
            }

            for ($d = 0; $d < 7; $d++) {
              $arr = $schedule[$d];

              usort($arr, function ($a, $b) {
                $a_ts = strtotime($a['start']);
                $b_ts = strtotime($b['start']);
                $a_date = getdate(date_timestamp_get(new DateTime("@$a_ts")));
                $b_date = getdate(date_timestamp_get(new DateTime("@$b_ts")));
                $a_hour = $a_date['hours'];
                $b_hour = $b_date['hours'];
                $a_min = $a_date['minutes'];
                $b_min = $b_date['minutes'];

                if ($a_hour < $b_hour) {
                  return -1;
                }
                if ($a_hour > $b_hour) {
                  return 1;
                }
                if ($a_min < $b_min) {
                  return -1;
                }
                if ($a_min > $b_min) {
                  return 1;
                }
                return 0;
              });

              $schedule[$d] = $arr;
            }

            return new \WP_REST_Response($schedule, 200);
          }
    ));

    register_rest_route( 'wp/v2', '/show', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $ch = curl_init();
            $id = $request['id'];
            $url = "https://spinitron.com/api/shows/" . $id . "?access-token=" . $key . "&expand=personas";
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $strd = curl_exec($ch);
            curl_close($ch);
            $show = json_decode($strd, true);
            $personas = $show['personas'];

            $cd = curl_init();
            curl_setopt($cd, CURLOPT_URL, "https://spinitron.com" . $show["_links"]["playlists"]["href"] . "&count=1");
            curl_setopt($cd, CURLOPT_RETURNTRANSFER, true);
            $stre = curl_exec($cd);
            curl_close($cd);
            $playlist_data = json_decode($stre, true);

            $cd = curl_init();
            curl_setopt($cd, CURLOPT_URL, $playlist_data['items'][0]["_links"]["spins"]["href"] . "&count=200");
            curl_setopt($cd, CURLOPT_RETURNTRANSFER, true);
            $stre = curl_exec($cd);
            curl_close($cd);
            $spins = json_decode($stre, true)['items'];

            $controller = new \WP_REST_Posts_Controller('latest_epi');

            $latest = $controller->prepare_item_for_response(
              get_posts(
                array(
                  'post_type' => 'latest_epi',
                  'posts_per_page' => '-1',
                  'meta_query' => array(
                    array(
                      'key' => 'show_id',
                      'value' => $request['id'],
                      'compare' => '='
                    )
                  ),
                  'post_status' => 'publish'
                )
            )[0], $request);

            return new \WP_REST_Response(array(
              'show' => $show,
              'personas' => $personas,
              'playlist' => $spins,
              'latestEpisodeLink' => $latest,
              'latestEpisode' => $playlist_data['items'][0]
            ), 200);
          }
    ));

    register_rest_route( 'wp/v2', '/num_posts', array(
        'methods' => 'GET',
        'callback' => function() {
            return new \WP_REST_Response(wp_count_posts()->publish, 200);
          }
    ));

    register_rest_route( 'wp/v2', '/num_reviews', array(
        'methods' => 'GET',
        'callback' => function() {
            return new \WP_REST_Response(wp_count_posts('review')->publish, 200);
          }
    ));

    register_rest_route( 'wp/v2', '/g_cal', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $key = get_option('calendar_key');
            $id = get_option('calendar_id');
            $ch = curl_init();
            $url = "https://www.googleapis.com/calendar/v3/calendars/" .
              $id . "/events?key=" . $key;
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $str = curl_exec($ch);
            curl_close($ch);
            return new \WP_REST_Response(json_decode($str), 200);
          }
    ));

    register_rest_route( 'wp/v2', '/support_text', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $str = get_option('support_text');
            return new \WP_REST_Response($str, 200);
          }
    ));

    register_rest_route( 'wp/v2', '/stream_url', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $str = get_option('stream_url');
            return new \WP_REST_Response($str, 200);
          }
    ));

    register_rest_route('wp/v2', 'post_search_count', array(
      'methods' => 'GET',
      'callback' => function(WP_REST_Request $request) {
          $allsearch = new WP_Query('post_type=post&s=' . $request['s'] . '&showposts=-1');
          $count = $allsearch->found_posts;
          return new \WP_REST_Response(strval($count), 200);
        }
    ));

    register_rest_route('wp/v2', 'review_search_count', array(
      'methods' => 'GET',
      'callback' => function(WP_REST_Request $request) {
          $allsearch = new WP_Query('post_type=review&s=' . $request['s'] . '&showposts=-1');
          $count = $allsearch->found_posts;
          return new \WP_REST_Response(strval($count), 200);
        }
    ));

    register_rest_route('wp/v2', 'showlink_for', array(
      'methods' => 'GET',
      'callback' => function(WP_REST_Request $request) {
          $ps = get_posts(array(
            'post_type' => 'latest_epi',
            'posts_per_page' => '-1',
            'meta_query' => array(array(
              'key' => 'show_id',
              'value' => $request['show_id'],
              'compare' => '='
            )),
            'post_status' => 'publish')
          );
          $array = [];
          $controller = new \WP_REST_Posts_Controller('latest_epi');
          foreach($ps as $p) {
            $data = $controller->prepare_item_for_response($p, $request);
            $array[] = $controller->prepare_response_for_collection($data);
          }
          return new \WP_REST_Response($array, 200);
        }
    ));

    register_rest_route('wp/v2', 'approve_post', array(
      'methods' => 'GET',
      'callback' => function(WP_REST_Request $request) {
        if (get_post_status($request['id']) == 'pending') {
          $code = wp_update_post(array(
            'ID' =>  $request['id'],
            'post_status' => 'publish'
          ), true);
          if ($code == $request['id']) {
            return new \WP_REST_Response('Post approved', 200);
          }
          else {
            return new \WP_REST_Response('There was an error trying to approve the post.', 200);
          }
        }
        else if (get_post_status($request['id']) == 'publish') {
          return new \WP_REST_Response("Post already approved.", 200);
        }

        return new \WP_REST_Response(get_post_status($request['id']), 200);
      }
    ));

    register_rest_route('wp/v2', '/feed', array(
      array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
          $ch = curl_init();
          $url = get_option('rss_feed_url');
          curl_setopt($ch, CURLOPT_URL, $url);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          $str = curl_exec($ch);
          if (curl_error($ch)) {
            $e = curl_error($ch);
            curl_close($ch);
            return \WP_REST_Response($e, 200);
          }
          curl_close($ch);
          header('Content-Type: application/rss+xml');
          echo $str;
          exit();
        }
      )
    ));

    register_rest_field('review', 'img_url', array(
            'get_callback' => 'get_rest_featured_image'
        )
    );

    register_rest_field('post', 'img_url', array(
                'get_callback' => 'get_rest_featured_image'
            )
        );

    register_rest_field('review', 'year', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'year' );
      }
     ));
    register_rest_field('post', 'author', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'author' );
      }
     ));
     register_rest_field('review', 'label', array(
        'get_callback' => function($obj) {
              return get_post_meta($obj['id'], 'label' );
        }
       ));
     register_rest_field('review', 'title', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'title' );
      }
     ));
     register_rest_field('review', 'artist', array(
       'get_callback' => function($obj) {
             return get_post_meta($obj['id'], 'artist' );
       }
      ));
     register_rest_field('review', 'rating', array(
       'get_callback' => function($obj) {
             return get_post_meta($obj['id'], 'rating' );
       }
      ));

    register_rest_field('now_playing', 'artist', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'artist' );
      }
     ));

    register_rest_field('now_playing', 'show', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'show' );
      }
     ));

    register_rest_field('now_playing', 'song', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'song' );
      }
     ));

    register_rest_field('now_playing', 'timestamp', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'timestamp' );
      }
     ));

    register_rest_field('timeline', 'nodes', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id']);
      }
     ));

    register_rest_field('frequently_asked', 'data', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id']);
      }
     ));

    register_rest_field('podcast', 'podcast_id', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'podcast_id');
      }
     ));

    register_rest_field('podcast', 'podcast_type', array(
      'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'podcast_type');
      }
     ));
    register_rest_field('podcast', 'podcast_name', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'podcast_name');
        }
    ));
    register_rest_field('podcast', 'podcast_date', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'podcast_date');
        }
    ));
    register_rest_field('podcast_series', 'playlist_id', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'playlist_id');
        }
    ));
    register_rest_field('podcast_series', 'title', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'title');
        }
    ));
    register_rest_field('review', 'date', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'date' );
        }
    ));
    register_rest_field('wpspin_profiles', 'facebook_link', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'facebook_link' );
        }
    ));
    register_rest_field('wpspin_profiles', 'instagram_link', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'instagram_link' );
        }
    ));
    register_rest_field('wpspin_profiles', 'soundcloud', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'soundcloud' );
        }
    ));
    register_rest_field('wpspin_profiles', 'mixcloud_link', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'mixcloud_link' );
        }
    ));
    register_rest_field('event', 'event_name', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_name' );
        }
    ));
    register_rest_field('event', 'location', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'location' );
        }
    ));
    register_rest_field('event', 'event_date', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_date' );
        }
    ));
    register_rest_field('event', 'extra_info', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'extra_info' );
        }
    ));
    register_rest_field('event', 'event_location_link', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_location_link' );
        }
    ));
    register_rest_field('event', 'event_time', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_time' );
        }
    ));
    register_rest_field('event', 'location_address', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'location_address' );
        }
    ));
    register_rest_field('event', 'minor_age', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'minor_age' );
        }
    ));
    register_rest_field('event', 'adult_age', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'adult_age' );
        }
    ));
    register_rest_field('event', 'event_description', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_description' );
        }
    ));
    register_rest_field('event', 'event_time', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_time' );
        }
    ));
    register_rest_field('event', 'event_lineup', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_lineup' );
        }
    ));
    register_rest_field('event', 'event_link', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_link' );
        }
    ));
    register_rest_field('event', 'event_image', array(
        'get_callback' => function($obj) {
            return get_post_meta($obj['id'], 'event_image' );
        }
    ));

   register_rest_field('chart', 'chart_table', array(
       'get_callback' => function($obj) {
         return get_post_meta($obj['id'], 'chart_table' );
       }
   ));

    register_rest_field('mnl_video', 'video_url', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'video_url' );
        }
    ));

    register_rest_field('staff', 'member_name', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'member_name' );
        }
    ));

    register_rest_field('staff', 'member_role', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'member_role' );
        }
    ));

    register_rest_field('staff', 'member_bio', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'member_bio' );
        }
    ));
    register_rest_field('staff', 'member_photo', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'member_photo' );
        }
    ));
    register_rest_field('latest_epi', 'show_id', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'show_id' );
        }
    ));
    register_rest_field('latest_epi', 'ktuh_latest_show_archive', array(
        'get_callback' => function($obj) {
          return get_post_meta($obj['id'], 'ktuh_latest_show_archive' );
        }
    ));
});
add_action('wp_enqueue_scripts', 'init_scripts');
add_filter('wp_mail_content_type', function() {
  return 'text/html';
});

add_action( 'phpmailer_init', 'send_smtp_email' );
function send_smtp_email( $phpmailer ) {
    $phpmailer->isSMTP();
    $phpmailer->Host       = get_option('smtp_host');
    $phpmailer->SMTPAuth   = true;
    $phpmailer->Port       = get_option('smtp_port');
    $phpmailer->SMTPSecure = get_option('smtp_secure');
    $phpmailer->Username   = get_option('smtp_username');
    $phpmailer->Password   = get_option('smtp_password');
    $phpmailer->From       = get_option('smtp_from');
    $phpmailer->FromName   = get_option('smtp_fromname');
}

add_action('wp_mail_failed', function($wp_error) {
  echo "<pre>";
    print_r($wp_error);
    echo "</pre>";
}, 10, 1);

function email_ting($ID, $p) {
  $url = get_option('siteurl') . '/wp-admin/post.php?post=' . $ID . '&action=edit';

  wp_mail(get_option('email_to'), 'New Post for Review', '<a href="' . $url . '">' . $url . '</a>' .
    '<div><h1>' . $p->post_title . '</h1><h3>Submitted at ' . $p->post_date . '</h3>' . $p->post_content . '</div>' .
    '<a href="' . get_option('siteurl') . '/wp-json/wp/v2/approve_post?id=' . $ID . '">Approve Post</a>',
    'Content-type: text/html;charset=utf-8');
}

add_action('pending_post', 'email_ting', 10, 2);
add_action('pending_review', 'email_ting', 10, 2);
