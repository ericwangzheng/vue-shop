<template>
  <div class="fillInOrder">
    <div class="deliveredInfo">
      <span class="name">{{deliveredInfo.name}}</span>
      <span class="phone">{{deliveredInfo.phone}}</span>
      <div class="address">
        <i class="fa fa-map-marker address-icon" aria-hidden="true"></i>{{deliveredInfo.address}}
      </div>
      <i class="fa fa-angle-right deliveredInfo-choose-icon"></i>
    </div>
    <div class="order-detail">
      <div class="img-wrapper">
        <img src=""/>
      </div>
      <div class="order-info">
        <div class="description"></div>
        <span class="price"></span><i></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'tapBar',
    data() {
      return {
        deliveredInfo: {
          name: 'Eric',
          phone: '12345645664',
          address: '上海市浦东新区世纪大道1号上海市浦东新区世纪大道1号上海市浦东新区世纪大道1号'
        }
      };
    },
    /* eslint-disable*/
    methods: {},
    mounted() {

    },
  };
</script>

<style>
  .fillInOrder {
    background-color: #e8e8e8;;
  }

  .deliveredInfo {
    text-align: left;
    width: 100%;
    padding: 1rem 3rem 1rem 1rem;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 1rem;
  }

  .deliveredInfo:after{
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

  .deliveredInfo:active{
    background-color:#f0f0f0;
  }

  .deliveredInfo .name {
    font-size:1.8rem;
    line-height: 3rem;
    font-weight: 600;
    padding: 0 2rem;
  }

  .deliveredInfo .phone {
    font-size: 1.6rem;
    line-height: 3rem;
    font-weight: 500;
    padding: 0 2rem;
  }

  .deliveredInfo .address {
    font-size: 1.4rem;
    position: relative;
    line-height:2rem;
    padding: 0 2rem;
  }
  .deliveredInfo .address .address-icon {
    color: #707070;
    position: absolute;
    left: .5rem;
    line-height:2rem;
    top:0
  }
  .deliveredInfo-choose-icon{
    position:absolute;
    font-size: 2rem;
    color: #9c9c9c;
    top:50%;
    right: 2rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
</style>
