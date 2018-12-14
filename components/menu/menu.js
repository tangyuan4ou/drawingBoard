Component({

  properties: {
    menuArr: {
      type: Array,
      observer(newval, oldval) {
        if ( newval != oldval ) this.setData({ activeIndex: 5 })
      }
    },
    activeIndex: Number
  },

  data: {},

  attached() {
    // console.log(this.data)
  },

  methods: {
    _handleMenu(e) {
      this.triggerEvent("handleMenu", e.target.id)
    }
  }
})