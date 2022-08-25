import Link from 'next/link';
import React, { FC } from 'react';

import Menu from '@/components/layout/sidebar/menu/Menu';
import { menuData } from '@/components/layout/sidebar/menu/menu.data';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <aside className={styles.container}>
      <Link href='/src/components/pages'>
        <a className={styles.logo}>RuTube</a>
      </Link>

      <Menu title='Меню' items={menuData} />

      <div className={styles.copyright}>© 2022, RuTube</div>
    </aside>
  );
};

export default Sidebar;
