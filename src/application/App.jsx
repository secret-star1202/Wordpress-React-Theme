import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from '../home/Home.jsx';
import Landing from '../home/Landing.jsx';
import ReviewPage from '../reviews/ReviewPage.jsx';
import ReviewList from '../reviews/ReviewList.jsx';
import NewsPage from '../news/NewsPage.jsx';
import NewsList from '../news/NewsList.jsx';
import ChartPage from '../charts/ChartPage.jsx';
import EventsList from '../events/EventsList.jsx';
import PodcastList from '../podcasts/PodcastList.jsx';
import SubmitPodcast from '../podcasts/SubmitPodcast.jsx';
import NotFound from './NotFound.jsx';
import PagesItem from '../pages/PagesItem.jsx';
import FAQ from '../static_pages/FAQ.jsx';
import Timeline from '../static_pages/Timeline.jsx';
import MondayNightLive from '../static_pages/MondayNightLive.jsx';
import StaffPage from '../static_pages/StaffPage.jsx';
import Donate from '../static_pages/Donate.jsx';
import { GeneralContextProvider } from '../contexts/GeneralContext';

let SeamlessRoute = ({ component: Component, ...rest }) => (
   <Route exact {...rest} component={({ history, match }) => (
    <GeneralContextProvider initialVals={{ history, match }}>
      <Component />
    </GeneralContextProvider>
   )} />);

const App = () => ([<div className='container'>
  <Switch>
    <Route exact path="/" component={() => [<Landing />,
    <div className='spacer-lg' />]} />
  </Switch>
  <Switch>
    <Route path="*" component={({ history, match }) => (
      <GeneralContextProvider initialVals={{ history, match }}>
        <Header />
      </GeneralContextProvider>)} />
  </Switch>
  <div id="main">
    <Switch>
      <SeamlessRoute path={['/reviews/:slug', '/review/:slug']} component={ReviewPage}/>
      <SeamlessRoute path={['/reviews', '/review']} component={ReviewList}/>
      <SeamlessRoute path={['/podcasts', '/podcast']} component={PodcastList}/>
      <SeamlessRoute path={['/submit-podcasts', '/submit-podcast']} component={SubmitPodcast}/>
      <SeamlessRoute path={['/monday-night-live', '/mondaynightlive']} component={MondayNightLive}/>
      <SeamlessRoute path={['/radioblog/:slug', '/news/:slug']} component={NewsPage}/>
      <SeamlessRoute path={['/radioblog', '/news']} component={NewsList} />
      <SeamlessRoute path={['/chart/:slug', '/charts/:slug']} component={ChartPage}/>
      <SeamlessRoute path={['/timeline', '/ktuh-timeline']} component={Timeline} />
      <SeamlessRoute path={['/events', '/event']} component={EventsList} />
      <SeamlessRoute path={'/staff'} component={StaffPage} />
      <SeamlessRoute path="/faq" component={FAQ} />
      <SeamlessRoute path="/donate" component={Donate}/>
      <SeamlessRoute path="/not-found" component={NotFound}/>
      <SeamlessRoute path='/:slug' component={PagesItem} />
      <SeamlessRoute path="/" component={Home}/>
    </Switch>
  </div>
</div>,
<Footer />]);

export default App;
