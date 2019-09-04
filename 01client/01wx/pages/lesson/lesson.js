// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://h.hiphotos.baidu.com/image/pic/item/2f738bd4b31c87018e9450642a7f9e2f0708ff16.jpg',
      'http://e.hiphotos.baidu.com/image/pic/item/83025aafa40f4bfb0f815ad60e4f78f0f63618db.jpg',
      'http://f.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f81eae7e5cda81cb38db3dee.jpg'
    ],
    height: '500',
    indexSelect: 0,
    topics: [{
      id: 0,
      title: "精品推荐"
    }, {
      id: 1,
      title: "新手必看"
    }, {
      id: 2,
      title: "C++课程"
    }, {
      id: 3,
      title: "算法课程"
    }, {
      id: 4,
      title: "数学课程"
    }, {
      id: 5,
      title: "python"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 300;
        that.setData({
          height: buffer
        });
      },
    })

  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
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