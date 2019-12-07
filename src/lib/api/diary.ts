import axios from 'axios';
import _ from 'lodash';
import { host } from './util';
import store from '@/store';
import {Diary as DiaryForm} from '../model';


export class DiaryApi {
  public async getAllDiaries(): Promise<{success: boolean, result: DiaryForm[]}> {
    try {
      const res = await axios.get(`${host}/diary?uid=${store.getters.user.uid}`);
      console.log('[API] get all diary');
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async getDiary(id: string): Promise<{success: boolean, result: DiaryForm}> {
    try {
      const res = await axios.get(`${host}/diary/${id}/?uid=${store.getters.user.uid}`);
      console.log('[API] get diary');
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async uploadDiary(data: {
      imageAttr: {
        width: number,
        height: number,
        imageURL: string
      },
      textAttr: { text: string, alignHorizontal: string, alignVertical: string, fontSize: number, fontWeight: number,
                  italic: boolean, underline: boolean, color: string},
      emotion: string
    }): Promise<{success: boolean, result: DiaryForm}> {
      try {
      const res = await axios.post(`${host}/diary`, {
        uid: store.getters.user.uid,
        imageAttr: data.imageAttr,
        textAttr: data.textAttr,
        emotion: data.emotion
      });
      console.log('[API] post diary');
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

const diaryApi = new DiaryApi();
export default diaryApi;
