import React, { useEffect } from 'react';
import Support from '../includes/Support.jsx';
import HomeContent from './HomeContent.jsx';
import MetaThing from '../reusables/MetaThing.jsx';

function Home() {
  useEffect(function () {
    /* This next section makes our sticky nav possible. */
    let myNavBar = {
      flagAdd: true,
      objs: [],
      init(objs) {
        this.objs = objs;
        for (let i = 0; i < this.objs.length; i++) {
          this.objs[i].addClass('fixed-theme');
        }
      },
      add() {
        if (this.flagAdd) {
          for (let i = 0; i < this.objs.length; i++) {
            this.objs[i].addClass('fixed-theme');
          }
          this.flagAdd = false;
        }
      },
      remove() {
        if (!this.flagAdd) {
          for (let i = 0; i < this.objs.length; i++) {
            this.objs[i].removeClass('fixed-theme');
          }
          this.flagAdd = true;
        }
      }
    };

    /* Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down. */
    myNavBar.init([$('.navbar'), $('.navbar-default'), $('.dropdown-menu')]);

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
      let objs = [$('.navbar'), $('.navbar-default'), $('.dropdown-menu')];
      for (let i = 0; i < objs.length; i++) {
        objs[i].removeClass('fixed-theme');
      }
      window.scroll(0, 0);
      window.onscroll = null;
    };
  }, []);

  return [<MetaThing title='Home' description="KTUH Homepage" />, <HomeContent />, <Support />];
}
export default Home;
