import axios from 'axios';
import _ from 'lodash';
import { host } from './util';
import store from '@/store';
import {Diary as DiaryForm} from '../model';
import moment from 'moment';


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
      console.log('[API] get diary', res.data.result);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  public async getDiaryByPage(page: number, count: number): Promise<{success: boolean, result: DiaryForm[]}> {
    try {
      const res = await axios.get(`${host}/diary/?uid=${store.getters.user.uid}&page=${page}&count=${count}`);
      console.log('[API] get diaries by page', res.data.result);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async getDiaryByDate(start: number, end: number)
    : Promise<{success: boolean, result: DiaryForm[]}> {
    try {
      const res = await axios.get(`${host}/diary/?uid=${store.getters.user.uid}&start=${start}&end=${end}`);
      console.log('[API] get diaries by date', res.data.result);
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
                  italic: boolean, underline: boolean, color: string, blur: number},
      emotion: string
    }): Promise<{success: boolean, result: DiaryForm}> {
      try {
      const res = await axios.post(`${host}/diary`, {
        uid: store.getters.user.uid,
        imageAttr: data.imageAttr,
        textAttr: data.textAttr,
        emotion: data.emotion,
        email: store.getters.user.email,
      });
      console.log('[API] post diary', data, res.data);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
  public async updateDiary(did: string, data: {
    imageAttr: {
      width: number,
      height: number,
      imageURL: string
    },
    textAttr: { text: string, alignHorizontal: string, alignVertical: string, fontSize: number, fontWeight: number,
                italic: boolean, underline: boolean, color: string, blur: number},
    emotion: string
  }): Promise<{success: boolean, result: DiaryForm}> {
    try {
    const res = await axios.put(`${host}/diary/${did}`, {
      uid: store.getters.user.uid,
      imageAttr: data.imageAttr,
      textAttr: data.textAttr,
      emotion: data.emotion,
      email: store.getters.user.email
    });
    console.log('[API] update diary', data, res.data);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
}
}

const diaryApi = new DiaryApi();
export default diaryApi;
