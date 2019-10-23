import { default as siteInfo } from './config';

let { siteUrl } = siteInfo;

export function getFullUrl(path) {
  return `${siteUrl}/${path}`;
}

export function getApiRequest(endpoint, callback) {
  fetch(`${siteUrl}/wp-json/wp/v2/${endpoint}`)
    .then(response => response.json()).then(callback);
}

export function getImgAsset(src) {
  return `${siteUrl}/wp-content/themes/custom-react-theme/dist/images/${src}`;
}

export function getUploadedImage(src) {
  return `${siteUrl}/wp-content/uploads/${src}`;
}

export function getFeaturedImg(_embedded,
  defo = getImgAsset('ktuh-logo.png')) {
  return _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url
    || defo;
}
