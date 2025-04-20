Page({
  data: {
    showSuccess: false,
    showCard: false,
    currentCard: null,
    devicePosition: 'back'
  },

  onLoad() {
    // 检查相机权限
    wx.authorize({
      scope: 'scope.camera',
      success: () => {
        console.log('已获得相机权限');
      },
      fail: () => {
        wx.showModal({
          title: '提示',
          content: '需要您的相机权限才能使用AR打卡功能',
          success: (res) => {
            if (res.confirm) {
              wx.openSetting();
            }
          }
        });
      }
    });
  },

  // 相机错误处理
  error(e) {
    console.error('相机错误:', e.detail);
    wx.showToast({
      title: '相机启动失败',
      icon: 'none'
    });
  },

  // 拍照打卡
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // 模拟打卡成功
        this.setData({
          showSuccess: true,
          currentCard: {
            name: '九龙柏',
            description: '故宫博物院内的著名古树，已有数百年历史...',
            image: '/assets/images/trees/tree1.jpg'
          }
        });
      },
      fail: (err) => {
        console.error('拍照失败:', err);
        wx.showToast({
          title: '拍照失败',
          icon: 'none'
        });
      }
    });
  },

  // 切换摄像头
  switchCamera() {
    this.setData({
      devicePosition: this.data.devicePosition === 'back' ? 'front' : 'back'
    });
  },

  // 查看卡片
  viewCard() {
    this.setData({
      showSuccess: false,
      showCard: true
    });
  },

  // 关闭成功提示
  closeModal() {
    this.setData({
      showSuccess: false
    });
  },

  // 关闭卡片预览
  closeCard() {
    this.setData({
      showCard: false
    });
  }
}); 