// file created at 2019. 11. 17.
// Auto-generated files list.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {Diary as DiaryForm} from '@/lib/model';
import {DiaryApi} from '@/lib/api';
import moment from 'moment';

@Component({})
export default class List extends Vue {
  private filter = {
    emotions: [{icon: 'smile', value: 'happy', click: false}, {icon: 'meh', value: 'normal', click: false}, {icon: 'frown', value: 'sad', click: false}],
  };
  private moment = moment;
  private data: Array<{text: string, width: number, height: number, emoticon: string}> = [];
  private diaries: DiaryForm[] = [];
  private ui: {
    diaries: DiaryForm[],
  } = {
    diaries: [],
  };

  get uiData() {
    if (this.diaries.length === 0) {
      this.ui.diaries = _.clone(this.diaries);
    }
    return this.ui.diaries;
  }

  private get today() {
    return (new Date()).getTime();
  }
  private filterByEmoticion(val: string) {
    _.forEach(this.filter.emotions, emo => {
      emo.click = emo.value === val;
    });
    val === 'all' ? this.ui.diaries = this.diaries : this.ui.diaries = _.filter(this.diaries, d => d.emotion === val);
  }
  private moveCalendarView() {
    this.$router.push({
      name: 'calendar',
      path: '/calendar',
    });
  }

  private async initDiaries() {
    this.$loading.on('diary를 가져오는 중...');
    try {
      this.diaries = (await DiaryApi.getAllDiaries()).result;
      this.ui.diaries = this.diaries;
      console.log(this.diaries);
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }
  private async mounted() {
    this.$loading.on();
    this.$store.commit('addSignedTrigger', this.initDiaries);
    setTimeout(() => this.$loading.off(), 1400);
  }
}
