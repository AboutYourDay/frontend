import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import moment from 'moment';
import ItemView from '@/components/image-view';

@Component({})
export default class Calendar extends Vue {
  public $refs!: {
    calendar: HTMLElement;
  };
  private ui: {
    filterNone: boolean
  } = {
    filterNone: false,
  };
  private moment = moment;
  private data: Array<{text: string, count: number}> = [];
  private get today() {
    const d = new Date();
    return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
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
      });
    }
  }
}
