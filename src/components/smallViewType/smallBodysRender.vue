<!--Created by win10 on 2018/5/7.-->

<script type="text/ecmascript-6">
export default {
//  render (createElement) {
  render (h) {
    let viewType = this.viewBody.view_type
    console.log(viewType)
    switch (viewType) {
      case 'gallery':
        return ''
      case 'cells_auto_fill':
        return this.cells_auto_fill(h)
      case 'divider_line':
        return this.divider_line(h)
      case 'list_two_type1':
        return this.list_two_type1(h)
      case 'list_action_title':
        return ''
      case 'list_one_type2':
        return ''
      case 'list_one_type3':
        return ''
      default:
        return ''
    }
  },
  props: {
    viewBody: {
      type: Object,
      default: function () {
        return {}
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
    return {}
  },
  methods: {
    cells_auto_fill (h) {
      return h('div',
        {
          class: {cells_auto_fill: true, multi_cell: true},
          style: {width: this.viewBody.body.w / 100 + 'rem', height: this.viewBody.body.h / 100 + 'rem'}
        },
        [
          this.viewBody.body.items.map((item) => {
            return h('a',
              {
                class: {exposure: true, items: true},
                style: {width: item.w / 100 + 'rem', height: item.h / 100 + 'rem', left: item.x / 100 + 'rem', top: item.y / 100 + 'rem'},
                attrs: {'data-log_code': item.action.log_code}
              },
              [
                h('img',
                  {
                    class: {},
                    style: {width: item.w / 100 + 'rem', height: item.h / 100 + 'rem'},
                    attrs: {src: item.img_url}
                  }
                )
              ]
            )
          })
        ]
      )
    },
    divider_line (h) {
      return h('div',
        {
          class: {divider_line: true},
          style: {
            height: this.viewBody.body.line_height / 150 + 'rem',
            borderBottom: this.viewBody.body.line_height / 150 + 'rem ' + 'solid ' + this.viewBody.body.line_color,
            backgroundColor: this.viewBody.body.line_color
          }
        },
        []
      )
    },
    list_two_type1 (h) {
      let viewBody = this.viewBody
      return h('div',
        {
          class: {list_two_type1: true, 'box-flex': true},
          style: {},
          attrs: {}
        },
        [
          viewBody.body.items.map((item) => {
            return h('a',
              {
                class: {},
                style: {},
                attrs: {}
              },
              [
                h('div',
                  {
                    class: {},
                    style: {},
                    attrs: {}
                  },
                  []
                ),
                h('div',
                  {
                    class: {},
                    style: {},
                    attrs: {}
                  },
                  []
                )
              ]
            )
          })
        ]
      )
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .component-list-main {
    img {
      display: block;
    }
    .cells_auto_fill {
      &.multi_cell {
        position: relative;
        .items {
          position: absolute;
        }
      }
      .items{
        height: auto!important;
        display: block;
        img {
          width: 100%;
        }
      }
    }
    .divider_line {
      margin: 0 auto;
      border-top: none;
      border-left: none;
      border-right: none;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }
  }

</style>
