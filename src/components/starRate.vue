<!--暂时为静态-->
<template>
  <div class="rate">
    <span>
      <i v-for="n in rateLevel" class="fa fa-star" aria-hidden="true" ></i><!--消除间隙
      --><i v-for="n in 5-rateLevel" class="fa fa-star-o" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
  export default{
    name: 'tapBar',
    props:['rateLevel','clickAble'],
    data() {
      return {
      };
    },
    /* eslint-disable*/
    methods: {

    },
    mounted() {

    },
  };
</script>

<style>
  .fa-star{
    color: #e35160;
  }
  .fa-star-o{
    color: #e35160;
  }
</style>
