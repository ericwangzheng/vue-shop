<template>
  <div class="tap-bar menu">
    <div class="menu-item" v-for="items in $router.options.routes"  v-if="items.menuBar" @click.capture="toggleMenu(items)"
         :class="activeStatus === items.index?'active':''">
      <i :class="items.iconClass"></i><span>{{items.barName}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'tapBar',
    data() {
      return {
        activeStatus: 0,
      };
    },
    /* eslint-disable*/
    methods: {
      toggleMenu(e){
        let that = this;
        that.activeStatus = e.index;
        that.$router.replace(e.path)
      }
    },
    mounted() {
        console.log(JSON.stringify(this.$route.data))
    },
  };
</script>

<style>
  .menu {
    position: fixed;
    left: 0;
    width: 100%;
    color: #707070;
    opacity: 0;
    bottom: -4.5rem;
    background-color: #fff;
    transition:all .618s;
    -webkit-transition:all .618s;
    -moz-transition:all .618s;
  }

  .menu:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #acacac;
    transform: translateY(0.5);
    -webkit-transform: translateY(0.5);
  }

  .menu-item.active {
    color:  #e35160;
  }

  .index + .menu,.mine + .menu{
    bottom: 0;
    opacity: 1;
  }

  .menu-item {
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 4rem;
    font-size: 1.6rem;
    line-height: 4rem;
    letter-spacing: 0.5rem;
  }
</style>
