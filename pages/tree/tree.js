Component({
  properties: {
    title: String,
    dataArr: Object
  },
  data: {
    showList: false
  },
  methods: {
    change(){
      if(this.data.showList){
        this.setData({
          showList: false
        })
      }else{
        this.setData({
          showList: true
        })
      }
    }
  }
})