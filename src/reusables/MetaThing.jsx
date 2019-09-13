import React from 'react';
import { Metamorph } from 'react-metamorph';

export default function MetaThing(
  { description, title, image = 'https://ktuh.org/img/ktuh-logo.jpg' }
) {
  return <Metamorph title={`${title} - KTUH FM Honolulu | Radio for the People`}
    {...{ description, image }} />;
}
