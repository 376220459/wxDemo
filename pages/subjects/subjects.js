Page({

  /**
   * 页面的初始数据
   */
  data: {
    // height: '1045rpx',
    weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    currentWeek: 6,
    hiddenWeekList: true,
    weekListPoint: 'http://i2.tiimg.com/684412/e854ac75dd2fe588.png',
    classes: [
      {
        img: 'http://img4.imgtn.bdimg.com/it/u=484763539,264346239&fm=26&gp=0.jpg',
        subject: '大学有机化学实验',
        title: '--磺基水杨酸合铁组成',
        time: '8:00-10:15',
        place: '东区 ff106'
      },
      {
        img: 'http://img4.imgtn.bdimg.com/it/u=3331419931,2711731069&fm=26&gp=0.jpg',
        subject: '数字电路与逻辑设计',
        title: '--数字系统设计',
        time: '12:10-14:15',
        place: '东区 ff106'
      },
      {
        img: 'http://p11.qhimg.com/t01ec15006b2e767e92.jpg',
        subject: '数字电路与逻辑设计',
        title: '--示波器使用简介',
        time: '18:10-19:50',
        place: '西区 b122'
      }
    ],
    iconArr: [
      {
        img: 'http://i1.fuimg.com/684412/11981800d4a994ed.png',
        color: '#5bb8f3'
      },
      {
        img: 'http://i1.fuimg.com/684412/a77f0628f1da6616.png',
        color: ''
      },
      {
        img: 'http://i1.fuimg.com/684412/5ca02d63eb91e4a2.png',
        color: ''
      },
      {
        img: 'http://i1.fuimg.com/684412/98f2506428a6140a.png',
        color: ''
      }
    ]
  },
  changeWeekList() {
    if (this.data.hiddenWeekList == true) {
      this.setData({
        hiddenWeekList: false,
        weekListPoint: 'http://i2.tiimg.com/684412/0c6c57d5fc33c3d9.png'
      })
    } else {
      this.setData({
        hiddenWeekList: true,
        weekListPoint: 'http://i2.tiimg.com/684412/e854ac75dd2fe588.png'
      })
    }
  },
  selectWeek(e){
    this.setData({
      currentWeek: e.target.dataset.item
    });
    this.changeWeekList();
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