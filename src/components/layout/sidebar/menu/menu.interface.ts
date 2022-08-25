import { IMenuItem } from '@/components/layout/sidebar/menu-item/menu-item.interface';

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
