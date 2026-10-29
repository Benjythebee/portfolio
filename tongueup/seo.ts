import type { Plugin } from 'vite'
import en from './locales/en'
import fr from './locales/fr'

const SITE_URL = 'https://tongueup.benjylarcher.com/'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jybenlarcher.tongueup'

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const faqItems = Object.values(en.faq.items)
const features = Object.values(en.features)
  .filter((value) => typeof value === 'object')
  .map((value) => value as { title: string; body: string })

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: en.title,
    alternateName: fr.title,
    url: SITE_URL,
    image: `${SITE_URL}icon.png`,
    description: en.hero.subtitle,
    operatingSystem: 'Android',
    applicationCategory: 'HealthApplication',
    inLanguage: ['en', 'fr'],
    installUrl: PLAY_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Jyben Larcher' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  }
]

/** Plain copy of the home page, for crawlers that don't run JavaScript (most AI ones) */
const staticContent = `
      <div style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
        <h1>${escapeHtml(en.hero.titleStart + en.hero.titleHighlight)}</h1>
        <p>${escapeHtml(en.hero.subtitle)}</p>
        <p><a href="${PLAY_STORE_URL}">${escapeHtml(en.google_play_alt)}</a>: ${escapeHtml([en.hero.free, en.hero.noAccount, en.hero.offline].join(', '))}.</p>
        <h2>${escapeHtml(en.features.title)}</h2>
        <ul>${features.map(({ title, body }) => `<li><strong>${escapeHtml(title)}</strong>: ${escapeHtml(body)}</li>`).join('')}</ul>
        <h2>${escapeHtml(en.privacy.title)}</h2>
        <p>${escapeHtml(en.privacy.body)} <a href="/privacy">${escapeHtml(en.privacy.readPolicy)}</a></p>
        <h2>${escapeHtml(en.faq.title)}</h2>
        ${faqItems.map(({ q, a }) => `<h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p>`).join('')}
      </div>
    `

/** Adds structured data and the static copy to index.html; React replaces the copy on mount */
export const seo = (): Plugin => ({
  name: 'tongueup-seo',
  transformIndexHtml: (html) =>
    html
      .replace(
        '</head>',
        `  <script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>\n  </head>`
      )
      .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`)
})
