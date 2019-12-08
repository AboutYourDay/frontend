import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

import AlertWindow from '@/plugins/alert-window';
import DetailView from '@/plugins/detail-view';
import Loading from '@/plugins/loading';
import ImageView from '@/components/image-view';


import {auth} from '@/lib/firebase';


import {Spin, Icon, Button} from 'ant-design-vue';
Vue.component('a-spin', Spin);
Vue.component('a-icon', Icon);
Vue.component('a-button', Button);

Vue.use(AlertWindow);
Vue.use(Loading);
Vue.use(DetailView);

Vue.component('image-view', ImageView);

@Component({})
export default class App extends Vue {
  private menu: boolean = false;
  private group = null;
  private drawer = null;

  @Watch('group')
  private onGroupChanged() {
    this.menu = false;
  }
  private moveHomePage() {
    this.$router.push({
      path: '/',
    });
  }
  private moveUploadPage() {
    this.$router.push({
      name: 'upload',
      path: '/upload',
    });
  }
  private moveCalendarView() {
    this.$router.push({
      name: 'calendar',
      path: '/calendar',
    });
  }
  private moveListView() {
    this.$router.push({
      name: 'list',
      path: '/list',
    });
  }
  private get user(): object | null {
    return this.$store.getters.user;
  }
  private login() {
    auth.signIn();
  }
  private async logout() {
    try {
      await auth.signOut();
      this.$store.commit('logout');
    } catch (e) {
      console.error(e);
    }
  }
  private mounted() {
    auth.setOnAuthChanged((u) => {
      this.$store.commit('login', u);
      console.warn(this.$store.getters.user);
      if (u) {
        this.$store.dispatch('shot');
        // TODO
        // server api => save user
        // u.uid
      } else {
        this.$store.commit('clearSignedTrigger');
      }
    });
  }

}
