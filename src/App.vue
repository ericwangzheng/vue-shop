<template>
  <div id="app">
    <router-view></router-view>
    <tap-bar></tap-bar>
  </div>
</template>

<script>

  import tapBar from './components/tapBar';
  /* eslint-disable*/
  export default {
    name: 'app',
    components: { tapBar },
    mounted() {
      let that = this;
      that.$router.push('/index');
    },
  };
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
