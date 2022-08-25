import { IUser } from './user.interface';

export interface ISubscription {
  id: number;
  toUser: IUser;
}
