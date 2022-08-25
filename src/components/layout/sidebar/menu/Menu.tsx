import React, { FC } from 'react';

import MenuItem from '@/components/layout/sidebar/menu-item/MenuItem';
import { IMenu } from '@/components/layout/sidebar/menu/menu.interface';
import Line from '@/components/ui/line/Line';

import styles from './Menu.module.scss';

const Menu: FC<IMenu> = ({ title, items }) => {
  return (
    <nav className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <MenuItem item={item} key={item.link}></MenuItem>
        ))}
      </ul>
      <Line />
    </nav>
  );
};

export default Menu;
