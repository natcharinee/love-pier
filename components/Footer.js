import { useLanguage } from '../lib/language'

export default function Footer({ tagline }) {
  const { lang } = useLanguage()
  const fallbackTagline = lang === 'th'
    ? 'ทะเล <em>เปิดเสมอ</em>'
    : lang === 'zh'
      ? '海洋 <em>始终开放</em>'
      : 'THE SEA IS <em>ALWAYS OPEN</em>'
  const html = (tagline || fallbackTagline).replace(/<em>/g, '<em class="italic text-gold">');
  const copy = lang === 'th'
    ? { rights: '© 2026 Love Pier Beach Cafe · สงวนลิขสิทธิ์', brand: 'เลิฟ เพียร์' }
    : lang === 'zh'
      ? { rights: '© 2026 Love Pier Beach Cafe · 版权所有', brand: 'Love Pier' }
      : { rights: '© 2026 Love Pier Beach Cafe · All Rights Reserved', brand: 'Love Pier' }
  return (
    <footer className="bg-ink px-10 pt-16 pb-10 overflow-hidden reveal">
      <div
        className="font-display font-light text-bg tracking-[-0.03em] leading-[0.9] whitespace-nowrap overflow-hidden text-[clamp(36px,10vw,140px)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="mt-10 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase">{copy.rights}</div>
        <div className="font-display text-base font-light text-white/50 tracking-[0.2em]">{copy.brand}</div>
      </div>
    </footer>
  )
}
