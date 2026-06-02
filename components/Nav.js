import Link from 'next/link'
import { useRouter } from 'next/router'

const LEFT  = [{ href: '/', label: 'Home' }, { href: '/menu', label: 'Menu' }, { href: '/gallery', label: 'Gallery' }]
const RIGHT = [{ href: '/location', label: 'Location' }, { href: '/contact', label: 'Contact' }]

export default function Nav({ onOpenMenu }) {
  const { pathname } = useRouter()
  const lc = (href) => `hidden lg:block text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${pathname === href ? 'text-ink' : 'text-muted hover:text-ink'}`
  return (
    <nav className="w-full px-10 py-[14px] flex items-center justify-between border-b border-black/10 bg-[rgba(245,243,239,0.92)] backdrop-blur-sm sticky top-0 z-[100]">
      <div className="flex items-center gap-8">
        <button onClick={onOpenMenu} className="flex flex-col justify-center items-center gap-[5px] bg-transparent border border-black/[0.12] w-[38px] h-[38px] hover:border-ink transition-colors" aria-label="Open menu">
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
        </button>
        {LEFT.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
      </div>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/logo-8dc1f126.png" alt="Love Pier Beach Cafe" className="h-[52px] w-auto mix-blend-multiply block" />
      </Link>
      <div className="flex items-center gap-6">
        {RIGHT.map(n => <Link key={n.href} href={n.href} className={lc(n.href)}>{n.label}</Link>)}
        <Link href="/reservation" className="text-[10px] tracking-[0.25em] uppercase text-bg bg-ink px-[18px] py-[9px] hover:bg-gold hover:text-ink transition-colors duration-200">Reserve</Link>
      </div>
    </nav>
  )
}
