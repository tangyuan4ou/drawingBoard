//index.js

Page({

  data: {
    height: '',
    menuArr: []
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

  },

  onMenuevent(e){
    this.setData({ menuArr: e.detail })
  }

})