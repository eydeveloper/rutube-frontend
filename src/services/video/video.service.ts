import { $api } from '../../api/axios';
import { IUser } from '../../types/user.interface';

export const VideoService = {
  async getVideos() {
    return $api.get<IUser[]>('/videos');
  },

  async getMostPopularVideos() {
    return $api.get<IUser[]>('/videos/most-popular');
  }
};
