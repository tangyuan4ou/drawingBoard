import pen from './../../utils/pen' 
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
      { mes: '铅笔' },
      { mes: '钢笔' },
      { mes: '各种笔'}
    ],

    //shape
    shapeActive: false,
    shapeData: [
      {mes: '矩形'},
      {mes: '圆形'},
      {mes: '椭圆'}
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
          this._handlePen(this.data.penData, true)
          break;
        case 'penActive':
          this._handlePen(this.data.penData, false)
          break;
        case 'shape':
          this._handlePen(this.data.penData, false)
          this._handleShape(this.data.shapeData, true)
          break;
        case 'shapeActive':
          this._handleShape(this.data.shapeData, false)
          break;
        default:
          break;
      }
    },

    _handlePen(data, isShow) {
      this.setData({ penActive: isShow })
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