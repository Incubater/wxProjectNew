//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loadingHidden: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [
    { comment_count: '254', content:'北漂女性的三十岁：而立之年 处境更加艰难' , user_name: 'Necrolic艾辰啊' , create_time:'2018-04-26' ,view_count:'2.7万'},
    { comment_count: '254', content: '她红了13年，活的干干净净，连狗仔都绝望了', user_name: '一条视频', create_time: '23小时前', view_count: '13.8万' },
    { comment_count: '422', content: '让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。', user_name: '杰客JACT', create_time: '2018-05-09', view_count: '85,075' },
    { comment_count: '199', content: '《绝地求生》蓝洞再次被打脸！556步枪将被回调', user_name: '栀颜丶', create_time: '2018-05-09', view_count: '55,673' },
    { comment_count: '21', content: '“千金”变“少爷” 大熊猫更改性别成网红吸引众多游客', user_name: '建筑', create_time: '01:06:28', view_count: '11,176' },
    { comment_count: '13', content: '新飞行员的战斗特技主视角体验他们有多拼', user_name: '建筑', create_time: '01:10:11', view_count: '5,533' },
    { comment_count: '199', content: '和剑三女玩家恋爱是不是搞错了什么', user_name: '罗小涵_', create_time: '2018-05-09', view_count: '19,388' },
    { comment_count: '55', content: '当情绪糟糕时玩游戏会给智商带来DEBUFF吗？', user_name: '凌晨的阳光', create_time: '03:52:52', view_count: '3,937' },
    { comment_count: '120', content: '中铁X局，明日准备裸辞了。莫问前程', user_name: 'wangxu1003sdo', create_time: '2018-05-10', view_count: '13,075' },
    { comment_count: '31', content: '一个年轻肥肥的懊悔和迷茫', user_name: 'ComingC', create_time: '10:31:54', view_count: '3,100' },
    { comment_count: '23', content: '探店｜哦豁！南昌这家生煎店有点意思！', user_name: '叔叔叔叔ccc', create_time: '2018-05-09', view_count: '3,175' },
    { comment_count: '119', content: '【认真做鱼系列121】九齿扇虾', user_name: '新鲜咸鱼', create_time: '2018-05-07', view_count: '6,148' },
    ],
    data: [
      { comment_count: '254', content: '北漂女性的三十岁：而立之年 处境更加艰难', user_name: 'Necrolic艾辰啊', create_time: '2018-04-26', view_count: '2.7万' },
      { comment_count: '254', content: '她红了13年，活的干干净净，连狗仔都绝望了', user_name: '一条视频', create_time: '23小时前', view_count: '13.8万' },
      { comment_count: '422', content: '让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。让数万肥宅疯狂的快乐水，昨天迎来了第132个年头。', user_name: '杰客JACT', create_time: '2018-05-09', view_count: '85,075' },
      { comment_count: '199', content: '《绝地求生》蓝洞再次被打脸！556步枪将被回调', user_name: '栀颜丶', create_time: '2018-05-09', view_count: '55,673' },
      { comment_count: '21', content: '“千金”变“少爷” 大熊猫更改性别成网红吸引众多游客', user_name: '建筑', create_time: '01:06:28', view_count: '11,176' },
      { comment_count: '13', content: '新飞行员的战斗特技主视角体验他们有多拼', user_name: '建筑', create_time: '01:10:11', view_count: '5,533' },
      { comment_count: '199', content: '和剑三女玩家恋爱是不是搞错了什么', user_name: '罗小涵_', create_time: '2018-05-09', view_count: '19,388' },
      { comment_count: '55', content: '当情绪糟糕时玩游戏会给智商带来DEBUFF吗？', user_name: '凌晨的阳光', create_time: '03:52:52', view_count: '3,937' },
      { comment_count: '120', content: '中铁X局，明日准备裸辞了。莫问前程', user_name: 'wangxu1003sdo', create_time: '2018-05-10', view_count: '13,075' },
      { comment_count: '31', content: '一个年轻肥肥的懊悔和迷茫', user_name: 'ComingC', create_time: '10:31:54', view_count: '3,100' },
      { comment_count: '23', content: '探店｜哦豁！南昌这家生煎店有点意思！', user_name: '叔叔叔叔ccc', create_time: '2018-05-09', view_count: '3,175' },
      { comment_count: '119', content: '【认真做鱼系列121】九齿扇虾', user_name: '新鲜咸鱼', create_time: '2018-05-07', view_count: '6,148' },
    ],
  },
  onReachBottom: function () {
    this.setData({
      loadingHidden: false
    })
    setTimeout(() => {

      this.setData({
        loadingHidden: true,
        array: this.data.array.concat(this.data.data)
      })
    }, 2000) 
  },
  onPullDownRefresh: function () {
    console.log("www")
    setTimeout(() => {

      this.setData({
        array: this.data.array.sort()
      })
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000) 
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
