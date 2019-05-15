Page({

  /**
   * 页面的初始数据
   */
  data: {
    // height: '1045rpx',
    classes: [
      {
        img: '',
        subject: '大学有机化学实验',
        title: '--磺基水杨酸合铁组成',
        time: '8:00-10:15',
        place: '东区 ff106'
      },
      {
        img: '',
        subject: '数字电路与逻辑设计',
        title: '--数字系统设计',
        time: '12:10-14:15',
        place: '东区 ff106'
      },
      {
        img: '',
        subject: '数字电路与逻辑设计',
        title: '--示波器使用简介',
        time: '18:10-19:50',
        place: '西区 b122'
      }
    ]
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
    // let clientHeight = wx.getSystemInfoSync().windowHeight > wx.getSystemInfoSync().windowWidth ? wx.getSystemInfoSync().windowHeight * 2 : wx.getSystemInfoSync().windowWidth*2;
    // this.setData({
    //   height: (clientHeight - 111 - 178) + 'rpx'
    // })
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