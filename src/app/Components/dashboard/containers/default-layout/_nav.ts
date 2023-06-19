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
    iconComponent: { name: 'cilPeople' },
  },
  {
    name: 'Inbox',
    url: './inbox',
    iconComponent: { name: 'cilInbox' },
  },
  {
    name: 'Tasks',
    url: './tasks',
    iconComponent: { name: 'cilTask' },
  },
  {
    name: 'Calendar',
    url: './calendar',
    iconComponent: { name: 'cilCalendar' },
  },
  {
    name: 'Reports',
    url: './reports',
    iconComponent: { name: 'cilChart' },
  },
  {
    name: 'Positions / Pools',
    url: './positions',
    iconComponent: { name: 'cilShareBoxed' },
  },
  {
    name: 'Candidates',
    url: './candidates',
    iconComponent: { name: 'cilPeople' },
  },
  {
    name: 'Interviews',
    url: './interviews',
    iconComponent: { name: 'cil-user' },
  },
];
