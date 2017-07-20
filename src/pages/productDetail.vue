<template>
  <div class="product-detail">
    <swiper class="product-swiper" :options="swiperOption">
      <swiper-slide v-for="items in productDetail.imgLists" :key=""><img class="slide-img" :src="items"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <i class="fa fa-angle-left back-before" aria-hidden="true" @click="backIndex()"></i>
    <i class="fa fa-cart-plus add-cart" aria-hidden="true" @click="addCart()"></i>
    <div class="add-cart-animate" :class="{adding:addCartStatus}">
      <img :src="productDetail.imgLists[0]"/>
    </div>
    <div class="buy">
      <div class="buy-btn" @click="buyNow()">立即购买</div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable*/
export default {
  name: 'hello2',
  data() {
    return {
      swiperOption: {
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
      productDetail:{
        imgLists:[
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        ],
        description:'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
        price:2000,
      },
      addCartStatus:false,
    };
  },
  methods:{
    backIndex(){
        let that=this;
        that.$router.replace(that.$route.query.from);
    },
    addCart(){
        let that=this;
        that.addCartStatus=true;
      setTimeout(function () {
        that.addCartStatus=false
      },1000)
    }
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .product-swiper{
    height: 30rem!important;
  }
  .back-before{
    display: inline-block;
    text-align: center;
    width:3.6rem;
    height: 3.6rem;
    font-size: 3rem;
    color: #ffffff;
    position: absolute;
    z-index: 4;
    top:1.6rem;
    left: 1rem;
    background-color: #000000;
    border-radius: 50%;
    line-height: 3.6rem;
    opacity: 0.5;
    text-indent: -0.3rem;
  }
  .add-cart{
    display: inline-block;
    text-align: center;
    width:3.6rem;
    height: 3.6rem;
    font-size: 2rem;
    color: #ffffff;
    position: absolute;
    z-index: 4;
    top:1.6rem;
    right: 1rem;
    background-color: #000000;
    border-radius: 50%;
    line-height: 3.6rem;
    opacity: 0.5;
    text-indent: -0.3rem;
  }
  .add-cart-animate{
    width: 0;
    height: 0;
    position: absolute;
    top:1.6rem;
    right: 1rem;
  }
  .add-cart-animate img{
    width: 100%;
    height: 100%;
  }
  .adding{
    animation: add-cart 1s;
  }
  .buy{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: .6rem 2rem;
    background-color:#e8e8e8;
  }
  .buy-btn{
    width: 100%;
    height: 4.2rem;
    font-size: 1.6rem;
    line-height: 4.2rem;
    color: #ffffff;
    background-color:#e35160 ;
    border-radius: .5rem;
  }
  .buy-btn:active{
    opacity: 0.618;
  }
  @keyframes add-cart {
    0%{
      width: 100%;
      height:30rem ;
      z-index: 2;
      opacity: 0;
    }
    30%{
      width: 50%;
      height: 15rem;
      z-index: 5;
      top:10rem;
      right: 10%;
      opacity: 0.5;
    }
    100%{
      width: 0;
      height: 0;
      z-index:5;
      top:1.6rem;
      right: 2.6rem;
      opacity: 1
    }
  }
</style>
