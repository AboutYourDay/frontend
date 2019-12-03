import Vue from 'vue';
import Loading from './loading.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $loading: Loading;
  }
}

export default {
  loadingInstance: new Loading(),

  install(vue: typeof Vue, options: any) {
    if (Vue.prototype.$loading === undefined) {
      Vue.prototype.$loading = this.loadingInstance;
    }
    this.loadingInstance.$mount(
      document.body.appendChild(document.createElement('div'))
    );
  }
};
