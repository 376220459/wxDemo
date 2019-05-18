Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectName: '',
    stepIndex: 0,
    uploadedImgList: []
  },
  goBack() {
    wx.navigateBack()
  }, 
  deleteImg(e){
    let imgIndex = e.currentTarget.dataset.index;
    this.setData({
      uploadedImgList: this.data.uploadedImgList.filter((item, index) => index != imgIndex)
    })
  },
  uploadImg(e){
    if (this.data.uploadedImgList.length === 9){
      console.log('最多只能上传 9 张照片哦.')
      return;
    }
    var that = this;
    wx.chooseImage({
      count: 9 - that.data.uploadedImgList.length, // 一次性最多可选照片数量
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;//此处是一个数组，下边需用concat拼接数组
        let uploadedImgList = that.data.uploadedImgList.concat(tempFilePaths);
        that.setData({
          uploadedImgList: uploadedImgList
        })
      }
    })
  },
  showImg(e){
    wx.previewImage({
      urls: this.data.uploadedImgList,
      current: this.data.uploadedImgList[e.currentTarget.dataset.index]
    })
  },
  submit(){
    wx.reLaunch({
      url: '../experimental/experimental?name=' + this.data.subjectName + '&from=addStep'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      subjectName: options.subjectName,
      stepIndex: Number(options.stepIndex) + 1
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