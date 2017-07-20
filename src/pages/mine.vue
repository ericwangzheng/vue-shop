<template>
  <div class="mine">
    <div class="user-wrapper">
      <div class="user">
        <div class="avatar">
          <img :src="userInfo.avatar"/>
        </div>
        <div class="nick-name">{{userInfo.nickName}}</div>
      </div>
    </div>
    <div class="order">
      <div v-for="items in orderList" class="order-item">
        <i class="icon" :class="items.icons"  aria-hidden="true"></i>
        <span class="tag" v-show="items.count>0">{{items.count}}</span>
        <span class="name">{{items.name}}</span>
      </div>
    </div>
    <div class="cart">
      
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
export default {
  name: 'hello2',
  data() {
    return {
      userInfo:{
          avatar:'../static/images/shop1.jpg',
          nickName:'EricWang'
      },
      orderList:{
        waitPay:{
          name:'待付款',
          icons:'fa fa-credit-card-alt',
          count:4,
        },
        waitSend:{
          name:'待发货',
          icons:'fa fa-archive',
          count:5,
        },
        waitConfirm:{
          name:'待收货',
          icons:'fa fa-truck',
          count:0,
        },
        waitRate:{
          name:'待评价',
          icons:'fa fa-commenting',
          count:2,
        },
        refund:{
          name:'退款售后',
          icons:'fa fa-tags',
          count:0,
        }
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine{
    width: 100%;
    overflow: hidden;
  }
  .user-wrapper{
    width: 100%;
    height: 12.4rem;
    overflow: hidden;
  }
  .user{
    width: 100%;
    position: relative;
    height: 11rem;
    background-color:#e35160 ;
    padding: 3rem 5rem 0;
  }
  .avatar{
    display: inline-block;
    position: relative;
    float: left;
    z-index: 3;
    width: 6.18rem;
    height: 6.18rem;
    background-color: #ffffff;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar img{
    width: 100%;
    height: 100%;
  }
  .nick-name{
    position: relative;
    z-index: 3;
    float: left;
    font-size: 1.6rem;
    color: #ffffff;
    margin-left: 2rem;
    line-height: 6.18rem;
  }
  .user:before{
    content: '';
    position: absolute;
    z-index: 2;
    width:200%;
    height: 15rem;
    bottom: -1.2rem;
    left: -50%;
    border-radius: 50%;
    background-color: #e35160;
  }
  .order{
    width: 100%;
    height: 7.5rem;
    position: relative;
  }
  .order:after{
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
  .order-item{
    width: calc(100%/5);
    display: inline-block;
    position: relative;
    margin-top: -1.5rem;
    padding: 3rem 0;
  }
  .order-item:active{
    background-color:#efefef ;
  }
  .order-item:first-of-type .icon{
    font-size: 2.6rem;
  }
  .order-item .icon{
    display: block;
    font-size:3rem;
    line-height: 3rem;
    color:#9c9c9c;
  }
  .order-item .tag{
    position: absolute;
    top:2.5rem;
    right: 1.5rem;
    z-index: 10;
    display: block;
    width: 2rem;
    height: 2rem;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #e35160;
    background-color: #ffffff;
    border: 0.1rem solid #e35160;
    border-radius: 50%;
  }
  .order-item .name{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
</style>
