//index.js

import pencil from './../../utils/pencil'

Page({

  data: {
    height: '',
    menuArr: [],
    menuActiveIndex: 5,
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

  //工具栏选中
  myHandleMenu(e) {
    let id = e.detail
    switch(id) { 
      case 'pencil':
        this.setData({ menuActiveIndex: 0 })
        pencil.start()
        console.log('pencil')
        break;
      case 'pen':
        this.setData({ menuActiveIndex: 1 })
        break;
      case 'markPen':
        this.setData({ menuActiveIndex: 2 })
        break;
      default:
        break;
    }
  },

  //工具栏的显示隐藏
  onMenuevent(e){
    this.setData({
      menuArr: e.detail.menuData,
      menuShow: e.detail.menuShow
    })
  }

})