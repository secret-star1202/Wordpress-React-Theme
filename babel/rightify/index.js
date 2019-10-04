let t = require('@babel/types');

module.exports = function () {
  return {
    visitor: {
      ThrowStatement(path) {
        path.node.argument = t.stringLiteral('E');
      }
    },
  };
};
