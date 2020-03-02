let crypto = require('crypto'),
  hashifyName = (name) => crypto.createHash('sha1').update(name).digest('base64')
    .replace(/^\d/g, '_')
    .replace(/[+/=]/g, '_')
    .substring(0, 4),
  cap = (str) => str.replace(/^[a-z]/, (match) => match.toUpperCase()),
  renameToHash = (path, key, capit, minLength) => {
    let thing = path.node[key];
    if (thing) {
      let { name } = thing, hashed = hashifyName(name);
      if (name.length > minLength) {
        path.scope.rename(name, capit ? cap(hashed) : hashed);
      }
    }
  };

module.exports = function () {
  return {
    visitor: {
      FunctionDeclaration(path) {
        renameToHash(path, 'id', false, 4);
      },
      VariableDeclarator(path) {
        renameToHash(path, 'id', true, 4);
      }
    },
  };
};
