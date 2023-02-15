import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonEnglish from './translations/en/common.json'
import commonSpanish from './translations/es/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    resources: {
      es: {
        common: commonSpanish
      },
      en: {
        common: commonEnglish
      }
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
