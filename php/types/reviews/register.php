<?php
/*
 *  Review meta
 */

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
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'revisions', 'page-attributes'),
            'register_meta_box_cb' => function($review) {
               add_meta_box('review_rating', 'Review Rating', 'review_rating_meta', 'review', 'side', 'low');
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
