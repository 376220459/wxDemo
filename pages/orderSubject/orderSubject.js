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
    timetable: [
      [
        ['周一','9/21'],
        [
          ['7:00', '9:00', true],
          [],
          ['14:00', '16:00', true],
          []
        ]
      ],
      [
        ['周二','9/22'],
        [
          ['7:00', '9:00', true],
          ['9:30', '12:00', false],
          [],
          ['19:40', '21:30', true]
        ]
      ],
      [
        ['周三','9/23'],
        [
          [],
          ['9:30', '11:40', false],
          [],
          []
        ]
      ],
      [
        ['周四','9/24'],
        [
          [],
          [],
          ['14:30', '15:20', true],
          ['19:00', '21:00', true]
        ]
      ],
      [
        ['周五','9/25'],
        [
          ['7:00', '9:00', false],
          ['9:00', '12:00', false],
          [],
          []
        ]
      ],
      [
        ['周六','9/26'],
        [
          [],
          [],
          [],
          ['19:00', '21:00', false]
        ]
      ],
      [
        ['周日','9/27'],
        [
          [],
          ['9:00', '12:00', false],
          ['15:00', '16:50', false],
          []
        ]
      ]
    ]
  },
  goSelectExperimental(){
    wx.navigateTo({
      url: '../selectExperimental/selectExperimental',
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