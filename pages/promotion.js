import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

const DEALS = [
  {
    badge: 'Weekday Set',
    title: 'Brunch for Two',
    price: '฿480', orig: '฿620', disc: '−23%',
    desc: 'Two brunch plates, two filter coffees or teas, one small dessert to share. Available Mon–Fri 09:00–13:00.',
    validity: 'Until 31 May',
    cta: 'Book', href: '/reservation',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
  },
  {
    badge: 'Take Home',
    title: 'Beans of the Month',
    price: '฿390', orig: '฿450', disc: '−13%',
    desc: '250g of our featured single-origin, freshly roasted this week. Free in-store grind to your method.',
    validity: 'While stock lasts',
    cta: 'Reserve a bag', href: '#',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
  {
    badge: 'Weekend',
    title: 'Sunset Grill Plate',
    price: '฿520', orig: '฿680', disc: '−24%',
    desc: 'Catch of the day grilled with lemon-herb butter, served with sea salt potatoes and house slaw.',
    validity: 'Fri–Sun, 17:00 only',
    cta: 'Book', href: '/reservation',
    img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80',
  },
  {
    badge: 'Limited',
    title: 'Caramel Sea Salt Latte',
    price: '฿120', orig: '฿150', disc: '−20%',
    desc: 'Limited-edition May menu only. House caramel, two espresso shots, sea salt foam cap.',
    validity: 'May only',
    cta: 'See menu', href: '/menu',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    badge: 'Workshop',
    title: 'Barista Bundle',
    price: '฿1,200', orig: '฿1,400', disc: '−14%',
    desc: 'Book any workshop & take home a 250g bag of beans, plus three free pour-overs to practice.',
    validity: 'Until 30 Jun',
    cta: 'Book class', href: '/events',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
  },
  {
    badge: 'Gift',
    title: 'Gift Card · ฿1,000',
    price: '฿900', orig: '฿1,000', disc: '−10%',
    desc: 'Buy a ฿1,000 gift card for ฿900. Valid 12 months, redeemable for anything on our menu.',
    validity: 'Any time',
    cta: 'Purchase', href: '/contact',
    img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',
  },
]

export default function Promotion() {
  const { lang } = useLanguage()
  const t = lang === 'th'
    ? { title:'Promotion — Love Pier Beach Cafe', may:'โปรโมชันเดือนนี้ · จำกัดเวลา', hero:'Sunset Hour\nลดครึ่งราคา', desc:'ทุกวันธรรมดา 17:00–18:30 เครื่องดื่มลด 50%', reserve:'จองที่นั่ง', view:'ดูเมนู', month:'เดือนนี้', deals:'ดีลพิเศษและ\nข้อเสนอประจำฤดูกาล', loyalty:'The Pier Loyalty', join:'สมัครฟรี' }
    : lang === 'zh'
      ? { title:'Promotion — Love Pier Beach Cafe', may:'本月优惠 · 限时', hero:'Sunset Hour\n半价优惠', desc:'工作日 17:00–18:30 饮品全部五折。', reserve:'预订座位', view:'查看菜单', month:'本月', deals:'套餐优惠与\n季节限定', loyalty:'The Pier Loyalty', join:'免费加入' }
      : { title:'Promotion — Love Pier Beach Cafe', may:'May Promotion · Limited', hero:'Sunset Hour\nat half-price', desc:'Every weekday from 17:00–18:30, all coffee and refresher drinks are 50% off.', reserve:'Reserve a Spot', view:'View Menu', month:'This month', deals:'Set deals &\nseasonal offers', loyalty:'The Pier Loyalty', join:'Join free' }
  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Hero promo */}
      <section className="relative w-full h-[480px] overflow-hidden border-b border-black/10 reveal-img sm:h-[380px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover [filter:brightness(0.6)_saturate(0.6)]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=85" alt="promotion hero" />
        <div className="absolute inset-0 flex flex-col justify-center px-16 text-bg max-w-[720px] sm:px-6">
          <span className="inline-flex text-[10px] tracking-[0.4em] uppercase text-gold px-3.5 py-1.5 border border-gold/50 mb-6 w-fit">{t.may}</span>
          <h1 className="font-display font-light leading-[0.95] tracking-[-0.02em] text-[clamp(48px,7vw,92px)]">{t.hero.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
          <p className="mt-5 text-sm leading-[1.8] text-[rgba(245,243,239,0.75)] font-light max-w-[480px]">{t.desc}</p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/reservation" className="inline-block bg-gold text-ink text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-bg transition-colors duration-300">{t.reserve}</Link>
            <Link href="/menu" className="inline-block bg-transparent text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 border border-white/30 hover:border-white hover:text-white transition-colors duration-300">{t.view}</Link>
          </div>
        </div>
      </section>

      {/* Promo section */}
      <section className="px-10 py-20 border-b border-black/10 reveal sm:px-6 sm:py-14">
        <div className="flex justify-between items-end mb-12 gap-8 flex-wrap">
          <div>
            <span className="block text-[10px] tracking-[0.4em] uppercase text-gold mb-3">{t.month}</span>
            <h2 className="font-display font-light leading-[1.05] text-[clamp(36px,4.5vw,56px)]">{t.deals.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h2>
          </div>
          <p className="text-xs text-[#999] tracking-[0.05em] max-w-[280px] leading-relaxed">Available in-store only. Cannot be combined with loyalty redemptions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {DEALS.map(({ badge, title, price, orig, disc, desc, validity, cta, href, img }) => (
            <div key={title} className="flex flex-col bg-white overflow-hidden border border-black/10 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)]" src={img} alt={title} />
              <div className="p-7 flex flex-col gap-3 flex-1">
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-2.5 py-1 self-start">{badge}</span>
                <h3 className="font-display text-[26px] font-light text-ink leading-[1.1]">{title}</h3>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display text-[32px] text-gold font-light">{price}</span>
                  <span className="text-sm text-[#aaa] line-through">{orig}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold bg-gold/10 px-2.5 py-1">{disc}</span>
                </div>
                <p className="text-[13px] text-[#777] leading-[1.7] font-light flex-1">{desc}</p>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-black/10">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#aaa]">{validity}</span>
                  <Link href={href} className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase text-[#666] hover:text-ink transition-colors after:content-['→'] after:text-sm after:transition-transform hover:after:translate-x-1">{cta}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loyalty */}
      <section className="bg-ink text-bg px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal sm:px-6 sm:py-14 sm:gap-9">
        <div>
          <h2 className="font-display font-light leading-none tracking-[-0.02em] mb-5 text-[clamp(40px,5vw,60px)]">{t.loyalty}</h2>
          <p className="text-sm text-[rgba(245,243,239,0.65)] leading-[1.9] font-light mb-7 max-w-[460px]">One card. Every coffee counts. Reach a new tier and unlock perks that don&apos;t expire — we keep track so you don&apos;t have to.</p>
          <a href="#" className="inline-block bg-gold text-ink text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-bg transition-colors duration-300">{t.join}</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 bg-white/[0.06] p-1">
          {[
            { tier:'Sand', visits:'5 visits', perks:'Free upgrade to large\non any drink' },
            { tier:'Tide', visits:'15 visits', perks:'One free drink\n+ priority seating' },
            { tier:'Horizon', visits:'30 visits', perks:'Free brunch each month\n+ workshop discount' },
          ].map(({ tier, visits, perks }) => (
            <div key={tier} className="bg-white/[0.04] px-5 py-7 text-center">
              <h4 className="font-display text-[22px] font-light text-gold mb-2">{tier}</h4>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[rgba(245,243,239,0.4)] mb-3.5">{visits}</div>
              <div className="text-xs text-[rgba(245,243,239,0.7)] leading-relaxed whitespace-pre-line">{perks}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fine print */}
      <section className="bg-bg px-10 py-12 text-center sm:px-6 sm:py-8">
        <p className="text-[11px] text-[#aaa] leading-[1.8] tracking-[0.05em] max-w-[760px] mx-auto">All promotions valid in-store only and subject to availability. Set deals cannot be combined. Discounts apply to listed items only and are not stackable with loyalty redemptions. Love Pier reserves the right to amend offers at any time. See staff for current terms.</p>
      </section>

      <Footer tagline="A LITTLE EXTRA, <em>EVERY DAY</em>" />
    </>
  )
}
