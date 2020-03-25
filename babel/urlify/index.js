let t = require('@babel/types'), gen = require('@babel/generator');
function specialQueryToUrl(obj) {
  let exps = [], quas = [], temp = '';
  for (let key in obj) {
    temp += key;
    if (obj[key].type === 'StringLiteral') {
      if (obj[key].value.length) temp += '=' + encodeURIComponent(obj[key].value) + '&';
      else temp += '&';
    }
    else if (obj[key].type === 'BooleanLiteral') {
      temp += '=' + encodeURIComponent(obj[key].value.toString()) + '&';
    }
    else if (obj[key].type === 'TemplateLiteral') {
      temp += '=';
      let { expressions, quasis } = obj[key];
      for (let e = 0; e < quasis.length; e++) {
        if (quasis[e].value.cooked.length)  {
          temp += encodeURIComponent(quasis[e].value.cooked);
        }
        if (temp.length) {
          quas.push(t.templateElement({ raw: temp, cooked: temp }, false));
          temp = '';
        }
        if (!quasis[e].tail) {
          expressions[e].start = undefined;
          expressions[e].end = undefined;
          expressions[e].loc = undefined;
          exps.push(expressions[e]);
        }
        else temp += "&";
      }
    }
    else {
      quas.push(t.templateElement({ raw: temp + '=', cooked: temp + '=' }, false));
      temp = '';
      exps.push(obj[key]);
    }
  }
  if (quas.length === exps.length) quas.push(t.templateElement({
    raw: temp.replace(/&$/, ''), cooked: temp.replace(/&$/, '') }, true));
  return t.templateLiteral(quas, exps);
}

module.exports = function () {
  return {
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name === 'queryToUrl') {
          let { properties } = path.node.arguments[0];
          let obj = {};
          properties.forEach(({ key, value }) => {
            obj[key.name] = value;
          });
          path.replaceWith(specialQueryToUrl(obj));
        }
      },
      ImportSpecifier(path) {
        if (path.node.imported.name === 'queryToUrl') {
          path.remove();
        }
      },
      ExportNamedDeclaration(path) {
        if (path.node.declaration && path.node.declaration.type === 'FunctionDeclaration') {
          if (path.node.declaration.id.name === 'queryToUrl') {
            path.remove();
          }
        }
      }
    }
  };
}
