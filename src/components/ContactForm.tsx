import React, { useState } from 'react'
import { Button } from './ui/button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    console.log('Form submitted:', formData)
    alert('Thanks for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 bg-primary/5"
    >
      <div className="flex flex-col max-w-[560px] flex-1">
        <div className="bg-white rounded-2xl p-8 border border-border-light shadow-md">
          <div className="flex flex-col gap-2 mb-6 text-center">
            <h2 className="text-text-main text-2xl font-bold">
              Interested in Pricing?
            </h2>
            <p className="text-text-secondary text-sm">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label
                className="text-text-main text-sm font-bold"
                htmlFor="name"
              >
                Full Name
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

            <div className="flex flex-col gap-1.5">
              <label
                className="text-text-main text-sm font-bold"
                htmlFor="email"
              >
                Email Address
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

            <div className="flex flex-col gap-1.5">
              <label
                className="text-text-main text-sm font-bold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="I'm interested in viewing the apartment..."
                rows={4}
                className="w-full rounded-lg border border-border-light bg-background-light p-4 text-text-main placeholder-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button type="submit" className="mt-2 h-12 w-full text-base">
              Request Details
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
