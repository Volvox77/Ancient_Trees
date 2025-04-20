// camera.js
Page({
  data: {
    isScanning: false
  },

  onLoad() {
    // 检查相机权限
    wx.authorize({
      scope: 'scope.camera',
      success: () => {
        console.log('相机权限已获取')
      },
      fail: () => {
        wx.showToast({
          title: '请授权相机权限',
          icon: 'none'
        })
      }
    })
  },

  // 返回上一页
  navigateBack() {
    wx.navigateBack()
  },

  // 显示帮助说明
  showHelp() {
    wx.showModal({
      title: 'AR相机使用说明',
      content: '1. 找到景点内的AR标记\n2. 将手机对准AR标记\n3. 等待扫描完成\n4. 查看AR内容',
      showCancel: false,
      confirmText: '知道了'
    })
  },

  // 扫码成功回调
  scanCode(e) {
    console.log('扫码结果：', e)
    // 这里可以根据扫码结果处理AR内容
    wx.showToast({
      title: '扫描成功',
      icon: 'success'
    })
  },

  // 扫码错误回调
  scanError(e) {
    console.error('扫码错误：', e)
    wx.showToast({
      title: '扫描失败，请重试',
      icon: 'none'
    })
  }
}) 