// pages/leftSlide/leftSlide.js

const App = getApp()

Page({
  data: {
    itemData:[
      {
        no: '001',
        img: '/images/icon1.png',
        name: '二狗子',
        info: '我：hello word ',
        time: '上午12:00',
      },
      {
        no: '001',
        img: '/images/icon2.png',
        name: '订阅号',
        info: '前端开发框架有哪些',
        time: '昨天',
      },
      {
        no: '001',
        img: '/images/icon3.png',
        name: '腾讯新闻',
        info: '北京欢迎您',
        time: '上午 10:00',
      }
    ]
  },
  touchS: function (e) {  // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let itemData = App.Touches.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({ itemData })

  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let itemData = App.Touches.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({ itemData })
  },
  itemDelete: function(e){  // itemDelete
    let itemData = App.Touches.deleteItem(e, this.data.itemData)
    itemData && this.setData({ itemData })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})