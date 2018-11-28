
export default {
  date: {
    aa: '1'
  },
  testPen() { 
    console.log(this.date.aa)
    this.date.aa = 22
    console.log(this.date.aa)
    console.log('pen')
  }
}