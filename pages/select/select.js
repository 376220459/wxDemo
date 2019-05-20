Component({
  properties: {
    data: String,
    dataArr: Object
  },
  data: {
    showList: false
  },
  methods: {
    changeList(){
      if (this.data.showList){
        this.setData({
          showList: false
        })
      }else{
        this.setData({
          showList: true
        })
      }
    },
    selectData(e){
      let data = e.currentTarget.dataset.data;
      this.setData({
        data: data,
        showList: false
      })
    }
  }
})