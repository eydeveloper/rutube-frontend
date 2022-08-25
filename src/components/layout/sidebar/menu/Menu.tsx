import React, { FC } from 'react';

import Line from '../../../ui/line/Line';
import MenuItem from '../menu-item/MenuItem';

import styles from './Menu.module.scss';
import { IMenu } from './menu.interface';

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
