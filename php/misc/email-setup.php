<?php add_filter('wp_mail_content_type', function() {
  return 'text/html';
});

// Send Email Function
add_action( 'phpmailer_init', 'send_smtp_email' );
function send_smtp_email( $phpmailer ) {
    $phpmailer->isSMTP();
    $phpmailer->Host       = get_option('smtp_host');
    $phpmailer->SMTPAuth   = true;
    $phpmailer->Port       = get_option('smtp_port');
    $phpmailer->SMTPSecure = get_option('smtp_secure');
    $phpmailer->Username   = get_option('smtp_username');
    $phpmailer->Password   = get_option('smtp_password');
    $phpmailer->From       = get_option('smtp_from');
    $phpmailer->FromName   = get_option('smtp_fromname');
}

add_action('wp_mail_failed', function($wp_error) {
  echo "<pre>";
    print_r($wp_error);
    echo "</pre>";
}, 10, 1);

function email_ting($ID, $p) {
  $url = get_option('siteurl') . '/wp-admin/post.php?post=' . $ID . '&action=edit';

  wp_mail(get_option('email_to'), 'New Post for Review', '<a href="' . $url . '">' . $url . '</a>' .
    '<div><h1>' . $p->post_title . '</h1><h3>Submitted at ' . $p->post_date . '</h3>' . $p->post_content . '</div>' .
    '<a href="' . get_option('siteurl') . '/wp-json/wp/v2/approve_post?id=' . $ID . '">Approve Post</a>',
    'Content-type: text/html;charset=utf-8');
}

add_action('pending_post', 'email_ting', 10, 2);
add_action('pending_review', 'email_ting', 10, 2);