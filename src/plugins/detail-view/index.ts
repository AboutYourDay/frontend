import Vue from 'vue';
import DetailView from './detail-view.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $detailView: DetailView;
  }
}

export default {
  detailVIewInstance: new DetailView(),

  install(vue: typeof Vue, options: any) {
    if (Vue.prototype.$detailView === undefined) {
      Vue.prototype.$detailView = this.detailVIewInstance;
    }
    this.detailVIewInstance.$mount(
      document.body.appendChild(document.createElement('div'))
    );
  }
};
