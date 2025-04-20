Page({
  data: {
    longitude: 116.397428, // 北京中轴线经度
    latitude: 39.90923,    // 北京中轴线纬度
    scale: 14,
    markers: [],
    treeList: [],
    selectedTree: null,
    spots: {
      '故宫博物馆': {
        name: '故宫博物馆',
        image: '/assets/images/spots/gugong.png',
        trees: [
          {
            name: '九龙壁银杏',
            location: '故宫博物院九龙壁北侧',
            description: '树龄超过300年的古银杏，见证了紫禁城的历史变迁。'
          }
        ]
      },
      '中山公园': {
        name: '中山公园',
        image: '/assets/images/spots/zhongshan.png',
        trees: [
          {
            name: '古柏群',
            location: '中山公园内',
            description: '园内保存有大量明清时期古柏，是北京最古老的人工栽培柏树群。'
          }
        ]
      },
      '景山公园': {
        name: '景山公园',
        image: '/assets/images/spots/jingshan.png',
        trees: [
          {
            name: '古柏林',
            location: '景山公园五峰之上',
            description: '景山上的古柏林，树龄多在300年以上，见证了明清两代的历史。'
          }
        ]
      },
      '先农坛': {
        name: '先农坛',
        image: '/assets/images/spots/xiannongtan.png',
        trees: [
          {
            name: '古槐群',
            location: '先农坛园区内',
            description: '园内古槐群历史悠久，为明清时期遗存。'
          }
        ]
      },
      '天坛公园': {
        name: '天坛公园',
        image: '/assets/images/spots/tiantan.png',
        trees: [
          {
            name: '九龙柏',
            location: '天坛公园祈年殿西北侧',
            description: '九龙柏，又名"九龙迎圣"，生长在北京市天坛公园皇穹宇西北侧。树冠蜿蜒起伏，树干有纵向褶皱，将树身分为九股，扭曲缠绕，宛如九龙盘旋，森然欲动。'
          }
        ]
      },
      '太庙': {
        name: '太庙',
        image: '/assets/images/spots/taimiao.png',
        trees: [
          {
            name: '古柏群',
            location: '太庙院内',
            description: '院内保存有多株明清时期的古柏，与古建筑相映成趣。'
          }
        ]
      }
    }
  },

  onLoad() {
    this.loadTreeData();
  },

  // 加载古树数据
  loadTreeData() {
    // 模拟数据，实际项目中应该从后端API获取
    const treeData = [
      {
        id: 1,
        name: '九龙柏',
        location: '故宫博物院',
        longitude: 116.397428,
        latitude: 39.90923,
        image: '/assets/images/trees/tree1.jpg',
        description: '九龙柏是故宫博物院内的著名古树，已有数百年历史...'
      },
      // 可以添加更多古树数据
    ];

    const markers = treeData.map(tree => ({
      id: tree.id,
      latitude: tree.latitude,
      longitude: tree.longitude,
      title: tree.name,
      iconPath: '/assets/icons/tree-marker.png',
      width: 30,
      height: 30
    }));

    this.setData({
      treeList: treeData,
      markers: markers
    });
  },

  // 点击地图标记
  onMarkerTap(e) {
    const markerId = e.markerId;
    const tree = this.data.treeList.find(t => t.id === markerId);
    if (tree) {
      this.setData({
        selectedTree: tree
      });
    }
  },

  // 选择古树
  selectTree(e) {
    const treeId = e.currentTarget.dataset.id;
    const tree = this.data.treeList.find(t => t.id === treeId);
    if (tree) {
      this.setData({
        selectedTree: tree,
        longitude: tree.longitude,
        latitude: tree.latitude,
        scale: 16
      });
    }
  },

  // 开始导航
  startNavigation() {
    const { selectedTree } = this.data;
    if (selectedTree) {
      wx.openLocation({
        latitude: selectedTree.latitude,
        longitude: selectedTree.longitude,
        name: selectedTree.name,
        address: selectedTree.location
      });
    }
  },

  // 关闭详情弹窗
  closeDetail() {
    this.setData({
      selectedTree: null
    });
  },

  // 跳转到景点详情页
  navigateToDetail(e) {
    const spotName = e.currentTarget.dataset.spot;
    const spotData = this.data.spots[spotName];
    
    if (!spotData) {
      console.error('未找到景点数据:', spotName);
      return;
    }

    try {
      const spotDataStr = JSON.stringify(spotData);
      wx.navigateTo({
        url: `/pages/spot-detail/spot-detail?spot=${encodeURIComponent(spotDataStr)}`,
        fail: (err) => {
          console.error('页面跳转失败:', err);
          wx.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    } catch (err) {
      console.error('数据处理失败:', err);
      wx.showToast({
        title: '数据处理失败',
        icon: 'none'
      });
    }
  }
}); 