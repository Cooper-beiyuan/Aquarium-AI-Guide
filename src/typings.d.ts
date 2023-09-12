declare module '*.slash2'
declare module '*.less'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

interface Window {
  sensors: {
    login: (data: any) => void
    track: (n: string, func: (data: any) => void) => void
    quick: (n: string, target?: any, func?: (data: any) => void) => void
  }
  eruda: any
  VConsole: any
  debugCount: number
}

declare const __APP_ENV__: string
declare const APP_NAME: string
