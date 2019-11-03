import React from 'react';
import { Metamorph } from 'react-metamorph';
import { getImgAsset } from '../utils';

export default function MetaThing(
  { description, title, image = getImgAsset('ktuh-logo.jpg') }
) {
  return <Metamorph title={`${title} - KTUH FM Honolulu | Radio for the People`}
    {...{ description, image }} />;
}
