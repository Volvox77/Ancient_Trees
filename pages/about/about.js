Page({
  data: {},

  navigateBack() {
    wx.navigateBack();
  },

  navigateToAbout() {
    // 可以跳转到更详细的关于我们页面
    wx.showToast({
      title: '敬请期待',
      icon: 'none'
    });
  },

  navigateToFAQ() {
    wx.navigateTo({
      url: '/pages/faq/faq'
    });
  }
}); 