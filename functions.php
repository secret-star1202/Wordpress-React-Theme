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

    add_settings_section('api-credentials', 'API Credentials',
      'station_credentials_fxn', 'general');

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

function my_settings_sanitize( $input ){
    return $input ;
}

function station_credentials_fxn($arg) {
  echo '<p>Enter credentials here.</p>';
}

function init_scripts() {
  wp_enqueue_script('jquery-js', 'https://code.jquery.com/jquery-1.12.4.min.js', array(), '1.0', true);

  wp_enqueue_style('twbs-css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
  wp_enqueue_script('twbs-js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery-js'), '1.0', true);

  wp_enqueue_style('player-style', get_template_directory_uri() . '/dist/mediaelementplayer.min.css');
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
              'singular_name' => __( 'Timeline' )
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
        				'post_status' => 'publish'
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
        }
    ));

    register_rest_route( 'wp/v2', '/next_on_air', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $ch = curl_init();
            $url = "https://spinitron.com/api/shows?access-token=" . $key;
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $str = curl_exec($ch);
            curl_close($ch);
            return new \WP_REST_Response(json_decode($str), 200);
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
});
add_action('wp_enqueue_scripts', 'init_scripts');
