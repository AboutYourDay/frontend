import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import moment from 'moment';
import ItemView from '@/components/image-view';

@Component({})
export default class Calendar extends Vue {
  public $refs!: {
    calendar: HTMLElement;
  };
  private moment = moment;

  private ui: {
    filterNone: boolean,
    filterDates: moment.Moment[],
  } = {
    filterNone: false,
    filterDates: [moment(this.today).subtract(1, 'month'), moment(this.today)]
  };

  private data: Array<{text: string, count: number, imageURL: string}> = [];
  private get today() {
    return (new Date()).getTime();
  }
  private changeFilterDate(dates: moment.Moment[]) {
    console.log(dates);
    if (dates.length === 0) {
      // TODO
      // 전체 데이터 가져와서 data 변경
      return;
    }
    // TODO
    // 날짜에 맞게 data 변경
    this.ui.filterDates = dates;
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

  private mounted() {
    this.$refs.calendar.addEventListener('wheel', this.scroll);
    for (let i = 0; i < 5; i++) {
      this.data.push({
        text: i + '',
        count: Math.floor(Math.random() * 10),
        imageURL: 'https://photo-about-your-day.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD_%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_00.png',
      });
    }
  }
}
