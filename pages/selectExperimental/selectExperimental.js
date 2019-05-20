Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconArr: [
      {
        img: 'http://i1.fuimg.com/684412/313515696ae5d9df.png',
        color: ''
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
    ],
    placeholder: 'Multisim数电流水灯设计',
    placeArr: ['博学楼','B教学楼','图书馆'],
    countArr: ['小型(10-20人)', '中型(20-30人)', '大型(30-60人)',],
    timeArr: ['8:00-9:00', '9:00-10:00', '12:00-13:00', '14:00-15:00', '16:00-17:00',],
    subjects: [
      {
        name: 'Multisim数电流水灯设计',
        count: 18,
        time: '4/24 8:00 - 9:00',
        place: '博学楼 ff503',
        selected: true
      },
      {
        name: 'Multisim数电流水灯设计',
        count: 18,
        time: '4/24 8:00 - 9:00',
        place: '博学楼 ff503',
        selected: false
      },
      {
        name: 'Multisim数电流水灯设计',
        count: 18,
        time: '4/24 8:00 - 9:00',
        place: '博学楼 ff503',
        selected: false
      },
      {
        name: 'Multisim数电流水灯设计',
        count: 18,
        time: '4/24 8:00 - 9:00',
        place: '博学楼 ff503',
        selected: false
      },
      {
        name: 'Multisim数电流水灯设计',
        count: 18,
        time: '4/24 8:00 - 9:00',
        place: '博学楼 ff503',
        selected: false
      }
    ]
  },
  goBack(){
    wx.navigateBack();
  },
  slectSubject(e){
    let index = e.currentTarget.dataset.index;
    let data = this.data.subjects[index];
    if(this.data.subjects[index].selected){
      // data.selected = false
      this.setData({
        ['subjects[' + index + '].selected']: false//重点！！！坑！！！
      })
    }else{
      this.setData({
        ['subjects['+index+'].selected']: true
      })
    }
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