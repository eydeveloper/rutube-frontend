import { IAuthData } from '@/services/auth/auth.helper';

import { $api } from '../../api/axios';

export const AuthService = {
  async login(email: string, password: string) {
    const response = await $api.post<IAuthData>('/auth/login', {
      email,
      password
    });

    return response.data;
  },

  async register(email: string, password: string) {
    const response = await $api.post<IAuthData>('/auth/register', {
      email,
      password
    });

    return response.data;
  }
};
