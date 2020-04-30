import React from 'react';
import { default as Glyph } from '../reusables/Glyph';

export default function ProfileSocialLink({ url, handle, icon }) {
  if (handle) {
    return <a href={`${url}${handle}`}>
    <img className='profile__social-icon' src={`/img/${icon}.png`} /></a>;
  }
  return null;
}

export function SocialButton({ site, url }) {
  return <a href={url}><Glyph type="fa" symbol={site} /></a>;
}
