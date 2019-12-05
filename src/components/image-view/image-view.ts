import Vue from 'vue';
import {Component, Prop, PropSync} from 'vue-property-decorator';
import {Diary as DiaryForm} from '@/lib/model';

@Component({})
export default class ImageView extends Vue {
  public $refs!: {
    wrapper: HTMLElement,
  };
  @Prop({required: true})
  private imageWidth!: number;
  @Prop({required: true})
  private width!: number;
  @Prop({default: 4})
  private ratioWidth!: number;
  @Prop({default: 3})
  private ratioHeight!: number;
  @Prop({required: true})
  private diary!: DiaryForm;

  private openDetailView() {
    this.$detailView.on(this.diary);
  }
  private mounted() {
    this.$refs.wrapper.style.width = this.width + 'px';
    this.$refs.wrapper.style.height = (this.width * this.ratioHeight / this.ratioWidth) + 'px';
  }


}
