// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

/* eslint-disable*/
~(function (doc, win) {
  let docEle = doc.documentElement,
    isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
    dpr = Math.min(win.devicePixelRatio, 3);
  let scale = 1 / dpr;

  let resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
  docEle.dataset.dpr = dpr;

  let metaEle = doc.createElement('meta');
  metaEle.name = 'viewport';
  metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
  docEle.firstElementChild.appendChild(metaEle);

  let recalCulate = function () {
    let width = docEle.clientWidth;
    if (width / dpr > 640) {
      width = 640 * dpr;
    }
    docEle.style.fontSize = 20 * (width / 750) + 'px';
  };

  recalCulate();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
