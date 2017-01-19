//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '冉靖，你好',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  goto: function(){
    //console.log("going");
    // navigateTo 不能跳转到tabBar 页面
    wx.switchTab({
      url:"../home/home",
      success:function(){

      }
    })
  }
})
