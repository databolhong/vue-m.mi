<!--Created by win10 on 2018/4/11.-->

<template>
<div class="container">
  <header class="header">
    <div class="app-header-wrapper">
      <div>
        <div><img src="" alt="mi"></div>
      </div>
      <div></div>
      <div></div>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <span></span>
      </li>
    </ul>
  </header>
  <div class="pages-wrap"></div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    // next(vm => vm.setData(err, post))
    // })
    console.log(to, from)
    next()
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .container {
    .app-header-wrapper {
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      height: 50px;
      background: #f2f2f2;
      color: #666;
      padding: 0;
      &>div {
        display: flex;
      }
      .nav {
        font-size: .26rem;
      }
      .nav-item {
        color: rgb(116, 116, 116);
        span {
          border-color: rgb(242, 242, 242);
        }
      }
      .nav-item-active {
        color: rgb(237, 91, 0);
        span {
          border-color: rgb(237, 91, 0);
        }
      }
    }
  }
</style>
