// pages/content/content.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    array: [
      { username: '华研明日破产', floor: '第2楼', like_count: '0', content: '这么说，从某种意义上来讲，艾伦能通过脑波与大哥吉克交流', have_reply: false, have_more_reply: false,more_reply_count:'0' , comment:[{ username: '', comment: '' }]},
      { username: 'qiaojie', floor: '第3楼', like_count: '4', content: '这么推测的理由是吉克在第一次攻打天堂岛时完全没有跳反的意思，如果此时他要跳反，则完全可以非常轻松的解决掉3个马莱巨人，提前4年实现计划。因此，有充分的理由推断吉克在攻打天堂岛时对复兴计划一无所知，而只是一个坚定的马莱战士。而攻岛后一年，吉克即派出了艾莲娜与岛上接触，可以肯定吉克此时已经跳反。所以吉克跳反的时间点，就在攻岛失败之后并在派遣调查舰队之前，那么最合理的时间应该就是艾伦拿到笔记本的那个时间点。', have_reply: true, have_more_reply: true, more_reply_count: '0', comment: [{ username: '磁力大炮', comment: '：这个算是目前说得过去的最合适的理由了' }]},
      { username: '勾三股四弦五', floor: '第4楼', like_count: '1', content: '李菊福', have_reply: false, have_more_reply: false, more_reply_count: '0' , comment: [{ username: '', comment: '' }] },
      { username: '-窘龙-', floor: '第5楼', like_count: '8', content: '终于有人觉得当年枭和吉克有沟通了我觉得这个比吉克自己想以一人之力复兴艾尔迪亚民族要靠谱多了。估计到目前为止，也基本还在枭的计划内，只不过可能时间有些推后而已', have_reply: false, have_more_reply: false, more_reply_count: '0', comment: [{ username: '', comment: '' }] },
      {
        username: '冰魄雲渺ゑ泪', floor: '第6楼', like_count: '12', content: '吉克或许和枭真的有接触，但枭应该不太可能是以欺骗的方式告诉吉克自己父母是叛徒什么的，一个小孩子宁可相信一个外人也不相信自己父母，要告发自己父母忠于马莱，这个思想觉悟太可怕了吧，成年人都未必能做到“大义灭亲”。\n至于吉克跳反的时机，的确肯定是在攻岛之后了。他隐瞒自己的皇室血统，说明他本就不忠于马莱，他心中一直有复兴的想法，可苦于在马莱需要伪装自己一直找不到机会。4年前的攻岛，我觉得他确实是想杀光岛上人的，只有把始祖掌握在自己或者能够理解自己处境的马莱国内艾尔迪亚人手里，才能完成一些计划，留在雷伊斯王那里一毛钱价值都没有。而攻岛的结果，让他看到了与墙内合作的可行性，毕竟现在始祖在自己弟弟身上，毕竟岛内还是有与马莱一战的可能性，而在雷贝利欧，他们根本没有反抗的机会。\n至于他对艾伦说的“我们都是你爸爸的受害者”，“我会救你出来的”这些话，别忘了当时他正在骑皮克……说话当然不能说的太直白，话里有话，表面上表忠给皮克听很正常。至少他明确告诉了艾伦，“我是你哥”，间接表示“我想救你（和你合作）“。\n至于楼主说的，为何不在当时就灭了皮克跳反，我觉得当时他才刚刚见识到岛内的实力，脑筋哪能转那么快。杀红眼的兵长就在身后追着他，都吓尿了，哪能一下子想出那么多计划，当然先溜了再说。何况这时候跳反，岛内只会认为此人是觉得跑不了了才投降，一个叛变的俘虏和一个敌国军官内线，哪个更有能对等交涉的话语权很显然了。何况马莱还有个不确定因素战锤在那呢，这次的马莱篇行动也是冲着锤子去的，可见其重要性，先撤退回家慢慢想计划，布个大局，选择好合适的时机才是正确抉择。\n三年前将自己的亲信送去了岛上，让她和岛内建立联系，提供情报。计划了那么久，我觉得吉克应该一直在等战锤露面，如果实在不行，下下策就是自己去岛上送人头，他只剩一年了，会议上提议攻岛便是在无法逼出锤子的情况下使的下策。结果锤子自己跳出来了，那么收人头的计划就正式启动了。', have_reply: true, have_more_reply: true, more_reply_count: '16', comment: [
        { username: 'qiaojie', comment: '吉克的思想变化肯定不会是他自己造成的，而一定是有外界因素强制扭转的。比如幼年时告发自己的父母，很难想象一个小孩子会做出这种事情，而如果是枭暗中引导他，这样的剧情就存在合理性了。再比如，吉克攻岛时对墙内艾族是毫无保留的下死手，而且还十分残忍的使用虐杀手法，根本没把墙内当人对待' },
        { username: 'qiaojie', comment: '你要说这个时候的吉克已经是艾族复兴派，那绝对是胡扯，哪有一边想着复兴艾族一边对艾族人下死手的？所以，这中间一定又经历了外部强烈的刺激才会扭转吉克的思想。' },
        { username: 'qiaojie', comment: '另外从性格上说，吉克不是一个处变不惊城府很深的人，打调查兵团时喜形于色过分轻敌结果被兵长反杀。在思想产生变化对马莱跳反后，在马莱的忠诚度调查中露出了马脚，让马加特产生了对吉克的怀疑。跟兵长演戏时又吓到差点尿裤子，很多表现反映出吉克的内心是比较弱的，不是一个长期卧底的料' },
        { username: 'qiaojie', comment: '另外从谦山的创作手法上也可以看出来，如果谦山要让剧情反转，在之前一定会埋下非常明显的伏笔，所以当剧情反转时虽然出乎意料，但还是会有比较可以信服的理由。而吉克要跳反的伏笔是在93话开始埋的，在攻岛失败前你找不到任何吉克跳反的伏笔，这足以说明吉克跳反的时间不会在攻岛失败前。' }
        ]}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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