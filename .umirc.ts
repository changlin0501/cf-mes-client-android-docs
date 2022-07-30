import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'CF MES',
  logo: '/images/logo.png',
  theme: {
    '@primary-color': '#1DA57A',
  },
  //加入多语言
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文简体'],
    ['zh-TW', '中文繁體'],
  ],
  favicon: '/favicon.ico',
});
