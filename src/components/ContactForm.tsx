import { format } from 'date-fns'
import { el, enUS } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { DateRange } from 'react-day-picker' // Import this for types
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

// Map your i18n keys to date-fns locale objects
const localeMap: Record<string, any> = {
  en: enUS,
  el: el,
}

interface BookingFormData {
  name: string
  email: string
  message: string
  date: DateRange | undefined
}

const ContactForm = () => {
  const { i18n, t } = useTranslation()

  const currentLocale = localeMap[i18n.language]

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    message: '',
    date: undefined,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation for range: Ensure both start and end dates are picked
    if (!formData.date?.from || !formData.date.to) {
      alert('Please select a valid date range for your booking.')
      return
    }

    console.log('Form submitted:', formData)
    alert('Thanks for your interest! We will contact you soon.')

    setFormData({ name: '', email: '', message: '', date: undefined })
  }

  let differenceInDays = null
  if (formData.date?.from && formData.date.to) {
    differenceInDays =
      (new Date(formData.date.to).getTime() -
        new Date(formData.date.from).getTime()) /
      (1000 * 60 * 60 * 24)
  }

  console.log(differenceInDays)

  return (
    <CustomSection className="flex-col ">
      <div id="contact">
        <SectionTitle className="text-center">{t('form.title')}</SectionTitle>
        <SectionSubtitle className="text-center">
          {t('form.subtitle')}
        </SectionSubtitle>
      </div>
      <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-text-main text-sm font-bold" htmlFor="name">
            {t('form.name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Jane Doe"
            className="h-12 w-full rounded-lg border border-border-light bg-background-light px-4 text-text-main placeholder-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-text-main text-sm font-bold" htmlFor="email">
            {t('form.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. jane@example.com"
            className="h-12 w-full rounded-lg border border-border-light bg-background-light px-4 text-text-main placeholder-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date Picker Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-text-main text-sm font-bold">
            {t('form.dates.title')}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'h-12 w-full justify-start text-left font-normal rounded-lg border-border-light bg-background-light px-4 hover:bg-background-light focus:ring-2 focus:ring-primary/20',
                  !formData.date && 'text-text-secondary',
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date?.from ? (
                  formData.date.to ? (
                    <>
                      {format(formData.date.from, 'PP', {
                        locale: currentLocale,
                      })}
                      {' - '}
                      {format(formData.date.to, 'PP', {
                        locale: currentLocale,
                      })}
                    </>
                  ) : (
                    format(formData.date.from, 'PP', {
                      locale: currentLocale,
                    })
                  )
                ) : (
                  <span>{t('form.dates.empty')}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                autoFocus
                mode="range" // Range mode enabled
                defaultMonth={formData.date?.from}
                selected={formData.date}
                onSelect={(newRange) =>
                  setFormData((prev) => ({ ...prev, date: newRange }))
                }
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          {differenceInDays && (
            <div className="text-xs">
              {t('form.total')}: {differenceInDays} {t('form.days')}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-text-main text-sm font-bold" htmlFor="message">
            {t('form.message.title')}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t('form.message.placeholder')}
            rows={4}
            className="w-full rounded-lg border border-border-light bg-background-light p-4 text-text-main placeholder-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button type="submit" className="mt-2 h-12 w-full text-base">
          {t('form.btn')}
        </Button>
      </form>
    </CustomSection>
  )
}

export default ContactForm
