import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../lib/language'

const COPY = {
  en: {
    left: [{ href: '/', label: 'Home' }, { href: '/menu', label: 'Menu' }, { href: '/gallery', label: 'Gallery' }],
    right: [],
    reserve: 'Reserve',
  },
  th: {
    left: [{ href: '/', label: 'หน้าหลัก' }, { href: '/menu', label: 'เมนู' }, { href: '/gallery', label: 'แกลเลอรี' }],
    right: [],
    reserve: 'จองโต๊ะ',
  },
  zh: {
    left: [{ href: '/', label: '首页' }, { href: '/menu', label: '菜单' }, { href: '/gallery', label: '图库' }],
    right: [],
    reserve: '预订',
  },
}

export default function Nav({ onOpenMenu }) {
  const { pathname } = useRouter()
  const { lang, setLang } = useLanguage()
  const dict = COPY[lang] || COPY.en
  const lc = (href) => `hidden lg:block text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${pathname === href ? 'text-ink' : 'text-muted hover:text-ink'}`
  return (
    <nav className="w-full px-4 py-3 sm:px-6 lg:px-10 lg:py-[14px] flex items-center justify-between border-b border-black/10 bg-[rgba(245,243,239,0.92)] backdrop-blur-sm sticky top-0 z-[100] gap-2">
      <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
        <button onClick={onOpenMenu} className="flex flex-col justify-center items-center gap-[5px] bg-transparent border border-black/[0.12] w-9 h-9 sm:w-[38px] sm:h-[38px] hover:border-ink transition-colors shrink-0" aria-label="Open menu">
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
        </button>
        {dict.left.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
      </div>
      <Link href="/" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/logo-8dc1f126.png" alt="Love Pier Beach Cafe" className="h-10 sm:h-11 lg:h-[52px] w-auto mix-blend-multiply block" />
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 min-w-0">
        {dict.right.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
        <div className="hidden md:flex items-center border border-black/[0.12] shrink-0">
          <button onClick={() => setLang('en')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'en' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to English">EN</button>
          <button onClick={() => setLang('th')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'th' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to Thai">TH</button>
          <button onClick={() => setLang('zh')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'zh' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to Chinese">ZH</button>
        </div>
        <Link href="/reservation" className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-bg bg-ink px-3 py-2 sm:px-[18px] sm:py-[9px] hover:bg-gold hover:text-ink transition-colors duration-200 whitespace-nowrap">{dict.reserve}</Link>
      </div>
    </nav>
  )
}
