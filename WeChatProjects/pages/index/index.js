//index.js
//获取应用6实例
const app = getApp()
var common = require('../common/common.js')
Page({
 
  data: {
   
    name: 'wechat',
    motto: 'Hello World',
    yjz:'ziqing',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array:[{msg:'1'},{msg:'2'}]
  },
  changeName: function (e) {
    // sent data change to view.
    this.setData({
      name: 'MINA'
    })
   
  },
  changemsg: function()
  {
    this.setData({
      array: [{ msg: '1_1' }, { msg: '2' }]
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //console.log('load hahaha !')
    this.goodbyeMINA()
    this.helloMINA()
  },
  
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  helloMINA: function () {
   
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
  }

})
