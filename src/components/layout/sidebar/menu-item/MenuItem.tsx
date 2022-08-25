import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { useAuth } from '../../../../hooks/useAuth';

import styles from './MenuItem.module.scss';
import { IMenuItem } from './menu-item.interface';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { user } = useAuth();
  const { asPath } = useRouter();

  if (item.link === '/channel') {
    if (!user) {
      return null;
    } else {
      item.link = `/channel/${user?.id}`;
    }
  }

  return (
    <li className={styles.container}>
      <Link href={item.link}>
        <a
          className={`${styles.link} ${
            asPath === item.link ? styles.active : ''
          }`}
        >
          <span className={`${styles.icon} ${item.image ? styles.image : ''}`}>
            {item.icon && <item.icon />}
            {item.image && (
              <Image src={item.image} alt={item.title} width={40} height={40} />
            )}
          </span>
          <b className={styles.title}>{item.title}</b>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
