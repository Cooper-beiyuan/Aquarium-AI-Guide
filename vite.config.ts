import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import prebuildMultiplePlugin from './plugins/prebuild-plugin'

// todo 如果发布有额外配置 请更改次路径 并与publish.json同步更新
const APP_NAME = 'activity'
const templatePath = './assets/index.html'

const { ENV: env = 'local' } = process.env
const domain = 'https://business.xiongmaoboshi.com'
const root = {
  dev: `/${APP_NAME}/dev/`,
  pre: `/${APP_NAME}/pre/`,
  prod: `/${APP_NAME}/`,
}
const base = root[env] ? domain + root[env] : './'

const isLocal = !env

export default defineConfig({
  base: env ? base : '/',
  plugins: [react(), prebuildMultiplePlugin(templatePath)],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  define: {
    __APP_ENV__: `"${env}"`,
    APP_NAME: `"${APP_NAME}"`,
  },
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: 'camelCase',
      // 类名 前缀
      generateScopedName: '[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
      },
    },
  },
  build: {
    rollupOptions: {},
    outDir: 'dist',
    sourcemap: isLocal,
    manifest: true,
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '^/shop-api/.*': {
        target: 'https://ola-dev.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
      '^/s/.*': {
        target: 'https://staging-subs.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
      '^/ns/.*': {
        target: 'https://staging-subs.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
      '^/code/.*': {
        target: 'https://staging-subs.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
      '^/wechat/.*': {
        target: 'https://staging-subs.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
      '^/fc-ca/.*': {
        target: 'https://fc.xiongmaoboshi.com/h5/dev',
        secure: false,
        changeOrigin: true,
      },
      '^/promotion/.*': {
        target: 'https://fenxiao.xiongmaoboshi.com',
        secure: false,
        changeOrigin: true,
      },
    },
    open: '/drpanda/index/',
  },
})
