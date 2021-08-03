import { NbMenuItem } from '@nebular/theme';

export const AVATAR_ICON_MENU: NbMenuItem[] =[
  {
    title: 'Profile',
    icon: 'person-outline',//person -- for fill
    link: '/page/profile',
  },
  {
    title:'Anwsered surveys',
    icon:'clipboard-outline',
    link:'/page/answer-surveys',
  },
  {
    title: 'Logout',
    icon: 'power-outline',
    link: '/auth/logout',
  },


]
