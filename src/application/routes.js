import { default as Home } from '../home/Home';
import { default as ReviewPage } from '../reviews/ReviewPage';
import { default as ReviewList } from '../reviews/ReviewList';
import { default as NewsPage } from '../news/NewsPage';
import { default as NewsList } from '../news/NewsList';
import { default as ChartPage } from '../charts/ChartPage';
import { default as EventsList } from '../events/EventsList';
import { default as PodcastList } from '../podcasts/PodcastList';
import { default as SubmitPodcast } from '../podcasts/SubmitPodcast';
import { default as NotFound } from './NotFound';
import { default as PagesItem } from '../pages/PagesItem';
import { default as FAQ } from '../static_pages/FAQ';
import { default as Timeline } from '../static_pages/Timeline';
import { default as MondayNightLive } from '../static_pages/MondayNightLive';
import { default as Donate } from '../static_pages/Donate';
import { default as StaffMembersListContent } from '../staffmembers/StaffMembersListContent';
import { default as ShowSchedule } from '../shows/ShowSchedule';
import { default as ShowPage } from '../shows/ShowPage';

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
