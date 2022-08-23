import { ISubscription } from '@/types/subscription.interface';
import { IVideo } from '@/types/video.interface';

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
