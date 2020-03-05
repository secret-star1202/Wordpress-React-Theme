<?php
register_rest_field('dj_bios', 'persona_id', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'persona_id');
    }
));
