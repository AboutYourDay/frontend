import Vue from 'vue';
import {Component, Prop, PropSync} from 'vue-property-decorator';
import {Diary as DiaryForm} from '@/lib/model';

@Component({})
export default class ImageView extends Vue {
  public $refs!: {
    wrapper: HTMLElement,
  };
  @Prop({default: 'calendar'})
  private type!: string;
  @Prop({default: 4})
  private ratioWidth!: number;
  @Prop({default: 3})
  private ratioHeight!: number;
  @Prop({required: true})
  private diary!: DiaryForm;
  private maxWidth: number = 300;

  private openDetailView() {
    this.$detailView.on(this.diary);
  }
  private mounted() {
    //
  }


}
