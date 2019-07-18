module.exports = function () {
  return {
    visitor: {
      ObjectProperty(path) {
        if (path.node.key.name && path.node.key.name === 'codes') {
          path.traverse({
            ObjectExpression(innerPath) {
              innerPath.traverse({
                ObjectProperty(evenInnerPath) {
                  if (evenInnerPath.get('key').node.name !== 'en') {
                    evenInnerPath.remove();
                  }
                }
              });
            }
          });
        } else if (path.node.key.value
            && typeof path.node.key.value === 'string'
            && path.node.key.value.match(/^mejs\./)) {
          if (['afrikaans', 'albanian', 'arabic', 'belarusian', 'bulgarian',
            'catalan', 'chinese', 'chinese-simplified', 'chinese-traditional',
            'croatian', 'czech', 'danish', 'dutch', 'estonian', 'filipino',
            'finnish', 'french', 'galician', 'german', 'greek', 'hebrew',
            'hindi', 'hungarian', 'icelandic', 'indonesian', 'irish', 'italian',
            'japanese', 'korean', 'latvian', 'lithuanian', 'macedonian', 'malay',
            'maltese', 'norwegian', 'persian', 'polish', 'portuguese', 'romanian',
            'russian', 'serbian', 'slovak', 'slovenian', 'spanish', 'swahili', 'swedish',
            'tagalog', 'thai', 'turkish', 'ukrainian', 'vietnamese', 'welsh', 'yiddish',
          ].includes(path.node.key.value.slice(5))) {
            path.remove();
          }
        }
      }
    }
  };
};
