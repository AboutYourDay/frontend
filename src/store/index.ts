import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
Vue.use(Vuex);
interface State {
  user: null | object;
  // tslint:disable-next-line:ban-types
  signedTrigger: Function[];
}

export default new Vuex.Store<State>({
  state: {
    user: null,
    signedTrigger: [],
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
    addSignedTrigger(state, func) {
      state.signedTrigger.push(func);
    },
    clearSignedTrigger(state) {
      state.signedTrigger = [];
    },
    shot(state) {
      _.forEach(state.signedTrigger, (f) => f());
    },
  },
  actions: {
  },
  getters: {
    user: (state) => state.user,
  }
});
