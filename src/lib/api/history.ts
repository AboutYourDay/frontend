import axios from 'axios';
import _ from 'lodash';
import { host } from './util';
import store from '@/store';
import {History as HistoryForm} from '../model';

export class HistoryApi {
  public async getHistroy(): Promise<{success: boolean, result: HistoryForm[]}> {
    try {
      const res = await axios.get(`${host}/history/?uid=${store.getters.user.uid}`);
      console.log('[API] get history', res.data.result);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

const historyApi = new HistoryApi();
export default historyApi;
