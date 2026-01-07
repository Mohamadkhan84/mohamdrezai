'use client'
import { QRCodeCanvas } from 'qrcode.react'

export default function ResumeQR() {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <QRCodeCanvas
        value="https://your-domain.com/Mohammad_Rezaei_Resume.pdf"
        size={160}
        bgColor="#ffffff"
        fgColor="#0f172a"
        level="H"
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        اسکن برای دانلود رزومه
      </p>
    </div>
  )
}
