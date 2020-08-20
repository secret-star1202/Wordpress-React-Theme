<?php
  /*
   *  Chart meta
   */
  function chart_meta($post)
  {
      wp_nonce_field(basename(__FILE__), 'chart_meta_box_nonce');

      $current_table = get_post_meta($post->ID, 'chart_table', true) ?
          get_post_meta($post->ID, 'chart_table', true) : array();

      ?>
       <div class="inside"><h3>Chart Table</h3>
        <p><input type="file" id="chart_csv" name="chart_csv" /></p>
      </div>
      <?php
  }

    register_post_type('chart',
        array(
            'labels' => array(
                'name' => __('Charts'),
                'singular_name' => __('Chart')
            ),
            'public' => true,
            'has_archive' => false,
            'show_in_rest' => true,
            'rewrite' => array(
              'slug' => 'charts',
              'with_front' => false
            ),
            'register_meta_box_cb' => function ($post) {
                add_meta_box('chart_table', 'Chart Table', 'chart_meta', 'chart', 'side', 'low');
            }
        )
    );

    flush_rewrite_rules();

    register_meta('chart', 'chart_table', array(
        'show_in_rest' => true
    ));
