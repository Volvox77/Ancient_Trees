// pages/faq/faq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    faqList: [
      {
        id: 1,
        question: '我应该怎么去参观？',
        answer: '您可以通过地图页面查看各个古树的具体位置，选择感兴趣的地点前往参观。每个地点都设有AR标记点，可以使用小程序的AR相机功能进行打卡。',
        isOpen: false
      },
      {
        id: 2,
        question: '我可以在中轴树语看到什么？',
        answer: '您可以看到北京中轴线上的六大古树群，了解它们的历史文化价值，并通过AR互动体验获得独特的收藏卡片。',
        isOpen: false
      },
      {
        id: 3,
        question: '中轴树语的体验时间是什么',
        answer: '开放时间与各个景点的开放时间一致，建议您提前查看具体景点的开放时间安排合理规划行程。',
        isOpen: false
      },
      {
        id: 4,
        question: '什么是中轴树语？',
        answer: '中轴树语是一款专注于北京中轴线古树文化传播的小程序，通过AR技术和地图导览，为用户提供沉浸式的古树文化探索体验。',
        isOpen: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  navigateBack() {
    wx.navigateBack();
  },

  toggleFAQ(e) {
    const id = e.currentTarget.dataset.id;
    const faqList = this.data.faqList.map(item => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    this.setData({ faqList });
  }
})