<?php
/*
 *  Review meta
 */
function review_year_meta($review) {
    wp_nonce_field(basename(__FILE__), 'review_year_meta_box_nonce');

    $id = $review->ID;

    $year = get_post_meta($id, 'year');

    ?>
    <div class="inside">
      <label for="review_year">Year</label>
      <input id="review_year_input" name="review_year" type="number" min="1900" max="<?php echo date('Y'); ?>" value="<?php echo is_array($year) ? $year[0] : $year; ?>" />
    </div><?php
}

function review_label_meta($review) {
    wp_nonce_field(basename(__FILE__), 'review_label_meta_box_nonce');

    $id = $review->ID;
    $label = get_post_meta($id, 'label');

    ?>
       <div class="inside">
            <label for="review_label">Label</label>
            <input id="review_label_input" name="review_label" type="text" value="<?php echo is_array($label) ? $label[0] : $label; ?>" />
            </div>
    <?php
 }

 function review_artist_meta($review) {
     wp_nonce_field(basename(__FILE__), 'review_artist_meta_box_nonce');

     $id = $review->ID;
    $artist = get_post_meta($id, 'artist');
    ?>

      <div class="inside">
      <label for="review_artist">Artist</label>
      <input id="review_artist_input" name="review_artist" type="text" value="<?php echo is_array($artist) ? $artist[0] : $artist; ?>" />
      </div>
    <?php
}
 function review_rating_meta($review) {
         wp_nonce_field(basename(__FILE__), 'review_rating_meta_box_nonce');

         $id = $review->ID;

    $rating = get_post_meta($id, 'rating');
?>
    <div>
      <label for="review_rating">Rating</label>
      <input id="review_rating_input" name="review_rating" type="range" min="0.5" max="5.0" step="0.5" value="<?php echo is_array($rating) ? $rating[0] : $rating; ?>" />
      <br />
    </div>
    <?php
}

register_post_type('review',
        array(
            'labels' => array(
                'name' => __('Reviews'),
                'singular_name' => __('Review')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'rewrite' => array(
              'slug' => 'reviews',
              'with_front' => false
            ),
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes'),
            'register_meta_box_cb' => function($review) {
               add_meta_box('review_artist', 'Review Artist', 'review_artist_meta', 'review', 'side', 'low');
               add_meta_box('review_rating', 'Review Rating', 'review_rating_meta', 'review', 'side', 'low');
               add_meta_box('review_year', 'Review Year', 'review_year_meta', 'review', 'side', 'low');
               add_meta_box('review_label', 'Review Label', 'review_label_meta', 'review', 'side', 'low');
            }
        )
    );

flush_rewrite_rules();


register_meta('review', 'label', array(
    'show_in_rest' => true
));
register_meta('review', 'artist', array(
    'show_in_rest' => true
));
register_meta('review', 'rating', array(
    'show_in_rest' => true
));
register_meta('review', 'year', array(
  'show_in_rest' => true
));
