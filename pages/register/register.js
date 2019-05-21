Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuName: '',
    stuId: '',
    phone: '',
    verifyCode: '',
    time: 0,
    password: '',
    checkPassword: '',
    codeIf: true
  },

  goBack(){
    wx.navigateBack();
  },
  countDown(){  
    let that = this;
    this.setData({
      time: 49
    });
    let timeId = setInterval(()=>{
      if (that.data.time >= 2) {
        that.setData({
          time: that.data.time - 1
        });
      }else{
        clearInterval(timeId);
        this.setData({
          codeIf: true
        });
      }
    }, 1000);

    /* setTimeout实现 */

    // function func(){
    //   if (that.data.time >= 1) {
    //     that.setData({
    //       time: that.data.time - 1
    //     });
    //     setTimeout(() => {
    //       func();
    //     }, 1000);
    //   } else {
    //     clearInterval(timeId);
    //     this.setData({
    //       codeIf: true
    //     });
    //   }
    // }
    // setTimeout(()=>{
    //   func();
    // },1000)
  },
  sendCode(){
    wx.showLoading({
      title: '正在发送...',
    })
    let that = this;
    wx.request({
      url: 'http://192.168.43.166:8080/user/getVerifyCode',
      data: {
        phoneNumber: that.data.phone
      },
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        wx.hideLoading();
        console.log(res.data);
        if (res.data.status == 1) {
          that.setData({
            codeIf: false
          });
          that.countDown();
        } else {
          console.log('发送失败，请稍后再试！');
          wx.showToast({
            title: '发送失败，请稍后再试！',
            icon: 'none'
          })
        }
      },
      fail() {
        wx.hideLoading();
        console.log('发送失败，请稍后再试！');
        wx.showToast({
          title: '发送失败，请稍后再试！',
          icon: 'none'
        })
      }
    })
  },
  register(){
    if (!/^[\u4e00-\u9fa5]{2,4}$/.test(this.data.stuName)){
      wx.showToast({
        title: '请输入您的真实姓名',
        icon: 'none'
      })
    }else if(!/^\d{6,12}$/.test(this.data.stuId)){
      wx.showToast({
        title: '请输入正确的学号',
        icon: 'none'
      })
    }else if (!/^1[34578]\d{9}$/.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
    }else if (!/^\d{6}$/.test(this.data.verifyCode)) {
      wx.showToast({
        title: '请输入正确的验证码',
        icon: 'none'
      })
    } else if (!(/^[\d.+-]*[a-zA-Z]+$/.test(this.data.password) && this.data.password.length >= 6 && this.data.password.length <= 16)) {
      wx.showToast({
        title: '请输入符合要求的密码',
        icon: 'none'
      })
    }else if(this.data.checkPassword !== this.data.password){
      wx.showToast({
        title: '两次输入密码不一致哦~',
        icon: 'none'
      })
    } else {
      wx.showLoading({
        title: '正在注册...',
      })
      let that = this;
      wx.request({
        url: 'http://192.168.43.166:8080/user/register', // 仅为示例，并非真实的接口地址
        data: {
          stuName: this.data.stuName,
          stuId: this.data.stuId,
          phone: this.data.phone,
          verifyCode: this.data.verifyCode,
          password: this.data.password,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'POST',
        success(res) {
          console.log(res.data);
          if (res.data.status == 1) {
            console.log('注册成功。');
            wx.showLoading({
              title: '注册成功...'
            });
            setTimeout(()=>{
              wx.hideLoading();
              wx.reLaunch({
                url: '../login/login?stuId=' + that.data.stuId
              })
            },1000)
          } else {
            wx.hideLoading();
            if (res.data.message === '手机号已经被注册') {
              console.log('手机号已经被注册！');
              wx.showToast({
                title: '手机号已经被注册！',
                icon: 'none'
              })
            } else if (res.data.message === '学号已经被注册') {
              console.log('学号已经被注册！');
              wx.showToast({
                title: '学号已经被注册！',
                icon: 'none'
              })
            }else{
              console.log('注册失败，请稍后再试！');
              wx.showToast({
                title: '注册失败，请稍后再试！',
                icon: 'none'
              })
            }
          }
        },
        fail() {
          wx.hideLoading();
          console.log('注册失败，请稍后再试！');
          wx.showToast({
            title: '注册失败，请稍后再试！',
            icon: 'none'
          })
        }
      })
    }
  },
  bindData(e){
    let key = e.currentTarget.dataset.key;
    let value = e.detail.value;
    this.setData({
      [key]: value
    })
    // console.log(this.data[key])
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