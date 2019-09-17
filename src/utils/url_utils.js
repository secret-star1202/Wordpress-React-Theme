import { get as axget } from 'axios';
import { default as siteInfo } from './config';

export function getFullUrl(path) {
  return `${siteInfo.siteUrl}/${path}`;
}

export function getApiRequest(endpoint, callback) {
  axget(`${siteInfo.siteUrl}/wp-json/wp/v2/${endpoint}`).then(callback);
}

export function getImgAsset(src) {
  return `${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/${src}`;
}

export function getUploadedImage(src) {
  return `${siteInfo.siteUrl}/wp-content/uploads/${src}`;
}

export function getFeaturedImg(_embedded,
  defo = getImgAsset('ktuh-logo.png')) {
  return _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url
    || defo;
}
