
export default {
  date: {
    ctx: wx.createCanvasContext('canvas'),
    startX: 0,
    startY: 0
  },
  touchstart(e){
    // wx.canvasGetImageData({
    //   canvasId: "canvas",
    //   x: 0,
    //   y: 0,
    //   width: 300,
    //   height: 300,
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    var ctx = this.date.ctx
    this.date.startX = e.touches[0].x
    this.date.startY = e.touches[0].y
    ctx.setLineWidth(1)
    ctx.setLineCap("round")
    ctx.setStrokeStyle('red')
    // ctx.beginPath()
  },
  touchmove(e){
    var ctx = this.date.ctx
    var x = e.touches[0].x
    var y = e.touches[0].y
    ctx.moveTo(this.date.startX,this.date.startY)
    ctx.lineTo(x,y)
    ctx.stroke()
    this.date.startX = x
    this.date.startY = y
    // ctx.draw(true)
    wx.drawCanvas({
      canvasId: 'canvas',
      reserve: true,
      actions: ctx.getActions()
    })
    // console.log(ctx)
  },
  touchend (){
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.SDKVersion)
      }
    })
  },
  start() { 

  }
}