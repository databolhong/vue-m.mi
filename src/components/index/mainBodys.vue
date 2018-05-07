<!--Created by win10 on 2018/4/27.-->

<template>
<div class='component-list-main'>
  <renderBodys :viewBody="item" :defaultType="defaultType" v-for="(item, index) in sections" :key="index"></renderBodys>
</div>
</template>

<script type='text/ecmascript-6'>
import renderBodys from '../smallViewType/smallBodysRender.vue'
export default {
  components: {renderBodys},
  props: {
    sections: {
      type: Array,
      default () {
        return []
      }
    },
    defaultType: {
      type: String,
      default () {
        return ''
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
