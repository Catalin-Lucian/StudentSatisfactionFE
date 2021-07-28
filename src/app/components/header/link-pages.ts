import { NbMenuItem } from '@nebular/theme';

export const AVATAR_ICON_MENU: NbMenuItem[] =[
  {
    title: 'Profile',
    icon: 'person-outline',//person -- for fill
    link: '/pages/profile',
  },
  {
    title: 'Logout',
    icon: 'power-outline',
    link: '/auth/logout',
  }
]

export interface User{
  aud?:string,
  userId?:string
};
