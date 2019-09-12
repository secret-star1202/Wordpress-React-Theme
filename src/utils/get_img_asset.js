import { default as siteInfo } from './config';

export default function getImgAsset(src) {
  return `${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/${src}`;
}
