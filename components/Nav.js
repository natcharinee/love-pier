import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../lib/language'

const COPY = {
  en: {
    left: [{ href: '/', label: 'Home' }, { href: '/menu', label: 'Menu' }, { href: '/gallery', label: 'Gallery' }],
    right: [{ href: '/location', label: 'Location' }, { href: '/contact', label: 'Contact' }],
    reserve: 'Reserve',
  },
  th: {
    left: [{ href: '/', label: 'หน้าหลัก' }, { href: '/menu', label: 'เมนู' }, { href: '/gallery', label: 'แกลเลอรี' }],
    right: [{ href: '/location', label: 'ที่ตั้ง' }, { href: '/contact', label: 'ติดต่อ' }],
    reserve: 'จองโต๊ะ',
  },
  zh: {
    left: [{ href: '/', label: '首页' }, { href: '/menu', label: '菜单' }, { href: '/gallery', label: '图库' }],
    right: [{ href: '/location', label: '地址' }, { href: '/contact', label: '联系' }],
    reserve: '预订',
  },
}

export default function Nav({ onOpenMenu }) {
  const { pathname } = useRouter()
  const { lang, setLang } = useLanguage()
  const dict = COPY[lang] || COPY.en
  const lc = (href) => `hidden lg:block text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${pathname === href ? 'text-ink' : 'text-muted hover:text-ink'}`
  return (
    <nav className="w-full px-10 py-[14px] flex items-center justify-between border-b border-black/10 bg-[rgba(245,243,239,0.92)] backdrop-blur-sm sticky top-0 z-[100]">
      <div className="flex items-center gap-8">
        <button onClick={onOpenMenu} className="flex flex-col justify-center items-center gap-[5px] bg-transparent border border-black/[0.12] w-[38px] h-[38px] hover:border-ink transition-colors" aria-label="Open menu">
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
        </button>
        {dict.left.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
      </div>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/logo-8dc1f126.png" alt="Love Pier Beach Cafe" className="h-[52px] w-auto mix-blend-multiply block" />
      </Link>
      <div className="flex items-center gap-6">
        {dict.right.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
        <div className="hidden md:flex items-center border border-black/[0.12]">
          <button onClick={() => setLang('en')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'en' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to English">EN</button>
          <button onClick={() => setLang('th')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'th' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to Thai">TH</button>
          <button onClick={() => setLang('zh')} className={`px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase ${lang === 'zh' ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`} aria-label="Switch to Chinese">ZH</button>
        </div>
        <Link href="/reservation" className="text-[10px] tracking-[0.25em] uppercase text-bg bg-ink px-[18px] py-[9px] hover:bg-gold hover:text-ink transition-colors duration-200">{dict.reserve}</Link>
      </div>
    </nav>
  )
}
