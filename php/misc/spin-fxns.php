<?php
function curl_ting($url, $decode) {
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $url);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   $str = curl_exec($ch);
   curl_close($ch);
   return $decode ? json_decode($str, true) : $str;
}

register_rest_route('wp/v2', '/g_cal', array(
    'methods' => 'GET',
    'callback' => function (WP_REST_Request $request) {
        $key = get_option('calendar_key');
        $id = get_option('calendar_id');
        $cal = curl_ting("https://www.googleapis.com/calendar/v3/calendars/" .
            $id . "/events?key=" . $key, true);
        return new \WP_REST_Response($cal, 200);
    }
));

    register_rest_route('wp/v2', '/next_on_air', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $json = curl_ting("https://spinitron.com/api/shows?access-token=" . $key . "&count=2", true);
            $next = $json['items']['1'];
            return new \WP_REST_Response($next, 200);
        }
    ));

    register_rest_route('wp/v2', '/last_playlists', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $playlists = curl_ting("https://spinitron.com/api/playlists?access-token=" . $key . "&count=8&expand=personas", true);
            return new \WP_REST_Response($playlists, 200);
        }
    ));

    register_rest_route('wp/v2', '/latest_playlist', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $key = get_option('spinitron_key');
            $show = curl_ting("https://spinitron.com/api/shows?access-token=" . $key . "&count=1&expand=personas", true);
            $playlist_data = curl_ting("https://spinitron.com" . $show['items'][0]["_links"]["playlists"]["href"] . "&count=1", true);
            $spins = curl_ting($playlist_data['items']['0']["_links"]["spins"]["href"] . "&count=200")['items'];
            $slug = '';
            $ps = get_posts(array(
              'posts_per_page' => -1,
              'post_type' => 'wpspin_profiles',
              'post_status' => 'publish',
              'meta_query' => array(
                array(
                   'key'     => 'show_page_id',
                   'value'   => array($show['items'][0]['id'])
                )
              )
            ));
            if ($ps) {
              foreach($ps as $p) {
                $slug = $p->post_name;
              }
            }

            return new \WP_REST_Response(array(
                'show' => $show['items'][0],
                'slug' => $slug,
                'playlist' => $spins
            ), 200);
        }
    ));

    register_rest_route('wp/v2', '/playlist', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $key = get_option('spinitron_key');

            $playlist = curl_ting("https://spinitron.com/api/playlists/" . $request['id'] . "?access-token=" . $key . "&count=1", true);
            $show = curl_ting($playlist["_links"]["show"]["href"], true);
            $spins = curl_ting("https://spinitron.com/api/spins?playlist_id=" . $request['id']  . "&access-token=" . $key . "&count=200", true);
            $slug = '';
            $ps = get_posts(array(
              'posts_per_page' => -1,
              'post_type' => 'wpspin_profiles',
              'post_status' => 'publish',
              'meta_query' => array(
                array(
                   'key'     => 'show_page_id',
                   'value'   => array($show['items'][0]['id'])
                )
              )
            ));
            if ($ps) {
              foreach($ps as $p) {
                $slug = $p->post_name;
              }
            }

            return new \WP_REST_Response(array(
                'show' => $show,
                'slug' => $slug,
                'playlist' => $spins['items']
            ), 200);
        }
    ));

    register_rest_route('wp/v2', '/schedule', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            function parse_that_date($that_date)
            {
                $ts = strtotime($that_date);
                $dt = new DateTime("@$ts", new DateTimeZone('Pacific/Honolulu'));
                return getdate(date_timestamp_get($dt));
            }

            $key = get_option('spinitron_key');
            $original_data_json = curl_ting("https://spinitron.com/api/shows?access-token=" . $key . "&count=100&perPage=100&expand=personas", true);
            $original_data = $original_data_json["items"];
            $schedule = [];

            for ($d = 0; $d < 7; $d++) {
                $schedule[$d] = [];
            }

            foreach ($original_data as $show) {
                $ts = strtotime($show['start']);
                $wdat = getdate(date_timestamp_get(
                  date_sub(new DateTime("@$ts"), date_interval_create_from_date_string('10 hours'))
                ))['wday'];
                $show_temp = $show;
                $ps = get_posts(array(
                  'posts_per_page' => -1,
                  'post_type' => 'wpspin_profiles',
                  'post_status' => 'publish',
                  'meta_query' => array(
                    array(
                       'key'     => 'show_page_id',
                       'value'   => array($show['id'])
                    )
                  )
                ));
                if ($ps) {
                  foreach($ps as $p) {
                    $show_temp['slug'] = $p->post_name;
                  }
                }
                $schedule[$wdat][] = $show_temp;
            }

            for ($d = 0; $d < 7; $d++) {
                $arr = $schedule[$d];

                usort($arr, function ($a, $b) {
                    $a_ts = strtotime($a['start']);
                    $b_ts = strtotime($b['start']);
                    $a_date = getdate(date_timestamp_get(
                      date_sub(new DateTime("@$a_ts"), date_interval_create_from_date_string('10 hours'))
                    ));
                    $b_date = getdate(date_timestamp_get(
                      date_sub(new DateTime("@$b_ts"), date_interval_create_from_date_string('10 hours'))
                    ));
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

    register_rest_route('wp/v2', '/show', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $id = '';

            if (isset($request['id'])) {
              $id = $request['id'];
            }
            else {
              $ps = get_posts(
                array(
                  'posts_per_page' => -1,
                  'post_type' => 'wpspin_profiles',
                  'post_status' => 'publish',
                  'name' => $request['slug']
                )
              );
              foreach($ps as $p) {
                $id = get_post_meta($p->ID, 'show_page_id')[0];
              }
            }

            $key = get_option('spinitron_key');

            $show = curl_ting("https://spinitron.com/api/shows/" . $id . "?access-token=" . $key . "&expand=personas", true);
            $personas = $show['personas'];
            $playlist_data = curl_ting("https://spinitron.com" . $show["_links"]["playlists"]["href"] . "&count=1", true);
            $spins = curl_ting($playlist_data['items'][0]["_links"]["spins"]["href"] . "&count=200", true)['items'];
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

register_rest_route('wp/v2', '/feed', array(
  array(
    'methods' => 'GET',
    'callback' => function(WP_REST_Request $request) {
      $ch = curl_init();
      $url = get_option('rss_feed_url');
      $str = curl_ting(get_option('rss_feed_url'), false);
      header('Content-Type: application/rss+xml');
      echo $str;
      exit();
    }
  )
));
