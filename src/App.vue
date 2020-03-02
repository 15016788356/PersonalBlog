<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  mounted(){
    this.getData();
    // console.log(mapActions);
  },

  methods: {
    ...mapActions(['getData'])
  },
}
</script>

<style lang="less">
  @import './less/index.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background-color: #fff;
}


</style>
