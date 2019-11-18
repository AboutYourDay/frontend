import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import moment from 'moment';

@Component({})
export default class Calendar extends Vue {
  public $refs!: {
    calendar: HTMLElement;
  };
  private moment = moment;
  private data: Array<{text: string}> = [];
  private get today() {
    const d = new Date();
    return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
  }

  private scroll(evt: WheelEvent) {
    evt.deltaY > 0 ? this.$refs.calendar.scrollLeft += 40 : this.$refs.calendar.scrollLeft -= 40;

    if (this.$refs.calendar.scrollLeft >
      this.$refs.calendar.scrollWidth - this.$refs.calendar.clientWidth - 20) {
      for (let i = 0;  i < 5; i++) {
        this.data.push({
          text: this.data.length + '',
        });
      }
    }
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
      });
    }
  }
}
