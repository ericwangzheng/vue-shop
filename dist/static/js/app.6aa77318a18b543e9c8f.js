webpackJsonp([0],[,,,function(t,e,s){"use strict";var i=s(1),a=s(37),n=s(25),o=s.n(n),r=s(26),c=s.n(r),l=s(27),u=s.n(l);i.a.use(a.a),e.a=new a.a({routes:[{path:"/index",barName:"首页",menuBar:!0,index:0,iconClass:"fa fa-shopping-basket",component:o.a},{path:"/mine",barName:"我的",menuBar:!0,index:1,iconClass:"fa fa-user-o",component:c.a},{path:"/product/:data",component:u.a}]})},function(t,e){},,function(t,e,s){function i(t){s(20)}var a=s(0)(s(10),s(31),i,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),a=s(4),n=(s.n(a),s(5)),o=s.n(n),r=s(6),c=s.n(r),l=s(3);i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",router:l.a,template:"<App/>",components:{App:c.a}}),i.a.directive("swiperLeft",{}),function(t,e){var s=t.documentElement,i=(navigator.userAgent.match(/iphone|ipod|ipad/gi),Math.min(e.devicePixelRatio,3)),a=1/i,n="orientationchange"in window?"orientationchange":"resize";s.dataset.dpr=i;var o=t.createElement("meta");o.name="viewport",o.content="initial-scale="+a+",maximum-scale="+a,s.firstElementChild.appendChild(o);var r=function(){var t=s.clientWidth;t/i>640&&(t=640*i),s.style.fontSize=t/750*20+"px"};r(),t.addEventListener&&e.addEventListener(n,r,!1)}(document,window)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=s(2),s(18)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(24),a=s.n(i);e.default={name:"app",components:{tapBar:a.a},methods:{},mounted:function(){this.$router.push("/index")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(15),a=s.n(i);e.default={name:"tapBar",data:function(){return{activeStatus:0}},methods:{toggleMenu:function(t){var e=this;e.activeStatus=t.index,e.$router.replace(t.path)}},mounted:function(){console.log(a()(this.$route.data))}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",data:function(){return{classifyStatus:0,classifyList:[{count:50,name:"全部商品"},{count:0,name:"上新"},{count:8,name:"热销"}],filterStatus:0,filterList:[{name:"推荐",sortable:!1,sortStatus:0},{name:"销量",sortable:!1,sortStatus:0},{name:"新品",sortable:!1,sortStatus:0},{name:"价格",sortable:!0,sortStatus:0}],sortImg:["../static/images/sort-arrow.png","../static/images/sort-arrow-top.png","../static/images/sort-arrow-bottom.png"],productList:[{imgUrl:"../static/images/shop1.jpg",description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织",price:2e3,id:1},{imgUrl:"../static/images/shop1.jpg",description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织",price:2e3,id:2},{imgUrl:"../static/images/shop1.jpg",description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织",price:2e3,id:3},{imgUrl:"../static/images/shop1.jpg",description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织",price:2e3,id:4},{imgUrl:"../static/images/shop1.jpg",description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织",price:2e3,id:5}],swiperOption:{autoplay:3500,setWrapperSize:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0},swiperSlides:["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"]}},methods:{changeClassify:function(t){this.classifyStatus=t},changeFilter:function(t,e){var s=this;s.filterStatus=e,s.checkSort(t,e)},checkSort:function(t,e){var s=this;s.filterList.forEach(function(t,s){e!==s&&(t.sortStatus=0)}),t.sortable&&(s.filterList[e].sortStatus=2===s.filterList[e].sortStatus?1:s.filterList[e].sortStatus+1)},productDetail:function(t){var e=this,s=e.$route.path;e.$router.push({path:"product/"+t,query:{from:s}})}},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello2",data:function(){return{userInfo:{avatar:"../static/images/shop1.jpg",nickName:"EricWang"},orderList:{waitPay:{name:"待付款",icons:"fa fa-credit-card-alt",count:4},waitSend:{name:"待发货",icons:"fa fa-archive",count:5},waitConfirm:{name:"待收货",icons:"fa fa-truck",count:0},waitRate:{name:"待评价",icons:"fa fa-commenting",count:2},refund:{name:"退款售后",icons:"fa fa-tags",count:0}}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ProductDetail",data:function(){return{selectedVersion:"乞丐版",selectedCount:1,countError:!1,address:"上海市浦东新区世纪大道1号东方明珠asdfasdfasdfasdfasdfasdfas",swiperOption:{setWrapperSize:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0},productDetail:{imgLists:["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],description:"Mozilla（缩写MF或MoFo）全称Mozilla基金会",price:2e3,version:["普通版","加强版","乞丐版","土豪版"]},addCartStatus:!1}},methods:{backIndex:function(){var t=this;t.$router.replace(t.$route.query.from)},addCart:function(){var t=this;t.addCartStatus=!0,setTimeout(function(){t.addCartStatus=!1},1e3)},changeVersion:function(t){this.selectedVersion=t},reduceCount:function(){var t=this;t.selectedCount<=1?(t.countError=!0,setTimeout(function(){t.countError=!1},1e3)):t.selectedCount-=1},plusCount:function(){this.selectedCount+=1},bindCount:function(){var t=this;t.selectedCount<=1?(t.countError=!0,setTimeout(function(){t.countError=!1},1e3),t.selectedCount=1):(t.selectedCount=Math.ceil(t.selectedCount),t.countError=!1)}},mounted:function(){}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function i(t){s(23)}var a=s(0)(s(11),s(36),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(21)}var a=s(0)(s(12),s(32),i,null,null);t.exports=a.exports},function(t,e,s){function i(t){s(19)}var a=s(0)(s(13),s(30),i,"data-v-160e4cc6",null);t.exports=a.exports},function(t,e,s){function i(t){s(22)}var a=s(0)(s(14),s(33),i,null,null);t.exports=a.exports},function(t,e,s){var i=s(0)(s(8),s(34),null,null,null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(9),s(35),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mine"},[s("div",{staticClass:"user-wrapper"},[s("div",{staticClass:"user"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.userInfo.avatar}})]),t._v(" "),s("div",{staticClass:"nick-name"},[t._v(t._s(t.userInfo.nickName))])])]),t._v(" "),s("div",{staticClass:"order"},t._l(t.orderList,function(e){return s("div",{staticClass:"order-item"},[s("i",{staticClass:"icon",class:e.icons,attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.count>0,expression:"items.count>0"}],staticClass:"tag"},[t._v(t._s(e.count))]),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[s("div")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),s("tap-bar")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperSlides,function(t,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"slide-img",attrs:{src:t}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),s("div",{staticClass:"classify"},t._l(t.classifyList,function(e,i){return s("div",{staticClass:"classify-item",class:t.classifyStatus===i?"active":"",on:{click:function(e){t.changeClassify(i)}}},[s("span",{staticClass:"count"},[t._v(t._s(e.count))]),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),t._v(" "),s("div",{staticClass:"filter"},t._l(t.filterList,function(e,i){return s("div",{staticClass:"filter-item",class:t.filterStatus===i?"active":"",on:{click:function(s){t.changeFilter(e,i)}}},[s("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),e.sortable?s("img",{staticClass:"sort",attrs:{src:t.sortImg[e.sortStatus]}}):t._e()])})),t._v(" "),s("div",{staticClass:"product"},t._l(t.productList,function(e){return s("div",{staticClass:"product-item",on:{click:function(s){t.productDetail(e.id)}}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:e.imgUrl}})]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),s("span",{staticClass:"price"},[s("span",{staticClass:"money-icon"},[t._v("￥")]),t._v(t._s(e.price))])])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-detail"},[s("div",{staticClass:"product-display"},[s("div",{staticClass:"img"},[s("swiper",{staticClass:"product-swiper",attrs:{options:t.swiperOption}},[t._l(t.productDetail.imgLists,function(t,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"slide-img",attrs:{src:t}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),s("i",{staticClass:"fa fa-angle-left back-before",attrs:{"aria-hidden":"true"},on:{click:function(e){t.backIndex()}}}),t._v(" "),s("i",{staticClass:"fa fa-cart-plus add-cart",attrs:{"aria-hidden":"true"},on:{click:function(e){t.addCart()}}}),t._v(" "),s("div",{staticClass:"add-cart-animate",class:{adding:t.addCartStatus}},[s("img",{attrs:{src:t.productDetail.imgLists[0]}})])],1),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(t.productDetail.description))]),t._v(" "),s("div",{staticClass:"price"},[s("span",[t._v("￥")]),t._v(t._s(t.productDetail.price)),s("span",[t._v(".00")])])]),t._v(" "),s("div",{staticClass:"choose-count"},[s("div",{staticClass:"selected"},[s("span",{staticClass:"item"},[t._v("已选")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedVersion,expression:"selectedVersion"}],staticClass:"version-selected"},[t._v("\n        "+t._s(t.selectedVersion)+"\n      ")]),t._v(" "),s("span",{staticClass:"count-selected"},[t._v(t._s(t.selectedCount)+"件")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.productDetail.version,expression:"productDetail.version"}],staticClass:"version"},[s("div",{staticClass:"item"},[t._v("版本")]),t._v(" "),s("div",{staticClass:"version-btn-wrapper"},t._l(t.productDetail.version,function(e,i){return s("div",{staticClass:"version-btn",class:e===t.selectedVersion?"active":"",on:{click:function(s){t.changeVersion(e)}}},[t._v(t._s(e)+"\n        ")])}))]),t._v(" "),s("div",{staticClass:"count"},[s("span",{staticClass:"item"},[t._v("数量")]),t._v(" "),s("div",{staticClass:"count-btn-wrapper"},[s("span",{staticClass:"reduce",attrs:{disabled:"disabled"},on:{click:function(e){t.reduceCount()}}},[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCount,expression:"selectedCount"}],staticClass:"count-input",attrs:{type:"number"},domProps:{value:t.selectedCount},on:{change:function(e){t.bindCount()},input:function(e){e.target.composing||(t.selectedCount=e.target.value)}}}),t._v(" "),s("span",{staticClass:"plus",on:{click:function(e){t.plusCount()}}},[t._v("+")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.countError,expression:"countError"}],staticClass:"count-error"},[t._v("至少为1件")])])]),t._v(" "),s("div",{staticClass:"choose-address"},[s("div",{staticClass:"address-wrapper"},[s("span",{staticClass:"item"},[t._v("地址")]),t._v(" "),s("span",{staticClass:"address"},[s("i",{staticClass:"fa fa-map-marker address-icon",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.address)+"\n        "),s("i",{staticClass:"fa fa-angle-right address-choose-icon"})])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"buy"},[s("div",{staticClass:"buy-btn",on:{click:function(e){t.buyNow()}}},[t._v("立即购买")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notice-wrapper"},[s("span",{staticClass:"item"},[t._v("提示")]),t._v(" "),s("span",{staticClass:"notice"},[t._v("支持7天无理由退货")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tap-bar menu"},t._l(t.$router.options.routes,function(e){return e.menuBar?s("div",{staticClass:"menu-item",class:t.activeStatus===e.index?"active":"",on:{"!click":function(s){t.toggleMenu(e)}}},[s("i",{class:e.iconClass}),s("span",[t._v(t._s(e.barName))])]):t._e()}))},staticRenderFns:[]}}],[7]);
//# sourceMappingURL=app.6aa77318a18b543e9c8f.js.map