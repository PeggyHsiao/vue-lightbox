import Vue from 'vue';
import VueRouter from 'vue-router';

import ImageLightBox from '@/views/ImageLightBox';

Vue.use(VueRouter);

const routes = [
  {
    path: '/imageLightBox',
    name: 'imageLightBox',
    component: ImageLightBox,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
