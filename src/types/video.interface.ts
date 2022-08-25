import { IComment } from '@/types/comment.interface';
import { IUser } from '@/types/user.interface';

export interface IVideo {
  id: number;
  title: string;
  description: string;
  isPublic?: boolean;
  views: number;
  likes: number;
  duration: number;
  videoPath: string;
  thumbnailPath: string;
  user?: IUser;
  comments?: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface IVideoDto
  extends Pick<
    IVideo,
    'id' | 'title' | 'description' | 'isPublic' | 'videoPath' | 'thumbnailPath'
  > {}
