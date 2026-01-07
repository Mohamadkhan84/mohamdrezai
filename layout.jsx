import './globals.css'

export const metadata = {
  title: 'محمد رضایی | مهندس کامپیوتر',
  description: 'محمد رضایی، مهندس کامپیوتر متخصص نرم‌افزار، شبکه، سیستم‌های عامل و پشتیبانی فنی',
  keywords: ['محمد رضایی', 'مهندس کامپیوتر', 'نرم افزار', 'شبکه', 'ICDL', 'Computer Engineer'],
  authors: [{ name: 'Mohammad Rezaei' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "محمد رضایی",
              "jobTitle": "مهندس کامپیوتر",
              "url": "https://your-domain.com",
              "sameAs": [
                "https://www.linkedin.com/in/your-linkedin",
                "https://github.com/your-github"
              ],
              "alumniOf": "دیپلم کامپیوتر – نرم‌افزار و شبکه",
              "knowsAbout": [
                "ICDL",
                "شبکه‌های کامپیوتری",
                "سیستم‌های عامل",
                "Office (Excel, Word, PowerPoint)"
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
