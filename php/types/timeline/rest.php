<?php
register_rest_field('timeline', 'nodes', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id']);
    }
));
