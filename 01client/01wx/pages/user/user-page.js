// pages/02page/02page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: "../../imgs/user/touxiang.jpg",
    userName: "user",
    showModal: false,
    textV: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  changeName:function(){
    let that = this;
    that.setData({
      showModal: true
    })
  },
  back: function () {
    let that = this;
    that.setData({
      showModal: false
    })
  },
  /**
   * 获取input输入值
   */
  newNameInput: function (e) {
    let that = this;
    that.setData({
      textV: e.detail.value
    });
  },
  /**
   * 点击确定按钮获取input值并且关闭弹窗
   */
  ok: function () {
    let that = this; 
    let text = that.textV; 
    that.setData({
      showModal: false,
    });
    that.setData({
      userName: that.data.textV
    })
  },
  chooseImage: function () {

    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      success: function (res) {

        var tempFilePaths = res.tempFilePaths

        that.setData({
          tempFilePaths: tempFilePaths
        });
      }
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