//index.js

Page({

  data: {
    height: '',
    menuArr: [{mes: '铅笔'}]
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
    console.log(this.data.menuArr)
    this.data.menuArr = e.detail
    consloe.log(this.data.menuArr);
    console.log(e.detail)
  }

})