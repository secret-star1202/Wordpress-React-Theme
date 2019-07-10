import { get as axget } from 'axios';
import { default as siteInfo } from './config';

export default function () {
  return axget(`${siteInfo.siteUrl}/wp-json`);
}
