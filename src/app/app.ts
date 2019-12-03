import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import AlertWindow from '@/plugins/alert-window';
import Loading from '@/plugins/loading';
import ImageView from '@/components/image-view';

import {Spin, Icon, Button} from 'ant-design-vue';
Vue.component('a-spin', Spin);
Vue.component('a-icon', Icon);
Vue.component('a-button', Button);

Vue.use(AlertWindow);
Vue.use(Loading);

Vue.component('image-view', ImageView);

@Component({})
export default class App extends Vue {

}
