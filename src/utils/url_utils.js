import { default as siteInfo } from './config';

let { siteUrl } = siteInfo, ctt = 'wp-content/';

export function getFullUrl(path) {
  return `${siteUrl}/${path}`;
}

export function getApiRequest(endpoint, callback) {
  fetch(getFullUrl(`wp-json/wp/v2/${endpoint}`))
    .then(response => response.json()).then(callback);
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
  defo = getImgAsset('ktuh-logo.png')) {
  let fld = 'wp:featuredmedia';

  return _embedded && _embedded[fld]
    && _embedded[fld]['0'] && _embedded[fld]['0'].source_url
    || defo;
}
