<template>
  <div id="app">
    <div class="app-shell app-shell-bottom-navigation">
      <my-header class="app-shell-header" :title="cellHeaderTitle"></my-header>
      <div class="app-view-wrapper">
        <transition name="slide"
                    :enter-class="enter"
                    :enter-active-class="enterActive"
                    :leave-class="leave"
                    :leave-active-class="leaveActive">
          <router-view :class="{'app-view': appView, 'app-view-with-footer': appViewWithFooter}"></router-view>
        </transition>
      </div>
      <my-footer class="app-bottom-navigator-wrapper app-shell-footer"></my-footer>
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
      cellHeaderTitle: '分类',
      enter: '',
      enterActive: '',
      leave: '',
      leaveActive: '',
      appView: true,
      appViewWithFooter: true
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  },
  methods: {}
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
}
#app, body, html {
  height: 100%;
  font-size: 0.22rem;
}
</style>
<style scoped lang="less" rel="stylesheet/less">
  .app-shell {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .app-shell-header {
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
      .app-view {
        position: absolute;
        z-index: 999;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
        transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
        transition: transform .4s cubic-bezier(.55,0,.1,1);
        transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);
        will-change: transform;
        /*background: #fff;*/
        color: #3c3c3c;
        &.app-view-with-footer {
          padding-bottom: 52px;
        }
      }
    }
    .app-bottom-navigator-wrapper {
      height: 52px;
      background: #fff;
      -webkit-transition: -webkit-transform .2s ease-out;
      transition: -webkit-transform .2s ease-out;
      transition: transform .2s ease-out;
      transition: transform .2s ease-out,-webkit-transform .2s ease-out;
      box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    }
    .app-shell-footer {
      position: fixed;
      z-index: 9999;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
