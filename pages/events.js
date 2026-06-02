import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

const EVENT_LIST = [
  { day:'10', month:'May 2026', title:'Sunset Jazz Session', sub:'18:00 – 22:00 · The Terrace', cat:'Music', price: null, free: true },
  { day:'17', month:'May 2026', title:'Full Moon Night Market', sub:'17:00 – 23:00 · Beach side', cat:'Market', price: null, free: true },
  { day:'24', month:'May 2026', title:'Barista Workshop · Pour-Over Basics', sub:'10:00 – 13:00 · 8 seats', cat:'Workshop', price:'฿1,400', free: false },
  { day:'01', month:'Jun 2026', title:'Beach BBQ & Live Acoustic', sub:'17:30 – 22:00 · Outdoor', cat:'Party', price:'฿890', free: false },
  { day:'08', month:'Jun 2026', title:'Sourdough & Slow Bread Class', sub:'14:00 – 17:00 · 6 seats', cat:'Workshop', price:'฿1,800', free: false },
  { day:'15', month:'Jun 2026', title:'Father\'s Day Brunch', sub:'09:00 – 14:00 · Two seatings', cat:'Special', price:'฿650', free: false },
  { day:'22', month:'Jun 2026', title:'Vinyl Sunday · Soul & Jazz', sub:'14:00 – 18:00 · Bring records', cat:'Music', price: null, free: true },
]

const RECURRING = [
  { day:'Every Wednesday', title:'Sunrise Yoga', text:'Slow flow on the beach terrace led by our resident teacher Pim. Mats provided, donations welcome.', time:'06:30 – 07:45' },
  { day:'Every Friday', title:'Wine & Sea Sessions', text:'Five-glass tasting flight paired with cheese and conversation. Hosted by our sommelier rotating each week.', time:'18:30 – 21:00' },
  { day:'Every Sunday', title:'Long Slow Brunch', text:"Bottomless filter coffee, fresh juice, and a rotating brunch menu. We don't rush you. You shouldn't rush either.", time:'08:00 – 13:00' },
]

export default function Events() {
  return (
    <>
      <Head>
        <title>Events — Love Pier Beach Cafe</title>
      </Head>

      {/* Page header */}
      <header className="px-10 pt-16 pb-10 text-center border-b border-black/10 reveal sm:px-5 sm:pt-10 sm:pb-7">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">Upcoming Events</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">Slow mornings,<br/>loud <em className="italic text-gold">nights</em></h1>
        <p className="mt-4 text-sm text-[#666] font-light max-w-[580px] mx-auto leading-[1.8]">Live music, workshops, supper clubs, and quiet sunrise yoga. Find your next reason to come back.</p>
      </header>

      {/* Featured event */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85" alt="featured event" />
        <div className="px-16 py-20 flex flex-col justify-center sm:px-6 sm:py-12">
          <span className="inline-flex text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/50 px-3 py-1.5 mb-5 w-fit">Featured · This weekend</span>
          <h2 className="font-display font-light leading-none text-ink tracking-[-0.02em] mb-4 text-[clamp(40px,5vw,64px)]">Sunset Jazz<br/><em className="italic text-gold">Session</em></h2>
          <div className="flex gap-8 mb-6 py-4 border-t border-b border-black/10 flex-wrap sm:gap-5">
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">Sat 17 May</strong><br/>2026</div>
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">18:00 – 22:00</strong><br/>Live from 19:00</div>
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">Free entry</strong><br/>RSVP encouraged</div>
          </div>
          <p className="text-sm text-[#555] leading-[1.9] font-light mb-8 max-w-[480px]">A trio of Bangkok-based musicians, two singers, and a sunset that paints the room gold. Cocktails poured all evening; small plates from 18:30.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/reservation" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-colors duration-300">Reserve a Table</Link>
            <a href="#" className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase text-[#666] hover:text-ink transition-colors after:content-['→'] after:text-sm after:transition-transform hover:after:translate-x-1">Add to calendar</a>
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="px-10 py-20 reveal sm:px-6 sm:py-14">
        <h3 className="font-display font-light mb-12 leading-[1.05] text-[clamp(32px,4vw,48px)]">What&apos;s <em className="italic text-gold">next</em></h3>
        <div className="border-t border-black/10">
          {EVENT_LIST.map((ev, i) => (
            <div key={i} className="group grid items-center gap-8 py-7 border-b border-black/10 cursor-pointer hover:bg-[rgba(201,169,110,0.04)] hover:pl-3 transition-all duration-200 sm:gap-5 sm:py-5" style={{ gridTemplateColumns:'100px 1fr 1fr auto 32px' }}>
              <div>
                <div className="font-display text-[44px] font-light leading-none text-ink sm:text-3xl">{ev.day}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#aaa] mt-0.5">{ev.month}</div>
              </div>
              <div>
                <div className="font-display text-[22px] font-light text-ink">{ev.title}</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-muted mt-1.5">{ev.sub}</div>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{ev.cat}</div>
              {ev.free
                ? <div className="text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/50 px-2.5 py-1">Free</div>
                : <div className="font-display text-lg text-ink">{ev.price}</div>
              }
              <div className="text-muted text-base group-hover:text-ink group-hover:translate-x-1 transition-all duration-200">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recurring */}
      <section className="bg-ink text-bg px-10 py-20 reveal sm:px-6 sm:py-14">
        <h3 className="font-display font-light mb-3.5 leading-[1.05] text-[clamp(32px,4vw,48px)]">Every week, <em className="italic text-gold">without fail</em></h3>
        <p className="text-sm text-[rgba(245,243,239,0.5)] mb-12 max-w-[480px] leading-[1.8]">Things you can count on. No reservation needed — just show up.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RECURRING.map(({ day, title, text, time }) => (
            <div key={day} className="border border-white/10 px-8 py-8 hover:border-gold hover:bg-[rgba(201,169,110,0.05)] transition-all duration-300">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">{day}</div>
              <h4 className="font-display text-[26px] font-light mb-3">{title}</h4>
              <p className="text-[13px] text-[rgba(245,243,239,0.6)] leading-[1.8] font-light">{text}</p>
              <div className="mt-5 pt-4 border-t border-white/[0.08] text-[11px] tracking-[0.2em] uppercase text-[rgba(245,243,239,0.45)]">{time}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline="MOMENTS, <em>NOT MINUTES</em>" />
    </>
  )
}
