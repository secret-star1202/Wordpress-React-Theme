import axios from 'axios';
import { default as siteInfo } from './config';

export default function () {
  return axios.get(`${siteInfo.siteUrl}/wp-json`);
}
