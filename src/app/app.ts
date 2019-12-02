import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import AlertWindow from '@/plugins/alert-window';
import ImageView from '@/components/image-view';
Vue.use(AlertWindow);

Vue.component('image-view', ImageView);

@Component({})
export default class App extends Vue {

}
