<!--Created by win10 on 2018/4/11.-->

<template>
<div class="container">
  <header class="header">
    <div class="app-header-wrapper">
      <div class="app-header-left">
        <div class="app-header-item logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="mi">
        </div>
      </div>
      <div class="app-header-middle">
        <div class="app-header-title">
          <i class="iconfont icon-sousuo"></i> 搜索商品名称
        </div>
      </div>
      <div class="app-header-right">
        <div class="app-header-item">
          <i class="iconfont icon-wode"></i>
        </div>
      </div>
    </div>
    <div style="overflow: hidden; width: 100%;">
      <ul class="nav" :ref="navIndex">
        <li v-for="(item, index) in tabs" :key="index" @click="handTabsItem(item, index, $event)" :class="{active: tabsIndex === index}" class="nav-item">
          <span v-text="item.name"></span>
        </li>
      </ul>
    </div>
  </header>
  <div class="pages-wrap">
    <!--推荐-->
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 0">
        <main-list :sections="mianDatas"></main-list>
      </div>
    </transition>
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 1">
        <main-list></main-list>
      </div>
    </transition>
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 2">
        <main-list></main-list>
      </div>
    </transition>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import mainList from '../../components/index/mainBodys.vue'
export default {
  components: {mainList},
  data () {
    return {
      ajaxDateJson: {
        'code': 0,
        'data': {
          'tabs': [
            {
              'name': '推荐',
              'page_type': 'home',
              'page_id': 0,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '手机',
              'page_type': 'tab',
              'page_id': 1864,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '智能',
              'page_type': 'tab',
              'page_id': 1860,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '电视品牌日',
              'page_type': 'tab',
              'page_id': 3094,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '电脑',
              'page_type': 'tab',
              'page_id': 1865,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '全面屏',
              'page_type': 'tab',
              'page_id': 3257,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '生活周边',
              'page_type': 'tab',
              'page_id': 1861,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '盒子',
              'page_type': 'tab',
              'page_id': 2567,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            }
          ],
          'data': {
            'sections': [
              {
                'view_type': 'gallery',
                'body': {
                  'items': [
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 7129,
                      'ad_position_id': 1006,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6fd86f6099b02a3679e47025c906e16e.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6fd86f6099b02a3679e47025c906e16e.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'url',
                        'path': 'https://s1.mi.com/m/ghd/2018/djh0410mi6X/index.html?needValidHost=false&client_id=180100031058&masid=17409.0338',
                        'log_code': '31waphomegallery001001#t=ad&page=home&act=webview&page_id=26&bid=3000164.1&adp=1006&adm=7129'
                      }
                    },
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 7141,
                      'ad_position_id': 1005,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f13a5ea94bc2010d050d8b131765261.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f13a5ea94bc2010d050d8b131765261.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000084',
                        'log_code': '31waphomegallery002001#t=ad&page=home&act=product&pid=10000084&page_id=26&bid=3000164.2&adp=1005&adm=7141'
                      }
                    },
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 6811,
                      'ad_position_id': 1060,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ebaf9656e6fe7f33ca5cf4d12a720a9.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ebaf9656e6fe7f33ca5cf4d12a720a9.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000064',
                        'log_code': '31waphomegallery003001#t=ad&page=home&act=product&pid=10000064&page_id=26&bid=3000164.3&adp=1060&adm=6811'
                      }
                    },
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 6727,
                      'ad_position_id': 2219,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a609fafad8b8e78ec82a07bd7679ec.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a609fafad8b8e78ec82a07bd7679ec.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7795',
                        'log_code': '31waphomegallery004001#t=ad&page=home&act=product&pid=7795&page_id=26&bid=3000164.4&adp=2219&adm=6727'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 152,
                  'items': [
                    {
                      'w': 144,
                      'h': 152,
                      'material_id': 3124,
                      'ad_position_id': 1298,
                      'img_url': '//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29.webp?bg=F1F7E4',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29.webp?bg=F1F7E4',
                      'img_url_color': '#F1F7E4',
                      'action': {
                        'type': 'url',
                        'path': 'https://service.10046.mi.com/main_home?from=10001&needValidHost=false&defaultTextSize=true',
                        'log_code': '31waphomecells_auto_fill001003#t=ad&page=home&act=webview&page_id=26&bid=3033321.1&adp=1298&adm=3124'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 144,
                      'w': 144,
                      'h': 152,
                      'material_id': 3125,
                      'ad_position_id': 1299,
                      'img_url': '//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac.webp?bg=FCF8EB',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac.webp?bg=FCF8EB',
                      'img_url_color': '#FCF8EB',
                      'action': {
                        'type': 'channel',
                        'path': '1852',
                        'log_code': '31waphomecells_auto_fill002003#t=ad&page=home&act=other&page_id=26&bid=3033321.2&adp=1299&adm=3125'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 288,
                      'w': 144,
                      'h': 152,
                      'material_id': 5764,
                      'ad_position_id': 1300,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'url',
                        'path': 'http://m.mi.com/seckill',
                        'log_code': '31waphomecells_auto_fill003003#t=ad&page=home&act=webview&page_id=26&bid=3033321.3&adp=1300&adm=5764'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 432,
                      'w': 144,
                      'h': 152,
                      'material_id': 3127,
                      'ad_position_id': 1301,
                      'img_url': '//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69.webp?bg=EBF6FC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69.webp?bg=EBF6FC',
                      'img_url_color': '#EBF6FC',
                      'action': {
                        'type': 'url',
                        'path': 'https://m.mi.com/legacy/#recycling',
                        'log_code': '31waphomecells_auto_fill004003#t=ad&page=home&act=webview&page_id=26&bid=3033321.4&adp=1301&adm=3127'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 576,
                      'w': 144,
                      'h': 152,
                      'material_id': 6198,
                      'ad_position_id': 1302,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'inside',
                        'path': '{\'name\':\'activities\',\'id\':\'5207\'}',
                        'log_code': '31waphomecells_auto_fill005003#t=ad&page=home&act=other&page_id=26&bid=3033321.5&adp=1302&adm=6198'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 508,
                  'items': [
                    {
                      'w': 358,
                      'h': 508,
                      'material_id': 6948,
                      'ad_position_id': 215,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/344b8290e221afdb91d0dd16fcebf621.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/344b8290e221afdb91d0dd16fcebf621.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '1831',
                        'log_code': '31waphomecells_auto_fill001007#t=ad&page=home&act=other&page_id=26&bid=3000169.1&adp=215&adm=6948'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 362,
                      'w': 358,
                      'h': 252,
                      'material_id': 7149,
                      'ad_position_id': 216,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf2fb48a6f8af3ef06af178c204e5f86.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf2fb48a6f8af3ef06af178c204e5f86.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '1415',
                        'log_code': '31waphomecells_auto_fill002007#t=ad&page=home&act=other&page_id=26&bid=3000169.2&adp=216&adm=7149'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 362,
                      'y': 256,
                      'w': 358,
                      'h': 252,
                      'material_id': 6170,
                      'ad_position_id': 217,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d0b062db51f83ac19562804ed607816b.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d0b062db51f83ac19562804ed607816b.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '3093',
                        'log_code': '31waphomecells_auto_fill003007#t=ad&page=home&act=other&page_id=26&bid=3000169.3&adp=217&adm=6170'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 7139,
                      'ad_position_id': 1355,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a142cfa55aabf1521ce3515df6a2c102.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a142cfa55aabf1521ce3515df6a2c102.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000083',
                        'log_code': '31waphomecells_auto_fill001009#t=ad&page=home&act=product&pid=10000083&page_id=26&bid=3000171.1&adp=1355&adm=7139'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 7142,
                      'ad_position_id': 2039,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b0075877521d5e6dd34119ee3abe73c.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b0075877521d5e6dd34119ee3abe73c.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000069',
                        'log_code': '31waphomecells_auto_fill001014#t=ad&page=home&act=product&pid=10000069&page_id=26&bid=3182278.1&adp=2039&adm=7142'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_color': '#BCC3C4',
                      'action': {
                        'type': 'product',
                        'path': '10000079',
                        'log_code': '31waphomelist_two_type1001016#t=product&page=home&act=other&page_id=26&bid=3182279.1&pid=10000079'
                      },
                      'show_price_qi': true,
                      'product_id': '10000079',
                      'product_name': '红米5',
                      'product_brief': '12MP旗舰相机，骁龙处理器',
                      'product_price': '749.00',
                      'product_org_price': '799.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000064',
                        'log_code': '31waphomelist_two_type1002016#t=product&page=home&act=other&page_id=26&bid=3182279.2&pid=10000064'
                      },
                      'product_id': '10000064',
                      'product_name': '小米5X 变焦双摄',
                      'product_brief': '5.5\'大屏轻薄全金属',
                      'product_price': '1299.00',
                      'product_org_price': '1499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ccfa1b43b0f31e7f1467dd24c97b99e.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ccfa1b43b0f31e7f1467dd24c97b99e.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7758',
                        'log_code': '31waphomelist_two_type1001017#t=product&page=home&act=other&page_id=26&bid=3182280.1&pid=7758'
                      },
                      'product_id': '7758',
                      'product_name': '红米5A 32GB',
                      'product_brief': '轻巧长续航',
                      'product_price': '699.00',
                      'product_org_price': '699.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_color': '#ECB8B9',
                      'action': {
                        'type': 'product',
                        'path': '6697',
                        'log_code': '31waphomelist_two_type1002017#t=product&page=home&act=other&page_id=26&bid=3182280.2&pid=6697'
                      },
                      'product_id': '6697',
                      'product_name': '红米Note 5A 标准版',
                      'product_brief': '5.5\'高清大屏，超长续航',
                      'product_price': '649.00',
                      'product_org_price': '699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 6657,
                      'ad_position_id': 390,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/812ee56bcd3ff8954f7a9672a5f9ca13.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/812ee56bcd3ff8954f7a9672a5f9ca13.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '1607',
                        'log_code': '31waphomecells_auto_fill001019#t=ad&page=home&act=other&page_id=26&bid=3039085.1&adp=390&adm=6657'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 7013,
                      'ad_position_id': 2022,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6c9036787b05be5298e16eafd6dccfc.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6c9036787b05be5298e16eafd6dccfc.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000057',
                        'log_code': '31waphomecells_auto_fill001021#t=ad&page=home&act=product&pid=10000057&page_id=26&bid=3173812.1&adp=2022&adm=7013'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b9833bde-d7e9-ac73-14b2-0b9a27aa75bc.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b9833bde-d7e9-ac73-14b2-0b9a27aa75bc.webp',
                      'img_url_color': '#888A8C',
                      'action': {
                        'type': 'product',
                        'path': '10000041',
                        'log_code': '31waphomelist_two_type1001023#t=product&page=home&act=other&page_id=26&bid=3173816.1&pid=10000041'
                      },
                      'product_id': '10000041',
                      'product_name': '小米6 变焦双摄',
                      'product_brief': '骁龙835 旗舰处理器',
                      'product_price': '2299.00',
                      'product_org_price': '2299.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp',
                      'img_url_color': '#686F76',
                      'action': {
                        'type': 'product',
                        'path': '10000069',
                        'log_code': '31waphomelist_two_type1002023#t=product&page=home&act=other&page_id=26&bid=3173816.2&pid=10000069'
                      },
                      'show_price_qi': true,
                      'product_id': '10000069',
                      'product_name': '小米Note 3  人脸解锁',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '1799.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000070',
                        'log_code': '31waphomelist_two_type1001024#t=product&page=home&act=other&page_id=26&bid=3173817.1&pid=10000070'
                      },
                      'show_price_qi': true,
                      'product_id': '10000070',
                      'product_name': '小米MIX 2',
                      'product_brief': '5.99\'大屏，4轴光学防抖',
                      'product_price': '2899.00',
                      'product_org_price': '3299.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7d04d143-a95c-0c1c-7c37-1ee23ae9906e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7d04d143-a95c-0c1c-7c37-1ee23ae9906e.webp',
                      'img_url_color': '#A17B6C',
                      'action': {
                        'type': 'product',
                        'path': '7153',
                        'log_code': '31waphomelist_two_type1002024#t=product&page=home&act=other&page_id=26&bid=3173817.2&pid=7153'
                      },
                      'product_id': '7153',
                      'product_name': '小米MIX 2 全陶瓷尊享版',
                      'product_brief': 'Unibody 全陶瓷',
                      'product_price': '4199.00',
                      'product_org_price': '4699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 7045,
                      'ad_position_id': 218,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b98132aef64ffb06f1ca55f70c49de5f.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b98132aef64ffb06f1ca55f70c49de5f.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6632',
                        'log_code': '31waphomecells_auto_fill001028#t=ad&page=home&act=product&pid=6632&page_id=26&bid=3000175.1&adp=218&adm=7045'
                      },
                      'path_type': 'image',
                      'category_key': 'home-660h-star'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'stat': '3row_2col',
                'body': {
                  'line_color': '#ffffff',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/eebdb591-381c-e0a7-9574-5cb5b47482cf.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '4984',
                        'log_code': 'recom_home_20-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4984',
                        'recommend_code': 'recom_home_20-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4984'
                      },
                      'product_id': '4984',
                      'product_name': '小米米家电动滑板车',
                      'product_brief': '便携折叠，自由穿行',
                      'product_price': '1999',
                      'product_org_price': '1999'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a78ed74e-533f-ef0e-207f-40c4448d9133.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '4893',
                        'log_code': 'recom_home_20-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4893',
                        'recommend_code': 'recom_home_20-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4893'
                      },
                      'product_id': '4893',
                      'product_name': '小米盒子3s',
                      'product_brief': '4K HDR 人工智能机顶盒',
                      'product_price': '299',
                      'product_org_price': '349',
                      'product_tag': '//i8.mifile.cn/v1/a1/e688cc6b-fbe2-e528-7e09-a84a6bb88be6.webp?w=180&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d60cc88b-b88f-752c-0e01-59738fd51dc7.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '5145',
                        'log_code': 'recom_home_20-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=5145',
                        'recommend_code': 'recom_home_20-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=5145'
                      },
                      'product_id': '5145',
                      'product_name': '小方智能摄像1S',
                      'product_brief': '1080P清晰画质，安全看家',
                      'product_price': '99',
                      'product_org_price': '99'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/55f43fdd-13a0-c8d8-231d-1ce2005c7327.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '4998',
                        'log_code': 'recom_home_20-6#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4998',
                        'recommend_code': 'recom_home_20-6#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4998'
                      },
                      'product_id': '4998',
                      'product_name': '小米移动电源高配版',
                      'product_brief': ' 轻薄设计，轻松出行',
                      'product_price': '149',
                      'product_org_price': '149'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dd2e96bce0955ffa8eb1eb2e07d4466a.jpg',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '6512',
                        'log_code': 'recom_home_20-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6512',
                        'recommend_code': 'recom_home_20-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6512'
                      },
                      'show_price_qi': true,
                      'product_id': '6512',
                      'product_name': '8H 乳胶弹簧静音床垫',
                      'product_brief': '健康每一处  床垫会呼吸',
                      'product_price': '1599',
                      'product_org_price': '1599'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ba8a0314-ec20-aa9d-2f0b-cd1e75caabfb.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '5184',
                        'log_code': 'recom_home_20-8#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=5184',
                        'recommend_code': 'recom_home_20-8#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=5184'
                      },
                      'product_id': '5184',
                      'product_name': '小米无人机4K版',
                      'product_brief': '探索触手可及的新视角',
                      'product_price': '2999',
                      'product_org_price': '2999'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 7035,
                      'ad_position_id': 295,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5a29bc877f69cb762e91876faed8c5dd.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5a29bc877f69cb762e91876faed8c5dd.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000089',
                        'log_code': '31waphomecells_auto_fill001031#t=ad&page=home&act=product&pid=10000089&page_id=26&bid=3000178.1&adp=295&adm=7035'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 6904,
                      'ad_position_id': 231,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/730d6659715e31a85f9c6f0c1cfdd83c.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/730d6659715e31a85f9c6f0c1cfdd83c.jpg',
                      'img_url_color': '#CECACB',
                      'action': {
                        'type': 'product',
                        'path': '7798',
                        'log_code': '31waphomecells_auto_fill001035#t=ad&page=home&act=product&pid=7601&page_id=26&bid=3000180.1&adp=231&adm=5602'
                      },
                      'path_type': 'image',
                      'category_key': 'home-660h-newproduct'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'stat': '3row_2col',
                'body': {
                  'line_color': '#ffffff',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee08ac8a83e9ebefffc0d416146523cb.jpg',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '7918',
                        'log_code': 'recom_home_25-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7918',
                        'recommend_code': 'recom_home_25-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7918'
                      },
                      'product_id': '7918',
                      'product_name': '飞利浦智睿筒灯 可调色温版',
                      'product_brief': '冷暖随心调',
                      'product_price': '59',
                      'product_org_price': '59',
                      'product_tag': '//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eba04c67bc142de7c709e665ff093b48.jpg',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '7773',
                        'log_code': 'recom_home_25-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7773',
                        'recommend_code': 'recom_home_25-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7773'
                      },
                      'product_id': '7773',
                      'product_name': '米兔积木矿山卡车',
                      'product_brief': '小零件，拼接出大乐趣',
                      'product_price': '99',
                      'product_org_price': '99',
                      'product_tag': '//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e46f3ec2-8537-b2b6-3590-196e98fa44f7.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '7621',
                        'log_code': 'recom_home_25-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7621',
                        'recommend_code': 'recom_home_25-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7621'
                      },
                      'show_price_qi': true,
                      'product_id': '7621',
                      'product_name': 'Amazfit Cor手环',
                      'product_brief': '彩色IPS触摸屏，50米游泳防水',
                      'product_price': '299',
                      'product_org_price': '299'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3aa32e67e9a65793709b00ba82ec90a.jpg',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '7817',
                        'log_code': 'recom_home_25-6#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7817',
                        'recommend_code': 'recom_home_25-6#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7817'
                      },
                      'product_id': '7817',
                      'product_name': '小米双单元半入耳式耳机',
                      'product_brief': '半入耳式舒适佩戴',
                      'product_price': '69',
                      'product_org_price': '69',
                      'product_tag': '//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'stat': '3row_2col',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4900b70b3ffd893d6c130f0b741fa6f1.jpg',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '7840',
                        'log_code': 'recom_home_25-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7840',
                        'recommend_code': 'recom_home_25-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=7840'
                      },
                      'product_id': '7840',
                      'product_name': '小米蓝牙项圈耳机',
                      'product_brief': '时尚外观，挂在脖子上的好耳机',
                      'product_price': '299',
                      'product_org_price': '299',
                      'product_tag': '//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4fa5c0ad-2d52-2ac4-0095-05108a580310.webp',
                      'img_percent': 0.5,
                      'action': {
                        'type': 'product',
                        'path': '6125',
                        'log_code': 'recom_home_25-8#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6125',
                        'recommend_code': 'recom_home_25-8#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6125'
                      },
                      'product_id': '6125',
                      'product_name': '米家wiha螺丝刀套装',
                      'product_brief': '满足大多数日常所需',
                      'product_price': '99',
                      'product_org_price': '99'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#cecece',
                  'line_height': '2'
                }
              },
              {
                'view_type': 'list_action_title',
                'block_id': '3000183',
                'body': {
                  'items': [
                    {
                      'action_title': '更多新品',
                      'action': {
                        'type': 'channel',
                        'path': '1852',
                        'log_code': '31waphomelist_action_title001038#t=normal&page=home&act=other&page_id=26&bid=3000183.1'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 6422,
                      'ad_position_id': 926,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9a4f4bc5a282dd6e19c29f56981792fc.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9a4f4bc5a282dd6e19c29f56981792fc.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000070',
                        'log_code': '31waphomecells_auto_fill001040#t=ad&page=home&act=product&pid=10000070&page_id=26&bid=3000185.1&adp=926&adm=6422'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 4450,
                      'ad_position_id': 232,
                      'img_url': '//i8.mifile.cn/v1/a1/bfe9376f-bf5e-0d0e-72cc-db01c6b14777.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/bfe9376f-bf5e-0d0e-72cc-db01c6b14777.webp',
                      'img_url_color': '#E0DCD4',
                      'action': {
                        'type': 'product',
                        'path': '6419',
                        'log_code': '31waphomecells_auto_fill001044#t=ad&page=home&act=product&pid=4348&page_id=26&bid=3000187.1&adp=232&adm=614'
                      },
                      'path_type': 'image',
                      'category_key': 'home-660h-smart'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'stat': 'three_cross',
                'body': {
                  'line_color': '#ffffff',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_one_type2',
                'stat': 'three_cross',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/0518c80c-a1a5-af45-0898-a4e07b3d5a9f.webp',
                      'img_percent': 1,
                      'action': {
                        'type': 'product',
                        'path': '6334',
                        'log_code': 'recom_home_31-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6334',
                        'recommend_code': 'recom_home_31-2#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6334'
                      },
                      'product_id': '6334',
                      'product_name': '小米AI音箱',
                      'product_brief': '能播音乐、讲故事、查路况、设闹钟，还能控制智能设备',
                      'product_price': '299',
                      'product_org_price': '299'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_one_type3',
                'stat': 'three_cross',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/81aed22a-ec72-e3ac-1016-f03dbd595e41.webp',
                      'img_percent': 1,
                      'action': {
                        'type': 'product',
                        'path': '6377',
                        'log_code': 'recom_home_31-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6377',
                        'recommend_code': 'recom_home_31-3#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=6377'
                      },
                      'product_id': '6377',
                      'product_name': '小米运动蓝牙耳机mini ',
                      'product_brief': '佩戴舒适，不易脱落',
                      'product_price': '169',
                      'product_org_price': '169'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_one_type2',
                'stat': 'three_cross',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a4c8c780-acbd-23c7-6ae2-f1abe5e5d34d.webp',
                      'img_percent': 1,
                      'action': {
                        'type': 'product',
                        'path': '4913',
                        'log_code': 'recom_home_31-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4913',
                        'recommend_code': 'recom_home_31-4#eid=13:0:0:0:0:0:0:0:0:0&page=home&pid=4913'
                      },
                      'product_id': '4913',
                      'product_name': 'WiFi放大器 2',
                      'product_brief': '速率翻倍，覆盖无忧，适配市面主流路由器',
                      'product_price': '42',
                      'product_org_price': '49'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#cecece',
                  'line_height': '2'
                }
              },
              {
                'view_type': 'list_action_title',
                'block_id': '3053774',
                'body': {
                  'items': [
                    {
                      'action_title': '更多米家智能产品',
                      'action': {
                        'type': 'channel',
                        'path': '1415',
                        'log_code': '31waphomelist_action_title001047#t=normal&page=home&act=other&page_id=26&bid=3053774.1'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 6110,
                      'ad_position_id': 931,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0a326dab04c5f27e6f518b31e7c845b7.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0a326dab04c5f27e6f518b31e7c845b7.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000079',
                        'log_code': '31waphomecells_auto_fill001049#t=ad&page=home&act=product&pid=10000079&page_id=26&bid=3000194.1&adp=931&adm=6110'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 440,
                  'items': [
                    {
                      'w': 720,
                      'h': 440,
                      'material_id': 4177,
                      'ad_position_id': 1469,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/61c262b21d800b8fb09ef325f2aea7d9.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/61c262b21d800b8fb09ef325f2aea7d9.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6222',
                        'log_code': '31waphomecells_auto_fill001051#t=ad&page=home&act=product&pid=6222&page_id=26&bid=3053444.1&adp=1469&adm=4177'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c2428d05-c3d0-31c6-830d-feaf22326813.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c2428d05-c3d0-31c6-830d-feaf22326813.webp',
                      'img_url_color': '#CEADA7',
                      'action': {
                        'type': 'product',
                        'path': '7575',
                        'log_code': '31waphomelist_two_type1001053#t=product&page=home&act=other&page_id=26&bid=3059878.1&pid=7575'
                      },
                      'product_id': '7575',
                      'product_name': '小米电视4A 50英寸',
                      'product_brief': '4K HDR，人工智能语音系统',
                      'product_price': '1999.00',
                      'product_org_price': '2199.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ff90f0af-29a3-dead-9fc1-4455ff3eb17b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ff90f0af-29a3-dead-9fc1-4455ff3eb17b.webp',
                      'img_url_color': '#9BB0CB',
                      'action': {
                        'type': 'product',
                        'path': '6634',
                        'log_code': '31waphomelist_two_type1002053#t=product&page=home&act=other&page_id=26&bid=3059878.2&pid=6634'
                      },
                      'product_id': '6634',
                      'product_name': '小米电视4A 55英寸',
                      'product_brief': '4K HDR，64位处理器',
                      'product_price': '2599.00',
                      'product_org_price': '2799.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fae2b26cdb8a025d83ace2a971b82d7d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fae2b26cdb8a025d83ace2a971b82d7d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7574',
                        'log_code': '31waphomelist_two_type1001054#t=product&page=home&act=other&page_id=26&bid=3061507.1&pid=7574'
                      },
                      'product_id': '7574',
                      'product_name': '小米电视4A 40英寸',
                      'product_brief': 'FHD全高清屏，四核处理器',
                      'product_price': '1399.00',
                      'product_org_price': '1599.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/203d1299-970a-f100-3f76-65177ad152ab.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/203d1299-970a-f100-3f76-65177ad152ab.webp',
                      'img_url_color': '#B1A1A7',
                      'action': {
                        'type': 'product',
                        'path': '6632',
                        'log_code': '31waphomelist_two_type1002054#t=product&page=home&act=other&page_id=26&bid=3061507.2&pid=6632'
                      },
                      'product_id': '6632',
                      'product_name': '小米电视4A 43英寸',
                      'product_brief': '全高清 HDR，64位处理器',
                      'product_price': '1599.00',
                      'product_org_price': '1799.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cfe6c89c1d35360beece9b620310a30f.png?w=180&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7350c20f278ee91f505cfd9d7ab85a80.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7350c20f278ee91f505cfd9d7ab85a80.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7598',
                        'log_code': '31waphomelist_two_type1001055#t=product&page=home&act=other&page_id=26&bid=3136374.1&pid=7598'
                      },
                      'product_id': '7598',
                      'product_name': '小米盒子4c',
                      'product_brief': '第4代小米盒子储存，体验双升级',
                      'product_price': '249.00',
                      'product_org_price': '249.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e4c4573b-47fc-4f38-a447-1caf76e12b6c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e4c4573b-47fc-4f38-a447-1caf76e12b6c.webp',
                      'img_url_color': '#E7C3B7',
                      'action': {
                        'type': 'product',
                        'path': '5990',
                        'log_code': '31waphomelist_two_type1002055#t=product&page=home&act=other&page_id=26&bid=3136374.2&pid=5990'
                      },
                      'product_id': '5990',
                      'product_name': '小米盒子3 增强版 ',
                      'product_brief': '高端 4K 网络机顶盒',
                      'product_price': '449.00',
                      'product_org_price': '449.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#cecece',
                  'line_height': '2'
                }
              },
              {
                'view_type': 'list_action_title',
                'block_id': '3000190',
                'body': {
                  'items': [
                    {
                      'action_title': '更多小米电视产品',
                      'action': {
                        'type': 'channel',
                        'path': '3093',
                        'log_code': '31waphomelist_action_title001057#t=normal&page=home&act=other&page_id=26&bid=3000190.1'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 480,
                  'items': [
                    {
                      'w': 358,
                      'h': 480,
                      'material_id': 41,
                      'ad_position_id': 227,
                      'img_url': '//i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?bg=C0A491',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?bg=C0A491',
                      'img_url_color': '#C0A491',
                      'action': {
                        'type': 'channel',
                        'path': '32',
                        'log_code': '31waphomecells_auto_fill001059#t=ad&page=home&act=other&page_id=26&bid=3000196.1&adp=227&adm=41'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 362,
                      'w': 358,
                      'h': 480,
                      'material_id': 132,
                      'ad_position_id': 228,
                      'img_url': '//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579.webp?bg=E8D6BB',
                      'img_url_color': '#E8D6BB',
                      'action': {
                        'type': 'channel',
                        'path': '30',
                        'log_code': '31waphomecells_auto_fill002059#t=ad&page=home&act=other&page_id=26&bid=3000196.2&adp=228&adm=132'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 480,
                  'items': [
                    {
                      'w': 358,
                      'h': 480,
                      'material_id': 2961,
                      'ad_position_id': 291,
                      'img_url': '//i8.mifile.cn/v1/a1/1a8f5c31-f50c-5be0-3df0-f2c5c839e345.webp?bg=94979F',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/1a8f5c31-f50c-5be0-3df0-f2c5c839e345.webp?bg=94979F',
                      'img_url_color': '#94979F',
                      'action': {
                        'type': 'channel',
                        'path': '2555',
                        'log_code': '31waphomecells_auto_fill001061#t=ad&page=home&act=other&page_id=26&bid=3000198.1&adp=291&adm=2961'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 362,
                      'w': 358,
                      'h': 480,
                      'material_id': 44,
                      'ad_position_id': 292,
                      'img_url': '//i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp?bg=9BB5C4',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp?bg=9BB5C4',
                      'img_url_color': '#9BB5C4',
                      'action': {
                        'type': 'channel',
                        'path': '34',
                        'log_code': '31waphomecells_auto_fill002061#t=ad&page=home&act=other&page_id=26&bid=3000198.2&adp=292&adm=44'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '6'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 480,
                  'items': [
                    {
                      'w': 358,
                      'h': 480,
                      'material_id': 45,
                      'ad_position_id': 293,
                      'img_url': '//i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp?bg=D9D8C3',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp?bg=D9D8C3',
                      'img_url_color': '#D9D8C3',
                      'action': {
                        'type': 'channel',
                        'path': '36',
                        'log_code': '31waphomecells_auto_fill001063#t=ad&page=home&act=other&page_id=26&bid=3000200.1&adp=293&adm=45'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 362,
                      'w': 358,
                      'h': 480,
                      'material_id': 454,
                      'ad_position_id': 294,
                      'img_url': '//i8.mifile.cn/v1/a1/d55778b9-7144-2d36-1450-694b8a47b9db.webp?bg=ACB5C8',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d55778b9-7144-2d36-1450-694b8a47b9db.webp?bg=ACB5C8',
                      'img_url_color': '#ACB5C8',
                      'action': {
                        'type': 'channel',
                        'path': '1415',
                        'log_code': '31waphomecells_auto_fill002063#t=ad&page=home&act=other&page_id=26&bid=3000200.2&adp=294&adm=454'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 7115,
                      'ad_position_id': 1352,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9158d0148b5ffdd07612d7b14e7889c2.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9158d0148b5ffdd07612d7b14e7889c2.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7574',
                        'log_code': '31waphomecells_auto_fill001067#t=ad&page=home&act=product&pid=7574&page_id=26&bid=3038946.1&adp=1352&adm=7115'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              }
            ],
            'seo': {
              'title': '小米商城-小米官方网站，小米手机、红米手机正品专卖',
              'keywords': '小米,小米官网,小米手机,小米官网首页,小米商城',
              'description': '小米商城直营小米公司旗下所有产品，囊括小米手机、红米手机、智能硬件及小米生活周边，同时提供小米客户服务及售后支持。'
            }
          },
          'default_type': 'home',
          'default_id': 0
        },
        'main2': {
          'tabs': [
            {
              'name': '推荐',
              'page_type': 'home',
              'page_id': 0,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '手机',
              'page_type': 'tab',
              'page_id': 1864,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '智能',
              'page_type': 'tab',
              'page_id': 1860,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '电视',
              'page_type': 'tab',
              'page_id': 3094,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '电脑',
              'page_type': 'tab',
              'page_id': 1865,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '全面屏',
              'page_type': 'tab',
              'page_id': 3257,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '生活周边',
              'page_type': 'tab',
              'page_id': 1861,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            },
            {
              'name': '盒子',
              'page_type': 'tab',
              'page_id': 2567,
              'is_default': false,
              'word_selected_color': '#ed5b00',
              'word_unselected_color': '#747474',
              'bg_img': '',
              'bg_img_webp': ''
            }
          ],
          'intelligent': {
            'header': {},
            'sections': [
              {
                'view_type': 'gallery',
                'body': {
                  'items': [
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 7027,
                      'ad_position_id': 1003,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfed7fcfad1e78c7cd7b7e697ffabe08.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfed7fcfad1e78c7cd7b7e697ffabe08.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'url',
                        'path': 'https://s1.mi.com/pages/b0c7ae2316c7e8214fd659e4bc8a0dea/index.html?needValidHost=false&client_id=180100031058&masid=17409.0336',
                        'log_code': '311860waptabgallery001001#t=ad&page=tab&act=webview&page_id=1860&bid=3000504.1&adp=1003&adm=7027'
                      }
                    },
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 3141,
                      'ad_position_id': 1004,
                      'img_url': '//i8.mifile.cn/v1/a1/51458a1d-3a81-d242-40f3-dac90b47fa0b.webp?bg=BEDDDC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/51458a1d-3a81-d242-40f3-dac90b47fa0b.webp?bg=BEDDDC',
                      'img_url_color': '#BEDDDC',
                      'action': {
                        'type': 'product',
                        'path': '4348',
                        'log_code': '311860waptabgallery002001#t=ad&page=tab&act=product&pid=4348&page_id=1860&bid=3000504.2&adp=1004&adm=3141'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 152,
                  'items': [
                    {
                      'w': 144,
                      'h': 152,
                      'material_id': 7065,
                      'ad_position_id': 2199,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9eb2a4d9ab3d829dfef2e65121427125.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9eb2a4d9ab3d829dfef2e65121427125.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '5582',
                        'log_code': '311860waptabcells_auto_fill001002#t=ad&page=tab&act=other&page_id=1860&bid=3212939.1&adp=2199&adm=7065'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 144,
                      'w': 144,
                      'h': 152,
                      'material_id': 7066,
                      'ad_position_id': 2200,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d275a45ec5088ca8074453dd4046010e.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d275a45ec5088ca8074453dd4046010e.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '5583',
                        'log_code': '311860waptabcells_auto_fill002002#t=ad&page=tab&act=other&page_id=1860&bid=3212939.2&adp=2200&adm=7066'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 288,
                      'w': 144,
                      'h': 152,
                      'material_id': 7068,
                      'ad_position_id': 2201,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/230b38442507894b650c7e7f462a959d.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/230b38442507894b650c7e7f462a959d.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '5584',
                        'log_code': '311860waptabcells_auto_fill003002#t=ad&page=tab&act=other&page_id=1860&bid=3212939.3&adp=2201&adm=7068'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 432,
                      'w': 144,
                      'h': 152,
                      'material_id': 7069,
                      'ad_position_id': 2202,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bed53981e3c7df316d2454e59de605ed.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bed53981e3c7df316d2454e59de605ed.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '5585',
                        'log_code': '311860waptabcells_auto_fill004002#t=ad&page=tab&act=other&page_id=1860&bid=3212939.4&adp=2202&adm=7069'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 576,
                      'w': 144,
                      'h': 152,
                      'material_id': 7070,
                      'ad_position_id': 2203,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/437377d58cc45205e2f682604422ccb2.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/437377d58cc45205e2f682604422ccb2.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '5586',
                        'log_code': '311860waptabcells_auto_fill005002#t=ad&page=tab&act=other&page_id=1860&bid=3212939.5&adp=2203&adm=7070'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000512',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001003#t=normal&page=tab&act=other&page_id=1860&bid=3000512.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9fbc4df86c8377ff7411c9942c003fff.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9fbc4df86c8377ff7411c9942c003fff.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '3377',
                        'log_code': '311860waptablist_two_type1001004#t=product&page=tab&act=other&page_id=1860&bid=3214515.1&pid=3377'
                      },
                      'product_id': '3377',
                      'product_name': '小米净水器（厨下式）',
                      'product_brief': '400加仑大流量，隐藏安装',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4.webp',
                      'img_url_color': '#C0D7CB',
                      'action': {
                        'type': 'product',
                        'path': '7229',
                        'log_code': '311860waptablist_two_type1002004#t=product&page=tab&act=other&page_id=1860&bid=3214515.2&pid=7229'
                      },
                      'product_id': '7229',
                      'product_name': '小米米家空气净化器 2S',
                      'product_brief': '经典再升级，好空气看得见',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5f78e5ba-cd16-0c67-3784-c64651596f94.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5f78e5ba-cd16-0c67-3784-c64651596f94.webp',
                      'img_url_color': '#D7E3E0',
                      'action': {
                        'type': 'product',
                        'path': '4348',
                        'log_code': '311860waptablist_two_type1001005#t=product&page=tab&act=other&page_id=1860&bid=3214778.1&pid=4348'
                      },
                      'product_id': '4348',
                      'product_name': '米家扫地机器人',
                      'product_brief': '智商高，扫得干净扫得快',
                      'product_price': '1699.00',
                      'product_org_price': '1699.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/24a3df8b-415c-a7df-96b6-a125d9e91746.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/24a3df8b-415c-a7df-96b6-a125d9e91746.webp',
                      'img_url_color': '#BBB4A5',
                      'action': {
                        'type': 'product',
                        'path': '3486',
                        'log_code': '311860waptablist_two_type1002005#t=product&page=tab&act=other&page_id=1860&bid=3214778.2&pid=3486'
                      },
                      'product_id': '3486',
                      'product_name': '小米路由器3',
                      'product_brief': '全向高增益4天线',
                      'product_price': '119.00',
                      'product_org_price': '149.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b38a95198475d2c8be1e11cab147fc22.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b38a95198475d2c8be1e11cab147fc22.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7797',
                        'log_code': '311860waptablist_two_type1001006#t=product&page=tab&act=other&page_id=1860&bid=3215767.1&pid=7797'
                      },
                      'product_id': '7797',
                      'product_name': '米家电动剃须刀',
                      'product_brief': '剃得干净，剃得快',
                      'product_price': '199.00',
                      'product_org_price': '199.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4d2f583e-e546-289f-3983-fdae7ef36e15.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4d2f583e-e546-289f-3983-fdae7ef36e15.webp',
                      'img_url_color': '#C8CFD1',
                      'action': {
                        'type': 'product',
                        'path': '2774',
                        'log_code': '311860waptablist_two_type1002006#t=product&page=tab&act=other&page_id=1860&bid=3215767.2&pid=2774'
                      },
                      'product_id': '2774',
                      'product_name': '九号平衡车',
                      'product_brief': '年轻人的酷玩具',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/070d67c4-aced-2088-8b64-de02220effbb.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/070d67c4-aced-2088-8b64-de02220effbb.webp',
                      'img_url_color': '#F3F0EF',
                      'action': {
                        'type': 'product',
                        'path': '10000052',
                        'log_code': '311860waptablist_two_type1001007#t=product&page=tab&act=other&page_id=1860&bid=3205348.1&pid=10000052'
                      },
                      'show_price_qi': true,
                      'product_id': '10000052',
                      'product_name': '米家IH电饭煲',
                      'product_brief': '多才多艺的智能电饭煲',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/095e2d20-0a05-1649-7ffe-8f88e3e6c5b5.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/095e2d20-0a05-1649-7ffe-8f88e3e6c5b5.webp',
                      'img_url_color': '#C2DEE8',
                      'action': {
                        'type': 'product',
                        'path': '6103',
                        'log_code': '311860waptablist_two_type1002007#t=product&page=tab&act=other&page_id=1860&bid=3205348.2&pid=6103'
                      },
                      'product_id': '6103',
                      'product_name': '米家声波电动牙刷',
                      'product_brief': '高效动力，刷的干净',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/eebdb591-381c-e0a7-9574-5cb5b47482cf.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/eebdb591-381c-e0a7-9574-5cb5b47482cf.webp',
                      'img_url_color': '#CEDFE7',
                      'action': {
                        'type': 'product',
                        'path': '4984',
                        'log_code': '311860waptablist_two_type1001008#t=product&page=tab&act=other&page_id=1860&bid=3212942.1&pid=4984'
                      },
                      'product_id': '4984',
                      'product_name': '小米米家电动滑板车',
                      'product_brief': '便携折叠，自由穿行',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/3c866ab8-1795-23d6-78ae-eacc29f81cd2.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/3c866ab8-1795-23d6-78ae-eacc29f81cd2.webp',
                      'img_url_color': '#C0D8CB',
                      'action': {
                        'type': 'product',
                        'path': '3674',
                        'log_code': '311860waptablist_two_type1002008#t=product&page=tab&act=other&page_id=1860&bid=3212942.2&pid=3674'
                      },
                      'product_id': '3674',
                      'product_name': '米家iHealth血压计',
                      'product_brief': '爸妈上手就会用的血压计',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp',
                      'img_url_color': '#E0D3C5',
                      'action': {
                        'type': 'product',
                        'path': '3556',
                        'log_code': '311860waptablist_two_type1001009#t=product&page=tab&act=other&page_id=1860&bid=3210760.1&pid=3556'
                      },
                      'product_id': '3556',
                      'product_name': '米家恒温电水壶',
                      'product_brief': '一杯水的温度，刚刚好',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4730b800-80a7-8ce3-1cd6-be442c3f1cad.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4730b800-80a7-8ce3-1cd6-be442c3f1cad.webp',
                      'img_url_color': '#D8E8EF',
                      'action': {
                        'type': 'product',
                        'path': '5297',
                        'log_code': '311860waptablist_two_type1002009#t=product&page=tab&act=other&page_id=1860&bid=3210760.2&pid=5297'
                      },
                      'product_id': '5297',
                      'product_name': '小米体脂秤',
                      'product_brief': '简约纤薄精准掌握身体数据',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6473d20b8c0f0ae9d1453de69eee4296.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6473d20b8c0f0ae9d1453de69eee4296.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7689',
                        'log_code': '311860waptablist_two_type1001010#t=product&page=tab&act=other&page_id=1860&bid=3003275.1&pid=7689'
                      },
                      'product_id': '7689',
                      'product_name': '70迈 智能记录仪',
                      'product_brief': '智能语音控制，1080P全高清',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3.webp',
                      'img_url_color': '#6B6C6E',
                      'action': {
                        'type': 'product',
                        'path': '4942',
                        'log_code': '311860waptablist_two_type1002010#t=product&page=tab&act=other&page_id=1860&bid=3003275.2&pid=4942'
                      },
                      'product_id': '4942',
                      'product_name': '车载空气净化器',
                      'product_brief': '高效净化车内空气',
                      'product_price': '449.00',
                      'product_org_price': '449.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3016861',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/77812e55-c125-d282-15e2-652f1ca10f17.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/77812e55-c125-d282-15e2-652f1ca10f17.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001012#t=normal&page=tab&act=other&page_id=1860&bid=3016861.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/51a3db53009c0ac1dd731b4847573e20.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/51a3db53009c0ac1dd731b4847573e20.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7792',
                        'log_code': '311860waptablist_two_type1001013#t=product&page=tab&act=other&page_id=1860&bid=3005226.1&pid=7792'
                      },
                      'product_id': '7792',
                      'product_name': '小米米家智能后视镜',
                      'product_brief': '能听会说，导航、听歌一句话的事儿',
                      'product_price': '999.00',
                      'product_org_price': '999.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b38a95198475d2c8be1e11cab147fc22.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b38a95198475d2c8be1e11cab147fc22.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7797',
                        'log_code': '311860waptablist_two_type1002013#t=product&page=tab&act=other&page_id=1860&bid=3005226.2&pid=7797'
                      },
                      'product_id': '7797',
                      'product_name': '米家电动剃须刀',
                      'product_brief': '剃得干净，剃得快',
                      'product_price': '199.00',
                      'product_org_price': '199.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3aa32e67e9a65793709b00ba82ec90a.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3aa32e67e9a65793709b00ba82ec90a.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7817',
                        'log_code': '311860waptablist_two_type1001014#t=product&page=tab&act=other&page_id=1860&bid=3215768.1&pid=7817'
                      },
                      'product_id': '7817',
                      'product_name': '小米双单元半入耳式耳机',
                      'product_brief': '半入耳式舒适佩戴',
                      'product_price': '69.00',
                      'product_org_price': '69.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4900b70b3ffd893d6c130f0b741fa6f1.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4900b70b3ffd893d6c130f0b741fa6f1.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7840',
                        'log_code': '311860waptablist_two_type1002014#t=product&page=tab&act=other&page_id=1860&bid=3215768.2&pid=7840'
                      },
                      'product_id': '7840',
                      'product_name': '小米蓝牙项圈耳机',
                      'product_brief': '时尚外观，挂在脖子上的好耳机',
                      'product_price': '299.00',
                      'product_org_price': '299.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/851fab54e50e3f1c57d0e2c646ad1fca.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/851fab54e50e3f1c57d0e2c646ad1fca.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7850',
                        'log_code': '311860waptablist_two_type1001015#t=product&page=tab&act=other&page_id=1860&bid=3207134.1&pid=7850'
                      },
                      'product_id': '7850',
                      'product_name': 'Amazfit智能运动手表2',
                      'product_brief': '陶瓷表圈，50米防水',
                      'product_price': '999.00',
                      'product_org_price': '999.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/16de39fd0c7e526b61c3a5f564c16761.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/16de39fd0c7e526b61c3a5f564c16761.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7806',
                        'log_code': '311860waptablist_two_type1002015#t=product&page=tab&act=other&page_id=1860&bid=3207134.2&pid=7806'
                      },
                      'product_id': '7806',
                      'product_name': '医用电子体温计',
                      'product_brief': '安心测体温，守护家人健康',
                      'product_price': '19.90',
                      'product_org_price': '19.90',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95eed534c497d4a1cdd58bab36eac337.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95eed534c497d4a1cdd58bab36eac337.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7769',
                        'log_code': '311860waptablist_two_type1001016#t=product&page=tab&act=other&page_id=1860&bid=3200593.1&pid=7769'
                      },
                      'product_id': '7769',
                      'product_name': '米兔轨道积木 电动火车套装',
                      'product_brief': '送给孩子的私人游乐场',
                      'product_price': '299.00',
                      'product_org_price': '299.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0aaf1e265c8ff035f3df80b96d86204d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0aaf1e265c8ff035f3df80b96d86204d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7852',
                        'log_code': '311860waptablist_two_type1002016#t=product&page=tab&act=other&page_id=1860&bid=3200593.2&pid=7852'
                      },
                      'product_id': '7852',
                      'product_name': '小米净水器1A（厨下式）',
                      'product_brief': '小身材节省空间，大流量直出纯净水',
                      'product_price': '1499.00',
                      'product_org_price': '1499.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f63b90487131cb73fc1004a527e132e1.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f63b90487131cb73fc1004a527e132e1.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7851',
                        'log_code': '311860waptablist_two_type1001017#t=product&page=tab&act=other&page_id=1860&bid=3000514.1&pid=7851'
                      },
                      'product_id': '7851',
                      'product_name': '米兔遥控小飞机',
                      'product_brief': '迷你酷玩具，溜到飞起',
                      'product_price': '399.00',
                      'product_org_price': '399.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744f6ac43135ec89fbe493491f79394b.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744f6ac43135ec89fbe493491f79394b.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7919',
                        'log_code': '311860waptablist_two_type1002017#t=product&page=tab&act=other&page_id=1860&bid=3000514.2&pid=7919'
                      },
                      'product_id': '7919',
                      'product_name': '小米游戏耳机',
                      'product_brief': '7.1 虚拟环绕立体声引擎',
                      'product_price': '349.00',
                      'product_org_price': '349.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3005588',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/937e2fca-5302-26e1-f8db-604ff36fe9bd.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/937e2fca-5302-26e1-f8db-604ff36fe9bd.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001019#t=normal&page=tab&act=other&page_id=1860&bid=3005588.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c852d659-3840-6c1a-d72f-709f7c0880d5.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c852d659-3840-6c1a-d72f-709f7c0880d5.webp',
                      'img_url_color': '#CBCCCE',
                      'action': {
                        'type': 'product',
                        'path': '6158',
                        'log_code': '311860waptablist_two_type1001020#t=product&page=tab&act=other&page_id=1860&bid=3198992.1&pid=6158'
                      },
                      'product_id': '6158',
                      'product_name': '米家激光投影电视',
                      'product_brief': '超短焦，在家看巨幕',
                      'product_price': '9999.00',
                      'product_org_price': '9999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4.webp',
                      'img_url_color': '#C0D7CB',
                      'action': {
                        'type': 'product',
                        'path': '7229',
                        'log_code': '311860waptablist_two_type1002020#t=product&page=tab&act=other&page_id=1860&bid=3198992.2&pid=7229'
                      },
                      'product_id': '7229',
                      'product_name': '小米米家空气净化器 2S',
                      'product_brief': '经典再升级，好空气看得见',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d48b3788-0518-c515-2c49-3bef35b6f7ca.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d48b3788-0518-c515-2c49-3bef35b6f7ca.webp',
                      'img_url_color': '#DBDBDD',
                      'action': {
                        'type': 'product',
                        'path': '3488',
                        'log_code': '311860waptablist_two_type1001021#t=product&page=tab&act=other&page_id=1860&bid=3198993.1&pid=3488'
                      },
                      'product_id': '3488',
                      'product_name': '米家压力IH电饭煲',
                      'product_brief': '智能烹饪',
                      'product_price': '999.00',
                      'product_org_price': '999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp',
                      'img_url_color': '#E0D3C5',
                      'action': {
                        'type': 'product',
                        'path': '3556',
                        'log_code': '311860waptablist_two_type1002021#t=product&page=tab&act=other&page_id=1860&bid=3198993.2&pid=3556'
                      },
                      'product_id': '3556',
                      'product_name': '米家恒温电水壶',
                      'product_brief': '一杯水的温度，刚刚好',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000533',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d68400903c44558383c8408684e5a53.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d68400903c44558383c8408684e5a53.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001023#t=normal&page=tab&act=other&page_id=1860&bid=3000533.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/3c866ab8-1795-23d6-78ae-eacc29f81cd2.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/3c866ab8-1795-23d6-78ae-eacc29f81cd2.webp',
                      'img_url_color': '#C0D8CB',
                      'action': {
                        'type': 'product',
                        'path': '3674',
                        'log_code': '311860waptablist_two_type1001025#t=product&page=tab&act=other&page_id=1860&bid=3198996.1&pid=3674'
                      },
                      'product_id': '3674',
                      'product_name': '米家iHealth血压计',
                      'product_brief': '爸妈上手就会用的血压计',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4730b800-80a7-8ce3-1cd6-be442c3f1cad.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4730b800-80a7-8ce3-1cd6-be442c3f1cad.webp',
                      'img_url_color': '#D8E8EF',
                      'action': {
                        'type': 'product',
                        'path': '5297',
                        'log_code': '311860waptablist_two_type1002025#t=product&page=tab&act=other&page_id=1860&bid=3198996.2&pid=5297'
                      },
                      'product_id': '5297',
                      'product_name': '小米体脂秤',
                      'product_brief': '简约纤薄精准掌握身体数据',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9462097ca7665ab9638526856415cce.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9462097ca7665ab9638526856415cce.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6443',
                        'log_code': '311860waptablist_two_type1001026#t=product&page=tab&act=other&page_id=1860&bid=3198997.1&pid=6443'
                      },
                      'product_id': '6443',
                      'product_name': '贝医生巴氏牙刷',
                      'product_brief': '进口刷毛，好品质',
                      'product_price': '39.90',
                      'product_org_price': '39.90'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/1d27fc55-8497-84f4-5392-37d66b09368e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/1d27fc55-8497-84f4-5392-37d66b09368e.webp',
                      'img_url_color': '#C9E2EA',
                      'action': {
                        'type': 'product',
                        'path': '6791',
                        'log_code': '311860waptablist_two_type1002026#t=product&page=tab&act=other&page_id=1860&bid=3198997.2&pid=6791'
                      },
                      'product_id': '6791',
                      'product_name': '米家 iHealth 体温计',
                      'product_brief': '一按就能测体温',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000537',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/9ae76cb7-b47d-8820-66ef-6da2149c0224.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/9ae76cb7-b47d-8820-66ef-6da2149c0224.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001028#t=normal&page=tab&act=other&page_id=1860&bid=3000537.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7dce30f0-5a79-a85e-9b2a-c0115928941e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7dce30f0-5a79-a85e-9b2a-c0115928941e.webp',
                      'img_url_color': '#87BAB7',
                      'action': {
                        'type': 'product',
                        'path': '6007',
                        'log_code': '311860waptablist_two_type1001030#t=product&page=tab&act=other&page_id=1860&bid=3198999.1&pid=6007'
                      },
                      'product_id': '6007',
                      'product_name': '米兔儿童电话手表2 ',
                      'product_brief': '6 天使用，10 天待机',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/63a8f185-45d1-779e-b8e5-9884653ca740.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/63a8f185-45d1-779e-b8e5-9884653ca740.webp',
                      'img_url_color': '#E6EBF0',
                      'action': {
                        'type': 'product',
                        'path': '7602',
                        'log_code': '311860waptablist_two_type1002030#t=product&page=tab&act=other&page_id=1860&bid=3198999.2&pid=7602'
                      },
                      'product_id': '7602',
                      'product_name': '米兔故事机mini',
                      'product_brief': '精选故事，小巧便捷',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/da4c2b91-097d-da67-bf48-b37b6a6f793f.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/da4c2b91-097d-da67-bf48-b37b6a6f793f.webp',
                      'img_url_color': '#2F91AE',
                      'action': {
                        'type': 'product',
                        'path': '4674',
                        'log_code': '311860waptablist_two_type1001031#t=product&page=tab&act=other&page_id=1860&bid=3199000.1&pid=4674'
                      },
                      'product_id': '4674',
                      'product_name': '米兔积木机器人',
                      'product_brief': '978个零件，手机智能遥控',
                      'product_price': '499.00',
                      'product_org_price': '499.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/51cb366f-c6a2-5767-053d-633c1c5a5f1c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/51cb366f-c6a2-5767-053d-633c1c5a5f1c.webp',
                      'img_url_color': '#DFE9E8',
                      'action': {
                        'type': 'product',
                        'path': '3807',
                        'log_code': '311860waptablist_two_type1002031#t=product&page=tab&act=other&page_id=1860&bid=3199000.2&pid=3807'
                      },
                      'product_id': '3807',
                      'product_name': '米兔智能故事机 ',
                      'product_brief': '能说会道，宝宝的好玩伴',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3201996',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/672f3f2a-9e31-909f-16b9-53eee01bc21b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/672f3f2a-9e31-909f-16b9-53eee01bc21b.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001033#t=normal&page=tab&act=other&page_id=1860&bid=3201996.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/90003447-2eaf-f268-1ed6-4903be237854.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/90003447-2eaf-f268-1ed6-4903be237854.webp',
                      'img_url_color': '#CACACE',
                      'action': {
                        'type': 'product',
                        'path': '6079',
                        'log_code': '311860waptablist_two_type1001034#t=product&page=tab&act=other&page_id=1860&bid=3201997.1&pid=6079'
                      },
                      'product_id': '6079',
                      'product_name': '九号平衡车 Plus',
                      'product_brief': '一个形影不离的新伙伴',
                      'product_price': '3499.00',
                      'product_org_price': '3499.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/eebdb591-381c-e0a7-9574-5cb5b47482cf.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/eebdb591-381c-e0a7-9574-5cb5b47482cf.webp',
                      'img_url_color': '#CEDFE7',
                      'action': {
                        'type': 'product',
                        'path': '4984',
                        'log_code': '311860waptablist_two_type1002034#t=product&page=tab&act=other&page_id=1860&bid=3201997.2&pid=4984'
                      },
                      'product_id': '4984',
                      'product_name': '小米米家电动滑板车',
                      'product_brief': '便携折叠，自由穿行',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/f093e0a8-e3d8-4fc8-deb7-af25ea3d8663.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f093e0a8-e3d8-4fc8-deb7-af25ea3d8663.webp',
                      'img_url_color': '#B4B5B8',
                      'action': {
                        'type': 'product',
                        'path': '5251',
                        'log_code': '311860waptablist_two_type1001035#t=product&page=tab&act=other&page_id=1860&bid=3201998.1&pid=5251'
                      },
                      'product_id': '5251',
                      'product_name': '米家行车记录仪',
                      'product_brief': '晚上也可以拍清车牌',
                      'product_price': '349.00',
                      'product_org_price': '349.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6473d20b8c0f0ae9d1453de69eee4296.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6473d20b8c0f0ae9d1453de69eee4296.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7689',
                        'log_code': '311860waptablist_two_type1002035#t=product&page=tab&act=other&page_id=1860&bid=3201998.2&pid=7689'
                      },
                      'product_id': '7689',
                      'product_name': '70迈 智能记录仪',
                      'product_brief': '智能语音控制，1080P全高清',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3199006',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/718b0dc661dc132ac1de6ad41d3b26d5.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/718b0dc661dc132ac1de6ad41d3b26d5.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001037#t=normal&page=tab&act=other&page_id=1860&bid=3199006.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/47a5d285-aaf9-60c8-ff84-4b6012d61e76.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/47a5d285-aaf9-60c8-ff84-4b6012d61e76.webp',
                      'img_url_color': '#F3F0E6',
                      'action': {
                        'type': 'product',
                        'path': '7128',
                        'log_code': '311860waptablist_two_type1001038#t=product&page=tab&act=other&page_id=1860&bid=3199007.1&pid=7128'
                      },
                      'product_id': '7128',
                      'product_name': '米家床头灯',
                      'product_brief': '如梦如幻，多彩光世界',
                      'product_price': '249.00',
                      'product_org_price': '249.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b17838bc-dc82-754b-83a7-4c229550c8ef.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b17838bc-dc82-754b-83a7-4c229550c8ef.webp',
                      'img_url_color': '#E9E4CA',
                      'action': {
                        'type': 'product',
                        'path': '5815',
                        'log_code': '311860waptablist_two_type1002038#t=product&page=tab&act=other&page_id=1860&bid=3199007.2&pid=5815'
                      },
                      'product_id': '5815',
                      'product_name': '米家飞利浦智睿吸顶灯',
                      'product_brief': '色温亮度可调',
                      'product_price': '349.00',
                      'product_org_price': '349.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/85a78a1a-ff71-dab4-8e7d-8119dfce798b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/85a78a1a-ff71-dab4-8e7d-8119dfce798b.webp',
                      'img_url_color': '#CDDAE2',
                      'action': {
                        'type': 'product',
                        'path': '5296',
                        'log_code': '311860waptablist_two_type1001039#t=product&page=tab&act=other&page_id=1860&bid=3199008.1&pid=5296'
                      },
                      'product_id': '5296',
                      'product_name': '米家智能摄像机1080P',
                      'product_brief': '随时看护家的温暖与安全',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/58ba30f1-ea54-73a9-5782-1ef2988a2827.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/58ba30f1-ea54-73a9-5782-1ef2988a2827.webp',
                      'img_url_color': '#242126',
                      'action': {
                        'type': 'product',
                        'path': '5468',
                        'log_code': '311860waptablist_two_type1002039#t=product&page=tab&act=other&page_id=1860&bid=3199008.2&pid=5468'
                      },
                      'product_id': '5468',
                      'product_name': '小蚁微单相机M1',
                      'product_brief': '带你去看全世界',
                      'product_price': '2999.00',
                      'product_org_price': '2999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000542',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/b9e007c2-7305-d13c-a743-ac72b0453b03.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b9e007c2-7305-d13c-a743-ac72b0453b03.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001041#t=normal&page=tab&act=other&page_id=1860&bid=3000542.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/497e767f-ee21-4fc5-e55d-3525cc5f6987.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/497e767f-ee21-4fc5-e55d-3525cc5f6987.webp',
                      'img_url_color': '#99B6C4',
                      'action': {
                        'type': 'product',
                        'path': '4792',
                        'log_code': '311860waptablist_two_type1001042#t=product&page=tab&act=other&page_id=1860&bid=3199010.1&pid=4792'
                      },
                      'product_id': '4792',
                      'product_name': '小米圈铁耳机Pro',
                      'product_brief': '好故事，让好声音述说',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/400dbb5f-9fc4-6032-acc6-973dbbb12819.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/400dbb5f-9fc4-6032-acc6-973dbbb12819.webp',
                      'img_url_color': '#D0D7D9',
                      'action': {
                        'type': 'product',
                        'path': '5677',
                        'log_code': '311860waptablist_two_type1002042#t=product&page=tab&act=other&page_id=1860&bid=3199010.2&pid=5677'
                      },
                      'product_id': '5677',
                      'product_name': '降噪耳机Type-C版',
                      'product_brief': '随时随地，安静聆听好声音',
                      'product_price': '299.00',
                      'product_org_price': '299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4cb189d9-5c45-fc85-434e-51ead3520921.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4cb189d9-5c45-fc85-434e-51ead3520921.webp',
                      'img_url_color': '#E2E5EC',
                      'action': {
                        'type': 'product',
                        'path': '4479',
                        'log_code': '311860waptablist_two_type1001043#t=product&page=tab&act=other&page_id=1860&bid=3199011.1&pid=4479'
                      },
                      'product_id': '4479',
                      'product_name': '小米蓝牙耳机青春版',
                      'product_brief': '6.5 克轻巧，高清通话音质',
                      'product_price': '59.00',
                      'product_org_price': '59.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7d4832c2-1089-eb0e-d6c5-40dc156b676a.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7d4832c2-1089-eb0e-d6c5-40dc156b676a.webp',
                      'img_url_color': '#C6B8AE',
                      'action': {
                        'type': 'product',
                        'path': '5023',
                        'log_code': '311860waptablist_two_type1002043#t=product&page=tab&act=other&page_id=1860&bid=3199011.2&pid=5023'
                      },
                      'product_id': '5023',
                      'product_name': '头戴式耳机 升级版',
                      'product_brief': '一样的音乐，不一样的享受',
                      'product_price': '499.00',
                      'product_org_price': '499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3201999',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0b9e487296c5430552b5876af2b06d87.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0b9e487296c5430552b5876af2b06d87.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001045#t=normal&page=tab&act=other&page_id=1860&bid=3201999.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/77570ffe-db66-7a1a-4fb4-63683591794e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/77570ffe-db66-7a1a-4fb4-63683591794e.webp',
                      'img_url_color': '#AE9F9D',
                      'action': {
                        'type': 'product',
                        'path': '6820',
                        'log_code': '311860waptablist_two_type1001046#t=product&page=tab&act=other&page_id=1860&bid=3202000.1&pid=6820'
                      },
                      'product_id': '6820',
                      'product_name': '米动手表青春版',
                      'product_brief': '满足你的各种运动需求',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7a20086a-90ef-31d2-79c3-d2223bafe6c0.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7a20086a-90ef-31d2-79c3-d2223bafe6c0.webp',
                      'img_url_color': '#A47D7A',
                      'action': {
                        'type': 'product',
                        'path': '4786',
                        'log_code': '311860waptablist_two_type1002046#t=product&page=tab&act=other&page_id=1860&bid=3202000.2&pid=4786'
                      },
                      'product_id': '4786',
                      'product_name': 'AMAZFIT运动手表',
                      'product_brief': '扔掉手机去跑步',
                      'product_price': '799.00',
                      'product_org_price': '799.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/808b0701-2d62-73e5-0b16-81da5e8ece7c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/808b0701-2d62-73e5-0b16-81da5e8ece7c.webp',
                      'img_url_color': '#CBDCE4',
                      'action': {
                        'type': 'product',
                        'path': '5299',
                        'log_code': '311860waptablist_two_type1001047#t=product&page=tab&act=other&page_id=1860&bid=3202001.1&pid=5299'
                      },
                      'product_id': '5299',
                      'product_name': '小米米家对讲机',
                      'product_brief': '8天超长待机，FM收音机',
                      'product_price': '249.00',
                      'product_org_price': '249.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e46f3ec2-8537-b2b6-3590-196e98fa44f7.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e46f3ec2-8537-b2b6-3590-196e98fa44f7.webp',
                      'img_url_color': '#9BA3A5',
                      'action': {
                        'type': 'product',
                        'path': '7621',
                        'log_code': '311860waptablist_two_type1002047#t=product&page=tab&act=other&page_id=1860&bid=3202001.2&pid=7621'
                      },
                      'show_price_qi': true,
                      'product_id': '7621',
                      'product_name': 'Amazfit Cor手环',
                      'product_brief': '彩色IPS触摸屏，50米游泳防水',
                      'product_price': '299.00',
                      'product_org_price': '299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3195835',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/79627fb747111c3e01f94cac10d61db3.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/79627fb747111c3e01f94cac10d61db3.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'channel',
                        'path': '1852',
                        'log_code': '311860waptabcells_auto_fill001049#t=normal&page=tab&act=other&page_id=1860&bid=3195835.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3199017',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d7c83a9c-f3e6-130d-d814-a03264228f94.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001051#t=normal&page=tab&act=other&page_id=1860&bid=3199017.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/1795018f-520e-b778-7aa4-f3b497634d7f.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/1795018f-520e-b778-7aa4-f3b497634d7f.webp',
                      'img_url_color': '#D2D1C8',
                      'action': {
                        'type': 'product',
                        'path': '4582',
                        'log_code': '311860waptablist_one_type12001052#t=product&page=tab&act=other&page_id=1860&bid=3094756.1&pid=4582'
                      },
                      'product_id': '4582',
                      'product_name': '小米运动蓝牙耳机',
                      'product_brief': '生活级防水防汗，超长播放，防脱落式耳挂设计',
                      'product_price': '129.00',
                      'product_org_price': '149.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60324e69b027f42da14b8eac7d68a6e3.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60324e69b027f42da14b8eac7d68a6e3.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6419',
                        'log_code': '311860waptablist_two_type1001053#t=product&page=tab&act=other&page_id=1860&bid=3003295.1&pid=6419'
                      },
                      'product_id': '6419',
                      'product_name': '米家电水壶 ',
                      'product_brief': '一杯水，是一家人的安心',
                      'product_price': '99.00',
                      'product_org_price': '99.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d48b3788-0518-c515-2c49-3bef35b6f7ca.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d48b3788-0518-c515-2c49-3bef35b6f7ca.webp',
                      'img_url_color': '#DBDBDD',
                      'action': {
                        'type': 'product',
                        'path': '3488',
                        'log_code': '311860waptablist_two_type1002053#t=product&page=tab&act=other&page_id=1860&bid=3003295.2&pid=3488'
                      },
                      'product_id': '3488',
                      'product_name': '米家压力IH电饭煲',
                      'product_brief': '智能烹饪',
                      'product_price': '999.00',
                      'product_org_price': '999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4a7e8fe9-c796-d456-0018-061996cb799f.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4a7e8fe9-c796-d456-0018-061996cb799f.webp',
                      'img_url_color': '#BEC0BF',
                      'action': {
                        'type': 'product',
                        'path': '6067',
                        'log_code': '311860waptablist_two_type1001054#t=product&page=tab&act=other&page_id=1860&bid=3166598.1&pid=6067'
                      },
                      'product_id': '6067',
                      'product_name': '70迈智能后视镜',
                      'product_brief': '大屏大视野，看得更清晰',
                      'product_price': '1299.00',
                      'product_org_price': '1299.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9462097ca7665ab9638526856415cce.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9462097ca7665ab9638526856415cce.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6443',
                        'log_code': '311860waptablist_two_type1002054#t=product&page=tab&act=other&page_id=1860&bid=3166598.2&pid=6443'
                      },
                      'product_id': '6443',
                      'product_name': '贝医生巴氏牙刷',
                      'product_brief': '进口刷毛，好品质',
                      'product_price': '39.90',
                      'product_org_price': '39.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a8c1e4b1-4771-1cdf-65a1-4418ec2073f7.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a8c1e4b1-4771-1cdf-65a1-4418ec2073f7.webp',
                      'img_url_color': '#B7D3E1',
                      'action': {
                        'type': 'product',
                        'path': '5180',
                        'log_code': '311860waptablist_two_type1001055#t=product&page=tab&act=other&page_id=1860&bid=3001881.1&pid=5180'
                      },
                      'product_id': '5180',
                      'product_name': '米家插线板长线版',
                      'product_brief': '极简设计，轻松便捷',
                      'product_price': '59.00',
                      'product_org_price': '59.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4d85f7fc-e567-3fb4-9535-f10848f81d67.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4d85f7fc-e567-3fb4-9535-f10848f81d67.webp',
                      'img_url_color': '#C3CDB0',
                      'action': {
                        'type': 'product',
                        'path': '5516',
                        'log_code': '311860waptablist_two_type1002055#t=product&page=tab&act=other&page_id=1860&bid=3001881.2&pid=5516'
                      },
                      'product_id': '5516',
                      'product_name': '方盒子蓝牙音箱2',
                      'product_brief': '延续经典好声音',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a5ad390d84546f0e8724b045c3204603.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a5ad390d84546f0e8724b045c3204603.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7522',
                        'log_code': '311860waptablist_two_type1001056#t=product&page=tab&act=other&page_id=1860&bid=3136140.1&pid=7522'
                      },
                      'product_id': '7522',
                      'product_name': '米家空气净化器MAX',
                      'product_brief': '适用大面积，先进静音技术',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/058dd3ce-e8d2-678d-ed48-7c412b202eb6.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/058dd3ce-e8d2-678d-ed48-7c412b202eb6.webp',
                      'img_url_color': '#D7D7D7',
                      'action': {
                        'type': 'product',
                        'path': '4108',
                        'log_code': '311860waptablist_two_type1002056#t=product&page=tab&act=other&page_id=1860&bid=3136140.2&pid=4108'
                      },
                      'product_id': '4108',
                      'product_name': '小米路由器 3C',
                      'product_brief': '一款更轻快的好路由',
                      'product_price': '79.00',
                      'product_org_price': '99.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/57912412-70d9-515c-6a6f-1b22cb5ed93e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/57912412-70d9-515c-6a6f-1b22cb5ed93e.webp',
                      'img_url_color': '#B2C2CB',
                      'action': {
                        'type': 'product',
                        'path': '5663',
                        'log_code': '311860waptablist_two_type1001057#t=product&page=tab&act=other&page_id=1860&bid=3199018.1&pid=5663'
                      },
                      'product_id': '5663',
                      'product_name': '小米路由器Pro',
                      'product_brief': '全新一代智能家庭中心',
                      'product_price': '459.00',
                      'product_org_price': '499.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/2f258afa-bf3c-e02f-54ce-e490a922ffae.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/2f258afa-bf3c-e02f-54ce-e490a922ffae.webp',
                      'img_url_color': '#C3CFDB',
                      'action': {
                        'type': 'product',
                        'path': '7092',
                        'log_code': '311860waptablist_two_type1002057#t=product&page=tab&act=other&page_id=1860&bid=3199018.2&pid=7092'
                      },
                      'product_id': '7092',
                      'product_name': '小米USB充电器快充版',
                      'product_brief': '安卓、苹果设备均可使用',
                      'product_price': '29.90',
                      'product_org_price': '29.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90920c654bdbe2e47ed5ed01634c2c77.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90920c654bdbe2e47ed5ed01634c2c77.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '5942',
                        'log_code': '311860waptablist_two_type1001058#t=product&page=tab&act=other&page_id=1860&bid=3199019.1&pid=5942'
                      },
                      'product_id': '5942',
                      'product_name': '小米车载充电器快充版',
                      'product_brief': '让爱车成为移动充电站',
                      'product_price': '69.00',
                      'product_org_price': '69.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ead828c6fe4487f2f2926ed5b3f8c644.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ead828c6fe4487f2f2926ed5b3f8c644.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7714',
                        'log_code': '311860waptablist_two_type1002058#t=product&page=tab&act=other&page_id=1860&bid=3199019.2&pid=7714'
                      },
                      'product_id': '7714',
                      'product_name': '小米USB-C数据线 编织线版 100cm',
                      'product_brief': '高强度纤维编织线体',
                      'product_price': '19.90',
                      'product_org_price': '19.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/de51d28e-45db-bb4a-bf6c-58e9ee46585f.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/de51d28e-45db-bb4a-bf6c-58e9ee46585f.webp',
                      'img_url_color': '#F1F1F1',
                      'action': {
                        'type': 'product',
                        'path': '4944',
                        'log_code': '311860waptablist_two_type1001059#t=product&page=tab&act=other&page_id=1860&bid=3199020.1&pid=4944'
                      },
                      'product_id': '4944',
                      'product_name': '二合一数据线100cm',
                      'product_brief': '支持快充，安全保护',
                      'product_price': '24.90',
                      'product_org_price': '24.90'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb.webp',
                      'img_url_color': '#EBEBE8',
                      'action': {
                        'type': 'product',
                        'path': '6825',
                        'log_code': '311860waptablist_two_type1002059#t=product&page=tab&act=other&page_id=1860&bid=3199020.2&pid=6825'
                      },
                      'product_id': '6825',
                      'product_name': 'USB Type C数据线',
                      'product_brief': '快速充电，稳定传输',
                      'product_price': '16.90',
                      'product_org_price': '16.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/44f2d298-35cc-dac9-fda6-e680c20aeda4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/44f2d298-35cc-dac9-fda6-e680c20aeda4.webp',
                      'img_url_color': '#99A0A3',
                      'action': {
                        'type': 'product',
                        'path': '7129',
                        'log_code': '311860waptablist_two_type1001060#t=product&page=tab&act=other&page_id=1860&bid=3199021.1&pid=7129'
                      },
                      'product_id': '7129',
                      'product_name': '米家便携电动剃须刀',
                      'product_brief': '男人必备的第二把剃须刀',
                      'product_price': '179.00',
                      'product_org_price': '179.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5c46b47c-c837-1476-99c2-83d9b8b09213.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5c46b47c-c837-1476-99c2-83d9b8b09213.webp',
                      'img_url_color': '#B8BABE',
                      'action': {
                        'type': 'product',
                        'path': '7607',
                        'log_code': '311860waptablist_two_type1002060#t=product&page=tab&act=other&page_id=1860&bid=3199021.2&pid=7607'
                      },
                      'product_id': '7607',
                      'product_name': '小米移动电源2 (5000mAh版)',
                      'product_brief': '锂聚合物电芯，轻巧便捷',
                      'product_price': '49.00',
                      'product_org_price': '49.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c6019250-b731-698a-691f-d7291605c869.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c6019250-b731-698a-691f-d7291605c869.webp',
                      'img_url_color': '#E4E6EB',
                      'action': {
                        'type': 'product',
                        'path': '1945',
                        'log_code': '311860waptablist_two_type1001061#t=product&page=tab&act=other&page_id=1860&bid=3199022.1&pid=1945'
                      },
                      'product_id': '1945',
                      'product_name': '小米体重秤',
                      'product_brief': '高精度压力传感器',
                      'product_price': '99.00',
                      'product_org_price': '99.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e9a953e9-cbd7-d846-a012-da2910396800.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e9a953e9-cbd7-d846-a012-da2910396800.webp',
                      'img_url_color': '#E4EBED',
                      'action': {
                        'type': 'product',
                        'path': '6271',
                        'log_code': '311860waptablist_two_type1002061#t=product&page=tab&act=other&page_id=1860&bid=3199022.2&pid=6271'
                      },
                      'product_id': '6271',
                      'product_name': '小米随身手电筒',
                      'product_brief': '11挡亮度轻松切换',
                      'product_price': '79.00',
                      'product_org_price': '79.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/2b6f208f-f412-d469-cfea-34a3e27ad7b4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/2b6f208f-f412-d469-cfea-34a3e27ad7b4.webp',
                      'img_url_color': '#D6E7EE',
                      'action': {
                        'type': 'product',
                        'path': '5148',
                        'log_code': '311860waptablist_two_type1001062#t=product&page=tab&act=other&page_id=1860&bid=3199023.1&pid=5148'
                      },
                      'product_id': '5148',
                      'product_name': '小米插线板',
                      'product_brief': '3个USB充电口，支持快充',
                      'product_price': '49.00',
                      'product_org_price': '49.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7b7f1799-a566-184d-e803-beceb80c2639.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7b7f1799-a566-184d-e803-beceb80c2639.webp',
                      'img_url_color': '#D9D9D8',
                      'action': {
                        'type': 'product',
                        'path': '5857',
                        'log_code': '311860waptablist_two_type1002062#t=product&page=tab&act=other&page_id=1860&bid=3199023.2&pid=5857'
                      },
                      'product_id': '5857',
                      'product_name': '小米插线板 5孔位',
                      'product_brief': '多重安全保护',
                      'product_price': '39.00',
                      'product_org_price': '39.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c41b12f06fc0d8b61b34f20ac46be4dd.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c41b12f06fc0d8b61b34f20ac46be4dd.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7592',
                        'log_code': '311860waptablist_two_type1001063#t=product&page=tab&act=other&page_id=1860&bid=3199024.1&pid=7592'
                      },
                      'product_id': '7592',
                      'product_name': '米家二位转换器（含2口USB 2A快充）',
                      'product_brief': '双国标组合插孔，双USB充电口，过载保护',
                      'product_price': '44.90',
                      'product_org_price': '44.90'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/6fdf339f-e6bc-814a-0c2c-0922ebe63acb.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/6fdf339f-e6bc-814a-0c2c-0922ebe63acb.webp',
                      'img_url_color': '#EAE8E7',
                      'action': {
                        'type': 'product',
                        'path': '2894',
                        'log_code': '311860waptablist_two_type1002063#t=product&page=tab&act=other&page_id=1860&bid=3199024.2&pid=2894'
                      },
                      'product_id': '2894',
                      'product_name': 'Amazfit手环',
                      'product_brief': '科技与时尚的完美结合',
                      'product_price': '299.00',
                      'product_org_price': '299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f6d20f44a7502cde1b71ead01abd8c7.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f6d20f44a7502cde1b71ead01abd8c7.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7713',
                        'log_code': '311860waptablist_two_type1001064#t=product&page=tab&act=other&page_id=1860&bid=3199025.1&pid=7713'
                      },
                      'product_id': '7713',
                      'product_name': '小米USB充电器60W快充版（6口）',
                      'product_brief': '6口输出，USB-C输出接口',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90920c654bdbe2e47ed5ed01634c2c77.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90920c654bdbe2e47ed5ed01634c2c77.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '5942',
                        'log_code': '311860waptablist_two_type1002064#t=product&page=tab&act=other&page_id=1860&bid=3199025.2&pid=5942'
                      },
                      'product_id': '5942',
                      'product_name': '小米车载充电器快充版',
                      'product_brief': '让爱车成为移动充电站',
                      'product_price': '69.00',
                      'product_org_price': '69.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000523',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9ac63f857282845550bdbf0d816e74d.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9ac63f857282845550bdbf0d816e74d.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001066#t=normal&page=tab&act=other&page_id=1860&bid=3000523.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/bf81ff04-bcb4-dd32-fe50-5f65b5b0ae9d.webp?bg=6C6C6F',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/bf81ff04-bcb4-dd32-fe50-5f65b5b0ae9d.webp?bg=6C6C6F',
                      'img_url_color': '#6C6C6F',
                      'action': {
                        'type': 'product',
                        'path': '5663',
                        'log_code': '311860waptablist_one_type12001067#t=product&page=tab&act=other&page_id=1860&bid=3000524.1&pid=5663'
                      },
                      'product_id': '5663',
                      'product_name': '小米路由器Pro',
                      'product_brief': '全新一代智能家庭中心',
                      'product_price': '459.00',
                      'product_org_price': '499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/f7e52cd7-16e5-857a-34dd-0a7ad13c1842.webp?bg=E0E0E0',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f7e52cd7-16e5-857a-34dd-0a7ad13c1842.webp?bg=E0E0E0',
                      'img_url_color': '#E0E0E0',
                      'action': {
                        'type': 'product',
                        'path': '5825',
                        'log_code': '311860waptablist_two_type1001068#t=product&page=tab&act=other&page_id=1860&bid=3005586.1&pid=5825'
                      },
                      'product_id': '5825',
                      'product_name': '小米路由器 3G',
                      'product_brief': '双核双千兆，上网很快',
                      'product_price': '249.00',
                      'product_org_price': '249.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/058dd3ce-e8d2-678d-ed48-7c412b202eb6.webp?bg=D7D7D7',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/058dd3ce-e8d2-678d-ed48-7c412b202eb6.webp?bg=D7D7D7',
                      'img_url_color': '#D7D7D7',
                      'action': {
                        'type': 'product',
                        'path': '4108',
                        'log_code': '311860waptablist_two_type1002068#t=product&page=tab&act=other&page_id=1860&bid=3005586.2&pid=4108'
                      },
                      'product_id': '4108',
                      'product_name': '小米路由器 3C',
                      'product_brief': '一款更轻快的好路由',
                      'product_price': '79.00',
                      'product_org_price': '99.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/60a35f39-6e7d-c00f-1e37-3de9de50afcf.webp?bg=C6E5E5',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/60a35f39-6e7d-c00f-1e37-3de9de50afcf.webp?bg=C6E5E5',
                      'img_url_color': '#C6E5E5',
                      'action': {
                        'type': 'product',
                        'path': '6297',
                        'log_code': '311860waptablist_two_type1001069#t=product&page=tab&act=other&page_id=1860&bid=3005587.1&pid=6297'
                      },
                      'product_id': '6297',
                      'product_name': 'WiFi 电力猫（单只版）',
                      'product_brief': '有插座的地方，就有WiFi ',
                      'product_price': '169.00',
                      'product_org_price': '169.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5fcf0769-1485-a856-3ec6-1945c5150968.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5fcf0769-1485-a856-3ec6-1945c5150968.webp',
                      'img_url_color': '#B3B3B3',
                      'action': {
                        'type': 'product',
                        'path': '5433',
                        'log_code': '311860waptablist_two_type1002069#t=product&page=tab&act=other&page_id=1860&bid=3005587.2&pid=5433'
                      },
                      'product_id': '5433',
                      'product_name': '小米路由器HD',
                      'product_brief': '智能家庭中心 内置1TB硬盘',
                      'product_price': '1199.00',
                      'product_org_price': '1299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3000528',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b487835b0611004e6a69af7a1c05b8c4.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b487835b0611004e6a69af7a1c05b8c4.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001071#t=normal&page=tab&act=other&page_id=1860&bid=3000528.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c8f71741-1052-5391-9211-7a12460141ee.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c8f71741-1052-5391-9211-7a12460141ee.webp',
                      'img_url_color': '#C6C6C6',
                      'action': {
                        'type': 'product',
                        'path': '3377',
                        'log_code': '311860waptablist_one_type12001072#t=product&page=tab&act=other&page_id=1860&bid=3000529.1&pid=3377'
                      },
                      'product_id': '3377',
                      'product_name': '小米净水器（厨下式）',
                      'product_brief': '400加仑大流量，RO反渗透直出纯净水',
                      'product_price': '1999.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/1ea1fb37-2da1-ae02-311e-7928a67a5bb0.webp?bg=A8937C',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/1ea1fb37-2da1-ae02-311e-7928a67a5bb0.webp?bg=A8937C',
                      'img_url_color': '#A8937C',
                      'action': {
                        'type': 'product',
                        'path': '3398',
                        'log_code': '311860waptablist_two_type1001074#t=product&page=tab&act=other&page_id=1860&bid=3136141.1&pid=3398'
                      },
                      'product_id': '3398',
                      'product_name': '小米空气净化器 2',
                      'product_brief': '10分钟，房间空气焕然一新',
                      'product_price': '699.00',
                      'product_org_price': '699.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/8ef1164d-e1c5-ed1e-f827-b9a201520586.webp?bg=D5D7DC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/8ef1164d-e1c5-ed1e-f827-b9a201520586.webp?bg=D5D7DC',
                      'img_url_color': '#D5D7DC',
                      'action': {
                        'type': 'product',
                        'path': '4802',
                        'log_code': '311860waptablist_two_type1002074#t=product&page=tab&act=other&page_id=1860&bid=3136141.2&pid=4802'
                      },
                      'product_id': '4802',
                      'product_name': '米家空气净化器Pro',
                      'product_brief': '大空间，快循环',
                      'product_price': '1499.00',
                      'product_org_price': '1499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/8f724466-e13c-8acf-28ed-9ebe26989642.webp?bg=B8D3E1',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/8f724466-e13c-8acf-28ed-9ebe26989642.webp?bg=B8D3E1',
                      'img_url_color': '#B8D3E1',
                      'action': {
                        'type': 'product',
                        'path': '2705',
                        'log_code': '311860waptablist_two_type1001075#t=product&page=tab&act=other&page_id=1860&bid=3005871.1&pid=2705'
                      },
                      'show_price_qi': true,
                      'product_id': '2705',
                      'product_name': '小米净水器滤芯',
                      'product_brief': '按时更换，随时保证饮水品质',
                      'product_price': '59.00',
                      'product_org_price': '59.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5e01f285-c8f9-a49e-7bd3-59d2cce285da.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5e01f285-c8f9-a49e-7bd3-59d2cce285da.webp',
                      'img_url_color': '#A9CAC2',
                      'action': {
                        'type': 'product',
                        'path': '4665',
                        'log_code': '311860waptablist_two_type1002075#t=product&page=tab&act=other&page_id=1860&bid=3005871.2&pid=4665'
                      },
                      'product_id': '4665',
                      'product_name': '空气净化器除甲醛滤芯',
                      'product_brief': '阻挡细菌，有效去除甲醛',
                      'product_price': '169.00',
                      'product_org_price': '169.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3.webp?bg=6B6C6E',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b00cc150-343a-cddd-bc81-5eb466b517c3.webp?bg=6B6C6E',
                      'img_url_color': '#6B6C6E',
                      'action': {
                        'type': 'product',
                        'path': '4942',
                        'log_code': '311860waptablist_two_type1001076#t=product&page=tab&act=other&page_id=1860&bid=3005872.1&pid=4942'
                      },
                      'product_id': '4942',
                      'product_name': '车载空气净化器',
                      'product_brief': '高效净化车内空气',
                      'product_price': '449.00',
                      'product_org_price': '449.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/27f6f296-2f4d-7cb2-e5e1-d20a7e923789.webp?bg=8AA6B6',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/27f6f296-2f4d-7cb2-e5e1-d20a7e923789.webp?bg=8AA6B6',
                      'img_url_color': '#8AA6B6',
                      'action': {
                        'type': 'product',
                        'path': '5471',
                        'log_code': '311860waptablist_two_type1002076#t=product&page=tab&act=other&page_id=1860&bid=3005872.2&pid=5471'
                      },
                      'product_id': '5471',
                      'product_name': '车载空净除甲醛滤芯',
                      'product_brief': '好心情伴随好空气',
                      'product_price': '69.00',
                      'product_org_price': '69.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3180095',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/24f1be74-0c84-15d9-fca0-1c4ee0667862.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/24f1be74-0c84-15d9-fca0-1c4ee0667862.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001078#t=normal&page=tab&act=other&page_id=1860&bid=3180095.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d9c255fa-d88c-72e5-4072-52c515907c86.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d9c255fa-d88c-72e5-4072-52c515907c86.webp',
                      'img_url_color': '#ABA3A1',
                      'action': {
                        'type': 'product',
                        'path': '5818',
                        'log_code': '311860waptablist_one_type12001079#t=product&page=tab&act=other&page_id=1860&bid=3005595.1&pid=5818'
                      },
                      'product_id': '5818',
                      'product_name': '米家智能摄像机云台版',
                      'product_brief': '360° 视角,守护家的每一面',
                      'product_price': '199.00',
                      'product_org_price': '199.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c22af4a7114219e6c0488b820474eedc.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c22af4a7114219e6c0488b820474eedc.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '2723',
                        'log_code': '311860waptablist_two_type1001080#t=product&page=tab&act=other&page_id=1860&bid=3005596.1&pid=2723'
                      },
                      'product_id': '2723',
                      'product_name': '米家小白智能摄像机',
                      'product_brief': '360° 全景拍摄，红外夜视',
                      'product_price': '399.00',
                      'product_org_price': '399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/63478c28-1971-a8f7-c80a-511e3ed966e8.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/63478c28-1971-a8f7-c80a-511e3ed966e8.webp',
                      'img_url_color': '#D3D9DA',
                      'action': {
                        'type': 'product',
                        'path': '7088',
                        'log_code': '311860waptablist_two_type1002080#t=product&page=tab&act=other&page_id=1860&bid=3005596.2&pid=7088'
                      },
                      'product_id': '7088',
                      'product_name': '小白智能摄像机大众版',
                      'product_brief': '家庭看护小卫士',
                      'product_price': '99.00',
                      'product_org_price': '109.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ec914618-ea89-dabb-2354-1844eb83c1f2.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ec914618-ea89-dabb-2354-1844eb83c1f2.webp',
                      'img_url_color': '#D7D8DA',
                      'action': {
                        'type': 'product',
                        'path': '7160',
                        'log_code': '311860waptablist_two_type1001081#t=product&page=tab&act=other&page_id=1860&bid=3060387.1&pid=7160'
                      },
                      'product_id': '7160',
                      'product_name': '大方智能摄像机',
                      'product_brief': '高清双云台，看家更放心',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d60cc88b-b88f-752c-0e01-59738fd51dc7.webp?bg=DCDCDC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d60cc88b-b88f-752c-0e01-59738fd51dc7.webp?bg=DCDCDC',
                      'img_url_color': '#DCDCDC',
                      'action': {
                        'type': 'product',
                        'path': '5145',
                        'log_code': '311860waptablist_two_type1002081#t=product&page=tab&act=other&page_id=1860&bid=3060387.2&pid=5145'
                      },
                      'product_id': '5145',
                      'product_name': '小方智能摄像1S',
                      'product_brief': '1080P清晰画质，安全看家',
                      'product_price': '99.00',
                      'product_org_price': '99.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a3856ff1-d79e-cdfc-bfe6-fa372289ecb9.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a3856ff1-d79e-cdfc-bfe6-fa372289ecb9.webp',
                      'img_url_color': '#919390',
                      'action': {
                        'type': 'product',
                        'path': '5469',
                        'log_code': '311860waptablist_two_type1001082#t=product&page=tab&act=other&page_id=1860&bid=3005597.1&pid=5469'
                      },
                      'product_id': '5469',
                      'product_name': '米家全景相机套装 ',
                      'product_brief': '旅行运动360°自拍神器',
                      'product_price': '1699.00',
                      'product_org_price': '1699.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/0e41ac7d-0ef3-6045-fe48-09773e8c5fda.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/0e41ac7d-0ef3-6045-fe48-09773e8c5fda.webp',
                      'img_url_color': '#8EBAA9',
                      'action': {
                        'type': 'product',
                        'path': '6526',
                        'log_code': '311860waptablist_two_type1002082#t=product&page=tab&act=other&page_id=1860&bid=3005597.2&pid=6526'
                      },
                      'product_id': '6526',
                      'product_name': '米家小相机',
                      'product_brief': '清晰捕捉美好瞬间',
                      'product_price': '699.00',
                      'product_org_price': '699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/58ba30f1-ea54-73a9-5782-1ef2988a2827.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/58ba30f1-ea54-73a9-5782-1ef2988a2827.webp',
                      'img_url_color': '#242126',
                      'action': {
                        'type': 'product',
                        'path': '5468',
                        'log_code': '311860waptablist_two_type1001083#t=product&page=tab&act=other&page_id=1860&bid=3118319.1&pid=5468'
                      },
                      'product_id': '5468',
                      'product_name': '小蚁微单相机M1',
                      'product_brief': '带你去看全世界',
                      'product_price': '2999.00',
                      'product_org_price': '2999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fb47024e-7f6c-c9fa-41a5-6bb7d97e403c.webp?bg=B98280',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fb47024e-7f6c-c9fa-41a5-6bb7d97e403c.webp?bg=B98280',
                      'img_url_color': '#B98280',
                      'action': {
                        'type': 'product',
                        'path': '5708',
                        'log_code': '311860waptablist_two_type1002083#t=product&page=tab&act=other&page_id=1860&bid=3118319.2&pid=5708'
                      },
                      'product_id': '5708',
                      'product_name': '米家智能家庭套装',
                      'product_brief': '实时感应门窗开关状态',
                      'product_price': '329.00',
                      'product_org_price': '329.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3005606',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/54e8abb99350289287630833146c931a.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/54e8abb99350289287630833146c931a.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'log_code': '311860waptabcells_auto_fill001085#t=normal&page=tab&act=other&page_id=1860&bid=3005606.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d73f379a-dfb3-c388-3669-b2213266faa8.webp?bg=7D7E82',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d73f379a-dfb3-c388-3669-b2213266faa8.webp?bg=7D7E82',
                      'img_url_color': '#7D7E82',
                      'action': {
                        'type': 'product',
                        'path': '1677',
                        'log_code': '311860waptablist_one_type12001086#t=product&page=tab&act=other&page_id=1860&bid=3005607.1&pid=1677'
                      },
                      'product_id': '1677',
                      'product_name': '小米万能遥控器',
                      'product_brief': '家庭智能控制中心',
                      'product_price': '79.00',
                      'product_org_price': '79.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e155b6c3-8610-4bd3-2158-cea74ae33182.webp?bg=EBEDEF',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e155b6c3-8610-4bd3-2158-cea74ae33182.webp?bg=EBEDEF',
                      'img_url_color': '#EBEDEF',
                      'action': {
                        'type': 'product',
                        'path': '4949',
                        'log_code': '311860waptablist_two_type1001087#t=product&page=tab&act=other&page_id=1860&bid=3000535.1&pid=4949'
                      },
                      'product_id': '4949',
                      'product_name': '米家多功能网关',
                      'product_brief': '米家智能配件控制中心',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/35634df6-31b0-d99f-b095-a15f98328070.webp?bg=EFF1F3',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/35634df6-31b0-d99f-b095-a15f98328070.webp?bg=EFF1F3',
                      'img_url_color': '#EFF1F3',
                      'action': {
                        'type': 'product',
                        'path': '5009',
                        'log_code': '311860waptablist_two_type1002087#t=product&page=tab&act=other&page_id=1860&bid=3000535.2&pid=5009'
                      },
                      'product_id': '5009',
                      'product_name': '米家温湿度传感器',
                      'product_brief': '智能联动，改善室内温湿度',
                      'product_price': '49.00',
                      'product_org_price': '49.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7441815c-10e6-8811-d87a-3b7355e8a7e7.webp?bg=EDF0F2',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7441815c-10e6-8811-d87a-3b7355e8a7e7.webp?bg=EDF0F2',
                      'img_url_color': '#EDF0F2',
                      'action': {
                        'type': 'product',
                        'path': '5008',
                        'log_code': '311860waptablist_two_type1001088#t=product&page=tab&act=other&page_id=1860&bid=3004105.1&pid=5008'
                      },
                      'product_id': '5008',
                      'product_name': '米家智能插座（Zigbee版）',
                      'product_brief': '超智能的插座',
                      'product_price': '69.00',
                      'product_org_price': '69.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/13bd4c6106f7cf53a3d779340b180be6.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/13bd4c6106f7cf53a3d779340b180be6.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '5817',
                        'log_code': '311860waptablist_two_type1002088#t=product&page=tab&act=other&page_id=1860&bid=3004105.2&pid=5817'
                      },
                      'product_id': '5817',
                      'product_name': '米家空调伴侣 ',
                      'product_brief': '让传统空调秒变智能',
                      'product_price': '169.00',
                      'product_org_price': '169.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3180099',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/69c23938-105f-722a-de09-ce5f038a0ea8.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/69c23938-105f-722a-de09-ce5f038a0ea8.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'type': 'none',
                        'log_code': '311860waptabcells_auto_fill001090#t=normal&page=tab&act=other&page_id=1860&bid=3180099.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7e46acef-fe30-e366-fd1c-cc380d2e57cc.webp?bg=CFC3BC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7e46acef-fe30-e366-fd1c-cc380d2e57cc.webp?bg=CFC3BC',
                      'img_url_color': '#CFC3BC',
                      'action': {
                        'type': 'product',
                        'path': '6802',
                        'log_code': '311860waptablist_one_type12001091#t=product&page=tab&act=other&page_id=1860&bid=3000547.1&pid=6802'
                      },
                      'product_id': '6802',
                      'product_name': '小米移动电源2C 20000mAh',
                      'product_brief': '双 USB 输出接口，多出一种选择',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7463',
                        'log_code': '311860waptablist_two_type1001092#t=product&page=tab&act=other&page_id=1860&bid=3000548.1&pid=7463'
                      },
                      'product_id': '7463',
                      'product_name': '新小米移动电源2 (10000mAh)',
                      'product_brief': '双向快充，铝合金金属外壳',
                      'product_price': '79.00',
                      'product_org_price': '79.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/55f43fdd-13a0-c8d8-231d-1ce2005c7327.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/55f43fdd-13a0-c8d8-231d-1ce2005c7327.webp',
                      'img_url_color': '#B2B7B7',
                      'action': {
                        'type': 'product',
                        'path': '4998',
                        'log_code': '311860waptablist_two_type1002092#t=product&page=tab&act=other&page_id=1860&bid=3000548.2&pid=4998'
                      },
                      'product_id': '4998',
                      'product_name': '小米移动电源高配版',
                      'product_brief': ' 轻薄设计，轻松出行',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5c46b47c-c837-1476-99c2-83d9b8b09213.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5c46b47c-c837-1476-99c2-83d9b8b09213.webp',
                      'img_url_color': '#B8BABE',
                      'action': {
                        'type': 'product',
                        'path': '7607',
                        'log_code': '311860waptablist_two_type1001093#t=product&page=tab&act=other&page_id=1860&bid=3004107.1&pid=7607'
                      },
                      'product_id': '7607',
                      'product_name': '小米移动电源2 (5000mAh版)',
                      'product_brief': '锂聚合物电芯，轻巧便捷',
                      'product_price': '49.00',
                      'product_org_price': '49.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/0512ce0e-1cdd-801a-6fe4-833041618d2b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/0512ce0e-1cdd-801a-6fe4-833041618d2b.webp',
                      'img_url_color': '#ADBDAD',
                      'action': {
                        'type': 'product',
                        'path': '4085',
                        'log_code': '311860waptablist_two_type1002093#t=product&page=tab&act=other&page_id=1860&bid=3004107.2&pid=4085'
                      },
                      'product_id': '4085',
                      'product_name': '小米移动电源保护套',
                      'product_brief': '高品质有机硅胶，三色可选',
                      'product_price': '19.90',
                      'product_org_price': '19.90'
                    }
                  ]
                }
              }
            ]
          },
          'cellPhone': {
            'header': {},
            'sections': [
              {
                'view_type': 'gallery',
                'body': {
                  'items': [
                    {
                      'w': 720,
                      'h': 360,
                      'material_id': 7221,
                      'ad_position_id': 987,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12bd23e657a9ee41c1553c2fb2df8e2f.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12bd23e657a9ee41c1553c2fb2df8e2f.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000091',
                        'log_code': '311864waptabgallery001001#t=ad&page=tab&act=product&pid=10000091&page_id=1864&bid=3001095.1&adp=987&adm=7221'
                      }
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3130658',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/f084a7ef-7e24-0d17-3c2f-28bf2e2890f2.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f084a7ef-7e24-0d17-3c2f-28bf2e2890f2.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001003#t=normal&page=tab&act=other&page_id=1864&bid=3130658.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53d32c5e55cba00b473b48908c571f02.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53d32c5e55cba00b473b48908c571f02.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000085',
                        'log_code': '311864waptablist_two_type1001004#t=product&page=tab&act=other&page_id=1864&bid=3194977.1&pid=10000085'
                      },
                      'show_price_qi': true,
                      'product_id': '10000085',
                      'product_name': '小米MIX 2S',
                      'product_brief': '骁龙845旗舰处理器，AI双摄',
                      'product_price': '3299.00',
                      'product_org_price': '3299.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000089',
                        'log_code': '311864waptablist_two_type1002004#t=product&page=tab&act=other&page_id=1864&bid=3194977.2&pid=10000089'
                      },
                      'show_price_qi': true,
                      'product_id': '10000089',
                      'product_name': '黑鲨游戏手机 液冷更快',
                      'product_brief': '液冷更快，独显芯片',
                      'product_price': '2999.00',
                      'product_org_price': '2999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3209608',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/801fa2e0-be9c-51e5-6d26-109b6414dc56.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/801fa2e0-be9c-51e5-6d26-109b6414dc56.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001007#t=normal&page=tab&act=other&page_id=1864&bid=3209608.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a5b5ee8a-ac1f-3123-6fb7-3547a5af7b2c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a5b5ee8a-ac1f-3123-6fb7-3547a5af7b2c.webp',
                      'img_url_color': '#BFCACA',
                      'action': {
                        'type': 'product',
                        'path': '7359',
                        'log_code': '311864waptablist_one_type12001008#t=product&page=tab&act=other&page_id=1864&bid=3131842.1&pid=7359'
                      },
                      'btn_txt': '立即购买',
                      'product_id': '7359',
                      'product_name': '红米5 Plus 64GB',
                      'product_brief': '全面屏，4000mAh大电量，前置柔光自拍',
                      'product_price': '1199.00',
                      'product_org_price': '1299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000084',
                        'log_code': '311864waptablist_one_type12001009#t=product&page=tab&act=other&page_id=1864&bid=3118411.1&pid=10000084'
                      },
                      'btn_txt': '立即购买',
                      'show_price_qi': true,
                      'product_id': '10000084',
                      'product_name': '红米Note 5 AI双摄',
                      'product_brief': '骁龙636 八核处理器，AI双摄',
                      'product_price': '1099.00',
                      'product_org_price': '1099.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000070',
                        'log_code': '311864waptablist_two_type1001010#t=product&page=tab&act=other&page_id=1864&bid=3093403.1&pid=10000070'
                      },
                      'btn_txt': '立即购买',
                      'show_price_qi': true,
                      'product_id': '10000070',
                      'product_name': '小米MIX 2',
                      'product_brief': '5.99\'大屏，4轴光学防抖',
                      'product_price': '2799.00',
                      'product_org_price': '3299.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000064',
                        'log_code': '311864waptablist_two_type1002010#t=product&page=tab&act=other&page_id=1864&bid=3093403.2&pid=10000064'
                      },
                      'btn_txt': '立即购买',
                      'product_id': '10000064',
                      'product_name': '小米5X 变焦双摄',
                      'product_brief': '5.5\'大屏轻薄全金属',
                      'product_price': '1299.00',
                      'product_org_price': '1499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_color': '#BFCFDB',
                      'action': {
                        'type': 'product',
                        'path': '10000083',
                        'log_code': '311864waptablist_two_type1001011#t=product&page=tab&act=other&page_id=1864&bid=3215534.1&pid=10000083'
                      },
                      'btn_txt': '立即购买',
                      'show_price_qi': true,
                      'product_id': '10000083',
                      'product_name': '红米5A 轻巧长续航',
                      'product_brief': '轻巧长续航',
                      'product_price': '569.00',
                      'product_org_price': '599.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp',
                      'img_url_color': '#686F76',
                      'action': {
                        'type': 'product',
                        'path': '10000069',
                        'log_code': '311864waptablist_two_type1002011#t=product&page=tab&act=other&page_id=1864&bid=3215534.2&pid=10000069'
                      },
                      'btn_txt': '立即购买',
                      'show_price_qi': true,
                      'product_id': '10000069',
                      'product_name': '小米Note 3  人脸解锁',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '1799.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3209676',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c0ddda856d45ad15b1dce794c0968ee.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c0ddda856d45ad15b1dce794c0968ee.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001013#t=normal&page=tab&act=other&page_id=1864&bid=3209676.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8e01d7ba5d063f896b026e67b9cfee40.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8e01d7ba5d063f896b026e67b9cfee40.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000085',
                        'log_code': '311864waptablist_one_type12001014#t=product&page=tab&act=other&page_id=1864&bid=3215121.1&pid=10000085'
                      },
                      'show_price_qi': true,
                      'product_id': '10000085',
                      'product_name': '小米MIX 2S',
                      'product_brief': '骁龙845 旗舰处理器，AI双摄相机',
                      'product_price': '3299.00',
                      'product_org_price': '3299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/688d838cbedb8b7d962ef93a6eb6e45d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/688d838cbedb8b7d962ef93a6eb6e45d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000091',
                        'log_code': '311864waptablist_one_type12001015#t=product&page=tab&act=other&page_id=1864&bid=3215122.1&pid=10000091'
                      },
                      'show_price_qi': true,
                      'product_id': '10000091',
                      'product_name': '小米6X',
                      'product_brief': '前后2000万像素相机，标配骁龙660AIE处理器',
                      'product_price': '1599.00',
                      'product_org_price': '1599.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000089',
                        'log_code': '311864waptablist_two_type1001016#t=product&page=tab&act=other&page_id=1864&bid=3215123.1&pid=10000089'
                      },
                      'btn_txt': '立即预约',
                      'show_price_qi': true,
                      'product_id': '10000089',
                      'product_name': '黑鲨游戏手机 液冷更快',
                      'product_brief': '液冷更快，独显芯片',
                      'product_price': '2999.00',
                      'product_org_price': '2999.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000084',
                        'log_code': '311864waptablist_two_type1002016#t=product&page=tab&act=other&page_id=1864&bid=3215123.2&pid=10000084'
                      },
                      'btn_txt': '立即购买',
                      'show_price_qi': true,
                      'product_id': '10000084',
                      'product_name': '红米Note 5',
                      'product_brief': '1.4μm大像素 AI双摄',
                      'product_price': '1099.00',
                      'product_org_price': '1099.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3215125',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/b04add22-09d1-c545-41e9-f51adfe455b5.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b04add22-09d1-c545-41e9-f51adfe455b5.webp',
                      'img_url_color': '#F6F6F6',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001019#t=normal&page=tab&act=other&page_id=1864&bid=3215125.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5c03f802-d8f8-fa9f-aca1-c2411e1798e0.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5c03f802-d8f8-fa9f-aca1-c2411e1798e0.webp',
                      'img_url_color': '#BCC6C6',
                      'action': {
                        'type': 'product',
                        'path': '10000080',
                        'log_code': '311864waptablist_one_type12001020#t=product&page=tab&act=other&page_id=1864&bid=3142941.1&pid=10000080'
                      },
                      'show_price_qi': true,
                      'product_id': '10000080',
                      'product_name': '红米5 Plus',
                      'product_brief': '全面屏，4000mAh大电量',
                      'product_price': '949.00',
                      'product_org_price': '999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_color': '#BFCFDB',
                      'action': {
                        'type': 'product',
                        'path': '6874',
                        'log_code': '311864waptablist_two_type1001021#t=product&page=tab&act=other&page_id=1864&bid=3179434.1&pid=6874'
                      },
                      'product_id': '6874',
                      'product_name': '红米5A 16GB',
                      'product_brief': '轻巧长续航',
                      'product_price': '569.00',
                      'product_org_price': '599.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_color': '#BCC3C4',
                      'action': {
                        'type': 'product',
                        'path': '10000079',
                        'log_code': '311864waptablist_two_type1002021#t=product&page=tab&act=other&page_id=1864&bid=3179434.2&pid=10000079'
                      },
                      'show_price_qi': true,
                      'product_id': '10000079',
                      'product_name': '红米5',
                      'product_brief': '12MP旗舰相机，骁龙处理器',
                      'product_price': '799.00',
                      'product_org_price': '799.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_color': '#ECB8B9',
                      'action': {
                        'type': 'product',
                        'path': '6697',
                        'log_code': '311864waptablist_two_type1001022#t=product&page=tab&act=other&page_id=1864&bid=3142786.1&pid=6697'
                      },
                      'product_id': '6697',
                      'product_name': '红米Note 5A 标准版',
                      'product_brief': '5.5\'高清大屏，超长续航',
                      'product_price': '649.00',
                      'product_org_price': '699.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000068',
                        'log_code': '311864waptablist_two_type1002022#t=product&page=tab&act=other&page_id=1864&bid=3142786.2&pid=10000068'
                      },
                      'show_price_qi': true,
                      'product_id': '10000068',
                      'product_name': '红米Note 5A 自拍手机',
                      'product_brief': '1600万像素柔光自拍',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3097593',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1b07aa56df4c532bb9393d5581aff508.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1b07aa56df4c532bb9393d5581aff508.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001024#t=normal&page=tab&act=other&page_id=1864&bid=3097593.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c.webp',
                      'img_url_color': '#7F7E8E',
                      'action': {
                        'type': 'product',
                        'path': '4795',
                        'log_code': '311864waptablist_two_type1001025#t=product&page=tab&act=other&page_id=1864&bid=3133829.1&pid=4795'
                      },
                      'product_id': '4795',
                      'product_name': '红米4A ',
                      'product_brief': '轻盈小巧的长续航手机',
                      'product_price': '549.00',
                      'product_org_price': '599.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_color': '#BFCFDB',
                      'action': {
                        'type': 'product',
                        'path': '6874',
                        'log_code': '311864waptablist_two_type1002025#t=product&page=tab&act=other&page_id=1864&bid=3133829.2&pid=6874'
                      },
                      'product_id': '6874',
                      'product_name': '红米5A 16GB',
                      'product_brief': '轻巧长续航',
                      'product_price': '569.00',
                      'product_org_price': '599.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3133830',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ff788d85571c7114cb8f3ec65e002173.png',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ff788d85571c7114cb8f3ec65e002173.png',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001027#t=normal&page=tab&act=other&page_id=1864&bid=3133830.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/aab3bae1-3589-0fb3-82ed-a74527e4ef86.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/aab3bae1-3589-0fb3-82ed-a74527e4ef86.webp',
                      'img_url_color': '#D9B5B5',
                      'action': {
                        'type': 'product',
                        'path': '6697',
                        'log_code': '311864waptablist_one_type12001028#t=product&page=tab&act=other&page_id=1864&bid=3179415.1&pid=6697'
                      },
                      'product_id': '6697',
                      'product_name': '红米Note 5A ',
                      'product_brief': '5.5\'高清大屏，高通骁龙处理器，超长续航',
                      'product_price': '649.00',
                      'product_org_price': '699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635.webp',
                      'img_url_color': '#DFE0D0',
                      'action': {
                        'type': 'product',
                        'path': '7354',
                        'log_code': '311864waptablist_two_type1001029#t=product&page=tab&act=other&page_id=1864&bid=3179416.1&pid=7354'
                      },
                      'product_id': '7354',
                      'product_name': '红米5 16GB',
                      'product_brief': '千元全面屏，前置柔光自拍',
                      'product_price': '799.00',
                      'product_org_price': '799.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a6e9aa02-9da3-b5aa-2841-8f1cb187505e.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a6e9aa02-9da3-b5aa-2841-8f1cb187505e.webp',
                      'img_url_color': '#93BCB6',
                      'action': {
                        'type': 'product',
                        'path': '7355',
                        'log_code': '311864waptablist_two_type1002029#t=product&page=tab&act=other&page_id=1864&bid=3179416.2&pid=7355'
                      },
                      'product_id': '7355',
                      'product_name': '红米5 3GB+32GB',
                      'product_brief': '千元全面屏，前置柔光自拍',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/91a10982ef5656ada13d3cda4ab741b7.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/91a10982ef5656ada13d3cda4ab741b7.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6458',
                        'log_code': '311864waptablist_two_type1001030#t=product&page=tab&act=other&page_id=1864&bid=3118399.1&pid=6458'
                      },
                      'product_id': '6458',
                      'product_name': '红米Note 5A 自拍手机',
                      'product_brief': '1600万像素柔光自拍',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/6bc9a546-b8d9-e886-e203-e476a405c40c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/6bc9a546-b8d9-e886-e203-e476a405c40c.webp',
                      'img_url_color': '#AEC9C6',
                      'action': {
                        'type': 'product',
                        'path': '7357',
                        'log_code': '311864waptablist_two_type1002030#t=product&page=tab&act=other&page_id=1864&bid=3118399.2&pid=7357'
                      },
                      'product_id': '7357',
                      'product_name': '红米5 Plus 32GB',
                      'product_brief': '全面屏，前置柔光自拍',
                      'product_price': '949.00',
                      'product_org_price': '999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3097598',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/877ab12c-37e1-57db-54d9-2e77bd83daad.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/877ab12c-37e1-57db-54d9-2e77bd83daad.webp',
                      'img_url_color': '#F5F5F5',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001032#t=normal&page=tab&act=other&page_id=1864&bid=3097598.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/273ec6cf75cb260b7c2cdb3b15a4cee9.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/273ec6cf75cb260b7c2cdb3b15a4cee9.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7763',
                        'log_code': '311864waptablist_two_type1001033#t=product&page=tab&act=other&page_id=1864&bid=3193831.1&pid=7763'
                      },
                      'product_id': '7763',
                      'product_name': '红米Note 5 3GB+32GB',
                      'product_brief': '1.4μm大像素 AI 双摄',
                      'product_price': '1099.00',
                      'product_org_price': '1099.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb4a5925027a3ba86ad01feeba40d049.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb4a5925027a3ba86ad01feeba40d049.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7768',
                        'log_code': '311864waptablist_two_type1002033#t=product&page=tab&act=other&page_id=1864&bid=3193831.2&pid=7768'
                      },
                      'product_id': '7768',
                      'product_name': '红米Note 5 4GB+64GB',
                      'product_brief': '1.4μm大像素 AI 双摄',
                      'product_price': '1399.00',
                      'product_org_price': '1399.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp',
                      'img_url_color': '#C9C8B9',
                      'action': {
                        'type': 'product',
                        'path': '7359',
                        'log_code': '311864waptablist_two_type1001034#t=product&page=tab&act=other&page_id=1864&bid=3118401.1&pid=7359'
                      },
                      'product_id': '7359',
                      'product_name': '红米5 Plus 64GB',
                      'product_brief': '全面屏，前置柔光自拍',
                      'product_price': '1199.00',
                      'product_org_price': '1299.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5c473ac1f550495beb76a58172c37d1.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5c473ac1f550495beb76a58172c37d1.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '5782',
                        'log_code': '311864waptablist_two_type1002034#t=product&page=tab&act=other&page_id=1864&bid=3118401.2&pid=5782'
                      },
                      'product_id': '5782',
                      'product_name': '红米Note 4X 浅蓝色',
                      'product_brief': '金属机身，超长续航',
                      'product_price': '1299.00',
                      'product_org_price': '1299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/bd7b0c0e-e329-dd46-a664-6bec31d685f6.webp?bg=AAB7C6',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/bd7b0c0e-e329-dd46-a664-6bec31d685f6.webp?bg=AAB7C6',
                      'img_url_color': '#AAB7C6',
                      'action': {
                        'type': 'product',
                        'path': '6625',
                        'log_code': '311864waptablist_two_type1001035#t=product&page=tab&act=other&page_id=1864&bid=3097600.1&pid=6625'
                      },
                      'product_id': '6625',
                      'product_name': '小米Max 2 32GB',
                      'product_brief': '6.44\'大屏，5300mAh大电量',
                      'product_price': '1399.00',
                      'product_org_price': '1399.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/f0ea0c6b-96b5-c85b-d2b4-e4aeaabea277.webp?bg=AE8D89',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/f0ea0c6b-96b5-c85b-d2b4-e4aeaabea277.webp?bg=AE8D89',
                      'img_url_color': '#AE8D89',
                      'action': {
                        'type': 'product',
                        'path': '6259',
                        'log_code': '311864waptablist_two_type1002035#t=product&page=tab&act=other&page_id=1864&bid=3097600.2&pid=6259'
                      },
                      'product_id': '6259',
                      'product_name': '小米5X 4GB+64GB',
                      'product_brief': '变焦双摄，轻薄全金属 ',
                      'product_price': '1299.00',
                      'product_org_price': '1499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3097602',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/7d974933-2a01-39ce-41d8-a152bbbf444a.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7d974933-2a01-39ce-41d8-a152bbbf444a.webp',
                      'img_url_color': '#F5F5F5',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001037#t=normal&page=tab&act=other&page_id=1864&bid=3097602.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7765',
                        'log_code': '311864waptablist_one_type12001038#t=product&page=tab&act=other&page_id=1864&bid=3193832.1&pid=7765'
                      },
                      'btn_txt': '立即购买',
                      'product_id': '7765',
                      'product_name': '红米Note 5 6GB+64GB',
                      'product_brief': '骁龙636 八核处理器，1.4μm大像素 AI 双摄',
                      'product_price': '1699.00',
                      'product_org_price': '1699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c04d8514-b637-8c4e-8485-ae0e85dc4c19.webp?bg=B0ADA9',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c04d8514-b637-8c4e-8485-ae0e85dc4c19.webp?bg=B0ADA9',
                      'img_url_color': '#B0ADA9',
                      'action': {
                        'type': 'product',
                        'path': '5780',
                        'log_code': '311864waptablist_one_type12001039#t=product&page=tab&act=other&page_id=1864&bid=3097603.1&pid=5780'
                      },
                      'btn_txt': '立即购买',
                      'product_id': '5780',
                      'product_name': '小米Max 2 64GB',
                      'product_brief': '6.44\' 大屏，5300mAh充电宝级的大电量',
                      'product_price': '1499.00',
                      'product_org_price': '1699.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d0b480c7-1965-a94e-06c3-07b3ad5548bf.webp?bg=929C9B',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d0b480c7-1965-a94e-06c3-07b3ad5548bf.webp?bg=929C9B',
                      'img_url_color': '#929C9B',
                      'action': {
                        'type': 'product',
                        'path': '5781',
                        'log_code': '311864waptablist_two_type1001040#t=product&page=tab&act=other&page_id=1864&bid=3097604.1&pid=5781'
                      },
                      'product_id': '5781',
                      'product_name': '小米Max 2 128GB',
                      'product_brief': '6.44\'大屏，5300mAh大电量',
                      'product_price': '1599.00',
                      'product_org_price': '1999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/c4a3cb60-5a5b-1c5b-2c27-f4a463f143ab.webp?bg=7E96AF',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/c4a3cb60-5a5b-1c5b-2c27-f4a463f143ab.webp?bg=7E96AF',
                      'img_url_color': '#7E96AF',
                      'action': {
                        'type': 'product',
                        'path': '7150',
                        'log_code': '311864waptablist_two_type1002040#t=product&page=tab&act=other&page_id=1864&bid=3097604.2&pid=7150'
                      },
                      'product_id': '7150',
                      'product_name': '小米Note 3 4GB+64GB',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '1799.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3097606',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/d50bf133-a0f0-217c-dabf-098dc9551f69.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d50bf133-a0f0-217c-dabf-098dc9551f69.webp',
                      'img_url_color': '#F5F5F5',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001042#t=normal&page=tab&act=other&page_id=1864&bid=3097606.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ad3f4125-9a60-bcf3-05e2-6f34191c021a.webp?bg=5F6569',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ad3f4125-9a60-bcf3-05e2-6f34191c021a.webp?bg=5F6569',
                      'img_url_color': '#5F6569',
                      'action': {
                        'type': 'product',
                        'path': '6703',
                        'log_code': '311864waptablist_two_type1001043#t=product&page=tab&act=other&page_id=1864&bid=3097607.1&pid=6703'
                      },
                      'product_id': '6703',
                      'product_name': '小米Note 3 6GB+64GB',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '1999.00',
                      'product_org_price': '2299.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a09eac36-c1e1-e8b0-5ef7-b5c7e2c2009b.webp?bg=6F7075',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a09eac36-c1e1-e8b0-5ef7-b5c7e2c2009b.webp?bg=6F7075',
                      'img_url_color': '#6F7075',
                      'action': {
                        'type': 'product',
                        'path': '7147',
                        'log_code': '311864waptablist_two_type1002043#t=product&page=tab&act=other&page_id=1864&bid=3097607.2&pid=7147'
                      },
                      'product_id': '7147',
                      'product_name': '小米6',
                      'product_brief': '变焦双摄，拍人更美',
                      'product_price': '2299.00',
                      'product_org_price': '2299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/6669ced8-5009-62a0-cc7b-2ea26c602610.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/6669ced8-5009-62a0-cc7b-2ea26c602610.webp',
                      'img_url_color': '#646A6F',
                      'action': {
                        'type': 'product',
                        'path': '5687',
                        'log_code': '311864waptablist_two_type1001044#t=product&page=tab&act=other&page_id=1864&bid=3097608.1&pid=5687'
                      },
                      'product_id': '5687',
                      'product_name': '小米6 陶瓷尊享版',
                      'product_brief': '变焦双摄，拍人更美',
                      'product_price': '2999.00',
                      'product_org_price': '2999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/2daed8c9-5c8b-6565-72a4-16f467e6cdc6.webp?bg=765859',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/2daed8c9-5c8b-6565-72a4-16f467e6cdc6.webp?bg=765859',
                      'img_url_color': '#765859',
                      'action': {
                        'type': 'product',
                        'path': '6704',
                        'log_code': '311864waptablist_two_type1002044#t=product&page=tab&act=other&page_id=1864&bid=3097608.2&pid=6704'
                      },
                      'show_price_qi': true,
                      'product_id': '6704',
                      'product_name': '小米Note 3 128GB',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '2399.00',
                      'product_org_price': '2599.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3097611',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/a5fecfeb-2265-807d-1a39-79f71367507b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a5fecfeb-2265-807d-1a39-79f71367507b.webp',
                      'img_url_color': '#F8F8F8',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001046#t=normal&page=tab&act=other&page_id=1864&bid=3097611.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/010cd93e-3d15-979b-ff69-14f6e29931ec.webp?bg=9F826B',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/010cd93e-3d15-979b-ff69-14f6e29931ec.webp?bg=9F826B',
                      'img_url_color': '#9F826B',
                      'action': {
                        'type': 'product',
                        'path': '6699',
                        'log_code': '311864waptablist_two_type1001047#t=product&page=tab&act=other&page_id=1864&bid=3097613.1&pid=6699'
                      },
                      'product_id': '6699',
                      'product_name': '小米MIX 2 128GB',
                      'product_brief': '5.99\'全面屏，骁龙835处理器',
                      'product_price': '2999.00',
                      'product_org_price': '3599.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6701',
                        'log_code': '311864waptablist_two_type1002047#t=product&page=tab&act=other&page_id=1864&bid=3097613.2&pid=6701'
                      },
                      'product_id': '6701',
                      'product_name': '小米MIX 2 64GB',
                      'product_brief': '5.99\'全面屏，骁龙835处理器 ',
                      'product_price': '2799.00',
                      'product_org_price': '3299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/33f7d4433f66a72e0a9c0d3f8021f023.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/33f7d4433f66a72e0a9c0d3f8021f023.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7760',
                        'log_code': '311864waptablist_two_type1001048#t=product&page=tab&act=other&page_id=1864&bid=3209678.1&pid=7760'
                      },
                      'product_id': '7760',
                      'product_name': '小米MIX 2S 6GB+64GB',
                      'product_brief': '骁龙845旗舰处理器，AI双摄',
                      'product_price': '3299.00',
                      'product_org_price': '3299.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b1323582161afcc2b12994c3f4157d3.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b1323582161afcc2b12994c3f4157d3.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7762',
                        'log_code': '311864waptablist_two_type1002048#t=product&page=tab&act=other&page_id=1864&bid=3209678.2&pid=7762'
                      },
                      'product_id': '7762',
                      'product_name': '小米MIX 2S 8GB+256GB',
                      'product_brief': '骁龙845旗舰处理器，AI双摄',
                      'product_price': '3999.00',
                      'product_org_price': '3999.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/789e99e4-2355-1cbc-746e-f4d6478f8ed2.webp?bg=C6ABA5',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/789e99e4-2355-1cbc-746e-f4d6478f8ed2.webp?bg=C6ABA5',
                      'img_url_color': '#C6ABA5',
                      'action': {
                        'type': 'product',
                        'path': '7154',
                        'log_code': '311864waptablist_two_type1001049#t=product&page=tab&act=other&page_id=1864&bid=3097614.1&pid=7154'
                      },
                      'product_id': '7154',
                      'product_name': 'MIX 2 全陶瓷尊享版',
                      'product_brief': 'Unibody 全陶瓷',
                      'product_price': '3699.00',
                      'product_org_price': '4699.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/6448a3b5-ac60-6847-6732-dc0acaa83b47.webp?bg=573930',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/6448a3b5-ac60-6847-6732-dc0acaa83b47.webp?bg=573930',
                      'img_url_color': '#573930',
                      'action': {
                        'type': 'product',
                        'path': '7152',
                        'log_code': '311864waptablist_two_type1002049#t=product&page=tab&act=other&page_id=1864&bid=3097614.2&pid=7152'
                      },
                      'product_id': '7152',
                      'product_name': '小米MIX 2 斯塔克限量版',
                      'product_brief': '机身刻有斯塔克签名',
                      'product_price': '4999.00',
                      'product_org_price': '4999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3118268',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/7009e741-50d2-46b2-3aac-8f9871d7880b.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7009e741-50d2-46b2-3aac-8f9871d7880b.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001051#t=normal&page=tab&act=other&page_id=1864&bid=3118268.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6db5e34595cb246d15936e2dc8dcc7d.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000084',
                        'log_code': '311864waptablist_one_type12001052#t=product&page=tab&act=other&page_id=1864&bid=3118269.1&pid=10000084'
                      },
                      'show_price_qi': true,
                      'product_id': '10000084',
                      'product_name': '红米Note 5 AI双摄',
                      'product_brief': '骁龙636 八核处理器，AI双摄',
                      'product_price': '1099.00',
                      'product_org_price': '1099.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e7853ea5-1260-6cb2-91ed-2c539a87db0a.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e7853ea5-1260-6cb2-91ed-2c539a87db0a.webp',
                      'img_url_color': '#BFC3BA',
                      'action': {
                        'type': 'product',
                        'path': '10000080',
                        'log_code': '311864waptablist_two_type1001054#t=product&page=tab&act=other&page_id=1864&bid=3193833.1&pid=10000080'
                      },
                      'show_price_qi': true,
                      'product_id': '10000080',
                      'product_name': '红米5 Plus',
                      'product_brief': '全面屏，4000mAh大电量',
                      'product_price': '949.00',
                      'product_org_price': '999.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31.webp',
                      'img_url_color': '#BCC3C4',
                      'action': {
                        'type': 'product',
                        'path': '10000079',
                        'log_code': '311864waptablist_two_type1002054#t=product&page=tab&act=other&page_id=1864&bid=3193833.2&pid=10000079'
                      },
                      'show_price_qi': true,
                      'product_id': '10000079',
                      'product_name': '红米5',
                      'product_brief': '12MP旗舰相机，骁龙处理器',
                      'product_price': '799.00',
                      'product_org_price': '799.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000068',
                        'log_code': '311864waptablist_two_type1001055#t=product&page=tab&act=other&page_id=1864&bid=3118271.1&pid=10000068'
                      },
                      'show_price_qi': true,
                      'product_id': '10000068',
                      'product_name': '红米Note 5A 自拍手机',
                      'product_brief': '1600万像素柔光自拍',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp',
                      'img_url_color': '#BFCFDB',
                      'action': {
                        'type': 'product',
                        'path': '6874',
                        'log_code': '311864waptablist_two_type1002055#t=product&page=tab&act=other&page_id=1864&bid=3118271.2&pid=6874'
                      },
                      'product_id': '6874',
                      'product_name': '红米5A 16GB',
                      'product_brief': '轻巧长续航',
                      'product_price': '569.00',
                      'product_org_price': '599.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ba0edad3-31af-7c3b-c6cb-b37de5b2f172.webp',
                      'img_url_color': '#ECB8B9',
                      'action': {
                        'type': 'product',
                        'path': '6697',
                        'log_code': '311864waptablist_two_type1001056#t=product&page=tab&act=other&page_id=1864&bid=3118272.1&pid=6697'
                      },
                      'product_id': '6697',
                      'product_name': '红米Note 5A 标准版',
                      'product_brief': '5.5\'高清大屏，超长续航',
                      'product_price': '649.00',
                      'product_org_price': '699.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5c473ac1f550495beb76a58172c37d1.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5c473ac1f550495beb76a58172c37d1.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '5782',
                        'log_code': '311864waptablist_two_type1002056#t=product&page=tab&act=other&page_id=1864&bid=3118272.2&pid=5782'
                      },
                      'product_id': '5782',
                      'product_name': '红米Note 4X 浅蓝色',
                      'product_brief': '金属机身，超长续航',
                      'product_price': '1299.00',
                      'product_org_price': '1299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 1820,
                      'ad_position_id': 333,
                      'img_url': '//i8.mifile.cn/v1/a1/876b7bd2-7a9a-7808-a51b-2610caf62302.webp?bg=DFBDB1',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/876b7bd2-7a9a-7808-a51b-2610caf62302.webp?bg=DFBDB1',
                      'img_url_color': '#DFBDB1',
                      'action': {
                        'type': 'channel',
                        'path': '1892',
                        'log_code': '311864waptabcells_auto_fill001057#t=ad&page=tab&act=other&page_id=1864&bid=3001147.1&adp=333&adm=1820'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3001108',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/93f395ea-5bc4-8807-33d6-4222a3ad4b1c.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/93f395ea-5bc4-8807-33d6-4222a3ad4b1c.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001059#t=normal&page=tab&act=other&page_id=1864&bid=3001108.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d8253068754b8bdfdc7a476792d0594.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d8253068754b8bdfdc7a476792d0594.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000069',
                        'log_code': '311864waptablist_one_type12001060#t=product&page=tab&act=other&page_id=1864&bid=3001109.1&pid=10000069'
                      },
                      'show_price_qi': true,
                      'product_id': '10000069',
                      'product_name': '小米Note 3  人脸解锁',
                      'product_brief': '变焦双摄，1600万美颜自拍',
                      'product_price': '1799.00',
                      'product_org_price': '1999.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type2',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/a9045550-62ca-8372-6b1c-c10c99e3c410.webp?bg=B4BFC7',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/a9045550-62ca-8372-6b1c-c10c99e3c410.webp?bg=B4BFC7',
                      'img_url_color': '#B4BFC7',
                      'action': {
                        'type': 'product',
                        'path': '10000057',
                        'log_code': '311864waptablist_two_type2001061#t=product&page=tab&act=other&page_id=1864&bid=3035930.1&pid=10000057'
                      },
                      'show_price_qi': true,
                      'product_id': '10000057',
                      'product_name': '小米Max 2',
                      'product_price': '1399.00',
                      'product_org_price': '1399.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bd7646c9f68366d5be332b89c3e1102.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bd7646c9f68366d5be332b89c3e1102.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000070',
                        'log_code': '311864waptablist_two_type2002061#t=product&page=tab&act=other&page_id=1864&bid=3035930.2&pid=10000070'
                      },
                      'show_price_qi': true,
                      'product_id': '10000070',
                      'product_name': '小米MIX 2',
                      'product_price': '2799.00',
                      'product_org_price': '3299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type3',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/0c12b67c-591a-ca5d-5631-8639755ae910.webp?bg=BC9E9B',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/0c12b67c-591a-ca5d-5631-8639755ae910.webp?bg=BC9E9B',
                      'img_url_color': '#BC9E9B',
                      'action': {
                        'type': 'product',
                        'path': '10000064',
                        'log_code': '311864waptablist_two_type3001062#t=product&page=tab&act=other&page_id=1864&bid=3005833.1&pid=10000064'
                      },
                      'product_id': '10000064',
                      'product_name': '小米5X 变焦双摄',
                      'product_price': '1299.00',
                      'product_org_price': '1499.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/410efe3e-5144-c87b-4c14-00e5842cfea1.webp?bg=5F6669',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/410efe3e-5144-c87b-4c14-00e5842cfea1.webp?bg=5F6669',
                      'img_url_color': '#5F6669',
                      'action': {
                        'type': 'product',
                        'path': '10000041',
                        'log_code': '311864waptablist_two_type3002062#t=product&page=tab&act=other&page_id=1864&bid=3005833.2&pid=10000041'
                      },
                      'product_id': '10000041',
                      'product_name': '小米6',
                      'product_price': '2299.00',
                      'product_org_price': '2299.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3002827',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/fa525a7f-188b-ce05-5e45-eb1dd0110aef.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fa525a7f-188b-ce05-5e45-eb1dd0110aef.webp',
                      'img_url_color': '#FCFCFC',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001064#t=normal&page=tab&act=other&page_id=1864&bid=3002827.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/7e46acef-fe30-e366-fd1c-cc380d2e57cc.webp?bg=CFC3BC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/7e46acef-fe30-e366-fd1c-cc380d2e57cc.webp?bg=CFC3BC',
                      'img_url_color': '#CFC3BC',
                      'action': {
                        'type': 'product',
                        'path': '6802',
                        'log_code': '311864waptablist_one_type12001065#t=product&page=tab&act=other&page_id=1864&bid=3002828.1&pid=6802'
                      },
                      'product_id': '6802',
                      'product_name': '小米移动电源2C 20000mAh',
                      'product_brief': '双 USB 输出接口，多出一种选择',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7463',
                        'log_code': '311864waptablist_two_type1001066#t=product&page=tab&act=other&page_id=1864&bid=3001120.1&pid=7463'
                      },
                      'product_id': '7463',
                      'product_name': '新小米移动电源2 (10000mAh)',
                      'product_brief': '双向快充，铝合金金属外壳',
                      'product_price': '79.00',
                      'product_org_price': '79.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c41b12f06fc0d8b61b34f20ac46be4dd.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c41b12f06fc0d8b61b34f20ac46be4dd.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7592',
                        'log_code': '311864waptablist_two_type1002066#t=product&page=tab&act=other&page_id=1864&bid=3001120.2&pid=7592'
                      },
                      'product_id': '7592',
                      'product_name': '米家二位转换器（含2口USB 2A快充）',
                      'product_brief': '双国标组合插孔，双USB充电口，过载保护',
                      'product_price': '44.90',
                      'product_org_price': '44.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f6d20f44a7502cde1b71ead01abd8c7.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f6d20f44a7502cde1b71ead01abd8c7.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7713',
                        'log_code': '311864waptablist_two_type1001067#t=product&page=tab&act=other&page_id=1864&bid=3001121.1&pid=7713'
                      },
                      'product_id': '7713',
                      'product_name': '小米USB充电器60W快充版（6口）',
                      'product_brief': '6口输出，USB-C输出接口',
                      'product_price': '129.00',
                      'product_org_price': '129.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb.webp?bg=EBEBE8',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb.webp?bg=EBEBE8',
                      'img_url_color': '#EBEBE8',
                      'action': {
                        'type': 'product',
                        'path': '6825',
                        'log_code': '311864waptablist_two_type1002067#t=product&page=tab&act=other&page_id=1864&bid=3001121.2&pid=6825'
                      },
                      'product_id': '6825',
                      'product_name': 'USB Type C数据线',
                      'product_brief': '快速充电，稳定传输',
                      'product_price': '16.90',
                      'product_org_price': '16.90'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3002823',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/2621311e-82e1-11e6-612a-0d5a271d9b22.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/2621311e-82e1-11e6-612a-0d5a271d9b22.webp',
                      'img_url_color': '#FCFCFC',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001069#t=normal&page=tab&act=other&page_id=1864&bid=3002823.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3974cc3f4f4457df737600ba92e03a1.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3974cc3f4f4457df737600ba92e03a1.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7840',
                        'log_code': '311864waptablist_one_type12001070#t=product&page=tab&act=other&page_id=1864&bid=3002824.1&pid=7840'
                      },
                      'product_id': '7840',
                      'product_name': '小米蓝牙项圈耳机\t',
                      'product_brief': '时尚外观，挂在脖子上的好耳机',
                      'product_price': '299.00',
                      'product_org_price': '299.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/334af598-eb13-31f7-edb8-10da0b7857be.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/334af598-eb13-31f7-edb8-10da0b7857be.webp',
                      'img_url_color': '#C8C3B8',
                      'action': {
                        'type': 'product',
                        'path': '3682',
                        'log_code': '311864waptablist_two_type1001071#t=product&page=tab&act=other&page_id=1864&bid=3004764.1&pid=3682'
                      },
                      'product_id': '3682',
                      'product_name': '小米胶囊耳机',
                      'product_brief': '胶囊式外观亲肤硅胶耳套',
                      'product_price': '69.00',
                      'product_org_price': '69.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/497e767f-ee21-4fc5-e55d-3525cc5f6987.webp?bg=99B6C4',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/497e767f-ee21-4fc5-e55d-3525cc5f6987.webp?bg=99B6C4',
                      'img_url_color': '#99B6C4',
                      'action': {
                        'type': 'product',
                        'path': '4792',
                        'log_code': '311864waptablist_two_type1002071#t=product&page=tab&act=other&page_id=1864&bid=3004764.2&pid=4792'
                      },
                      'product_id': '4792',
                      'product_name': '小米圈铁耳机Pro',
                      'product_brief': '好故事，让好声音述说',
                      'product_price': '149.00',
                      'product_org_price': '149.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3aa32e67e9a65793709b00ba82ec90a.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3aa32e67e9a65793709b00ba82ec90a.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '7817',
                        'log_code': '311864waptablist_two_type1001072#t=product&page=tab&act=other&page_id=1864&bid=3002826.1&pid=7817'
                      },
                      'product_id': '7817',
                      'product_name': '小米双单元半入耳式耳机',
                      'product_brief': '半入耳式舒适佩戴',
                      'product_price': '69.00',
                      'product_org_price': '69.00',
                      'product_tag': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48',
                      'product_tag_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&h=48'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/4cb189d9-5c45-fc85-434e-51ead3520921.webp?bg=E2E5EC',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/4cb189d9-5c45-fc85-434e-51ead3520921.webp?bg=E2E5EC',
                      'img_url_color': '#E2E5EC',
                      'action': {
                        'type': 'product',
                        'path': '4479',
                        'log_code': '311864waptablist_two_type1002072#t=product&page=tab&act=other&page_id=1864&bid=3002826.2&pid=4479'
                      },
                      'product_id': '4479',
                      'product_name': '小米蓝牙耳机青春版',
                      'product_brief': '6.5 克轻巧，高清通话音质',
                      'product_price': '59.00',
                      'product_org_price': '59.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3002821',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/cb18e177-e29f-b156-da26-8397521d32c5.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/cb18e177-e29f-b156-da26-8397521d32c5.webp',
                      'img_url_color': '#FBFBFB',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001074#t=normal&page=tab&act=other&page_id=1864&bid=3002821.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_one_type12',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/82f04ecb-c0d4-77b0-ca49-44df3bed7ec0.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/82f04ecb-c0d4-77b0-ca49-44df3bed7ec0.webp',
                      'img_url_color': '#8C8A90',
                      'action': {
                        'type': 'product',
                        'path': '6823',
                        'log_code': '311864waptablist_one_type12001075#t=product&page=tab&act=other&page_id=1864&bid=3001119.1&pid=6823'
                      },
                      'product_id': '6823',
                      'product_name': '小米MIX 2 硅胶保护套',
                      'product_brief': '始于颜值，忠于品质',
                      'product_price': '49.00',
                      'product_org_price': '69.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/e2e20b51-912f-0b1e-e626-6b2954e67a88.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/e2e20b51-912f-0b1e-e626-6b2954e67a88.webp',
                      'img_url_color': '#98898B',
                      'action': {
                        'type': 'product',
                        'path': '6313',
                        'log_code': '311864waptablist_two_type1001076#t=product&page=tab&act=other&page_id=1864&bid=3002822.1&pid=6313'
                      },
                      'product_id': '6313',
                      'product_name': '小米Note 3 硅胶保护套',
                      'product_brief': '手感，刚刚好',
                      'product_price': '49.00',
                      'product_org_price': '69.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/cb3fa49e-ed44-6690-8dd6-5e87ebcb4b00.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/cb3fa49e-ed44-6690-8dd6-5e87ebcb4b00.webp',
                      'img_url_color': '#A9A6A8',
                      'action': {
                        'type': 'product',
                        'path': '7429',
                        'log_code': '311864waptablist_two_type1002076#t=product&page=tab&act=other&page_id=1864&bid=3002822.2&pid=7429'
                      },
                      'product_id': '7429',
                      'product_name': '红米5 Plus 极简防摔保护套',
                      'product_brief': '舒适手感，抗摔设计，全面贴合',
                      'product_price': '39.00',
                      'product_org_price': '39.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bcefac249a6f95625a95290cab91ab67.jpg',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bcefac249a6f95625a95290cab91ab67.jpg',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '6487',
                        'log_code': '311864waptablist_two_type1001077#t=product&page=tab&act=other&page_id=1864&bid=3002829.1&pid=6487'
                      },
                      'product_id': '6487',
                      'product_name': '红米Note 5A 超薄保护壳',
                      'product_brief': '清凉手感 镂空设计',
                      'product_price': '19.00',
                      'product_org_price': '29.00'
                    },
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/35ce0791-6174-26bd-38b1-35a5d7e02258.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/35ce0791-6174-26bd-38b1-35a5d7e02258.webp',
                      'img_url_color': '#A4B0B7',
                      'action': {
                        'type': 'product',
                        'path': '7324',
                        'log_code': '311864waptablist_two_type1002077#t=product&page=tab&act=other&page_id=1864&bid=3002829.2&pid=7324'
                      },
                      'product_id': '7324',
                      'product_name': '红米5 极简保护套',
                      'product_brief': '时尚简约，手感细腻',
                      'product_price': '29.00',
                      'product_org_price': '29.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3001132',
                'body': {
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/fc3fd8fd-1f75-c502-4aef-f7bf8ac0031a.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fc3fd8fd-1f75-c502-4aef-f7bf8ac0031a.webp',
                      'img_url_color': '#F9F9F9',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001079#t=normal&page=tab&act=other&page_id=1864&bid=3001132.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 513,
                  'items': [
                    {
                      'w': 720,
                      'h': 256,
                      'material_id': 2010,
                      'ad_position_id': 965,
                      'img_url': '//i8.mifile.cn/v1/a1/651c0864-028a-1f07-74f8-335ede23b8c0.webp?bg=B3D5DD',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/651c0864-028a-1f07-74f8-335ede23b8c0.webp?bg=B3D5DD',
                      'img_url_color': '#B3D5DD',
                      'action': {
                        'type': 'url',
                        'path': 'https://service.10046.mi.com/main_home?from=10001&needValidHost=false&defaultTextSize=true',
                        'log_code': '311864waptabcells_auto_fill001080#t=ad&page=tab&act=webview&page_id=1864&bid=3001133.1&adp=965&adm=2010'
                      },
                      'path_type': 'image'
                    },
                    {
                      'y': 256,
                      'w': 360,
                      'h': 257,
                      'material_id': 2008,
                      'ad_position_id': 966,
                      'img_url': '//i8.mifile.cn/v1/a1/fd1aea1c-41d2-d9f6-95e9-ab06ea7161d1.webp?bg=F5C9A2',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fd1aea1c-41d2-d9f6-95e9-ab06ea7161d1.webp?bg=F5C9A2',
                      'img_url_color': '#F5C9A2',
                      'action': {
                        'type': 'product',
                        'path': '6009',
                        'log_code': '311864waptabcells_auto_fill002080#t=ad&page=tab&act=product&pid=6009&page_id=1864&bid=3001133.2&adp=966&adm=2008'
                      },
                      'path_type': 'image'
                    },
                    {
                      'x': 360,
                      'y': 256,
                      'w': 360,
                      'h': 257,
                      'material_id': 6827,
                      'ad_position_id': 967,
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b4e898ed8f29ac2ea8c72aa8e4e8369f.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b4e898ed8f29ac2ea8c72aa8e4e8369f.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'url',
                        'path': 'https://m.10010.com/queen/xiaomi/new-mifans.html?channel=3023',
                        'log_code': '311864waptabcells_auto_fill003080#t=ad&page=tab&act=webview&page_id=1864&bid=3001133.3&adp=967&adm=6827'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'block_id': '3017522',
                'body': {
                  'bg_color': '#ffffff',
                  'w': 720,
                  'h': 80,
                  'items': [
                    {
                      'w': 720,
                      'h': 80,
                      'img_url': '//i8.mifile.cn/v1/a1/ee0c29ee-7efd-5dda-bb3b-5d200f79c259.webp',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/ee0c29ee-7efd-5dda-bb3b-5d200f79c259.webp',
                      'img_url_color': '#F4F4F4',
                      'action': {
                        'type': 'none',
                        'log_code': '311864waptabcells_auto_fill001082#t=normal&page=tab&act=other&page_id=1864&bid=3017522.1'
                      },
                      'path_type': 'image'
                    }
                  ],
                  'recommend_flag': '0'
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp?bg=686F76',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/fc369341-c77e-75d0-bbe8-d6191f2854b4.webp?bg=686F76',
                      'img_url_color': '#686F76',
                      'action': {
                        'type': 'product',
                        'path': '10000069',
                        'log_code': '311864waptablist_two_type1001083#t=product&page=tab&act=other&page_id=1864&bid=3001138.1&pid=10000069'
                      },
                      'show_price_qi': true,
                      'product_id': '10000069',
                      'product_name': '小米Note 3  人脸解锁',
                      'product_brief': '1600万美颜自拍',
                      'product_price': '1799.00',
                      'product_org_price': '1999.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/091753b79e8999f305b1a218258f97fd.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000068',
                        'log_code': '311864waptablist_two_type1002083#t=product&page=tab&act=other&page_id=1864&bid=3001138.2&pid=10000068'
                      },
                      'show_price_qi': true,
                      'product_id': '10000068',
                      'product_name': '红米Note 5A 自拍手机',
                      'product_brief': '1600万像素柔光自拍',
                      'product_price': '899.00',
                      'product_org_price': '899.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'list_two_type1',
                'body': {
                  'items': [
                    {
                      'img_url': '//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70.webp?bg=AFBBC4',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70.webp?bg=AFBBC4',
                      'img_url_color': '#AFBBC4',
                      'action': {
                        'type': 'product',
                        'path': '10000057',
                        'log_code': '311864waptablist_two_type1001084#t=product&page=tab&act=other&page_id=1864&bid=3001139.1&pid=10000057'
                      },
                      'show_price_qi': true,
                      'product_id': '10000057',
                      'product_name': '小米Max 2 大屏大电量',
                      'product_brief': '6.44\'大屏，5300mAh大电量',
                      'product_price': '1399.00',
                      'product_org_price': '1399.00'
                    },
                    {
                      'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg?bg=FFFFFF',
                      'img_url_webp': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5603273010ab9182a1527cfab5cd2a9e.jpg?bg=FFFFFF',
                      'img_url_color': '#FFFFFF',
                      'action': {
                        'type': 'product',
                        'path': '10000064',
                        'log_code': '311864waptablist_two_type1002084#t=product&page=tab&act=other&page_id=1864&bid=3001139.2&pid=10000064'
                      },
                      'product_id': '10000064',
                      'product_name': '小米5X 变焦双摄',
                      'product_brief': '5.5\'大屏轻薄全金属',
                      'product_price': '1299.00',
                      'product_org_price': '1499.00'
                    }
                  ]
                }
              },
              {
                'view_type': 'divider_line',
                'body': {
                  'line_color': '#f5f5f5',
                  'line_height': '24'
                }
              },
              {
                'view_type': 'cells_auto_fill',
                'is_show': 'Y',
                'body': {
                  'w': 720,
                  'h': 280,
                  'items': [
                    {
                      'w': 720,
                      'h': 280,
                      'material_id': 1394,
                      'ad_position_id': 244,
                      'img_url': '//i8.mifile.cn/v1/a1/5d28ad9d-ee74-54f1-0f74-c3dbcf2939a3.webp?bg=EBE2DB',
                      'img_url_webp': '//i8.mifile.cn/v1/a1/5d28ad9d-ee74-54f1-0f74-c3dbcf2939a3.webp?bg=EBE2DB',
                      'img_url_color': '#EBE2DB',
                      'action': {
                        'type': 'url',
                        'path': 'https://s1.mi.com/m/ghd/2015/1124recycling/?channel=m',
                        'log_code': '311864waptabcells_auto_fill001086#t=ad&page=tab&act=webview&page_id=1864&bid=3001135.1&adp=244&adm=1394'
                      },
                      'path_type': 'image'
                    }
                  ]
                }
              }
            ]
          },
          'default_type': 'tab',
          'default_id': 1860
        },
        'result': 'ok'
      },
      tabs: [],
      tabsIndex: 0,
      scrollLeft: 0,
      navIndex: 'navIndex',
      bodys: 'bodys-to-left',
      mianDatas: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    // next(vm => vm.setData(err, post))
    // })
    // console.log(to, from)
    next()
  },
  created () {
    this.getData()
  },
  methods: {
    handTabsItem (item, index, ev) {
      // console.log(item, index)
      if (this.tabsIndex > index) {
        this.bodys = 'bodys-to-right'
      } else if (this.tabsIndex < index) {
        this.bodys = 'bodys-to-left'
      } else {
        return
      }
      this.tabsIndex = index
      let ul = this.$refs[this.navIndex]
      let limitWidth = ul.offsetWidth
      let targetLiLeft = ev.path[1].offsetLeft
      if (targetLiLeft <= limitWidth / 3) {
        ul.scrollLeft = 0
      } else if (targetLiLeft > limitWidth / 3 && targetLiLeft < limitWidth / 2) {
        ul.scrollLeft = limitWidth / 7
      } else if (targetLiLeft >= limitWidth / 2 && targetLiLeft < limitWidth) {
        ul.scrollLeft = limitWidth / 3
      } else {
        ul.scrollRight = 0
      }
    },
    getData () {
      let data = this.ajaxDateJson
      console.log(data)
      this.adjustTabs(data.data.tabs)
      this.mianDatas = data.data.data.sections
    },
    adjustTabs (tabs) {
      this.tabs = tabs
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .container {
    .header {
      position: fixed;
      top: -1px;
      left: 0;
      right: 0;
      z-index: 99;
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
      background: #f2f2f2;
    }
    .app-header-wrapper {
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      background: #f2f2f2;
      color: #666;
      padding: 0;
      &>div {
        display: flex;
      }
      .app-header-item {
        display: block;
        width: .6rem;
        margin: 0 .2rem;
      }
      .logo {
        img {
          width: 80%;
        }
      }
      .app-header-middle {
        flex: 1;
        font-size: .3rem;
      }
      .app-header-title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        border: 1px solid #e5e5e5;
        text-align: left;
        width: 100%;
        color: rgba(0,0,0,.3);
        background-color: #fff;
        border-radius: .04rem;
        i {
          display: block;
          width: .6rem;
          line-height: .6rem;
          /*font-size: 0.4rem;*/
          text-align: center;
        }
      }
      .app-header-right {
        i {
          font-size: 0.4rem;
        }
      }
    }
    .nav {
      overflow-x: auto;
      background: #f2f2f2;
      font-size: 0;
      white-space: nowrap;
      z-index: 2;
      &::-webkit-scrollbar {display:none}
      .nav-item {
        font-size: 0.26rem;
        display: inline-block;
        padding: 0 .25rem;
        color: rgb(116, 116, 116);
        span {
          display: inline-block;
          line-height: 32px;
          border-bottom: 2px solid rgba(237,91,0,0);
          border-color: rgb(242, 242, 242);
        }
        &.active {
          color: rgb(237, 91, 0);
          span {
            border-color: rgb(237, 91, 0);
          }
        }
      }
    }
    .pages-wrap {
      position: relative;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .index-bodys {
      position: absolute;
      top: 82px;
      left: 0;
      right: 0;
      background: #fff;
      background-color: red;
      -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);

      /*left*/
      &.bodys-to-left-enter {
        transform: translate(7.2rem, 0);
      }
      &.bodys-to-left-enter-to {
        transform: translate(0, 0);
      }
      &.bodys-to-left-leave {
        transform: translate(0, 0);
      }
      &.bodys-to-left-leave-to {
        transform: translate(-7.2rem, 0);
      }
      /*right*/
      &.bodys-to-right-enter {
        transform: translate(-7.2rem, 0);
      }
      &.bodys-to-right-enter-to {
        transform: translate(0, 0);
      }
      &.bodys-to-right-leave {
        transform: translate(0, 0);
      }
      &.bodys-to-right-leave-to {
        transform: translate(7.2rem, 0);
      }
    }
  }
</style>
