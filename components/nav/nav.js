
import pen from './../../utils/pen' 
Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    menuArr: [
      {mes: '铅笔'},
      {mes: '钢笔'},
      {mes: '各种笔'},
    ]
  },

  methods: {
    _handleMenu(e) {
      const id = e.target.id
      switch(id) {
        case 'pen':
          let myMenuArr = this.data.menuArr;
          this.triggerEvent('menuevent', myMenuArr, { bubbles: false })
          console.log('pen')
          // console.log(this.selectComponent(".menu"))
          // pen.testPen()
          break;
        case 'xing':
          break;
        default:
          break;
      }
    }
  }
})