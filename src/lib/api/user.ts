import axios from 'axios';
import _ from 'lodash';
import { host } from './util';
import store from '@/store';
import {User as UserForm} from '../model';

export class UserApi {
  public async getUser(): Promise<{success: boolean, result: UserForm}> {
    try {
      const res = await axios.get(`${host}/users/${store.getters.user.uid}`);
      console.log('[API] get user', res.data.result);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async createUser(): Promise<{success: boolean}> {
    try {
      const res = await axios.post(`${host}/users/${store.getters.user.uid}`);
      console.log('[API] create user', res);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async addImageURL(imageURL: string): Promise<{success: boolean}> {
    try {
      const res = await axios.put(`${host}/users/${store.getters.user.uid}?imageURL=${imageURL}`);
      console.log('[API] add image to user');
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

const userApi = new UserApi();
export default userApi;
