import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import moment from 'moment';
import _ from 'lodash';

import ItemView from '@/components/image-view';

import {Diary as DiaryForm} from '@/lib/model';
import {DiaryApi} from '@/lib/api';


@Component({})
export default class Calendar extends Vue {
  public $refs!: {
    calendar: HTMLElement;
  };
  private moment = moment;

  private ui: {
    filterNone: boolean,
    filterDates: moment.Moment[],
    phone: boolean,
  } = {
    filterNone: false,
    filterDates: [moment(this.today).subtract(1, 'month'), moment(this.today)],
    phone: false,
  };

  // TODO
  // data 변경
  private data: Array<{text: string, count: number, imageURL: string}> = [];
  private diaries: DiaryForm[] = [];
  private get today() {
    return (new Date()).getTime();
  }
  private async changeFilterDate(dates: moment.Moment[]) {
    this.$loading.on(`diary 가져오는 중...`, 0.8);
    try {
      console.log(dates);
      if (dates.length === 0) {
        this.diaries = (await DiaryApi.getAllDiaries()).result;
      } else {
        this.$loading.changeText(`[${dates[0].format('YYYY/MM/DD')} ~ ${dates[0].format('YYYY/MM/DD')}]
          diary 가져오는 중...`);
        // TODO
        // 날짜에 맞게 data 변경
        this.ui.filterDates = dates;
        const days = this.ui.filterDates[1].diff(this.ui.filterDates[0], 'days');
        this.diaries = (await DiaryApi.getDiaryByDate(this.ui.filterDates[0].valueOf(), days)).result;
      }

    } catch (e) {
      // TODO
      // 에러처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }

  private scroll(evt: WheelEvent) {
    // if (this.$refs.calendar.clientWidth > 600) {
    //   // tablet & desktop
    //   evt.deltaY > 0 ? this.$refs.calendar.scrollLeft += 40 : this.$refs.calendar.scrollLeft -= 40;
    //   if (this.$refs.calendar.scrollLeft ===
    //     this.$refs.calendar.scrollWidth - this.$refs.calendar.clientWidth) {
    //     for (let i = 0;  i < 5; i++) {
    //       this.data.push({
    //         text: this.data.length + '',
    //       });
    //     }
    //   }
    // } else {
      // phone
      if (this.$refs.calendar.scrollTop ===
        this.$refs.calendar.scrollHeight - this.$refs.calendar.clientHeight) {
        for (let i = 0;  i < 5; i++) {
          this.data.push({
            text: this.data.length + '',
            count: Math.floor(Math.random() * 10),
            imageURL: 'https://photo-about-your-day.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD_%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_00.png',
          });
        }
      }
  //   }
  }

  private moveListView() {
    this.$router.push({
      name: 'list',
      path: '/list',
    });
  }
  private async initDiaries() {
    this.$loading.on('diary를 가져오는 중...');
    try {
      // this.diaries = (await DiaryApi.getAllDiaries()).result;
      const days = this.ui.filterDates[1].diff(this.ui.filterDates[0], 'days');

      this.diaries = (await DiaryApi.getDiaryByDate(this.ui.filterDates[0].valueOf(), days)).result;

      console.log(this.diaries);
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }
  private get dividedDiariesByDate() {
    return _(this.diaries).groupBy(d => moment(d.createdAt).format('YYYY/MM/DD')).values().reverse().value();
  }

  private mounted() {
    this.$loading.on();
    this.ui.phone = !(this.$refs.calendar.clientWidth > 600);
    this.$store.commit('addSignedTrigger', this.initDiaries);
    this.$refs.calendar.addEventListener('wheel', this.scroll);
    setTimeout(() => this.$loading.off(), 1400);


  }
}
