import { IUser } from '@/types/user.interface';

import { $api } from '../../api/axios';

export const UserService = {
  async getUsers() {
    return $api.get<IUser[]>('/users');
  },

  async getUser(id: number) {
    return $api.get<IUser>(`/users/${id}`);
  }
};
