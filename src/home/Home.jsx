import React, { useEffect } from 'react';
import Support from '../includes/Support.jsx';
import HomeContent from './HomeContent.jsx';
import MetaThing from '../reusables/MetaThing.jsx';

function Home() {
  let theme = 'fixed-theme', addTheme = function (list, fxn, prm) {
    for (let i = 0; i < list.length; i++) {
      list[i][fxn](prm);
    }
  };

  useEffect(function () {
    /* This next section makes our sticky nav possible. */
    let myNavBar = {
      flagAdd: true,
      objs: [],
      init(objs) {
        this.objs = objs;
        addTheme(this.objs, 'addClass', theme);
      },
      add() {
        if (this.flagAdd) {
          addTheme(this.objs, 'addClass', theme);
          this.flagAdd = false;
        }
      },
      remove() {
        if (!this.flagAdd) {
          addTheme(this.objs, 'removeClass', theme);
          this.flagAdd = true;
        }
      }
    };

    const elArr = [$('.navbar'), $('.navbar-default'), $('.dropdown-menu')];

    /* Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down. */
    myNavBar.init(elArr);

    /* Function that manages the direction of the scroll. */
    function offSetManager() {
      let offset = window.pageYOffset + $('.navbar').height(),
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
      addTheme(elArr, 'removeClass', theme);
      window.scroll(0, 0);
      window.onscroll = null;
    };
  }, []);

  return [<MetaThing title='Home' description="KTUH Homepage" />, <HomeContent />, <Support />];
}
export default Home;
