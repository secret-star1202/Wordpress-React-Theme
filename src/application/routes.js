import { default as Home } from '../home/Home';
import { default as ProfilePage } from '../dj_bios/ProfilePage';
import { ReviewPage, ReviewList } from '../reviews';
import { NewsPage, NewsList } from '../news';
import PlaylistList from '../playlists/PlaylistList';
import PlaylistPage from '../playlists/PlaylistPage';
import { default as ChartPage } from '../charts/ChartPage';
import { default as ChartList } from '../charts/ChartList';
import { default as EventsList } from '../events/EventsList';
import { PodcastList, PodcastItem, SubmitPodcast } from '../podcasts';
import { default as NotFound } from './NotFound';
import { default as PagesItem } from '../pages/PagesItem';
import {
  FAQ, Timeline, MNL
} from '../static_pages';
import { default as StaffMembersListContent } from '../staffmembers/StaffMembersListContent';
import { ShowSchedule, ShowPage } from '../shows';

export default [
  { path: '/profile/:slug', component: ProfilePage },
  { path: ['/playlists/:slug', '/playlist/:slug'], component: PlaylistPage },
  { path: ['/playlists', '/playlist'], component: PlaylistList },
  { path: ['/reviews/:slug', '/review/:slug'], component: ReviewPage },
  { path: ['/reviews', '/review'], component: ReviewList },
  { path: ['/podcasts/:slug', '/podcast/:slug'], component: PodcastItem },
  { path: ['/podcasts', '/podcast'], component: PodcastList },
  { path: ['/submit-podcasts', '/submit-podcast'], component: SubmitPodcast },
  { path: ['/monday-night-live', '/mondaynightlive'], component: MNL },
  { path: ['/radioblog/:slug', '/news/:slug'], component: NewsPage },
  { path: ['/radioblog', '/news'], component: NewsList },
  { path: ['/chart/:slug', '/charts/:slug'], component: ChartPage },
  { path: ['/timeline', '/ktuh/timeline'], component: Timeline },
  { path: ['/events', '/event'], component: EventsList },
  { path: ['/shows/:slug', '/show/:slug'], component: ShowPage },
  { path: ['/shows', '/show-schedule', '/schedule'], component: ShowSchedule },
  { path: ['/chart', '/charts'], component: ChartList },
  { path: '/staff', component: StaffMembersListContent },
  { path: '/faq', component: FAQ },
  { path: '/not-found', component: NotFound },
  { path: '/:slug', component: PagesItem },
  { path: '/', component: Home }
];
