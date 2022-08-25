import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi';

import { IMenuItem } from '../menu-item/menu-item.interface';

export const menuData: IMenuItem[] = [
  {
    link: '/',
    title: 'Главная',
    icon: HiHome
  },
  {
    link: '/trending',
    title: 'Тренды',
    icon: HiChartBar
  },
  {
    link: '/channel',
    title: 'Мой канал',
    icon: HiStar
  },
  {
    link: '/subscriptions',
    title: 'Мои подписки',
    icon: HiCollection
  }
];
