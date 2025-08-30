type SiteConfig = {
  title: string; // 网站标题名称（banner 上）
  alternate?: string; // 网站英文短名
  subtitle?: string; // 副标题
  name: string; // 作者名称
  description?: string; // 站点简介（一段话）
  avatar?: string; // 站点头像 logo.png or url
  showLogo?: boolean; // 是否显示 logo，否则用 alternate 当·logo
  author?: string; // 文章作者
  // theme
  enableJSGridCover?: boolean; // 是否启用 color4bg 的背景 (写了不舍得扔)
  site: string; // 站点线上域名 用于 RSS 生成等

  featuredCategories?: {
    link: string;
    image: string;
    label?: string;
    description?: string;
  }[];
};

// 社交媒体配置类型
type SocialPlatform = {
  url: string;
  icon: string;
  color: string; // default bg-primary/20
};

type SocialConfig = {
  github?: SocialPlatform;
  google?: SocialPlatform;
  twitter?: SocialPlatform;
  zhihu?: SocialPlatform;
  music?: SocialPlatform;
  weibo?: SocialPlatform;
  about?: SocialPlatform;
  email?: SocialPlatform;
  facebook?: SocialPlatform;
  stackoverflow?: SocialPlatform;
  youtube?: SocialPlatform;
  instagram?: SocialPlatform;
  skype?: SocialPlatform;
  douban?: SocialPlatform;
  bilibili?: SocialPlatform;
  rss?: SocialPlatform;
  Tiger?: SocialPlatform;
};

// TODO: change to backend

// https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/config/
export const siteConfig: SiteConfig = {
  title: '寂静猎手', // 网站名称
  alternate: 'SilentXx', // 网站名称
  subtitle: '期权加密实战 · 理性现金流系统', // 副标题
  name: 'SilentXx',
  description: '聚焦美股期权与加密货币交易，分享真实、低风险、可复制的现金流投资策略，带你走进理性与纪律构建的投资世界。', // 站点简介（一段话）
  avatar: '/img/SilentXx.webp', // 站点头像 logo.png or url
  showLogo: true, // 是否显示 logo 否则用 title
  author: 'SilentXx', // 作者名称

  enableJSGridCover: false, // 是否启用 color4bg 的背景
  site: 'https://www.silentxx.com',
  featuredCategories: [
    {
      link: 'options',
      label: '期权研究院',
      image: '/img/options/options1.webp',
      description: '期权策略研究、实战分析和课程分享',
    },
    {
      link: 'options/trading-journal',
      label: '实盘分享',
      image: '/img/stock/stock1.webp',
      description: '实盘交易记录',
    },
    {
      link: 'options/course',
      label: '期权课程',
      image: '/img/options/options2.webp',
      description: '期权课程',
    },
    {
      link: 'crypto/grid',
      label: '网格策略',
      image: '/img/crypto/crypto2.webp',
      description: '网格策略',
    },
    {
      link: 'crypto/futures',
      label: '合约交易',
      image: '/img/crypto/crypto4.webp',
      description: '合约交易',
    },
    {
      link: 'crypto/crypto-news',
      label: '加密风向标',
      image: '/img/crypto/crypto5.webp',
      description: '加密货币新闻',
    },
    {
      link: 'crypto',
      label: '加密实验室',
      image: '/img/crypto/crypto1.webp',
      description: '加密货币研究、交易策略和市场分析',
    },
    {
      link: 'crypto/crypto-wiki',
      label: '加密百科',
      image: '/img/crypto/crypto1.webp',
      description: '加密货币百科全书',
    },
    {
      link: 'cashflow-utopia/option-selling',
      label: '期权卖方策略',
      image: '/img/options/options5.webp',
      description: '期权卖方策略',
    },
    {
      link: 'cashflow-utopia/drip',
      label: '全球高息股轮动',
      image: '/img/stock/high-income.webp',
      description: '全球高息股轮动',
    },
    {
      link: 'cashflow-utopia',
      label: '现金流乌托邦',
      image: '/img/stock/income.webp',
      description: '构建稳定现金流的投资体系',
    },
  ],
};

// 社交媒体配置
// https://icon-sets.iconify.design/ri/
export const socialConfig: SocialConfig = {
  github: {
    url: 'https://github.com/ahehexx1982',
    icon: 'ri:github-fill',
    color: '#191717',
  },
  // Gate: {
  //   url: 'https://www.gateweb.xyz/share/VLRAXQONUW',
  //   icon: 'ri:zhihu-fill',
  //   color: '#1e88e5',
  // },
  Tiger: {
    url: 'https://tigr.link/s/30BPgOQ',
    icon: 'ri:bilibili-fill',
    color: '#da708a',
  },
  music: {
    url: 'https://music.douyin.com/qishui/share/playlist?playlist_id=7310550250141696009',
    icon: 'ri:netease-cloud-music-line',
    color: '#e60026',
  },
  email: {
    url: 'mailto:wayshine.he@qq.com',
    icon: 'ri:mail-line',
    color: '#55acd5',
  },
  twitter: {
    url: 'https://x.com/AheheXx?s=09',
    icon: 'ri:twitter-fill',
    color: '#4b9ae4',
  },
  rss: {
    url: '/rss.xml',
    icon: 'ri:rss-line',
    color: '#ff6600',
  },
  // #google: https://plus.google.com/yourname || google
  // # about: https://about.me/amehime || address-card || "#3b5998"
  // #facebook: https://www.facebook.com/yourname || facebook
  // #stackoverflow: https://stackoverflow.com/yourname || stack-overflow
  // #youtube: https://youtube.com/yourname || youtube
  // #instagram: https://instagram.com/yourname || instagram
  // #skype: skype:yourname?call|chat || skype
  // #douban: https://www.douban.com/people/yourname/ || douban
  // # weibo: https://weibo.com/amehime || weibo || "#ea716e"
};

const { title, alternate, subtitle } = siteConfig;
export const seoConfig = {
  title: `${alternate ? alternate + ' = ' : ''}${title}${subtitle ? ' = ' + subtitle : ''}`,
  description:
    'cosSpace 是基于 Next.js (App Router)、Typescript、React 和 Tailwind 开发的个人空间，是 cos_blogs 的重构版，为用户提供同时拥有博客和个人空间的平台。',
  keywords: 'cos, cosine, cos_blogs, 博客, 个人空间, 技术, 前端, cos-space',
  url: 'https://space.cosine.ren/',
};

export const defaultCoverList = [
  '/img/articles/1.webp',
  '/img/articles/2.webp',
  '/img/articles/1.webp',
  '/img/articles/3.webp',
  '/img/articles/4.webp',
  '/img/articles/5.webp',
  '/img/articles/6.webp',
  '/img/articles/7.webp',
  '/img/articles/8.webp',
  '/img/articles/9.webp',
  '/img/articles/10.webp',
  '/img/articles/11.webp',
  '/img/articles/12.webp',
  '/img/articles/13.webp',
  '/img/articles/14.webp',
  '/img/articles/15.webp',
  '/img/articles/16.webp',
  '/img/articles/17.webp',
  '/img/articles/18.webp',
  '/img/articles/19.webp',
  '/img/articles/20.webp',
  '/img/articles/21.webp',
  '/img/articles/22.webp',
  '/img/articles/23.webp',
  '/img/articles/24.webp',
  '/img/articles/25.webp',
  '/img/articles/26.webp',
  '/img/articles/27.webp',
  '/img/articles/28.webp',
  '/img/articles/29.webp',
  '/img/articles/30.webp',
  '/img/articles/31.webp',
];
