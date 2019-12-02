import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

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
  @Prop({default: ''})
  private imageURL!: string;



  private mounted() {
    this.$refs.wrapper.style.width = this.width + 'px';
    this.$refs.wrapper.style.height = (this.width * this.ratioHeight / this.ratioWidth) + 'px';
    this.$refs.wrapper.style.backgroundImage = this.imageURL;
  }


}
