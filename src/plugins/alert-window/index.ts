import Vue from 'vue';
import AlertWindow from './alert-window.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $alertWindow: AlertWindow;
  }
}

export default {
  alertWindowInstance: new AlertWindow(),

  install(vue: typeof Vue, options: any) {
    if (Vue.prototype.$alertWindow === undefined) {
      Vue.prototype.$alertWindow = this.alertWindowInstance;
    }
    this.alertWindowInstance.$mount(
      document.body.appendChild(document.createElement('div'))
    );
  }
};
