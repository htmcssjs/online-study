//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    indexSelect: 0,
    topics: [{
        id: 0,
        title: "AP微积分"
      },
      {
        id: 1,
        title: "AP经济学"
      }, {
        id: 2,
        title: "AP计算机科学"
      }, {
        id: 3,
        title: "AP化学"
      }, {
        id: 4,
        title: "AP物理"
      }, {
        id: 5,
        title: "AP统计学"
      },
    ]
  },
  onLoad: function() {


    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 400;
        that.setData({
          height: buffer
        });
      },
    })

  },
  clickTopItem: function(res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  toExaminationInfor: function() {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
    })
  },
  toActivity: function() {
    wx.navigateTo({
      url: '../activity/activity',
    })
  },
  getRandomColor: function() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }
})