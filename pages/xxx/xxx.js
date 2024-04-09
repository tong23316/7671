// pages/list/list.js
// index.js
Page({
  data: {
    list: ['item1', 'item2', 'item3']
  },

  deleteItem(e) {
    const index = e.currentTarget.dataset.index;
    const newList = this.data.list.filter((item, i) => i !== index);
    this.setData({
      list: newList
    });
  }
})

