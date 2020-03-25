<?php
register_rest_field('mnl_video', 'video_url', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'video_url');
    }
));
