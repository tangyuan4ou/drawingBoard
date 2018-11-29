//index.js

Page({

  data: {
    height: '',
    menuArr: [],
    menuShow: false
  },
  onReady() {
    const _this = this
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
    this.setData({
      menuArr: e.detail.menuData,
      menuShow: e.detail.menuShow
    })
  }

})