<template>
  <section>
    <swiper :options="swiperOption">
      <swiper-slide v-for="items in swiperSlides" :key=""><img class="slide-img" :src="items"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="classify">
      <div v-for="(items,index) in classifyList" class="classify-item" :class="classifyStatus===index?'active':''" @click="changeClassify(index)">
        <span class="count">{{items.count}}</span>
        <span class="name">{{items.name}}</span>
      </div>
    </div>
    <div class="filter">
      <div v-for="(items,index) in filterList" class="filter-item" :class="filterStatus===index?'active':''" @click="changeFilter(items,index)">
        <span class="name">{{items.name}}</span>
        <img class="sort" v-if="items.sortable" :src="sortImg[items.sortStatus]"/>
      </div>
    </div>
    <div class="product">
      <div v-for="items in productList" class="product-item" @click="productDetail(items.id)">
        <div class="img">
          <img  :src="items.imgUrl"/>
        </div>
        <p class="description">{{items.description}}</p>
        <span class="price"><span class="money-icon">￥</span>{{items.price}}</span>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'hello1',
    data() {
      return {
        classifyStatus: 0,
        classifyList: [
          {
            count: 50,
            name: '全部商品',
          }, {
            count: 0,
            name: '上新',
          }, {
            count: 8,
            name: '热销',
          }],
        filterStatus:0,
        filterList: [{
          name: '推荐',
          sortable: false,
          sortStatus:0,
        }, {
          name: '销量',
          sortable: false,
          sortStatus:0,
        }, {
          name: '新品',
          sortable: false,
          sortStatus:0,
        }, {
          name: '价格',
          sortable: true,
          sortStatus:0,
        },],
        sortImg:[
          '../static/images/sort-arrow.png',
          '../static/images/sort-arrow-top.png',
          '../static/images/sort-arrow-bottom.png',
        ],
        productList: [{
          imgUrl: '../static/images/shop1.jpg',
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
          price:2000.00,
          id:1,
        }, {
          imgUrl: '../static/images/shop1.jpg',
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
          price: 2000.00,
          id: 2,
        }, {
          imgUrl: '../static/images/shop1.jpg',
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
          price: 2000.00,
          id: 3,
        }, {
          imgUrl: '../static/images/shop1.jpg',
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
          price: 2000.00,
          id: 4,
        }, {
          imgUrl: '../static/images/shop1.jpg',
          description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
          price: 2000.00,
          id: 5,
        }],
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
      changeClassify(e){
        let that=this;
        that.classifyStatus=e
      },
      changeFilter(n,m){
        let that=this;
        that.filterStatus=m;
        that.checkSort(n,m)
      },
      checkSort(n,m){
        let that=this;
        that.filterList.forEach(function (item, index) {
          if(m !== index){
              item.sortStatus=0
          }
        });
        if(n.sortable){
          that.filterList[m].sortStatus=that.filterList[m].sortStatus===2?1:that.filterList[m].sortStatus+1
        }
      },
      productDetail(e){
        let that=this;
        that.$router.push(`/product/${e}`)
      },
    },
    mounted() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slide-img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .swiper-container {
    width: 100%;
    height: 15rem;
  }

  .swiper-pagination-bullet-active {
    background-color: #e35160;
  }

  .swiper-pagination-bullet {
    width: .8rem !important;
    height: .8rem !important;
    margin-right: .5rem !important;
    margin-left: .5rem !important;
  }

  .classify {
    width: 100%;
    position: relative;
  }
  .classify .active{
    color: #e35160 ;
  }
  .classify .active:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;
    width: 100%;
    height: .2rem;
    background-color: #e35160 ;
  }

  .classify:after {
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

  .classify-item {
    width: calc(100% / 3);
    display: inline-block;
    text-align: center;
    padding: 0.5rem;
    position: relative;
  }
  .classify-item:after{
    content: '';
    position: absolute;
    left: 0;
    top:25%;
    z-index: 11;
    width: 0.1rem;
    opacity: 0.5;
    height: 50%;
    background-color: #acacac;
  }
  .classify-item:first-of-type:after{
    content: '';
    width: 0;
    height: 0;

  }
  .classify-item:active,.filter-item:active{
    background-color:#efefef ;
  }
  .classify-item .count {
    display: block;
    font-size: 1.8rem;
  }
  .classify-item .name {
    display: block;
    font-size: 1.2rem;
  }
  .filter{
    width: 100%;
    position: relative;
  }
  .filter:after{
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
  .filter .active{
    color: #e35160;
  }
  .filter-item{
    width:calc(100%/4);
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.8rem;
  }
  .filter .sort{
    display: inline-block;
    width: 1rem;
  }
  .product{
    background-color:#e8e8e8;
    width: 100%;
    position: relative;
    /*overflow: hidden;清除浮动方法*/
  }
  /*清除浮动*/
  .product:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .product-item{
    width: calc(50% - .1rem);
    display: inline-block;
    margin:0 .1rem .1rem 0;
    float: left;
    background-color: #ffffff;
    text-align: left;
  }
  .product-item .img{
    width:100%;
    height: 16rem;
    overflow: hidden;
  }
  .product-item .img img{
    width: 100%;
  }
  .product-item .description{
    width: 100%;
    padding:1rem 1rem 0 ;
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .product-item .price{
    display: inline-block;
    width: 100%;
    background-color: #ffffff;
    font-size: 2rem;
    color: #e35160 ;
    padding:1rem;
    font-weight:500;
  }
  .product-item .price .money-icon{
    font-size: 1rem;
  }
</style>
