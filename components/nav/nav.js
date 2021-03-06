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
  data: {
    menuShow: false,

    //pen
    penActive: false,
    penData: [
      { icon: 'icon-qianbi', id: 'pencil', isPen: 1 },
      { icon: 'icon-gangbi', id: 'pen', isPen: 1 },
      { icon: 'icon-jihaobi', id: 'markPen', isPen: 1 }
    ],

    //shape
    shapeActive: false,
    shapeData: [
      { icon: 'icon-zhixian', id: 'line' },
      { icon: 'icon-xian', id: 'dottedLine' },
      { icon: 'icon-jia', id: 'rectangle' },
      { icon: 'icon-yuanxing', id: 'circular' }
    ]
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    _handleMenu(e) {
      const id = e.target.id
      switch(id) {
        case 'pen':
          this._handleShape(this.data.shapeData, false)
          this.setData({ penActive: true })
          setTimeout(() => {
            this._handlePen(this.data.penData, true)
          }, 200)
          break;
        case 'penActive':
          this._handlePen(this.data.penData, false)
          break;
        case 'shape':
          this._handlePen(this.data.penData, false)
          this.setData({ shapeActive: true })
          setTimeout(() => {
            this._handleShape(this.data.shapeData, true)
          }, 200)
          break;
        case 'shapeActive':
          this._handleShape(this.data.shapeData, false)
          break;
        default:
          break;
      }
    },

    _handlePen(data, isShow) {
      if (!isShow) this.setData({ penActive: isShow })
      let myMenuData = { menuData: data, menuShow: isShow }
      this.triggerEvent('menuevent', myMenuData)
    },
    
    _handleShape(data, isShow) {
      this.setData({ shapeActive: isShow })
      let myMenuData = { menuData: data, menuShow: isShow }
      this.triggerEvent('menuevent', myMenuData)
    }

  }
})