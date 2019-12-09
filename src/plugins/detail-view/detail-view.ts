import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Diary as DiaryForm} from '@/lib/model';
import _ from 'lodash';
import moment from 'moment';
import $router from '@/router';

declare module 'vue/types/vue' {
  interface DetailView extends Vue {
    on: (diary: DiaryForm) => {};
    off: () => {};
  }
}

@Component({})
export default class DetailView extends Vue {
  public $refs!: {
    detailView: HTMLElement,
  };
  private moment = moment;
  private ui: {
    open: boolean
  } = {
    open: false,
  };
  private emotions: Array<{icon: string, value: string}>
    = [{icon: 'smile', value: 'happy'}, {icon: 'meh', value: 'normal'}, {icon: 'frown', value: 'sad'}];
  private get emotionIcon() {
    return _.filter(this.emotions, emo => emo.value === this.diary.emotion)[0];
  }
  private diary!: DiaryForm;

  public goEditPage() {
    this.off();
    $router.push({path: `/edit/${this.diary._id}`});

  }
  private on(diary: DiaryForm) {
    this.ui.open = true;
    this.diary = diary;
  }

  private off() {
    this.ui.open = false;
  }
}
