<template>
  <div id="app">
    <div class="app-shell app-shell-bottom-navigation">
      <my-header class="app-cell-header" :title="cellHeaderTitle"></my-header>
      <div class="app-view-wrapper">

      </div>
      <my-footer class="app-cell-footer"></my-footer>
    </div>
  </div>
</template>

<script>
import myHeader from './components/headerfooter/header.vue'
import myFooter from './components/headerfooter/footer.vue'
export default {
  components: {myHeader, myFooter},
  name: 'App',
  data () {
    return {
      header: true,
      cellHeaderTitle: '分类'
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import './assets/less/mmiBase';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app, body, html {
  height: 100%;
  font-size: 0.22rem;
}
</style>
<style scoped lang="less" rel="stylesheet/less">
  .app-cell {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .app-cell-header {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      right: 0;
    }
    .app-view-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      max-width: 7.2rem;
      margin: 0 auto;
    }
    .app-cell-footer {
      position: fixed;
      z-index: 9999;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
