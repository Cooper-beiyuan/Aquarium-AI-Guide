import { useEffect, useRef } from 'react'

import { useMemoizedFn } from './index'

/**
 * @description 防抖
 * @param fn 防抖函数体
 * @param delay 延迟时间
 * @param immediate 是否立即执行一次函数
 *  */
function useDebounce<T extends Function>(fn: T, delay: number, immediate?: boolean): T {
  const { current } = useRef<{ fn: T; timer: NodeJS.Timeout | null; isTm: boolean }>({
    fn,
    timer: null,
    isTm: true,
  })

  useEffect(() => {
    current.fn = fn
  }, [fn])

  return useMemoizedFn((...args) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    // 需要立即执行函数
    if (current.isTm && immediate) {
      current.fn.call(null, ...args)
      current.isTm = false
    } else {
      current.timer = setTimeout(() => {
        current.fn.call(null, ...args)
        current.isTm = true
      }, delay)
    }
  }) as unknown as T
}
export default useDebounce
