// index.js
Page({
  data:{
    banner: [
      '/pages/images/banner/banner1.jpg',
      '/pages/images/banner/banner2.jpg',
      '/pages/images/banner/banner3.jpg',
      '/pages/images/banner/banner4.jpg',
    ],
  },
  onLoad: function (options) {
  },
change:function(e){
    var index = e.currentTarget.dataset.id;
    this.setData({
      selected:index
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */

  /**
   * 页面上拉触底事件的处理函数
   */

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
