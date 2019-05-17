Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepIndex: 1,
    imgsArr: [
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547935979,1542028289&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3292198213,1397448381&fm=26&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558119856017&di=1192a501a1d4082d536b87fc5156675c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fvg%2F6u%2FQJ6308401145.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1681705618,469637139&fm=26&gp=0.jpg'
    ]
  },
  deleteImg(e){
    let imgIndex = e.currentTarget.dataset.index;
    this.setData({
      imgsArr: this.data.imgsArr.filter((item, index) => index != imgIndex)
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