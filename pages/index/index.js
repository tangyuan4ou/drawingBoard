//index.js

Page({
  data: {
    height: ''
  },
  onReady() {
    var _this = this
    wx.getSystemInfo({
      success(res) {
        let rpxR = 750 / res.windowWidth
        _this.setData({
          height: res.windowHeight * rpxR
        })
      }
    });

    //获得nav组件
    this.nav = this.selectComponent(".nav");
  },
  

})