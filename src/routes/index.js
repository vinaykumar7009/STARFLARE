import Dashboard from '../pages/Dashboard';
import Deliverable from '../pages/Deliverable';
import Audience from '../pages/Audience';
import CampaignDesign from '../pages/CampaignDesign';
import Summary from '../pages/Summary';

export const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/deliverable',
    component: Deliverable
  },
  {
    path: '/audience',
    component: Audience
  },
  {
    path: '/campaign-design',
    component: CampaignDesign
  },
  {
    path: '/summary',
    component: Summary
  }
]; 