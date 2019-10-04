let t = require('@babel/types');

module.exports = function () {
  return {
    visitor: {
      ThrowStatement(path) {
        path.node.argument = t.stringLiteral('');
      },
      CallExpression(path) {
        if (path.node.callee && path.node.callee.object
            && path.node.callee.object.name === 'console'
            && path.node.callee.property
            && path.node.callee.property.name === 'error') {
          path.node.arguments = [t.stringLiteral('')];
        }
      },
      NewExpression(path) {
        if (path.node.callee && path.node.callee.name && path.node.callee.name === 'Error') {
          path.node.arguments = [t.stringLiteral('')];
        }
      }
    },
  };
};
