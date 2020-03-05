<?php
register_rest_field('chart', 'chart_table', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'chart_table');
    }
));
