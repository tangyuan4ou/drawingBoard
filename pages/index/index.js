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
<<<<<<< HEAD
    this.setData({ menuArr: e.detail })
=======
    console.log(this.data.menuArr)
    this.data.menuArr = e.detail
    consloe.log(this.data.menuArr);
    console.log(e.detail)
>>>>>>> 64aed76617e520eb83999b898c28579c41b135ae
  }

})