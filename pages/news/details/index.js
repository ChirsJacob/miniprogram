Page({
  data: {
    model:{},
    loading:true,
  },
  onLoad: function (options) {
    var obj =JSON.parse(decodeURIComponent(options.obj))
    this.setData({
      model:obj
    })
  }
})