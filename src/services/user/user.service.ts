import { $api } from '../../api/axios';
import { IUser } from '../../types/user.interface';

export const UserService = {
  async getUsers() {
    return $api.get<IUser[]>('/users');
  },

  async getUser(id: number) {
    return $api.get<IUser>(`/users/${id}`);
  }
};
