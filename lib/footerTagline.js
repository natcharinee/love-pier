export const FOOTER_TAGLINE_FALLBACK = {
  th: 'ทะเล <em>เปิดเสมอ</em>',
  zh: '海洋 <em>始终开放</em>',
  en: 'THE SEA IS <em>ALWAYS OPEN</em>',
}

export function stripTaglineHtml(text) {
  return text.replace(/<[^>]*>/g, '')
}

/** Longer taglines need a smaller clamp so they fit mobile widths. */
export function footerTaglineSizeClass(text) {
  const len = stripTaglineHtml(text).trim().length
  return len > 20 ? 'footer-tagline footer-tagline--long' : 'footer-tagline'
}
