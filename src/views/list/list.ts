// file created at 2019. 11. 17.
// Auto-generated files list.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';
import {Diary as DiaryForm} from '@/lib/model';
import {DiaryApi} from '@/lib/api';
import moment from 'moment';
import Bricks, { BricksInstance } from 'bricks.js';

@Component({})
export default class List extends Vue {
  public $refs!: {
    container: HTMLElement,
  };
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

  private bricksInstance!: BricksInstance;

  get uiData() {
    if (!this.diaries) {
      return [];
    }
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

    setTimeout(() => {
      this.bricksInstance.pack();
      this.bricksInstance.pack();
    }, 10);
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

    this.bricksInstance = Bricks({
      container: '.container',
      sizes: [
        { columns: 1, gutter: 1 },
        { mq: '800px', columns: 4, gutter: 6 }
      ],
      packed: 'data-packed'
    });

    this.bricksInstance
      .on('pack', () => console.log('bricks pack!'))
      .on('update', () => console.log('bricks update!'));
    this.$store.commit('addSignedTrigger', this.initDiaries);
    setTimeout(() => {
      this.bricksInstance.pack();
      this.bricksInstance.pack();
      this.$loading.off();
    }, 1400);
    // setTimeout(() => this.bricksInstance.pack(), 2000);
  }
}
