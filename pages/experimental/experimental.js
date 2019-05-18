Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectName: '',
    tabStyleArr: [
      {
        color: '#5bb8f3',
        borderBottom: '5rpx solid #5bb8f3'
      }
    ],
    tabIfArr: [true,false, false],
    experimentalDataArr: [
      {
        name: '磺基水杨酸合铁测定实例.docx',
        size: '66.0kB'
      },
      {
        name: '磺基水杨酸合铁.ppt',
        size: '12.4MB'
      },
      {
        name: '实验操作详解',
        size: '1.3MB'
      },
    ],
    experimentalDataIconArr: [],
    steps: [
      {
        title: '安装实验器材',
        content: `按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下`,
        imgsArr: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558119856017&di=1192a501a1d4082d536b87fc5156675c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fvg%2F6u%2FQJ6308401145.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
        ]
      },
      {
        title: '安装实验器材',
        content: `按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下`,
        imgsArr: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558119856017&di=1192a501a1d4082d536b87fc5156675c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fvg%2F6u%2FQJ6308401145.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
        ]
      },
      {
        title: '安装实验器材',
        content: `按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下
        按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下`,
        imgsArr: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558119856017&di=1192a501a1d4082d536b87fc5156675c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fvg%2F6u%2FQJ6308401145.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
        ]
      },
      {
        title: '安装实验器材',
        content: `按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下
        按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下`,
        imgsArr: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558119856017&di=1192a501a1d4082d536b87fc5156675c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fvg%2F6u%2FQJ6308401145.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
        ]
      },
      {
        title: '安装实验器材',
        content: `按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下
        按装置图安装实验装置，装置安装时完全按照正确的配置顺序：
        1.从热源开始
        2.从上而下`,
        imgsArr: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
        ]
      }
    ]
  },
  goSubjects() {
    wx.reLaunch({
      url: '../subjects/subjects',
    })
  },
  changeTab(e){
    let index = Number(e.currentTarget.dataset.index);
    switch(index){
      case 0:
        this.setData({
          tabStyleArr: [
            {
              color: '#5bb8f3',
              borderBottom: '5rpx solid #5bb8f3'
            }
          ],
          tabIfArr: [true,false,false]
        });
        break;
      case 1:
        this.setData({
          tabStyleArr: [,
            {
              color: '#5bb8f3',
              borderBottom: '5rpx solid #5bb8f3'
            }
          ],
          tabIfArr: [false,true,false]
        });
        this.setData({
          experimentalDataIconArr: this.data.experimentalDataArr.map(e => {
            if (e.name.endsWith('docx') || e.name.endsWith('doc')) {
              return 'http://i2.tiimg.com/684412/18919e5a7c384d1e.png'
            } else if (e.name.endsWith('ppt')) {
              return 'http://i2.tiimg.com/684412/d0046f9bac1c0f58.png'
            } else {
              return 'http://i2.tiimg.com/684412/369ea1c14e9f8cb1.png'
            }
          })
        })
        break;
      case 2:
        this.setData({
          tabStyleArr: [,,
            {
              color: '#5bb8f3',
              borderBottom: '5rpx solid #5bb8f3'
            }
          ],
          tabIfArr: [false,false,true]
        });
        break;
      default: break;
    }
  },
  addStep(e){
    let stepIndex = e.currentTarget.dataset.stepIndex;
    wx.navigateTo({
      url: '../addStep/addStep?stepIndex=' + stepIndex + '&subjectName=' + this.data.subjectName,
    })
  },
  showImg(e) {
    wx.previewImage({
      urls: e.currentTarget.dataset.imgsArr,
      current: e.currentTarget.dataset.imgsArr[e.currentTarget.dataset.index]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      subjectName: options.name
    });
    if (options.from === 'addStep') {
      this.setData({
        tabStyleArr: [, ,
          {
            color: '#5bb8f3',
            borderBottom: '5rpx solid #5bb8f3'
          }
        ],
        tabIfArr: [false, false, true]
      });
    }
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