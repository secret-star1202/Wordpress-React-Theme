<?php
register_rest_field('frequently_asked', 'data', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id']);
    }
));
