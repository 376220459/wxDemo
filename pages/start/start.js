Page({

  /**
   * 页面的初始数据
   */
  data: {
    // pre: 0
    textStyle: '',
    buttonStyle: '',
    buttonContaiStyle: '',
    aboutUsStyle: 'display: none;'
  },

  aboutUs: (function(){
    let pre = 0;
    return function(){
      // console.log('click');
      let now = Date.now();
      if(now - pre > 2000){
        // console.log('send');
        // wx.navigateTo({
        //   url: '../index/index',
        // });
        this.setData({
          buttonStyle: 'animation: hiddenButton 0.5s linear forwards',
          textStyle: 'animation: hiddenText 0.5s linear forwards',
          buttonContaiStyle: 'opacity: 1;bottom: 30%;animation: pullButtonContain 0.5s linear 0.8s forwards',
          aboutUsStyle: 'display: flex;animation: showAbout 1s linear 1.2s forwards'
        })
        pre = now;
      }
    }
  })(),

  // aboutUs(){
  //   // console.log('hahaha');
  //   let now = Date.now();
  //   if (now - this.data.pre > 1000) {
  //     // console.log('click');
      
  //     this.setData({
  //       pre: now
  //     })
  //   }
  // },

  closeAbout(){
    this.setData({
      buttonContaiStyle: 'opacity: 1;bottom: 30%;height: 40%;background: rgba(255,255,255,0.8);animation: hiddenContain 0.5s linear forwards'
    })
    setTimeout(()=>{
      this.setData({
        buttonContaiStyle: 'animation: jeepContain 0.5s linear forwards;',
        buttonStyle: 'animation: showButton 0.5s linear 0.5s forwards;',
        textStyle: 'animation: showText 0.5s linear 1s forwards;',
        aboutUsStyle: 'display: none'
      })
    },500)
  },

  toLaboratory: (function(){
    let pre = 0;
    return function(){
      let now = Date.now();
      if(now - pre > 2000){
        wx.navigateTo({
          url: '../login/login',
        });
        pre = now;
      }
    }
  })(),

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