<!--Created by win10 on 2018/4/27.-->

<template>
<div class='component-list-main'>
  <div :class="item.view_type" v-for="(item, index) in sections" :key="index" :index="index">
    <p>{{index + item.view_type}}</p>
  </div>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    sections: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {}
}
</script>

<style lang='less' rel='stylesheet/less'>

</style>
