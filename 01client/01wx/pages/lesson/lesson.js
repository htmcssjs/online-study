// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson4.jpg  ',
      'https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson2.jpg  ',
      'https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson3.jpg  ',
      'https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson1.jpg  '
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 400;
        that.setData({
          height: buffer
        });
      },
    })

  },
  toTINspire: function () {
    wx.navigateTo({
      url: '../activity-TINspire/activity',
    })
  },  
  toCross: function () {
    wx.navigateTo({
      url: '../activity-cross/activity',
    })
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../activity/activity',
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
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})