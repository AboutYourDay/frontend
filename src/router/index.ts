import Vue from 'vue';
import VueRouter from 'vue-router';
import Calendar from '@/views/calendar';
import Upload from '@/views/upload';
import List from '@/views/list';

Vue.use(VueRouter);

const routes = [
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
