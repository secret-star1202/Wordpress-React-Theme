import Home from '../home/Home.jsx';
import { ReviewPage, ReviewList } from '../reviews';
import { NewsPage, NewsList } from '../news';
import ChartPage from '../charts/ChartPage.jsx';
import EventsList from '../events/EventsList.jsx';
import { PodcastList, SubmitPodcast } from '../podcasts';
import NotFound from './NotFound.jsx';
import PagesItem from '../pages/PagesItem.jsx';
import {
  FAQ, Timeline, MondayNightLive, Donate
} from '../static_pages';
import StaffMembersListContent from '../staffmembers/StaffMembersListContent.jsx';
import { ShowSchedule, ShowPage } from '../shows';

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
  { path: ['/shows/:slug', '/show/:slug'], component: ShowPage },
  { path: ['/shows', '/show-schedule', '/schedule'], component: ShowSchedule },
  { path: '/staff', component: StaffMembersListContent },
  { path: '/faq', component: FAQ },
  { path: '/donate', component: Donate },
  { path: '/not-found', component: NotFound },
  { path: '/:slug', component: PagesItem },
  { path: '/', component: Home }
];
