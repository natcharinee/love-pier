import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

const EVENTS_COPY = {
  th: {
    title: 'Events — Love Pier Beach Cafe',
    up: 'อีเวนต์ที่กำลังจะมา',
    heroBrand: 'Love Pier',
    heroSuffix: 'เสิร์ฟ',
    desc: 'ดนตรีสด เวิร์กช็อป และกิจกรรมประจำสัปดาห์',
    featured: 'แนะนำ · สุดสัปดาห์นี้',
    reserve: 'จองโต๊ะ',
    add: 'เพิ่มลงปฏิทิน',
    next: 'กิจกรรมถัดไป',
    weekly: 'กิจกรรมประจำสัปดาห์',
    weeklyDesc: 'กิจกรรมที่คุณมาได้ทุกสัปดาห์',
    freeLabel: 'ฟรี',
    featuredImageAlt: 'กิจกรรมแนะนำ',
    footerTagline: 'ช่วงเวลา <em>ไม่ใช่แค่นาที</em>',
    featuredEvent: {
      title: 'Sunset Jazz',
      titleEm: 'Session',
      date: 'เสาร์ 17 พ.ค.',
      year: '2026',
      time: '18:00 – 22:00',
      timeSub: 'ดนตรีสดตั้งแต่ 19:00',
      entry: 'เข้าฟรี',
      entrySub: 'แนะนำให้จองล่วงหน้า',
      desc: 'ทรีโอนักดนตรีจากกรุงเทพฯ สองนักร้อง และพระอาทิตย์ตกที่ทาสีทองให้ห้อง ค็อกเทลเสิร์ฟตลอดค่ำคืน อาหารจานเล็กตั้งแต่ 18:30',
    },
    eventList: [
      { day: '10', month: 'พ.ค. 2026', title: 'Sunset Jazz Session', sub: '18:00 – 22:00 · เทอเรซ', cat: 'ดนตรี', price: null, free: true },
      { day: '17', month: 'พ.ค. 2026', title: 'Full Moon Night Market', sub: '17:00 – 23:00 · ริมชายหาด', cat: 'ตลาด', price: null, free: true },
      { day: '24', month: 'พ.ค. 2026', title: 'เวิร์กช็อปบาริสต้า · พื้นฐาน Pour-Over', sub: '10:00 – 13:00 · 8 ที่นั่ง', cat: 'เวิร์กช็อป', price: '฿1,400', free: false },
      { day: '01', month: 'มิ.ย. 2026', title: 'Beach BBQ & Live Acoustic', sub: '17:30 – 22:00 · กลางแจ้ง', cat: 'ปาร์ตี้', price: '฿890', free: false },
      { day: '08', month: 'มิ.ย. 2026', title: 'คลาสขนมปัง Sourdough', sub: '14:00 – 17:00 · 6 ที่นั่ง', cat: 'เวิร์กช็อป', price: '฿1,800', free: false },
      { day: '15', month: 'มิ.ย. 2026', title: 'บรันช์วันพ่อ', sub: '09:00 – 14:00 · 2 รอบ', cat: 'พิเศษ', price: '฿650', free: false },
      { day: '22', month: 'มิ.ย. 2026', title: 'Vinyl Sunday · Soul & Jazz', sub: '14:00 – 18:00 · นำแผ่นมาได้', cat: 'ดนตรี', price: null, free: true },
    ],
    recurring: [
      { day: 'ทุกวันพุธ', title: 'โยคะยามเช้า', text: 'โฟลว์ช้าๆ บนเทอเรซริมทะเล นำโดยครูพิม มีเสื่อให้ รับบริจาคตามใจ', time: '06:30 – 07:45' },
      { day: 'ทุกวันศุกร์', title: 'Wine & Sea Sessions', text: 'ชิมไวน์ 5 แก้ว คู่ชีสและบทสนทนา โฮสต์โดยซอมเมอลิเยร์ประจำสัปดาห์', time: '18:30 – 21:00' },
      { day: 'ทุกวันอาทิตย์', title: 'บรันช์ยาวๆ', text: 'กาแฟดริปไม่อั้น น้ำผลสด และเมนูบรันช์หมุนเวียน เราไม่รีบ — คุณก็ไม่ต้องรีบ', time: '08:00 – 13:00' },
    ],
  },
  zh: {
    title: 'Events — Love Pier Beach Cafe',
    up: '即将举行',
    heroBrand: 'Love Pier',
    heroSuffix: '呈献',
    desc: '现场音乐、工作坊与每周固定活动。',
    featured: '精选 · 本周末',
    reserve: '预订座位',
    add: '加入日历',
    next: '接下来',
    weekly: '每周固定活动',
    weeklyDesc: '无需预订，直接到店即可。',
    freeLabel: '免费',
    featuredImageAlt: '精选活动',
    footerTagline: '珍贵的是 <em>时刻</em>',
    featuredEvent: {
      title: 'Sunset Jazz',
      titleEm: 'Session',
      date: '5月17日 周六',
      year: '2026',
      time: '18:00 – 22:00',
      timeSub: '19:00 现场演出',
      entry: '免费入场',
      entrySub: '建议提前预约',
      desc: '曼谷三重奏、两位歌手与金色落日。鸡尾酒整晚供应，18:30 起提供小食。',
    },
    eventList: [
      { day: '10', month: '2026年5月', title: 'Sunset Jazz Session', sub: '18:00 – 22:00 · 露台', cat: '音乐', price: null, free: true },
      { day: '17', month: '2026年5月', title: 'Full Moon Night Market', sub: '17:00 – 23:00 · 海滩侧', cat: '市集', price: null, free: true },
      { day: '24', month: '2026年5月', title: '咖啡师工作坊 · 手冲基础', sub: '10:00 – 13:00 · 8 席', cat: '工作坊', price: '฿1,400', free: false },
      { day: '01', month: '2026年6月', title: '海滩烧烤 & 现场原声', sub: '17:30 – 22:00 · 户外', cat: '派对', price: '฿890', free: false },
      { day: '08', month: '2026年6月', title: '酸种面包慢烘课', sub: '14:00 – 17:00 · 6 席', cat: '工作坊', price: '฿1,800', free: false },
      { day: '15', month: '2026年6月', title: '父亲节早午餐', sub: '09:00 – 14:00 · 两场', cat: '特别', price: '฿650', free: false },
      { day: '22', month: '2026年6月', title: 'Vinyl Sunday · Soul & Jazz', sub: '14:00 – 18:00 · 欢迎自带唱片', cat: '音乐', price: null, free: true },
    ],
    recurring: [
      { day: '每周三', title: '日出瑜伽', text: '海滩露台慢流瑜伽，由常驻老师 Pim 带领。提供瑜伽垫，欢迎随喜捐赠。', time: '06:30 – 07:45' },
      { day: '每周五', title: 'Wine & Sea Sessions', text: '五杯品鉴搭配芝士与轻松交流，每周由不同侍酒师主持。', time: '18:30 – 21:00' },
      { day: '每周日', title: '慢享早午餐', text: '无限续杯手冲、鲜榨果汁与轮换早午餐菜单。我们不赶时间——您也不必赶。', time: '08:00 – 13:00' },
    ],
  },
  en: {
    title: 'Events — Love Pier Beach Cafe',
    up: 'Upcoming Events',
    heroBrand: 'Love Pier',
    heroSuffix: 'Serves',
    desc: 'Live music, workshops, supper clubs, and sunrise yoga.',
    featured: 'Featured · This weekend',
    reserve: 'Reserve a Table',
    add: 'Add to calendar',
    next: "What's next",
    weekly: 'Every week, without fail',
    weeklyDesc: 'Things you can count on. No reservation needed — just show up.',
    freeLabel: 'Free',
    featuredImageAlt: 'featured event',
    footerTagline: 'MOMENTS, <em>NOT MINUTES</em>',
    featuredEvent: {
      title: 'Sunset Jazz',
      titleEm: 'Session',
      date: 'Sat 17 May',
      year: '2026',
      time: '18:00 – 22:00',
      timeSub: 'Live from 19:00',
      entry: 'Free entry',
      entrySub: 'RSVP encouraged',
      desc: 'A trio of Bangkok-based musicians, two singers, and a sunset that paints the room gold. Cocktails poured all evening; small plates from 18:30.',
    },
    eventList: [
      { day: '10', month: 'May 2026', title: 'Sunset Jazz Session', sub: '18:00 – 22:00 · The Terrace', cat: 'Music', price: null, free: true },
      { day: '17', month: 'May 2026', title: 'Full Moon Night Market', sub: '17:00 – 23:00 · Beach side', cat: 'Market', price: null, free: true },
      { day: '24', month: 'May 2026', title: 'Barista Workshop · Pour-Over Basics', sub: '10:00 – 13:00 · 8 seats', cat: 'Workshop', price: '฿1,400', free: false },
      { day: '01', month: 'Jun 2026', title: 'Beach BBQ & Live Acoustic', sub: '17:30 – 22:00 · Outdoor', cat: 'Party', price: '฿890', free: false },
      { day: '08', month: 'Jun 2026', title: 'Sourdough & Slow Bread Class', sub: '14:00 – 17:00 · 6 seats', cat: 'Workshop', price: '฿1,800', free: false },
      { day: '15', month: 'Jun 2026', title: "Father's Day Brunch", sub: '09:00 – 14:00 · Two seatings', cat: 'Special', price: '฿650', free: false },
      { day: '22', month: 'Jun 2026', title: 'Vinyl Sunday · Soul & Jazz', sub: '14:00 – 18:00 · Bring records', cat: 'Music', price: null, free: true },
    ],
    recurring: [
      { day: 'Every Wednesday', title: 'Sunrise Yoga', text: 'Slow flow on the beach terrace led by our resident teacher Pim. Mats provided, donations welcome.', time: '06:30 – 07:45' },
      { day: 'Every Friday', title: 'Wine & Sea Sessions', text: 'Five-glass tasting flight paired with cheese and conversation. Hosted by our sommelier rotating each week.', time: '18:30 – 21:00' },
      { day: 'Every Sunday', title: 'Long Slow Brunch', text: "Bottomless filter coffee, fresh juice, and a rotating brunch menu. We don't rush you. You shouldn't rush either.", time: '08:00 – 13:00' },
    ],
  },
}

export default function Events() {
  const { lang } = useLanguage()
  const t = EVENTS_COPY[lang] || EVENTS_COPY.en
  const fe = t.featuredEvent

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      <header className="px-4 pt-12 pb-8 text-center border-b border-black/10 reveal sm:px-6 lg:px-10 lg:pt-16 lg:pb-10">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">{t.up}</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">
          <span>
            <em className="italic text-gold">{t.heroBrand}</em>
            {' '}{t.heroSuffix}
          </span>
        </h1>
        <p className="mt-4 text-sm text-[#666] font-light max-w-[580px] mx-auto leading-[1.8]">{t.desc}</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85" alt={t.featuredImageAlt} />
        <div className="px-4 py-12 flex flex-col justify-center sm:px-6 sm:py-12 lg:px-16 lg:py-20">
          <span className="inline-flex text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/50 px-3 py-1.5 mb-5 w-fit">{t.featured}</span>
          <h2 className="font-display font-light leading-none text-ink tracking-[-0.02em] mb-4 text-[clamp(40px,5vw,64px)]">{fe.title}<br /><em className="italic text-gold">{fe.titleEm}</em></h2>
          <div className="flex gap-8 mb-6 py-4 border-t border-b border-black/10 flex-wrap sm:gap-5">
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">{fe.date}</strong><br />{fe.year}</div>
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">{fe.time}</strong><br />{fe.timeSub}</div>
            <div className="text-[11px] tracking-[0.2em] text-muted uppercase"><strong className="text-ink font-medium">{fe.entry}</strong><br />{fe.entrySub}</div>
          </div>
          <p className="text-sm text-[#555] leading-[1.9] font-light mb-8 max-w-[480px]">{fe.desc}</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/reservation" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-colors duration-300">{t.reserve}</Link>
            <a href="#" className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase text-[#666] hover:text-ink transition-colors after:content-['→'] after:text-sm after:transition-transform hover:after:translate-x-1">{t.add}</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <h3 className="font-display font-light mb-12 leading-[1.05] text-[clamp(32px,4vw,48px)]">{t.next}</h3>
        <div className="border-t border-black/10">
          {t.eventList.map((ev, i) => (
            <div key={i} className="group grid items-center gap-4 sm:gap-5 lg:gap-8 py-5 sm:py-6 lg:py-7 border-b border-black/10 cursor-pointer hover:bg-[rgba(201,169,110,0.04)] transition-all duration-200 lg:hover:pl-3 grid-cols-1 sm:grid-cols-[100px_1fr_auto] lg:grid-cols-[100px_1fr_1fr_auto_32px]">
              <div>
                <div className="font-display text-[44px] font-light leading-none text-ink sm:text-3xl">{ev.day}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#aaa] mt-0.5">{ev.month}</div>
              </div>
              <div>
                <div className="font-display text-[22px] font-light text-ink">{ev.title}</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-muted mt-1.5">{ev.sub}</div>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold lg:justify-self-start">{ev.cat}</div>
              {ev.free
                ? <div className="text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/50 px-2.5 py-1 w-fit">{t.freeLabel}</div>
                : <div className="font-display text-lg text-ink w-fit">{ev.price}</div>
              }
              <div className="hidden lg:block text-muted text-base group-hover:text-ink group-hover:translate-x-1 transition-all duration-200">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bg px-4 py-14 reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <h3 className="font-display font-light mb-3.5 leading-[1.05] text-[clamp(32px,4vw,48px)]">{t.weekly}</h3>
        <p className="text-sm text-[rgba(245,243,239,0.5)] mb-12 max-w-[480px] leading-[1.8]">{t.weeklyDesc}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.recurring.map(({ day, title, text, time }) => (
            <div key={day} className="border border-white/10 px-6 py-7 sm:px-8 sm:py-8 hover:border-gold hover:bg-[rgba(201,169,110,0.05)] transition-all duration-300">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">{day}</div>
              <h4 className="font-display text-[26px] font-light mb-3">{title}</h4>
              <p className="text-[13px] text-[rgba(245,243,239,0.6)] leading-[1.8] font-light">{text}</p>
              <div className="mt-5 pt-4 border-t border-white/[0.08] text-[11px] tracking-[0.2em] uppercase text-[rgba(245,243,239,0.45)]">{time}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline={t.footerTagline} />
    </>
  )
}
