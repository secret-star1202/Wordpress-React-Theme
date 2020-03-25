<?php
function save_review_metadata($id, $post) {
    if (!empty($_POST['review_year'])) {
       update_post_meta($id, 'year', $_POST['review_year']);
    }

    if (!empty($_POST['review_label'])) {
       update_post_meta($id, 'label', $_POST['review_label']);
    }

    if (!empty($_POST['review_artist'])) {
           update_post_meta($id, 'artist', $_POST['artist']);
        }

        if (!empty($_POST['review_rating'])) {
                   update_post_meta($id, 'rating', $_POST['review_rating']);
                }
}

add_action('save_post_review', 'save_review_metadata', 10, 2);