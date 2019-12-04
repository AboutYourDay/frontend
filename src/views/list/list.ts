// file created at 2019. 11. 17.
// Auto-generated files list.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {Diary as DiaryForm} from '@/lib/model';
import {DiaryApi} from '@/lib/api';

@Component({})
export default class List extends Vue {
  private filter = {
    emoticons: [{icon: 'face', value: 'normal'}, {icon: 'tag_faces', value: 'smile'}],
  };
  private data: Array<{text: string, width: number, height: number, emoticon: string}> = [];
  private diaries: DiaryForm[] = [];
  private ui: {
    data: Array<{text: string, width: number, height: number, emoticon: string}>,
  } = {
    data: [],
  };

  get uiData() {
    if (this.ui.data.length === 0) {
      this.ui.data = _.clone(this.data);
    }
    return this.ui.data;
  }

  private filterByEmoticion(val: string) {
    val === 'all' ?
      this.ui.data = this.data
      : this.ui.data = _.filter(this.data, (d) => d.emoticon === val);
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

      console.log(this.diaries);
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }
  private async mounted() {
    this.$loading.on();
    this.$store.commit('addSignedTrigger', this.initDiaries);
    for (let i = 0; i < 20; i++) {
      const h = Math.random() * 200 + 100;
      this.data.push({
        text: i + '',
        width: h * 4 / 3,
        height: h,
        emoticon: Math.random() > 0.5 ? 'normal' : 'smile',
      });
    }
    setTimeout(() => this.$loading.off(), 1400);
  }
}
