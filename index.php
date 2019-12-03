<?php
/**
 * The main template file
 */
 ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php wp_head(); ?>
    <title>KTUH Honolulu | Radio for the People</title>
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo1.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo2.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo3.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo4.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo5.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo6.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo7.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo8.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo9.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo10.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo11.gif" as="image" />
    <link rel="preload" href="https://manoa.hawaii.edu/ktuh/wp-content/themes/custom-react-theme/dist/images/ktuhvideo12.gif" as="image" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content=
      "KTUH,college radio,UHM,UH Manoa,UH Mānoa,KTUH radio,KTUH FM,KTUH Honolulu" />
    <script src="https://use.typekit.net/kdq4qji.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
  </head>
  <body>
    <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
    <script id="uhf-donations-widget">
        window.UHF = { cannedAmounts: null, fundId: 12063604, theme: 'neutral' };
        setInterval(function() {
          if (document.querySelector('#donate') &&
            !document.querySelector(
              'script[src="https://giving.uhfoundation.org/widget-v2.js"]')) {
            var script = document.createElement('script');
            script.src = "https://giving.uhfoundation.org/widget-v2.js";
            document.querySelector('#donate').appendChild(script);
          }
          else if (!document.querySelector('#donate') &&
            document.querySelector(
              'script[src="https://giving.uhfoundation.org/widget-v2.js"]')) {
            document.querySelector(
              'script[src="https://giving.uhfoundation.org/widget-v2.js"]').remove();
          }

          if (document.querySelector('#donate') && document.querySelector('iframe') &&
            !document.querySelector('#donate iframe')) {
            document.querySelector('iframe').style.display = 'block';
            document.querySelector('#donate').appendChild(document.querySelector('iframe'));
          }
        }, 1);
    </script>
    <div id="react-root">
    </div>
    <script src="https://apis.google.com/js/api.js"></script>
    <?php wp_footer(); ?>
  </body>
</html>
