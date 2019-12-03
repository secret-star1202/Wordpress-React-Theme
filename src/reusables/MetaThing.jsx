import { useEffect } from 'react';
import { getImgAsset } from '../utils/url_utils';

let array = [
  {
    selector: 'meta[property="description"]',
    append: content => `<meta property="description" content=${content}>`,
    isFor: 'description'
  },
  {
    selector: 'meta[property="og:title"]',
    append: content => `<meta property="og:title" content=${content}>`,
    isFor: 'title'
  },
  {
    selector: 'meta[property="og:image"]',
    append: content => `<meta property="og:image" content=${content}>`,
    isFor: 'image'
  },
  {
    selector: 'meta[property="og:description"]',
    append: content => `<meta property="og:description" content=${content}>`,
    isFor: 'description'
  },
  {
    selector: 'meta[name="twitter:title"]',
    append: content => `<meta name="twitter:title" content=${content}>`,
    isFor: 'title'
  },
  {
    selector: 'meta[name="twitter:image"]',
    append: content => `<meta name="twitter:image" content=${content}>`,
    isFor: 'image'
  },
  {
    selector: 'meta[name="twitter:description"]',
    append: content => `<meta name="twitter:description" content=${content}>`,
    isFor: 'description'
  }
];

export default function (
  { description, title, image = getImgAsset('ktuh-logo.jpg') }
) {
  useEffect(function () {
    document.title = `${title} - KTUH FM Honolulu | Radio for the People`;
    for (let a = 0; a < array.length; a++) {
      if (!document.querySelector(array[a].selector)) {
        document.head.innerHTML += array[a].append({
          title: `${title} - KTUH FM Honolulu | Radio for the People`, image, description
        }[array[a].isFor]);
      }
    }
  }, []);

  return null;
}
