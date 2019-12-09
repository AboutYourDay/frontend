import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/main';
import Calendar from '@/views/calendar';
import Upload from '@/views/upload';
import List from '@/views/list/list.vue';
import Edit from '@/views/edit/edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
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
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
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
