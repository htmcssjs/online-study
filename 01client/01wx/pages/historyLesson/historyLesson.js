// pages/historyLesson/historyLesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDelete: false,
    text: "编辑",
    text1: "编辑",
    text2: "完成",
    deleteIndex: 0,
    listing: [
      {
        id: 0,
        title: "AP-Riemann Sum",
        image: "https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson5.jpg",
        teacher: ["孙宗义"],
        dataSize: "201.4MB",
        isTap: false,
        url: '../activity/activity',
      },
      {
        id: 1,
        title: "AP-Disk Method",
        image: "https://cmyk-1300160178.cos.ap-chengdu.myqcloud.com/lesson6.jpg",
        teacher: ["孙宗义"],
        dataSize: "254.2MB",
        isTap: false,
        url: '../activity/activity',
      }
    ],
  },

  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../activity/activity',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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