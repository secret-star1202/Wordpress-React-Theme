import { default as siteInfo } from './config';

export default function getFullUrl(path) {
  return `${siteInfo.siteUrl}/${path}`;
}
