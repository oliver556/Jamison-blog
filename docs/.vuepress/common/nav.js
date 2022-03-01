const frontEdnNav = require('../nav/frontEndNav');
const frameNav = require('../nav/frameNav');
const devNav = require('../nav/devNav');
const indexNav = require("../nav/indexNav");
module.exports = [
  {
    text: '首页', link: '/'
  },
  {
    text: '导航站', link: '/navigation/'
  },
  frontEdnNav,
  frameNav,
  devNav,
  indexNav, // 索引导航
  {
    text: 'Contact', icon: 'reco-message',
    items: [
      {
        text: 'About',
        icon: 'reco-account',
        link: '/about/',
      },
      {
        text: 'Github',
        icon: 'reco-github',
        link: 'https://github.com/oliver556',
      }
    ]
  }
]