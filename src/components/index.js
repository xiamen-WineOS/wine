import { camelToKebab } from '@/utils'
import Mod from '@/components/Mod'

export const components = {
  Mod
}

export default {
  install (Vue, opts = {}) {
    Object.entries(components).forEach(([k, v]) => Vue.component(camelToKebab(k), v))
  }
}
