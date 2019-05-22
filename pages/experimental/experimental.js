Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectName: '',
    tabStyleArr: [],
    tabIfArr: [],
    myLongitude: 116.4965075,
    myLatitude: 40.016103,
    signInTime: '12:10 - 14:15',
    signInPlace: '东区 ff106',
    scale: 19,
    signInRange: [{
      latitude: 116.4965075,
      longitude: 40.016103,
      fillColor: '#ccccccaa',
      radius: 50
    }],
    signInToast: '',
    signInButtonIf: true,
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
  distance(la1, lo1, la2, lo2) {
    let La1 = la1 * Math.PI / 180.0;
    let La2 = la2 * Math.PI / 180.0;
    let La3 = La1 - La2;
    let Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;//地球半径
    s = Math.round(s * 10000) / 10000;
    return Math.floor(s * 1000)  //单位：米
  },
  getCurrentLocation(){
    wx.showLoading({
      title: '正在定位...'
    })
    let that = this;
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          myLatitude: latitude,
          myLongitude: longitude,
          scale: 19
        })
        setTimeout(() => {
          wx.hideLoading();
          wx.showToast({
            title: '定位成功'
          });
          that.setData({
            signInToast: toast
          })
        }, 500);
      },
      fail() {
        wx.hideLoading();
        wx.showToast({
          title: '定位失败，请稍后再试',
          icon: 'none'
        })
      }
    })
    let dis = this.distance(this.data.myLatitude, this.data.myLongitude, this.data.signInRange[0].latitude, this.data.signInRange[0].longitude);
    let toast = dis > 50 ? { toast: '您未到指定签到区域，试试右侧的定位按钮刷新位置', color: '#F56C6C' } : { toast: '您已到达指定签到区域，快点签到吧', color: '#67C23A' };
  },
  signIn(){
    wx.showLoading({
      title: '正在定位...'
    })
    let that = this;
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          myLatitude: latitude,
          myLongitude: longitude,
          scale: 19
        })
        setTimeout(() => {
          wx.hideLoading();
          that.setData({
            signInToast: toast
          });
          if (that.data.signInToast === '') {
            that.setData({
              signInButtonIf: false
            });
            wx.showToast({
              title: '签到成功'
            });
          } else {
            wx.showToast({
              title: '签到失败，请到达指定地点后签到',
              icon: 'none'
            });
          }
        }, 500);
      },
      fail() {
        wx.hideLoading();
        wx.showToast({
          title: '定位失败',
          icon: 'none'
        })
      }
    })
    let dis = this.distance(this.data.myLatitude, this.data.myLongitude, this.data.signInRange[0].latitude, this.data.signInRange[0].longitude);
    let toast = dis > 50 ? { toast: '您未到指定签到区域，试试右侧的定位按钮刷新位置', color: '#F56C6C' } : '';
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
    let that = this;
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
    }else{
      this.setData({
        tabStyleArr: [
          {
            color: '#5bb8f3',
            borderBottom: '5rpx solid #5bb8f3'
          }
        ],
        tabIfArr: [true,false, false]
      });
    }
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          myLatitude: latitude,
          myLongitude: longitude,
          'signInRange[0].latitude': latitude,
          'signInRange[0].longitude': longitude
        });
      }
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