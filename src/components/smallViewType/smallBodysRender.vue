ig<!--Created by win10 on 2018/5/7.-->

<script type="text/ecmascript-6">
export default {
//  render (createElement) {
  render (h) {
    switch (this.viewBody.view_type) {
      case 'gallery':
        return ''
      case 'cells_auto_fill':
        return this.cells_auto_fill(h)
      case 'divider_line':
        return this.divider_line(h)
      case 'list_action_title':
        return this.list_action_title(h)
      case 'list_one_type2':
        return this.list_one_type2(h)
      case 'list_one_type3':
        return this.list_one_type3(h)
      case 'list_one_type12':
        return this.list_one_type12(h)
      case 'list_one_type14':
        return this.list_one_type14(h)
      case 'list_two_type1':
        return this.list_two_type1(h)
      case 'list_two_type13':
        return this.list_two_type13(h)
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
    price (h, item) {
      if (item.product_org_price) {
        return h('span',
          {class: 'price old iconfont icon-renminbi1688'},
          [
            h('s', [(item.product_org_price * 1).toFixed(0)])
          ]
        )
      }
      return ''
    },
    list_action_title (h) {
      let viewBody = this.viewBody
      return h('div',
        {class: 'list_action_title box-flex'},
        [
          viewBody.body.items.map((item) => {
            return h('a',
              {
                class: 'h exposure',
                attrs: {'data-log_code': item.action.log_code}
              },
              [
                h('div', {class: 'ti'}, [item.action_title + ' >'])
              ]
            )
          })
        ]
      )
    },
    list_one_type2 (h) {
      return h('div',
        {class: 'list_one_type2'},
        [
          this.viewBody.body.items.map((item) => {
            return h('a',
              {
                class: 'exposure box-flex item',
                attrs: {'data-log_code': item.action.log_code}
              },
              [
                h('div',
                  {class: 'img'},
                  [
                    h('img',
                      {
                        class: 'big',
                        style: {width: '3.6rem', height: '3.6rem'},
                        attrs: {src: item.img_url}
                      }
                    )
                  ]
                ),
                h('div',
                  {
                    class: 'info'
                  },
                  [
                    h('div',
                      {class: 'name'},
                      [item.product_name]
                    ),
                    h('div',
                      {class: 'briefwarp'},
                      [item.product_brief]
                    ),
                    h('div',
                      {class: 'price mt32 iconfont icon-renminbi1688'},
                      [
                        (item.product_price * 1).toFixed(0)
                      ]
                    )
                  ]
                )
              ]
            )
          })
        ]
      )
    },
    list_one_type3 (h) {
      return h('div',
        {class: 'list_one_type2'},
        [
          this.viewBody.body.items.map((item) => {
            return h('a',
              {
                class: 'exposure box-flex item',
                attrs: {'data-log_code': item.action.log_code}
              },
              [
                h('div',
                  {
                    class: 'info'
                  },
                  [
                    h('div',
                      {class: 'name'},
                      [item.product_name]
                    ),
                    h('div',
                      {class: 'briefwarp'},
                      [item.product_brief]
                    ),
                    h('div',
                      {class: 'price mt32 iconfont icon-renminbi1688'},
                      [
                        (item.product_price * 1).toFixed(0)
                      ]
                    )
                  ]
                ),
                h('div',
                  {class: 'img'},
                  [
                    h('img',
                      {
                        class: 'big',
                        style: {width: '3.6rem', height: '3.6rem'},
                        attrs: {src: item.img_url}
                      }
                    )
                  ]
                )
              ]
            )
          })
        ]
      )
    },
    list_one_type12 (h) {
      return h()
    },
    list_one_type14 (h) {
      return h()
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
                class: 'exposure item',
                attrs: {'data-log_code': item.action.log_code}
              },
              [
                h('div',
                  {class: 'img'},
                  [
                    h('img',
                      {
                        class: 'big',
                        style: {width: '3.6rem', height: '3.6rem'},
                        attrs: {src: item.img_url}
                      }
                    )
                  ]
                ),
                h('div',
                  {class: 'info'},
                  [
                    h('div',
                      {class: 'name'},
                      [item.product_name]
                    ),
                    h('div',
                      {class: 'brief'},
                      [item.product_brief]
                    ),
                    h('div',
                      {
                        class: 'price iconfont icon-renminbi1688'
                      },
                      [
                        (item.product_price * 1).toFixed(0),
                        item.show_price_qi ? h('span', {}, ['起']) : '',
                        this.price(h, item)
                      ]
                    )
                  ]
                )
              ]
            )
          })
        ]
      )
    },
    list_two_type13 (h) {
      return h()
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
    .list_two_type1 {
      justify-content: space-between;
      .item {
        width: 3.6rem;
        &:first-child {
          margin-right: 0.04rem;
        }
      }
    }
    .info {
      padding: .2rem .27rem;
      text-align: left;
    }
    .price {
      font-size: .28rem;
      color: #ea625b;
      height: 1.5em;
      line-height: 1.5em;
      position: relative;
      display: inline-block;
      padding-left: 0.8em;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        font-size: .76em;
        text-decoration: none;
      }
      span {
        display: inline-block;
        margin-left: .04rem;
        font-size: .2rem;
      }
      .old {
        display: inline-block;
        margin: 0 .1rem;
        font-size: .22rem;
        color: rgba(0,0,0,.54);
      }
      &.mt32 {
        margin-top: .2rem;
      }
    }
    .name {
      font-size: .28rem;
      color: rgba(0,0,0,.87);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .brief {
      margin-top: .06rem;
      font-size: .22rem;
      line-height: .3rem;
      color: rgba(0,0,0,.54);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .list_action_title {
      .h {
        background: #fff;
        height: 1rem;
        line-height: 1rem;
        font-size: .28rem;
        text-align: center;
        .ti {
          color: rgba(0,0,0,.6);
        }
      }
    }
    .list_one_type2 {
      .info {
        padding: .64rem .12rem 0 .32rem;
        box-sizing: border-box;
        width: 3.6rem;
        height: 3.6rem;
      }
    }
    .briefwarp {
      margin-top: .06rem;
      font-size: .22rem;
      line-height: .35rem;
      color: rgba(0,0,0,.54);
    }
  }

</style>
