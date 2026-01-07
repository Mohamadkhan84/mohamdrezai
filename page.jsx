'use client'
import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import ResumeQR from '@/components/ResumeQR'

export default function Home() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-gray-100 dark:bg-darkbg text-gray-900 dark:text-gray-100 transition">
        <header className="text-center py-20 px-6">
          <h1 className="text-4xl font-bold">محمد رضایی</h1>
          <p className="mt-2 text-xl">مهندس کامپیوتر</p>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            متخصص امور نرم‌افزاری، شبکه، سیستم و امور اداری
          </p>

          <button
            onClick={() => setDark(!dark)}
            className="mt-6 px-4 py-2 border rounded"
          >
            تغییر حالت {dark ? '☀️' : '🌙'}
          </button>
        </header>

        <section className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">تماس با من</h2>
          <ContactForm />
        </section>

        <section className="text-center px-6 mt-10">
          <a
            href="/Mohammad_Rezaei_Resume.pdf"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg"
          >
            دانلود رزومه
          </a>
          <ResumeQR />
        </section>
      </main>
    </div>
  )
}
