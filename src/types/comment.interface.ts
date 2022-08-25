import { IUser } from '@/types/user.interface';
import { IVideo } from '@/types/video.interface';

export interface IComment {
  id: number;
  message: string;
  user: IUser;
  video: IVideo;
  createdAt: string;
  updatedAt: string;
}

export interface ICommentDto extends Pick<IComment, 'message'> {
  videoId: number;
}
