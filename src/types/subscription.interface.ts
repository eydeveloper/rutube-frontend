import { IUser } from '@/types/user.interface';

export interface ISubscription {
  id: number;
  toUser: IUser;
}
