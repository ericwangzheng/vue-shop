import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Hello2 from '@/components/Hello2';
import ProductDetail from '@/components/productDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      barName: '首页',
      menuBar: true,
      index: 0,
      iconClass: 'fa fa-shopping-basket',
      component: Index,
    },
    {
      path: '/mine',
      barName: '我的',
      menuBar: true,
      index: 1,
      iconClass: 'fa fa-user-o',
      component: Hello2,
    },
    {
      path: '/product/:data',
      component: ProductDetail,
    },
  ],
});
