import { get as axget } from 'axios';
import { default as siteInfo } from './config';

export default function getApiRequest(endpoint, callback) {
  axget(`${siteInfo.siteUrl}/wp-json/wp/v2/${endpoint}`).then(callback);
}
