Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId: '',
    password: ''
  },
  bindData(e) {
    let key = e.currentTarget.dataset.key;
    let value = e.detail.value;
    this.setData({
      [key]: value
    })
    // console.log(this.data[key])
  },
  login(){
    if (!/^\d{6,12}$/.test(this.data.stuId)) {
      wx.showToast({
        title: '请输入正确的学号',
        icon: 'none'
      })
    } else if (!(/^[a-zA-Z0-9.+-]*[a-zA-Z][a-zA-Z0-9.+-]*$/.test(this.data.password) && this.data.password.length >= 6 && this.data.password.length <= 16)) {
      wx.showToast({
        title: '请输入符合要求的密码',
        icon: 'none'
      })
    }else{
      wx.showLoading({
        title: '正在登录...'
      })
      wx.request({
        url: 'https://www.ezshiyan.com/user/login',
        data: {
          stuId: this.data.stuId,
          password: this.data.password
        },
        header: {
          'content-type': 'application/json' // 默认值
          // 'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data);
          if (res.data.status == 1) {
            wx.setStorage({
              key: 'tooken',
              data: res.data.data.token,
              success(){
                // wx.getStorage({
                //   key: 'tooken',
                //   success(res) {
                //     console.dir('---'+res.data.value)
                //   }
                // })
                wx.showLoading({
                  title: '登录成功...'
                })
                setTimeout(() => {
                  wx.hideLoading();
                  wx.reLaunch({
                    url: '../subjects/subjects',
                  })
                }, 1000)
              },
              fail() {
                wx.hideLoading();
                console.log('登录失败，请稍后再试！');
                wx.showToast({
                  title: '登录失败，请稍后再试！',
                  icon: 'none'
                })
              }
            })
          } else {
            wx.hideLoading();
            if (res.data.message === '用户密码错误') {
              console.log('用户密码错误，请重新输入密码！');
              wx.showToast({
                title: '用户密码错误，请重新输入密码！',
                icon: 'none'
              })
            } else {
              console.log('登录失败，请稍后再试！');
              wx.showToast({
                title: '登录失败，请稍后再试！',
                icon: 'none'
              })
            }
          }
        },
        fail() {
          wx.hideLoading();
          console.log('登录失败，请稍后再试！');
          wx.showToast({
            title: '登录失败，请稍后再试！',
            icon: 'none'
          })
        }
      })
    }
  },
  easyLogin() {
    wx.showLoading({
      title: '正在登录...'
    })
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://www.ezshiyan.com/user/wxLogin',
            data: {
              js_code: res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
              // 'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            method: 'POST',
            success: function (res) {
              console.log(res.data.data);
              if (res.data.status == 1) {
                wx.setStorage({
                  key: 'tooken',
                  data: res.data.data.token,
                  success() {
                    // wx.getStorage({
                    //   key: 'tooken',
                    //   success(res) {
                    //     console.dir('---' + res.data.value)
                    //   }
                    // })
                    wx.showLoading({
                      title: '登录成功...'
                    })
                    setTimeout(() => {
                      wx.hideLoading();
                      wx.reLaunch({
                        url: '../subjects/subjects',
                      })
                    }, 1000)
                  },
                  fail() {
                    wx.hideLoading();
                    console.log('登录失败，请稍后再试！');
                    wx.showToast({
                      title: '登录失败，请稍后再试！',
                      icon: 'none'
                    })
                  }
                })
              } else {
                wx.hideLoading();
                console.log('登录失败，请稍后再试！');
                wx.showToast({
                  title: '登录失败，请稍后再试！',
                  icon: 'none'
                })
              }
            },
            fail() {
              wx.hideLoading();
              console.log('登录失败，请稍后再试！');
              wx.showToast({
                title: '登录失败，请稍后再试！',
                icon: 'none'
              })
            }
          })
        } else {
          wx.hideLoading();
          console.log('登录失败，请稍后再试！');
          wx.showToast({
            title: '登录失败，请稍后再试！',
            icon: 'none'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.stuId){
      this.setData({
        stuId: options.stuId
      })
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