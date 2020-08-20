<?php
function parse_csv($contents) {
  return explode("\n", $contents);
}

function save_chart_metadata($id)
{
    if (isset($_POST['post_type'])) {
      if (!current_user_can('edit_page', $id)) {
          return $id;
      }
    }

    if (!empty($_FILES['chart_csv']['name'])) {
        $supported_types = array('text/csv');

        $arr_file_type = wp_check_filetype(basename($_FILES['chart_csv']['name']));
        $uploaded_type = $arr_file_type['type'];
        if (in_array($uploaded_type, $supported_types)) {
            $upload = file_get_contents($_FILES['chart_csv']['tmp_name']);
            update_post_meta($id, 'chart_table', parse_csv($upload));
        } else {
            wp_die('The file you\'ve uploaded is not a CSV.');
        }
    }
}

add_action('save_post_chart', 'save_chart_metadata');
