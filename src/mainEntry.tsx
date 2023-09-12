import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProjectType, WechatShareConfigType } from './common/type'
import wechat from './services/wechat'
import sensors from './utils/sensors'

import Loading from '@/components/Loading'
import Toast from '@/components/Toast'
import { StoreProvider } from '@/store'
import debug from '@/utils/debug'
import flexible from '@/utils/flexible'
import '@/styles/reset.less'

let container: HTMLElement | null = null

function renderReactDOM(App: React.FC) {
  if (!container) {
    container = document.getElementById('root') as HTMLElement
    const root = ReactDOM.createRoot(container)
    root.render(
      <StoreProvider>
        <App />
        {React.createElement(Loading.init)}
        {React.createElement(Toast.init)}
      </StoreProvider>,
    )
  }
}

interface IMainEntry {
  app: React.FC
  project?: ProjectType | ProjectType[]
  initWechat?: boolean
  wechatShareConfig?: WechatShareConfigType
  autoWxShare?: boolean
}

function mainEntry(config: IMainEntry) {
  const { app, project, initWechat, wechatShareConfig, autoWxShare = true } = config
  debug()
  flexible()
  sensors.init(project)
  /** 异步去初始化微信sdk */
  if (initWechat) {
    wechat.initWechatSDK(wechatShareConfig, autoWxShare)
  }
  renderReactDOM(app)
}

export default mainEntry
