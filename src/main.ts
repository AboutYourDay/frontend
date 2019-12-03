import Vue from 'vue';
import App from '@/app';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

import Antd, {Collapse} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(Collapse);


Vue.config.productionTip = false;
// Spin.setDefaultIndicator({
//   indicator: (h: any) => {
//     return '<i class="anticon anticon-loading anticon-spin ant-spin-dot"></i>';
//   },
// });
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
