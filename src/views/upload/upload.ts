// file created at 2019. 11. 12.
// Auto-generated files upload.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class Upload extends Vue {
  public $refs!: {
    editArea: HTMLElement,
    colorInput: HTMLInputElement,
  };
  private ui: {
    fontSize: number,
    textAlignHorizontal: 'center' | 'flex-start' | 'flex-end',
    textAlignVertical: 'center' | 'flex-start' | 'flex-end',
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
  } = {
    fontSize: 16,
    textAlignHorizontal: 'center',
    textAlignVertical: 'center',
    fontWeight: 400,
    italic: false,
    underline: false,
    color: '#777777',
  };

  private image: File | null = null;

  private alignButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignHorizontal = pos;
  }
  private verticalButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignVertical = pos;
  }
  private fontSizeButton(change: 'add' | 'remove') {
    if (change === 'remove' && this.ui.fontSize < 10) {
      return;
    }
    change === 'add' ? this.ui.fontSize += 10 : this.ui.fontSize -= 10;
  }
  private fontWeightButton(change: 'add' | 'remove') {
    if (change === 'remove' && this.ui.fontWeight <= 200) {
      return;
    }
    if (change === 'add' && this.ui.fontWeight >= 800) {
      return;
    }
    change === 'add' ? this.ui.fontWeight += 100 : this.ui.fontWeight -= 100;
  }
  private onChangeColor() {
    this.ui.color = this.$refs.colorInput.value;
  }
  private mounted() {
    //
  }
}
