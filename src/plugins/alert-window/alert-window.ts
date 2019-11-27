import Vue from 'vue';
import {Component} from 'vue-property-decorator';


declare module 'vue/types/vue' {
  interface AlertWindow extends Vue {
    on: (option: {title: string, content: string, hasCancel: boolean}) => {};
    off: () => {};
  }
}

@Component({})
export default class AlertWindow extends Vue {
  private ui = {
    open: false,
    title: '',
    content: '',
    hasCancel: false,
  };
  private resolve() {
    //
  }
  private reject() {
    //
  }
  private on(option: {title: string, content: string, hasCancel: boolean}) {
    this.ui.open = true;
    this.ui.title = option.title;
    this.ui.content = option.content;
    this.ui.hasCancel = option.hasCancel;
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  private off() {
    this.ui.open = false;
  }
  private onResolve() {
    this.ui.open = false;
    this.resolve();
  }
  private onReject() {
    this.ui.open = false;
    this.reject();
  }
}
