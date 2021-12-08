import { RouteLocationRaw } from 'vue-router'
import { API } from '../enum/api'
import router from '../router'

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: API };

export function useGo() {
  const { push, replace } = router

  function go(opt: string | RouteLocationRawEx | API = API.LOGIN, isReplace = false) {
    if (typeof opt === 'string') {
      isReplace ? replace(opt) : push(opt)
    } else {
      const o = opt as RouteLocationRaw
      isReplace ? replace(o) : push(o)
    }
  }

  return go
}

export function useBack() {
  const { back } = router
  back()
}
