// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {},

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {},

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    handleMenu(e) {
      let x = parseInt(e.detail.x)
      console.log(x-50)
      console.log(0 < x - 50 <= 50)
      if ( x - 50 <= 0) {
        console.log('笔')
      } else if (0 < x - 50 <= 50) {
        console.log('形')
      } else { console.log('其他') }
    }
  }
})