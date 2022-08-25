import { IVideo } from '../../../types/video.interface';

export interface IHome {
  topVideo: IVideo;
  randomVideo: IVideo;
  newVideos: IVideo[];
}
