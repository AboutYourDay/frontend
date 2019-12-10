import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

import AlertWindow from '@/plugins/alert-window';
import DetailView from '@/plugins/detail-view';
import Loading from '@/plugins/loading';
import ImageView from '@/components/image-view';

import {auth} from '@/lib/firebase';
import HistoryApi from '@/lib/api/history';
import moment from 'moment';

import {Spin, Icon, Button, Tooltip} from 'ant-design-vue';
Vue.component('a-spin', Spin);
Vue.component('a-icon', Icon);
Vue.component('a-button', Button);
Vue.component('a-tooltip', Tooltip);

Vue.use(AlertWindow);
Vue.use(Loading);
Vue.use(DetailView);

Vue.component('image-view', ImageView);

@Component({})
export default class App extends Vue {
  private drawer = null;
  private todayHistory: Array<{did: string, type: string, uid: string, writtenAt: number}> = [];

  private get todayHistoryCount() {
    return this.todayHistory.length;
  }
  private moveHomePage() {
    this.$router.push({
      name: 'main',
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
  @Watch('$route')
  private async onRouterchange() {
    console.log('on route change');
    if (!this.user && this.$route.name !== 'main') {
      await this.$alertWindow.on({title: 'login', content: '로그인이 필요합니다', hasCancel: false});
      this.$router.push('/');
    }
    if (this.user) {
      await this.getHistory();
    }

  }
  private get today(): number {
    return moment(moment(new Date()).format('YYYY/MM/DD')).valueOf();
  }
  private async getHistory() {
    this.todayHistory =
      (await HistoryApi.getHistroy()).result
      .filter((history) => history.writtenAt > this.today && history.writtenAt < this.today + 86400000);
    console.log(this.todayHistory);
  }
  private async mounted() {
    auth.setOnAuthChanged((u) => {
      this.$store.commit('login', u);
      console.warn(this.$store.getters.user);
      if (u) {
        this.$store.dispatch('shot');
      } else {
        this.$store.commit('clearSignedTrigger');
      }
    });
    this.$store.commit('addSignedTrigger', this.getHistory);
  }

}
