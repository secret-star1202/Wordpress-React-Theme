import React, { useEffect } from 'react';
import { default as Support } from '../includes/Support';
import { default as HomeContent } from './HomeContent';
import { default as MetaThing } from '../reusables/MetaThing';

export default function Home() {
  let theme = 'fixed-theme', addTheme = function (list, fxn, prm) {
    for (let i = 0; i < list.length; i++) {
      list[i][fxn](prm);
    }
  };

  useEffect(function () {
    let rem = 'removeClass', adc = 'addClass', navSel = '.navbar',
      myNavBar = {
        flagAdd: true,
        objs: [],
        init(objs) {
          this.objs = objs;
          addTheme(this.objs, adc, theme);
        },
        add() {
          if (this.flagAdd) {
            addTheme(this.objs, adc, theme);
            this.flagAdd = false;
          }
        },
        remove() {
          if (!this.flagAdd) {
            addTheme(this.objs, rem, theme);
            this.flagAdd = true;
          }
        }
      };

    const elArr = [$(navSel), $(`${navSel}-default`), $('.dropdown-menu')];

    /* Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down. */
    myNavBar.init(elArr);

    /* Function that manages the direction of the scroll. */
    function offSetManager() {
      let offset = window.pageYOffset + $(navSel).height(),
        height = $('.landing').height();

      if (height < offset) myNavBar.remove();
      else if (height >= offset) myNavBar.add();
    }

    /* Bind to the document scroll detection. */
    window.onscroll = () => {
      offSetManager();
    };

    /* We have to do a first detectation of offset because the page
     * could be load with scroll down set. */
    offSetManager();

    return function cleanup() {
      addTheme(elArr, rem, theme);
      window.scroll(0, 0);
      window.onscroll = null;
    };
  }, []);

  return [<MetaThing title='Home' description="KTUH Homepage" />, <HomeContent />, <Support />];
}
