// index.js
Page({
  data: {
    activeTab: 'ar',
    hasAllCards: false
  },

  onLoad() {
    // 检查用户是否已集齐所有卡片
    this.checkCollectionStatus();
  },

  // 切换标签页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  // 跳转到常见问题页面
  navigateToFAQ() {
    wx.navigateTo({
      url: '/pages/about/about'
    });
  },

  // 检查用户收藏状态
  checkCollectionStatus() {
    // 这里应该调用后端API检查用户是否集齐所有卡片
    // 暂时使用模拟数据
    this.setData({
      hasAllCards: false
    });
  }
});
