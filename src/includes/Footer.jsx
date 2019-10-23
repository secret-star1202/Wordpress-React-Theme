import React from 'react';
import { getImgAsset } from '../utils/url_utils';
import SocialLink from './SocialLink.jsx';

function Subheading({ title }) {
  return <h5 className='footer__subheading'>{title}</h5>;
}

function TitledLink({ href, text }) {
  return <p><a {...{ href }}>{text}</a></p>;
}

export function EmailLink({ to }) {
  return <p><a href={`mailto:${to}`}>{to}</a></p>;
}

function TelLink({ num, label }) {
  return <p><a href={`tel:${num}`}>{label}</a></p>;
}

function Footer() {
  return <div className='footer'>
    <div className='footer__mission-wrapper'>
      <div className='footer__logo-wrapper'>
        <img src={getImgAsset('ktuh-logo-white-alpha.png')} />
      </div>
      <div className='footer__mission'>
        <Subheading title="Our Mission" />
        <p className='mission__body'>
          To provide the people of Honolulu with alternative programming for the
          cultural and educational enrichment of the students of the university
          system and the community.
        </p>
      </div>
    </div>
    <div className='footer__contact'>
      <div className='footer__address'>
        <Subheading title="Address" />
        <p>
          2445 Campus Road<br/>
          Hemenway Hall #203<br/>
          Honolulu, HI 96822
        </p>
      </div>
      <div className='footer__phone'>
        <Subheading title="Contact" />
        <TelLink num="18089565288" label="Office + 808.956.5288" />
        <br />
        <TelLink num="18089567261" label="Request + 808.956.7261" />
        <br />
        <br />
        <EmailLink to='office@ktuh.org' />
      </div>
      <div className='footer__links footer__links__clear'>
        <Subheading title="UHM Student Media" />
        <TitledLink href='http://hawaiireview.org/' text="Hawaii Review" />
        <TitledLink href='http://kaleo.org/' text="Ka Leo" />
        <TitledLink href='http://www.manoanow.org/' text="Manoa Now" />
        <TitledLink href='http://www.manoanow.org/uhpro/' text="UH Productions" />
      </div>
    </div>
    <div className='footer__social'>
      <SocialLink href='http://instagram.com/ktuhfm' src={getImgAsset('instagram-white.png')} />
      <SocialLink href='http://www.facebook.com/ktuhfm' src={getImgAsset('facebook-white.png')} />
      <SocialLink href='http://twitter.com/ktuhfm' src={getImgAsset('twitter-white.png')} />
    </div>
    <p className='footer__copyright'>
      {`COPYRIGHT (c) ${new Date().getFullYear()} KTUH FM Honolulu`}</p></div>;
}

export default Footer;
