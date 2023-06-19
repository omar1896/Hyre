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
  {
    name: 'My-Team',
    url: './My-Team',
    iconComponent: { name: 'cil-user' },
  }
];
