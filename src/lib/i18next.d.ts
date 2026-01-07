import type en from '../locales/en.json'
import type { defaultNS } from './i18n'
import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: {
      translation: typeof en
    }
  }
}
