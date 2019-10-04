module.exports = function () {
  return {
    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'https://reactjs.org/docs/error-decoder.html?invariant=') {
          console.log(path.parentPath);
          path.parentPath.remove();
        }
      }
    }
  };
}
