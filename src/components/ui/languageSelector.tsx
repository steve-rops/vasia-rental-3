import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '/flags/gb.svg' },
  { code: 'el', label: 'Ελληνικά', flag: '/flags/gr.svg' },
] as const

export function LanguageSelector() {
  const { i18n, t } = useTranslation()

  const currentLanguage =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Select value={currentLanguage.code} onValueChange={handleLanguageChange}>
      <SelectTrigger className="xborder-none shadow-none focus:ring-0">
        <SelectValue>
          <img
            className="size-4 rounded-sm object-cover"
            src={currentLanguage.flag}
            alt={currentLanguage.label}
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('header.languageSelector')}</SelectLabel>
          {LANGUAGES.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center gap-2">
                <img
                  className="size-4 rounded-sm object-cover"
                  src={language.flag}
                  alt={language.label}
                />
                <span>{language.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
