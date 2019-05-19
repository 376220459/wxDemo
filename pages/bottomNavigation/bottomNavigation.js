Component({
  properties: {
    iconArr: Object
  },
  methods: {
    goTab(e){
      let pages = getCurrentPages(); //获取加载的页面
      let currentPage = pages[pages.length - 1];
      let url = currentPage.route;
      let currentPath = url.slice(url.lastIndexOf('/') + 1);
      let targetPath = e.currentTarget.dataset.path;
      if (currentPath !== targetPath) {
        wx.reLaunch({
          url: '../' + targetPath + '/' + targetPath
        })
      }
    }
  }
})