import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://www.kantop.net/upload/2021/05-19/6538610040553879118.png",
    siteTitle: "我的个人空间",
    github: "http://www.baidu.com",
    qq: "11111111",
    qqQrCode: "http://www.baidu.com",
    weixin: "22222222",
    weixinQrCode: "http://www.baidu.com",
    mail: "11111111@qq.com",
    icp: "黑ICP备00000号",
    githubName: "33333",
    favicon: "http://www.baidu.com",
  },
});
