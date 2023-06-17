import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
  },
  {
    name: 'Applicants',
    url: './applicants',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Inbox',
    url: './inbox',
    iconComponent: { name: 'cil-chart-pie' },
  },
  {
    name: 'Tasks',
    url: './tasks',
    iconComponent: { name: 'cil-chart-pie' },
  },
  {
    name: 'Calendar',
    url: './calendar',
    iconComponent: { name: 'cil-chart-pie' },
  },
  {
    name: 'Reports',
    url: './reports',
    iconComponent: { name: 'cil-chart-pie' },
  },
  {
    name: 'Positions / Pools',
    url: './positions',
    iconComponent: { name: 'cil-chart-pie' },
  },
  {
    name: 'Candidates',
    url: './candidates',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Interviews',
    url: './interviews',
    iconComponent: { name: 'cil-user' },
  },
];
