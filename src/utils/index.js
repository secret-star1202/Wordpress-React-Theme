import axios from 'axios';
import { siteUrl } from './config';

export default function() {
  return axios.get(`${siteUrl}/wp-json`);
};