module.exports = function () {
  return {
    visitor: {
      ObjectProperty(path) {
        if (path.node.key.value
            && typeof path.node.key.value === 'string'
            && path.node.key.value.match(/^mejs\./)) {
          if ([
            'install-flash', 'fullscreen', 'video-player', 'captions-subtitles',
            'captions', 'chapters'].includes(path.node.key.value.slice(5))) {
            path.remove();
          }
        }
      }
    }
  };
};
