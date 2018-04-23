<template>
  <div id="app">
    <div class="app-shell app-shell-bottom-navigation">
      <transition name="miHeader">
        <my-header class="app-shell-header" v-show="appViewWithHeader" :title="cellHeaderTitle"></my-header>
      </transition>
      <div class="app-view-wrapper">
        <transition name="slide"
                    :enter-class="enter"
                    :enter-active-class="enterActive"
                    :leave-class="leave"
                    :leave-active-class="leaveActive">
          <router-view :class="{'app-view': appView, 'app-view-with-footer': appViewWithFooter, 'app-view-with-header': appViewWithHeader}"></router-view>
        </transition>
      </div>
      <transition>
        <my-footer v-show="appViewWithFooter" class="app-bottom-navigator-wrapper app-shell-footer"></my-footer>
      </transition>
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
      appViewWithFooter: true,
      appViewWithHeader: true
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to, from)
      let road = from.name + '/' + to.name
      if (to.name === 'category' || to.name === 'cart') {
        this.appViewWithHeader = true
        if (to.name === 'cart') {
          this.cellHeaderTitle = '购物车'
        } else {
          this.cellHeaderTitle = '分类'
        }
      } else {
        this.appViewWithHeader = false
      }
      if (!from.name) {
        return
      }
      switch (road) {
        case 'index/category':
        case 'index/cart':
        case 'cart/user':
          this.slideRightEnter()
          this.slideLeftLeave()
          break
        case 'category/index':
        case 'user/cart':
        case 'cart/index':
        case 'category/cart':
          this.slideLeftEnter()
          this.slideRightLeave()
          break
        case 'cart/category':
        case 'user/index':
          this.slideLeftLeave()
          this.slideLeftEnter()
          break
        case 'index/user':
          this.slideRightEnter()
          this.slideRightLeave()
          break
        default:
          this.slideRightEnter()
          this.slideLeftLeave()
      }
    }
  },
  methods: {
    slideLeftEnter () {
      this.enter = 'slide-left-enter'
      this.enterActive = 'slide-left-enter-active'
    },
    slideRightEnter () {
      this.enter = 'slide-right-enter'
      this.enterActive = 'slide-right-enter-active'
    },
    slideLeftLeave () {
      this.leave = 'slide-left-leave'
      this.leaveActive = 'slide-left-leave-active'
    },
    slideRightLeave () {
      this.leave = 'slide-right-leave'
      this.leaveActive = 'slide-right-leave-active'
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
    .miHeader-enter {
      transform: translate(0, -50px);
    }
    .miHeader-leave-active {
      transform: translate(0, -50px);
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
        &.app-view-with-header {
          padding-top: 50px;
        }
        &.app-view-with-footer {
          padding-bottom: 52px;
        }
      }
      .slide-left-enter {
        /*left: -7.2rem;*/
        transform: translate(-7.2rem, 0);
      }
      .slide-left-enter-active {
        /*transform: translate(0, 0);*/
        z-index: 0;
      }
      .slide-left-leave {
        /*left: 0;*/
      }
      .slide-left-leave-active {
        /*left: -7.2rem;*/
        transform: translate(-7.2rem, 0);
        z-index: 2;
      }
      .slide-right-enter {
        /*left: 7.2rem;*/
        transform: translate(7.2rem, 0);
      }
      .slide-right-enter-active {
        left: 0;
        z-index: 0;
      }
      .slide-right-leave {
        left: 0;
      }
      .slide-right-leave-active {
        transform: translate(7.2rem, 0);
        z-index: 2;
        /*left: 7.2rem;*/
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
    .miFooter-enter {
      transform: translate(0, 52px);
    }
    .miFooter-leave-active {
      transform: translate(0, -52px);
    }
  }
</style>
