
let recordStartX = 0, currentOffsetX = 0, curIndex = 0; //按下初始值，当前滑块初始值，当前滑块下标
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:'小王1',
        mobile:'13888888888',
        detail:'北京市海淀区某某某某海淀区某某某某海淀区某某某某海淀区某某某某'
      },
      {
        id:2,
        name:'小王2',
        mobile:'13888888888',
        detail:'海淀区某某某某海淀区某某某某海淀区某某某某海淀区某某某某海淀区某某某某'
      },
      {
        id:3,
        name:'小王3',
        mobile:'13888888888',
        detail:'海淀区某某某某海淀区某某某某海淀区某某某某'
      },
      {
        id:4,
        name:'小王4',
        mobile:'13888888888',
        detail:'海淀区某某某某海淀区某某某某'
      },
      {
        id:5,
        name:'小王5',
        mobile:'13888888888',
        detail:'海淀区某某某某海淀区某某某某海淀区某某某某'
      },
    ],
    // curId:2,
    offsetNum:-134, //这是两个按钮的宽度
  },

  touchStart: function (e) { //触摸开始，记录初始值，并记录当前触摸的下标
    recordStartX = e.touches[0].clientX;
    curIndex = e.currentTarget.dataset.index;
    currentOffsetX = this.data.list[curIndex].offsetX;
  },
  touchMove: function (e) { //移动手指
    let list = this.data.list;
    let x = e.touches[0].clientX;
    let mx = recordStartX - x;
    let result = currentOffsetX - mx;
    if (result >= this.data.offsetNum && result <= 0) {
      list[curIndex].offsetX = result;
    }
    this.setData({
      list
    });
  },
  touchEnd: function (e) { //手指抬起来(触摸结束)
    let list = this.data.list;
    let item = list[curIndex];
    let halfOffset = this.data.offsetNum / 2; /*滑过一半就直接滑到终点，滑不到一半就再回去*/
    if (item.offsetX < halfOffset) { //这里要做判断，总不能滑一半扔那儿不管了吧
      item.offsetX = this.data.offsetNum;
    } else {
      item.offsetX = 0;
    }
    this.setData({
      list
    });
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
