<!--Created by win10 on 2018/4/11.-->

<template>
<footer>
  <div class="box-flex fill-height align-items-center">
    <a class="flex" :class="{on: isRouterPath === '/'}" @click="handleClick('/')">
      <i class="app-bottom-icon iconfont icon-zhuye"></i>
      <span>首页</span>
    </a>
    <a class="flex" :class="{on: isRouterPath === '/category'}" @click="handleClick('/category')">
      <i class="app-bottom-icon iconfont icon-fenlei"></i>
      <span>分类</span>
    </a>
    <a class="flex" :class="{on: isRouterPath === '/cart'}" @click="handleClick('/cart')">
      <i class="app-bottom-icon iconfont icon-cart_icon"></i>
      <span>购物车</span>
    </a>
    <a class="flex" :class="{on: isRouterPath === '/user'}" @click="handleClick('/user')">
      <i class="app-bottom-icon iconfont icon-wode"></i>
      <span>我的</span>
    </a>
  </div>
</footer>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isRouterPath: '/'
    }
  },
  watch: {
    '$route' (to, from) {
      this.isRouterPath = to.fullPath
    }
  },
  methods: {
    handleClick (val) {
      // console.log(val)
      if (this.isRouterPath === val) {
        return
      }
      this.$router.push({path: val})
      this.isRouterPath = val
      // console.log(this.$route)
      // console.log(this.$router)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .flex {
    display: block;
    color: #999;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    &.on {
      color: #ff6700;
    }
    .app-bottom-icon {
      font-size: 20px;
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto .1rem;
    }
  }
  .align-items-center {
    align-items: center;
  }
</style>
