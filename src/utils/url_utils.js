import { default as siteInfo } from './config';

let { siteUrl } = siteInfo, ctt = 'wp-content/';

export function queryToUrl(obj) {
  let ret = [];
  for (let key in obj) {
    ret.push(`${key}${obj[key].toString().length ?
      `=${encodeURIComponent(obj[key].toString())}` : ''}`);
  }
  return ret.join('&');
}

export function getFullUrl(path) {
  return `${siteUrl}/${path}`;
}

export function getApiRequest(endpoint, callback) {
  fetch(getFullUrl(`wp-json/wp/v2/${endpoint}`))
    .then((response) => response.json()).then(callback);
}

export function getImgAsset(src) {
  return getFullUrl(`${ctt}themes/custom-react-theme/dist/images/${src}`);
}

export function getUploadedImage(src) {
  return getFullUrl(`${ctt}uploads/${src}`);
}

export function getMagicFieldsImg(src) {
  return getFullUrl(`${ctt}files_mf/${src}`);
}

export function getFeaturedImg(_embedded,
  defo = getImgAsset('ktuh-logo.jpg')) {
  let fld = 'wp:featuredmedia';

  return _embedded && _embedded[fld]
    && _embedded[fld]['0'] && _embedded[fld]['0'].source_url
    || defo;
}
