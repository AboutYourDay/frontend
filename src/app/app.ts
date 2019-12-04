import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AlertWindow from '@/plugins/alert-window';
import Loading from '@/plugins/loading';
import ImageView from '@/components/image-view';

import {auth} from '@/lib/firebase';


import {Spin, Icon, Button} from 'ant-design-vue';
Vue.component('a-spin', Spin);
Vue.component('a-icon', Icon);
Vue.component('a-button', Button);

Vue.use(AlertWindow);
Vue.use(Loading);

Vue.component('image-view', ImageView);

@Component({})
export default class App extends Vue {
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
