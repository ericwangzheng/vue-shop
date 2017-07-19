<template>
  <div class="product">
    <swiper class="product-swiper" :options="swiperOption">
      <swiper-slide v-for="items in swiperSlides" :key=""><img class="slide-img" :src="items"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <i class="fa fa-angle-left back-index" aria-hidden="true" @click="backIndex()"></i>
  </div>
</template>

<script>
  /* eslint-disable*/
export default {
  name: 'hello2',
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
      swiperSlides: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
    };
  },
  methods:{
    backIndex(){
        let that=this;
        that.$router.replace('/index')
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .product-swiper{
    height: 30rem!important;
  }
  .back-index{
    display: inline-block;
    text-align: center;
    width:4rem;
    height: 4rem;
    font-size: 3rem;
    color: #ffffff;
    position: absolute;
    z-index: 999;
    top:2rem;
    left: 1.5rem;
    background-color: #000000;
    border-radius: 50%;
    line-height: 4rem;
    opacity: 0.5;
  }
</style>
