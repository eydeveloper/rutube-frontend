import { IUser } from '@/types/user.interface';

import { $api } from '../../api/axios';

export const VideoService = {
  async getVideos() {
    return $api.get<IUser[]>('/videos');
  },

  async getMostPopularVideos() {
    return $api.get<IUser[]>('/videos/most-popular');
  }
};
