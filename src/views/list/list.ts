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
    listWindow: HTMLElement,
  };
  private filter = {
    emotions: [{icon: 'smile', value: 'happy', click: false}, {icon: 'meh', value: 'normal', click: false}, {icon: 'frown', value: 'sad', click: false}],
  };
  private moment = moment;
  private data: Array<{text: string, width: number, height: number, emoticon: string}> = [];
  private diaries: DiaryForm[] = [];
  private ui: {
    diaries: DiaryForm[],
    pagination: {
      page: number,
      count: number,
    },
    isPhone: boolean,
  } = {
    diaries: [],
    pagination: {
      page: 1,
      count: 8,
    },
    isPhone: false,
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
  private async getMoreDiaries() {
    console.log('get more diaries', this.ui.pagination.page);
    try {
      this.$loading.on('diary를 가져오는 중...', 0.8);
      // this.diaries = (await DiaryApi.getAllDiaries()).result;
      const res = (await DiaryApi.getDiaryByPage(this.ui.pagination.page, this.ui.pagination.count)).result;
      if (res.length > 0) {
        this.ui.diaries = _(res).concat(this.diaries).sortBy(d => -d.createdAt).value();
        this.ui.pagination.page += 1;
        process.nextTick(() => {
          this.bricksInstance.pack();
          this.bricksInstance.pack();
        });
      }
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1000);
  }

  private async initDiaries() {
    this.$loading.on('diary를 가져오는 중...');
    try {
      // this.diaries = (await DiaryApi.getAllDiaries()).result;
      this.diaries = (await DiaryApi.getDiaryByPage(this.ui.pagination.page, this.ui.pagination.count)).result;
      this.ui.pagination.page += 1;
      this.ui.diaries = _.sortBy(this.diaries, d => -d.createdAt);
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }

  private async scroll(evt: WheelEvent) {
    if (evt.deltaY < 0) {
      return;
    }
    if (this.$refs.listWindow.scrollTop ===
      this.$refs.listWindow.scrollHeight - this.$refs.listWindow.clientHeight) {
      await this.getMoreDiaries();
    }
  }
  private async mounted() {
    this.$loading.on();

    this.bricksInstance = Bricks({
      container: '.container',
      sizes: [
        { columns: 2, gutter: 12 },
        { mq: '800px', columns: 4, gutter: 6 }
      ],
      packed: 'data-packed'
    });

    this.bricksInstance
      .on('pack', () => console.log('bricks pack!'))
      .on('update', () => console.log('bricks update!'));
    this.$store.commit('addSignedTrigger', this.initDiaries);
    this.$refs.listWindow.addEventListener('wheel', this.scroll);

    setTimeout(async () => {
      this.bricksInstance.pack();
      this.bricksInstance.pack();
      this.$loading.off();
    }, 1400);
    // setTimeout(() => this.bricksInstance.pack(), 2000);
  }
}
