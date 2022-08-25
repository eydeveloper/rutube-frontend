import Link from 'next/link';
import React, { FC } from 'react';

import styles from './Sidebar.module.scss';
import Menu from './menu/Menu';
import { menuData } from './menu/menu.data';

const Sidebar: FC = () => {
  return (
    <aside className={styles.container}>
      <Link href='/src/components/pages'>
        <a className={styles.logo}>RuTube</a>
      </Link>

      <Menu title='Меню' items={menuData}></Menu>

      <div className={styles.copyright}>© 2022, RuTube</div>
    </aside>
  );
};

export default Sidebar;
