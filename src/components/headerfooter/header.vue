<!--Created by win10 on 2018/4/11.-->

<template>
<header class="app-header-wrapper">
  <div class="app-header-left">
    <a class="app-header-item">
      <i class="app-header-icon iconfont icon-fanhui"></i>
    </a>
  </div>
  <div class="app-header-middle">
    <div class="app-header-title" v-text="title"></div>
  </div>
  <div class="app-header-right">
    <a class="app-header-item" @click="search">
      <i class="app-header-icon iconfont icon-sousuo"></i>
    </a>
  </div>
</header>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      // required: true,
      default: '小米商城'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    search () {
      console.log('toMy')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.app-header-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
  -webkit-transition: -webkit-transform .2s ease-out;
  transition: -webkit-transform .2s ease-out;
  transition: transform .2s ease-out, -webkit-transform .2s ease-out;
  &>div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .app-header-item {
    display: block;
    width: .6rem;
    margin: 0 .2rem;
  }
  .app-header-icon {
    width: .5rem;
    height: .5rem;
    font-size: .5rem;
    color: #999;
  }
  .app-header-middle {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-size: .3rem;
  }
  .app-header-title {
    width: 100%;
  }
  .app-header-right i {
    font-size: .4rem;
  }
}
</style>
