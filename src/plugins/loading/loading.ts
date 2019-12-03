import Vue from 'vue';
import {Component} from 'vue-property-decorator';


declare module 'vue/types/vue' {
  interface Loading extends Vue {
    on: (text?: string, opacity?: number) => {};
    off: () => {};
  }
}

@Component({})
export default class Loading extends Vue {
  private ui: {
    open: boolean,
    opacity: number,
    text: string,
  } = {
    open: false,
    opacity: 1,
    text: 'loading...'
  };

  private on(text?: string, opacity?: number) {
    this.ui.open = true;
    if (opacity) {
      this.ui.opacity = opacity;
    }
    if (text) {
      this.ui.text = text;
    }

  }
  private off() {
    this.ui.open = false;
  }
}
