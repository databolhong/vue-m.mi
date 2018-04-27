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
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 0">
        <p>index0</p>
        <p>index0</p>
        <p>index0</p>
        <p>index0</p>
        <p>index0</p>
      </div>
    </transition>
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 1">
       <p>index1</p>
       <p>index1</p>
       <p>index1</p>
       <p>index1</p>
       <p>index1</p>
      </div>
    </transition>
    <transition :name="bodys">
      <div class="index-bodys" v-show="tabsIndex === 2">
        <p>index2</p>
        <p>index2</p>
        <p>index2</p>
        <p>index2</p>
        <p>index2</p>
      </div>
    </transition>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
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
        'result': 'ok'
      },
      tabs: [],
      tabsIndex: 0,
      scrollLeft: 0,
      navIndex: 'navIndex',
      bodys: 'bodys-to-left'
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
