<template>
  <div class="product-detail">
    <div class="product-display">
      <div class="img">
        <swiper class="product-swiper" :options="swiperOption">
          <swiper-slide v-for="(items,index) in productDetail.imgLists" :key="index"><img class="slide-img"
                                                                                          :src="items"/></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <i class="fa fa-angle-left back-before" aria-hidden="true" @click="backIndex()"></i>
        <i class="fa fa-cart-plus add-cart" aria-hidden="true" @click="addCart()"></i>
        <div class="add-cart-animate" :class="{adding:addCartStatus}">
          <img :src="productDetail.imgLists[0]"/>
        </div>
      </div>
      <div class="description">{{productDetail.description}}</div>
      <div class="price"><span>￥</span>{{productDetail.price}}<span>.00</span></div>
    </div>
    <div class="choose-count">
      <div class="selected">
        <span class="item">已选</span>
        <span class="version-selected" v-show="selectedVersion">
          {{selectedVersion}}
        </span>
        <span class="count-selected">{{selectedCount}}件</span>
      </div>
      <div class="version" v-show="productDetail.version">
        <div class="item">版本</div>
        <div class="version-btn-wrapper">
          <div class="version-btn" :class="items===selectedVersion?'active':''"
               v-for="(items,index) in productDetail.version" @click="changeVersion(items)">{{items}}
          </div>
        </div>
      </div>
      <div class="count">
        <span class="item">数量</span>
        <div class="count-btn-wrapper">
          <span class="reduce" disabled="disabled" @click="reduceCount()">-</span>
          <input class="count-input" type="number" v-model="selectedCount" @change="bindCount()"/>
          <span class="plus" @click="plusCount()">+</span>
        </div>
        <span v-show="countError" class="count-error">至少为1件</span>
      </div>
    </div>
    <div class="choose-address">
      <div class="address-wrapper">
        <span class="item">地址</span>
        <span class="address">
          <i class="fa fa-map-marker address-icon" aria-hidden="true"></i>{{address}}
          <i class="fa fa-angle-right address-choose-icon"></i>
        </span>
      </div>
      <div class="notice-wrapper">
        <span class="item">提示</span>
        <span class="notice">支持7天无理由退货</span>
      </div>
    </div>
    <div class="rate-list-wrapper">
      <div class="hd">
        <span class="item">评价</span>
        <i class="fa fa-angle-right rate-list-icon"></i>
      </div>
      <div class="rate-list">
        <div class="rate-item" v-for="items in rateList">
          <star-rate :rateLevel="items.rateLevel"></star-rate>
          <span>{{items.customerName}}</span>
          <div class="rate-content" v-if="items.rateContent">{{items.rateContent}}</div>
          <div class="" v-if="items.rateImgs">
            <div v-for="src in items.rateImgs" class="">
              <img :src="src"/>
            </div>
          </div>
          <span class="time">{{items.rateTime}}</span>
        </div>
      </div>
    </div>
    <div class="buy">
      <div class="buy-btn" @click="buyNow()">立即购买</div>
    </div>
  </div>
</template>

<script>
  import starRate from '../components/starRate.vue'
  /* eslint-disable*/
  export default {
    name: 'ProductDetail',
    data() {
      return {
        selectedVersion: '乞丐版',
        selectedCount: 1,
        countError: false,
        address: '上海市浦东新区世纪大道1号东方明珠asdfasdfasdfasdfasdfasdfas',
        swiperOption: {
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
        rateList: [
          {
            rateLevel: 1,
            customerName: 'eric',
            rateContent: '东西很好啊！！！！！！',
            rateImgs: [
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg'
            ],
            rateTime:'2017-07-25 18:37'
          },
          {
            rateLevel: 1,
            customerName: 'eric',
            rateContent: '东西很好啊！！！！！！',
            rateImgs: [
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg'
            ],
            rateTime:'2017-07-25 18:37'
          },
          {
            rateLevel: 1,
            customerName: 'eric',
            rateContent: '东西很好啊！！！！！！',
            rateImgs: [
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg'
            ],
            rateTime:'2017-07-25 18:37'
          },
          {
            rateLevel: 1,
            customerName: 'eric',
            rateContent: '东西很好啊！！！！！！',
            rateImgs: [
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg',
              '../static/images/shop1.jpg'
            ],
            rateTime:'2017-07-25 18:37'
          }
        ],
        productDetail: {
          imgLists: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          ],
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会',
          price: 2000,
          version: ['普通版', '加强版', '乞丐版', '土豪版']
        },
        addCartStatus: false,
      };
    },
    methods: {
      backIndex(){
        let that = this;
        that.$router.replace(that.$route.query.from);
      },
      addCart(){
        let that = this;
        that.addCartStatus = true;
        setTimeout(function () {
          that.addCartStatus = false
        }, 1000)
      },
      changeVersion(e){
        let that = this;
        that.selectedVersion = e;
      },
      reduceCount(){
        let that = this;
        if (that.selectedCount <= 1) {
          that.countError = true;
          setTimeout(function () {
            that.countError = false;
          }, 1000)

        } else {
          that.selectedCount -= 1;
        }
      },
      plusCount(){
        let that = this;
        that.selectedCount += 1;
      },
      bindCount(){
        let that = this;
        if (that.selectedCount <= 1) {
          that.countError = true;
          setTimeout(function () {
            that.countError = false;
          }, 1000);
          that.selectedCount = 1
        } else {
          that.selectedCount = Math.ceil(that.selectedCount);
          that.countError = false;
        }
      },
      buyNow(){
        let that = this;
        let id = that.$route.params.data;
        that.$router.push(`/fill_in_order/${id}`)
      }
    },
    mounted() {
    },
    components: {
      starRate
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-detail {
    background-color: #e8e8e8;
    font-size: 0;
    text-align: left;
    padding-bottom: 5.6rem;
    min-height: 100%;
  }

  .item {
    color: #a9a9a9;
  }

  .product-display {
    background-color: #ffffff;
    width: 100%;
    margin-bottom: 1rem;
  }

  .product-display .img {
    width: 100%;
  }

  .product-swiper {
    height: 30rem !important;
  }

  .back-before {
    display: inline-block;
    text-align: center;
    width: 3.6rem;
    height: 3.6rem;
    font-size: 3rem;
    color: #ffffff;
    position: absolute;
    z-index: 4;
    top: 1.6rem;
    left: 1rem;
    background-color: #000000;
    border-radius: 50%;
    line-height: 3.6rem;
    opacity: 0.5;
    text-indent: -0.3rem;
  }

  .add-cart {
    display: inline-block;
    text-align: center;
    width: 3.6rem;
    height: 3.6rem;
    font-size: 2rem;
    color: #ffffff;
    position: absolute;
    z-index: 4;
    top: 1.6rem;
    right: 1rem;
    background-color: #000000;
    border-radius: 50%;
    line-height: 3.6rem;
    opacity: 0.5;
    text-indent: -0.3rem;
  }

  .add-cart-animate {
    width: 0;
    height: 0;
    position: absolute;
    top: 1.6rem;
    right: 1rem;
  }

  .add-cart-animate img {
    width: 100%;
    height: 100%;
  }

  .adding {
    animation: add-cart 1s;
  }

  .product-display .description {
    position: relative;
    width: 100%;
    font-size: 1.6rem;
    padding: 0.5rem 1rem 0;
  }

  .product-display .description:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .product-display .price {
    position: relative;
    width: 100%;
    font-size: 2.2rem;
    color: #e35160;
    font-weight: bold;
    padding: 0.5rem 1rem 1rem;
  }

  .product-display .price:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .product-display .price span {
    font-size: 1.4rem;
  }

  .choose-count {
    background-color: #ffffff;
    font-size: 1.4rem;
    padding: 1rem 1rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
  }

  .choose-count:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .choose-count:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .choose-count .version-selected {
    padding-left: .5rem;
  }

  .choose-count .count-selected {
    padding-left: .5rem;
  }

  .version {
    overflow: hidden;
    margin-top: .5rem;
  }

  .version .item {
    display: inline-block;
    float: left;
    padding-top: 1rem;
  }

  .version .version-btn-wrapper {
    width: calc(100% - 2.8rem);
    display: inline-block;
  }

  .version .version-btn-wrapper .active {
    color: #e35160;
    border: .05rem solid #e35160;
  }

  .version-btn {
    display: inline-block;
    width: calc(50% - 2rem);
    text-align: center;
    padding: .5rem;
    margin: .5rem 1rem .5rem;
    border: 0.05rem solid #707070;
    border-radius: .5rem;
  }

  .version-btn:active {
    background-color: #f0f0f0;
  }

  .count {
    font-size: 0;
    margin-top: 1rem;
  }

  .count .item {
    float: left;
    font-size: 1.4rem;
    line-height: 3rem;
  }

  .count-btn-wrapper {
    float: left;
    position: relative;
    margin-left: 1rem;
    border: 0.05rem solid #707070;
  }

  .count .reduce, .count .plus {
    display: inline-block;
    font-size: 2rem;
    text-align: center;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    background-color: #f0f0f0;
  }

  .count .reduce:active, .count .plus:active {
    background-color: #cbcbcb;
  }

  .count .count-input {
    width: 4rem;
    height: 3rem;
    border: none;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    position: absolute;
    left: 3rem;
    top: 0
  }

  .count .count-input:focus {
    outline: none;
  }

  .count .reduce {
    width: 1.5rem !important;
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform: scaleX(2);
    -webkit-transform: scaleX(2);
  }

  .count .plus {
    margin-left: 5.5rem;
  }

  .count-error {
    font-size: 1.4rem;
    line-height: 3rem;
    color: #e35160;
    padding-left: 1rem;
  }

  .choose-address {
    font-size: 1.4rem;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 1rem;
  }

  .choose-address:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .choose-address:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .address-wrapper {
    padding: 0 0 0 1rem;
    overflow: hidden;
    height: 4.6rem;
    line-height: 4.6rem;
    position: relative;
  }

  .address-wrapper:active {
    background-color: #f0f0f0;
  }

  .address-wrapper .item {
    display: inline-block;
    float: left;
  }

  .address {
    display: inline-block;
    width: calc(100% - 3.8rem);
    padding: 0 5rem 0 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .address-icon {
    color: #e35160;
    transform-origin: 50% 100%;
    transform: scale(1.2) translateX(-0.45rem);
    -webkit-transform: scale(1.2) translateX(-0.45rem);
  }

  .address-choose-icon {
    position: absolute;
    font-size: 2rem;
    line-height: 4.6rem;
    color: #9c9c9c;
    top: 0;
    right: 2rem;
  }

  .notice-wrapper {
    padding: 1rem;
  }

  .notice-wrapper .notice {
    color: #a9a9a9;
    padding-left: 1rem;
  }

  .rate-list-wrapper {
    position: relative;
    background: #ffffff;
  }

  .rate-list-wrapper .hd {
    font-size: 1.4rem;
    padding: 1rem 1rem;
    position: relative;
  }
  .rate-list{
    font-size: 1.4rem;
  }

  .rate-list-icon {
    position: absolute;
    font-size: 2rem;
    line-height: 4.1rem;
    color: #9c9c9c;
    top: 0;
    right: 2rem;
  }



  .buy {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: .6rem 2rem;
    background-color: #e8e8e8;
  }

  .buy-btn {
    width: 100%;
    height: 4.2rem;
    text-align: center;
    font-size: 1.6rem;
    line-height: 4.2rem;
    color: #ffffff;
    background-color: #e35160;
    border-radius: .5rem;
  }

  .buy-btn:active {
    opacity: 0.618;
  }

  @keyframes add-cart {
    0% {
      width: 100%;
      height: 30rem;
      z-index: 2;
      opacity: 0;
    }
    30% {
      width: 50%;
      height: 15rem;
      z-index: 5;
      top: 10rem;
      right: 10%;
      opacity: 0.5;
    }
    100% {
      width: 0;
      height: 0;
      z-index: 5;
      top: 1.6rem;
      right: 2.6rem;
      opacity: 1
    }
  }
</style>
