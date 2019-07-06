import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from '../home/Home.jsx';
import Landing from '../home/Landing.jsx';
import ReviewPage from '../reviews/ReviewPage.jsx';
import ReviewList from '../reviews/ReviewList.jsx';
import NewsPage from '../news/NewsPage.jsx';
import NewsList from '../news/NewsList.jsx';
import EventsList from '../events/EventsList.jsx';
import NotFound from './NotFound.jsx';
import PagesItem from '../pages/PagesItem.jsx';
import FAQ from '../static_pages/FAQ.jsx';
import Timeline from '../static_pages/Timeline.jsx';
import { default as siteInfo } from '../utils/config';
import Podcasts from '../static_pages/Podcasts.jsx';

function App() {
  return <BrowserRouter
    basename={siteInfo.siteUrl.match(/\/[a-z-]*\/?$/)[0]}>
      <div className='container'>
      <Switch>
        <Route exact path="/" component={() => [<Landing key='landing' />,
        <div className='spacer-lg' key='lg'/>]} />
        <Route path="*" component={() => (
          <div className='spacer-sm' key='sm' />)} />
      </Switch>
      <Switch>
        <Route path='*' component={Header} />
      </Switch>
      <div id="main">
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path={['/reviews/:slug', '/review/:slug']} component={ReviewPage}/>
          <Route exact path={['/reviews', '/review']} component={ReviewList}/>
          <Route exact path={['/podcasts', '/podcast']} component={Podcasts}/>
          <Route exact path={['/radioblog/:slug', '/news/:slug']} component={NewsPage}/>
          <Route exact path={['/radioblog', '/news']} component={NewsList} />
          <Route exact path={['/timeline', '/ktuh-timeline']} component={Timeline} />
          <Route exact path={['/events', '/event']} component={EventsList} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/not-found" component={NotFound}/>
          <Route exact path='/:slug' component={PagesItem} />
          <Route exact path='*' component={NotFound} />
          </Switch>
      </div>
    </div>
    <Footer /></BrowserRouter>;
}

export default App;
