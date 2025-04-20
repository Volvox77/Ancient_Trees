// spot-detail.js
Page({
  data: {
    spotData: null,
    currentTab: 'maps'  // 当前选中的底部导航项
  },

  onLoad(options) {
    if (options.spot) {
      const spotData = JSON.parse(decodeURIComponent(options.spot));
      // 为天坛公园添加特定的头部图片
      if (spotData.name === '天坛公园') {
        spotData.headerImage = '/assets/images/spots/tiantan-header.png';
      }
      this.setData({
        spotData: spotData
      });
    }
  },

  // 返回上一页
  navigateBack() {
    wx.navigateBack();
  },

  // 切换底部导航
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === this.data.currentTab) return;

    if (tab === 'home') {
      wx.switchTab({
        url: '/pages/index/index'
      });
    } else if (tab === 'camera') {
      wx.switchTab({
        url: '/pages/camera/camera'
      });
    } else {
      this.setData({
        currentTab: tab
      });
    }
  },

  // 分享
  onShareAppMessage() {
    const {spotData} = this.data;
    return {
      title: `${spotData.name}的${spotData.trees[0].name}`,
      path: `/pages/spot-detail/spot-detail?spot=${encodeURIComponent(JSON.stringify(spotData))}`
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    const {spotData} = this.data;
    return {
      title: `${spotData.name}的${spotData.trees[0].name}`,
      query: `spot=${encodeURIComponent(JSON.stringify(spotData))}`
    };
  }
}); 