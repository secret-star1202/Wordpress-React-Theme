import React, { useState, useEffect } from 'react';
import { string, object } from 'prop-types';
import 'mediaelement';

export default function MediaElement({ options, id, src }) {
  let [, setState] = useState({ });

  function success(mediaElement) {
    $('.mejs__time-rail').append(
      '<span class="mejs__broadcast">Live Broadcast</span>'
    );

    $('.mejs__time-slider').css('visibility', 'hidden');
    global.player = mediaElement;
  }

  function error() {
    console.error('Error initializing the media element.');
  }

  useEffect(function () {
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const newOptions = Object.assign({}, options, {
      // Read the Notes below for more explanation
      // about how to set up the path for shims
      pluginPath: '/mejs/',
      alwaysShowControls: true,
      features: ['playpause', 'progress'],
      iPadUseNativeControls: false,
      iPhoneUseNativeControls: false,
      AndroidUseNativeControls: false,
      success,
      error
    });

    setState({ player: new MediaElementPlayer(id, newOptions) });

    $('.mejs__time-rail').append(
      '<span class="mejs__broadcast">Live Broadcast</span>'
    );
  }, []);

  const mediaBody = `<source src="${src}" type="audio/mp3">`,
    mediaHtml = `<audio id="${id}" controls>${mediaBody}</audio>`;

  return <div className="audio-player"
    dangerouslySetInnerHTML={{ __html: mediaHtml }}></div>;
}

MediaElement.propTypes = {
  options: object,
  id: string,
  src: string
};
