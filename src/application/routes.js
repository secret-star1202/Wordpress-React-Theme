import Home from '../home/Home.jsx';
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
import StaffMembersListContent from '../staffmembers/StaffMembersListContent.jsx';
import Donate from '../static_pages/Donate.jsx';
import Schedule from '../static_pages/Schedule.jsx';
import ShowSchedule from '../shows/ShowSchedule.jsx';

export default [
  { path: ['/reviews/:slug', '/review/:slug'], component: ReviewPage },
  { path: ['/reviews', '/review'], component: ReviewList },
  { path: ['/podcasts', '/podcast'], component: PodcastList },
  { path: ['/submit-podcasts', '/submit-podcast'], component: SubmitPodcast },
  { path: ['/monday-night-live', '/mondaynightlive'], component: MondayNightLive },
  { path: ['/radioblog/:slug', '/news/:slug'], component: NewsPage },
  { path: ['/radioblog', '/news'], component: NewsList },
  { path: ['/chart/:slug', '/charts/:slug'], component: ChartPage },
  { path: ['/timeline', '/ktuh-timeline'], component: Timeline },
  { path: ['/events', '/event'], component: EventsList },
  { path: ['/shows', '/show-schedule'], component: ShowSchedule },
  { path: '/staff', component: StaffMembersListContent },
  { path: '/faq', component: FAQ },
  { path: '/donate', component: Donate },
  { path: '/schedule', component: Schedule },
  { path: '/not-found', component: NotFound },
  { path: '/:slug', component: PagesItem },
  { path: '/', component: Home }
];
