// components/Dialog/dialog.js
Component({

  properties: {
    menuArr: {
      type: Array,
      observer(newval, oldval) {
        if ( newval != oldval ) this.setData({ activeIndex: 5 })
      }
    }
  },

  data: {
    activeIndex: 5,
  },

  attached() {
    // console.log(this.data)
  },

  methods: {
    _handleMenu(e) {
      let idStr = e.target.id
      let idArr = idStr.split(' ')

      switch(idArr[0]) { 
        case 'pencil':
          this.setData({ activeIndex: 0 })
          console.log('pencil')
          break;
        case 'pen':
          this.setData({ activeIndex: 1 })
          break;
        case 'markPen':
          this.setData({ activeIndex: 2 })
          break;
        default:
          break;
      }
    }
  }
})