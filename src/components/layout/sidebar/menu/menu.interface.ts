import { IMenuItem } from '../menu-item/menu-item.interface';

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
