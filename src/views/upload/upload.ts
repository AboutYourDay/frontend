// file created at 2019. 11. 12.
// Auto-generated files upload.ts

import { Vue, Component } from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class Upload extends Vue {
  public $refs!: {
    editArea: HTMLElement,
  };
  private ui: {
    fontSize: number,
    textAlignHorizontal: 'center' | 'flex-start' | 'flex-end',
    textAlignVertical: 'center' | 'flex-start' | 'flex-end',
  } = {
    fontSize: 16,
    textAlignHorizontal: 'center',
    textAlignVertical: 'center'
  };
  private image: File | null = null;

  private alignButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignHorizontal = pos;
    // this.$refs.editArea.style.justifyContent = pos;
  }
  private verticalButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignVertical = pos;
    // this.$refs.editArea.style.alignItems = pos;
  }
  private fontSizeButton(change: 'add' | 'remove') {
    if (change === 'remove' && this.ui.fontSize < 10) {
      return;
    }
    change === 'add' ? this.ui.fontSize += 10 : this.ui.fontSize -= 10;
  }
  private mounted() {
    //
  }
}
