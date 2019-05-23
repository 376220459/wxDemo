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
        img: 'http://i1.fuimg.com/684412/8eadc7e1e3b5b506.png',
        color: '#5bb8f3'
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
    sliderRightLeft: '',
    sliderRightLeft: '',
    equipmentKeys: [
      {
        key: '化学',
        color: ''
      },
      {
        key: '物理',
        color: ''
      },
      {
        key: '生物',
        color: ''
      },
      {
        key: '试剂',
        color: ''
      },
      {
        key: '光学测量',
        color: ''
      },
      {
        key: '测量仪',
        color: ''
      },
      {
        key: '导线',
        color: ''
      },
      {
        key: '玻璃器材',
        color: ''
      },
      {
        key: '生物模型',
        color: ''
      },
    ],
    selectKeys: [],
    equipments: [
      {
        img: 'http://i1.fuimg.com/684412/829079040545ff60.png',
        name: '试管',
        count: 55,
        tip: true,
        selectedCount: 0,
        borrowed: true
      },
      {
        img: 'http://i1.fuimg.com/684412/0d33458f12153980.png',
        name: '导线',
        count: 368,
        tip: false,
        selectedCount: 0,
        borrowed: false
      },
      {
        img: 'http://i1.fuimg.com/684412/9e929e653ff146d1.png',
        name: '高锰酸钾试剂',
        count: 68,
        tip: true,
        selectedCount: 0,
        borrowed: false
      },
      {
        img: 'http://i1.fuimg.com/684412/829079040545ff60.png',
        name: '试管',
        count: 55,
        tip: true,
        selectedCount: 0,
        borrowed: true
      },
      {
        img: 'http://i1.fuimg.com/684412/0d33458f12153980.png',
        name: '导线',
        count: 368,
        tip: false,
        selectedCount: 0,
        borrowed: false
      },
      {
        img: 'http://i1.fuimg.com/684412/9e929e653ff146d1.png',
        name: '高锰酸钾试剂',
        count: 68,
        tip: true,
        selectedCount: 0,
        borrowed: false
      }
    ],
    laboratorys: [
      {
        title: '通信与信息工程学院',
        children: ['现代通信技术部实验室','通信网络安全实验室']
      },
      {
        title: '电子工程学院',
        children: ['现代通信技术部实验室','通信网络安全实验室']
      },
      {
        title: '自动化学院'
      },
      {
        title: '计算机学院'
      },
      {
        title: '其他'
      }
    ]
  },
  slide() {
    if(this.data.sliderRightLeft === '265rpx'){
      this.setData({
        sliderRightLeft: 0,
        sliderLeftLeft: '-265rpx'
      })
    } else {
      this.setData({
        sliderRightLeft: '265rpx',
        sliderLeftLeft: 0
      })
    }
  },
  slideLeft() {
    if (this.data.sliderRightLeft === '265rpx') {
      this.setData({
        sliderRightLeft: 0,
        sliderLeftLeft: '-265rpx'
      })
    }
  },
  selectKey(e){
    let index = e.currentTarget.dataset.index;
    let selectIndex = this.data.selectKeys.indexOf(this.data.equipmentKeys[index].key);
    if (selectIndex !== -1) {
      this.setData({
        ['equipmentKeys[' + index + '].color']: '',
        selectKeys: this.data.selectKeys.slice(0, selectIndex).concat(this.data.selectKeys.slice(selectIndex + 1))
      });
    }else{
      this.setData({
        ['equipmentKeys[' + index + '].color']: '#5bb8f3',
        selectKeys: this.data.selectKeys.concat(this.data.equipmentKeys[index].key)
      });
    }
    // console.log(this.data.selectKeys)
  },
  changeSelectedCount(e){
    let mark = e.currentTarget.dataset.mark;
    let index = e.currentTarget.dataset.index;
    if (this.data.equipments[index].borrowed){
      return;
    }
    if (mark === '+' && this.data.equipments[index].selectedCount < this.data.equipments[index].count){
      this.setData({
        ['equipments[' + index + '].selectedCount']: this.data.equipments[index].selectedCount+1
      })
    } else if (mark === '-' && this.data.equipments[index].selectedCount > 0){
      this.setData({
        ['equipments[' + index + '].selectedCount']: this.data.equipments[index].selectedCount-1
      })
    }
  },
  borrow(e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.equipments[index].selectedCount > 0){
      this.setData({
        ['equipments[' + index + '].borrowed']: true
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