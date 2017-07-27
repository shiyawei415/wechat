var app = getApp()
Page({
  data: {
    primarySize:'default',
    total:0,
    dishesList: 
      [
        {
          name: "西瓜",
          price: 38,
          num: 1
        },
        {
          name: "樱桃",
          price: 58,
          num: 1
        },
        {
          name: "葡萄",
          price: 88,
          num: 1
        }
      ]
  },
  // 增加商品数量
  addNum(event) {
    let sIndex = event.currentTarget.dataset.index;
    let dishesList = this.data.dishesList;
    dishesList[sIndex].num += 1;
    this.totalFn();
    this.setData({
      dishesList: dishesList
    })
  },
  // 减少商品数量
  minusNum(event) {
    let sIndex = event.currentTarget.dataset.index;
    let dishesList = this.data.dishesList;

    if (dishesList[sIndex].num>1){
      dishesList[sIndex].num -= 1;
    }else{
      dishesList[sIndex].num = 1;
    }

    this.totalFn();
    this.setData({
      dishesList: dishesList
    })
  },
  /*对加减进去封装*/
  numToogle(event){
    let sIndex = event.currentTarget.dataset.index;
    let types = event.currentTarget.dataset.types;
    let dishesList = this.data.dishesList;
    
    if (types === '+'){
      dishesList[sIndex].num += 1;
    }

    if (types === '-') {
      if (dishesList[sIndex].num > 1) {
        dishesList[sIndex].num -= 1;
      } else {
        dishesList[sIndex].num = 1;
      }
    }
    this.totalFn();
    this.setData({
      dishesList: dishesList
    })
  },

  totalFn(){
    let dishesList = this.data.dishesList;
    let total = 0;
    for (var i = 0; i < dishesList.length; i++) {
      total += dishesList[i].price * dishesList[i].num;
    }
    this.setData({
      total: total
    })
  },
  onLoad(){
    this.totalFn();
  }
})