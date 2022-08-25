import { ISubscription } from './subscription.interface';
import { IVideo } from './video.interface';

export interface IUser {
  id: number;
  email: string;
  username: string;
  isVerified?: boolean;
  subscribersCount: number;
  description: string;
  avatarPath: string;
  videos?: IVideo[];
  subscriptions?: ISubscription[];
  createdAt: string;
  updatedAt: string;
}
