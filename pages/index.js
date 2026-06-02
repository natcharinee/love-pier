import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

export default function Home() {
  const { lang } = useLanguage()
  const t = lang === 'th'
    ? {
        title: 'Love Pier Beach Cafe — หน้าหลัก',
        city: 'chonburi . thailand',
        hoursLabel: 'เวลาเปิดทำการ',
        hoursValue: 'ทุกวัน 09:00-18:00',
        est: 'ก่อตั้ง',
        location: 'ที่ตั้ง',
        locationValue: '800 108 แสนสุข\nอำเภอเมือง จังหวัดชลบุรี 20130',
        exploreMenu: 'ดูเมนู',
        since: 'ตั้งแต่ปี 2026',
        about1: 'Love Pier Beach Cafe ตั้งอยู่ใกล้แนวชายฝั่งของชลบุรี เป็นคาเฟ่ที่ตั้งใจให้ทุกช่วงเวลาเรียบง่ายและผ่อนคลาย',
        about2: 'เราเสิร์ฟกาแฟและเมนูอาหารที่คัดวัตถุดิบสดใหม่ในทุกวัน เพื่อให้ได้รสชาติที่สมดุลและจริงใจ',
        about3: 'ที่นี่ไม่ใช่แค่คาเฟ่ แต่เป็นพื้นที่ให้คุณพักใจ สูดลมทะเล และใช้เวลาอย่างช้าๆ',
        where: 'เมื่อชายฝั่ง\nมาเจอกับ\n<em class="italic text-gold">แก้วโปรด</em>',
        numbers: 'ตัวเลขของเรา',
        little: 'เล็กน้อยเกี่ยวกับ\n<em class="italic text-gold">สิ่งที่เราทำ</em>',
        yearsOpen: 'ปีที่เปิดบริการ',
        yearsDesc: 'ให้บริการชุมชนริมทะเลตั้งแต่ปี 2026',
        toShore: 'ระยะถึงชายหาด',
        toShoreDesc: 'เดินเพียงไม่กี่นาที ก็ถึงหาดทราย',
        menuItems: 'รายการเมนู',
        menuItemsDesc: 'กาแฟและอาหารที่ตั้งใจทำสดใหม่ทุกวัน',
        address: 'ที่อยู่',
        addressValue: '800 108 แสนสุข\nอำเภอเมือง จังหวัดชลบุรี 20130',
        hoursCompact: 'ทุกวัน · 09:00-18:00',
        contact: 'ติดต่อ',
        follow: 'ติดตาม',
      }
    : lang === 'zh'
      ? {
          title: 'Love Pier Beach Cafe — 首页',
          city: 'chonburi . thailand',
          hoursLabel: '营业时间',
          hoursValue: '每日 09:00-18:00',
          est: '创立',
          location: '地址',
          locationValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
          exploreMenu: '查看菜单',
          since: '自 2026 年起',
          about1: 'Love Pier Beach Cafe 位于春武里海岸附近，清晨海风与宁静氛围相伴。',
          about2: '我们坚持使用新鲜食材，提供精品咖啡与用心制作的简餐。',
          about3: '这里不只是咖啡馆，更是让你放慢节奏、久坐放松的地方。',
          where: '当海岸\n遇见\n<em class="italic text-gold">一杯咖啡</em>',
          numbers: '我们的数据',
          little: '关于我们\n<em class="italic text-gold">做的事</em>',
          yearsOpen: '营业年数',
          yearsDesc: '自 2026 年起服务海边社区。',
          toShore: '到海边距离',
          toShoreDesc: '步行片刻即可踏上沙滩。',
          menuItems: '菜单数量',
          menuItemsDesc: '咖啡与餐点每日新鲜制作。',
          address: '地址',
          addressValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
          hoursCompact: '每日 · 09:00-18:00',
          contact: '联系',
          follow: '关注我们',
        }
      : {
        title: 'Love Pier Beach Cafe — Home',
        city: 'chonburi . thailand',
        hoursLabel: 'Hours',
        hoursValue: 'Daily 09:00-18:00',
        est: 'Est.',
        location: 'Location',
        locationValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
        exploreMenu: 'Explore Menu',
        since: 'Since 2026',
        about1: 'Love Pier Beach Cafe sits close to the shoreline in Chonburi, where calm mornings and sea air set the pace for the day.',
        about2: 'Our menu is shaped by fresh ingredients, specialty coffee, and simple dishes prepared with care.',
        about3: 'This is more than a cafe. It is a place to slow down, stay longer, and leave refreshed.',
        where: 'Where the\nshore meets\n<em class="italic text-gold">the cup</em>',
        numbers: 'The Numbers',
        little: 'A little about\n<em class="italic text-gold">what we do</em>',
        yearsOpen: 'Years Open',
        yearsDesc: 'Serving our beachside community since 2026.',
        toShore: 'To the Shore',
        toShoreDesc: 'Only a short walk and your feet are in the sand.',
        menuItems: 'Menu Items',
        menuItemsDesc: 'Coffee and dishes prepared fresh every day.',
        address: 'Address',
        addressValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
        hoursCompact: 'Daily · 09:00-18:00',
        contact: 'Contact',
        follow: 'Follow',
      }
  const renderLines = (text) => text.split('\n').map((line, idx, arr) => (
    <span key={`${line}-${idx}`}>
      {line}
      {idx < arr.length - 1 ? <br /> : null}
    </span>
  ))

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* HERO HEADER */}
      <header className="px-10 pt-12 pb-8 text-center reveal lg:px-10 md:px-5 sm:px-5">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">{t.city}</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(40px,7vw,88px)]">Love Pier<br/>Beach Cafe</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] mt-8 pt-5 border-t border-black/10 items-start gap-4 lg:gap-0">
          <div className="text-center lg:text-left">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">{t.hoursLabel}</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">{t.hoursValue}</div>
          </div>
          <div className="text-center lg:px-10">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">{t.est}</span>
            <div className="text-xs text-[#444] leading-relaxed font-display text-[22px]">2026</div>
          </div>
          <div className="text-center lg:text-right">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">{t.location}</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">{renderLines(t.locationValue)}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 mt-5 text-[9px] tracking-[0.35em] uppercase text-[#bbb]">
          <div className="w-8 h-px bg-[#ccc]"></div>
          scroll
          <div className="w-8 h-px bg-[#ccc]"></div>
        </div>
      </header>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full aspect-video object-cover [filter:saturate(0.75)] reveal-img" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=85" alt="Love Pier Beach Cafe" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3px] mt-[3px] reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)] hover:[filter:saturate(1)] transition-[filter] duration-500" src="/uploads/drink-can-set.png" alt="Love Pier canned drinks" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)] hover:[filter:saturate(1)] transition-[filter] duration-500" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&q=80" alt="cafe" />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] px-10 py-20 items-start reveal lg:px-10 sm:px-5 sm:py-16">
        <div>
          <h2 className="font-display font-light leading-[0.92] text-ink tracking-[-0.02em] text-[clamp(40px,6vw,72px)]">Love<br/>Pier<br/><em className="italic text-gold">&amp; Coffee</em></h2>
          <Link href="/menu" className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#666] after:content-['→'] after:text-sm after:transition-transform after:duration-200 hover:after:translate-x-1">{t.exploreMenu}</Link>
        </div>
        <div className="pt-2">
          <div className="text-[9px] tracking-[0.4em] uppercase text-[#bbb] mb-5 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-[#bbb]">{t.since}</div>
          <div className="text-sm leading-[1.9] text-[#555] font-light max-w-[520px]">
            <p className="mb-4">{t.about1}</p>
            <p className="mb-4">{t.about2}</p>
            <p>{t.about3}</p>
          </div>
        </div>
      </section>

      <div className="relative w-full aspect-[16/8] overflow-hidden mt-[3px] reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover [filter:brightness(0.55)_saturate(0.5)]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85" alt="atmosphere" />
        <div className="absolute bottom-10 left-10 font-display font-light text-[rgba(255,255,255,0.85)] leading-[1.1] text-[clamp(28px,4vw,48px)] sm:bottom-6 sm:left-6" dangerouslySetInnerHTML={{ __html: t.where.replace(/\n/g, '<br/>') }} />
      </div>

      <section className="bg-white px-10 py-16 reveal lg:px-10 sm:px-5">
        <div className="mb-12">
          <span className="block text-[9px] tracking-[0.4em] uppercase text-[#bbb] mb-3">{t.numbers}</span>
          <h3 className="font-display font-light leading-[1.05] text-ink text-[clamp(28px,3.5vw,44px)]" dangerouslySetInnerHTML={{ __html: t.little.replace(/\n/g, '<br/>') }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#eee]">
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[56px] font-light text-ink leading-none tracking-[-0.02em]">200m</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">{t.toShore}</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">{t.toShoreDesc}</div>
          </div>
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[56px] font-light text-ink leading-none tracking-[-0.02em]">70+</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">{t.menuItems}</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">{t.menuItemsDesc}</div>
          </div>
        </div>
      </section>

      {/* Mosaic grid */}
      <div className="grid gap-[3px] mt-[3px] reveal" style={{ gridTemplateColumns:'repeat(12,1fr)', gridTemplateRows:'280px 280px' }}>
        <div className="overflow-hidden bg-[#e8e4de]" style={{ gridColumn:'span 7', gridRow:'span 2' }}><img className="w-full h-full object-cover [filter:saturate(0.6)] hover:[filter:saturate(0.9)] hover:scale-[1.03] transition-all duration-700" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80" alt="beach" /></div>
        <div className="overflow-hidden bg-[#e8e4de]" style={{ gridColumn:'span 5' }}><img className="w-full h-full object-cover [filter:saturate(0.6)] hover:[filter:saturate(0.9)] hover:scale-[1.03] transition-all duration-700" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80" alt="cafe" /></div>
        <div className="overflow-hidden bg-[#e8e4de]" style={{ gridColumn:'span 3' }}><img className="w-full h-full object-cover [filter:saturate(0.6)] hover:[filter:saturate(0.9)] hover:scale-[1.03] transition-all duration-700" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" alt="coffee" /></div>
        <div className="overflow-hidden bg-[#e8e4de]" style={{ gridColumn:'span 2' }}><img className="w-full h-full object-cover [filter:saturate(0.6)] hover:[filter:saturate(0.9)] hover:scale-[1.03] transition-all duration-700" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80" alt="interior" /></div>
        <div className="overflow-hidden bg-[#e8e4de]" style={{ gridColumn:'span 5' }}><img className="w-full h-full object-cover [filter:saturate(0.6)] hover:[filter:saturate(0.9)] hover:scale-[1.03] transition-all duration-700" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80" alt="pier" /></div>
      </div>

      {/* Map section */}
      <div className="reveal">
        <div className="w-full h-80 bg-[#dedad3] relative overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(0,0,0,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.06) 1px,transparent 1px)', backgroundSize:'40px 40px' }}></div>
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.5 }} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="120" x2="1200" y2="120" stroke="white" strokeWidth="8" opacity="0.6"/>
            <line x1="0" y1="200" x2="1200" y2="200" stroke="white" strokeWidth="4" opacity="0.4"/>
            <line x1="300" y1="0" x2="300" y2="320" stroke="white" strokeWidth="6" opacity="0.5"/>
            <line x1="600" y1="0" x2="600" y2="320" stroke="white" strokeWidth="4" opacity="0.4"/>
            <line x1="900" y1="0" x2="900" y2="320" stroke="white" strokeWidth="5" opacity="0.45"/>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-ink" style={{ boxShadow:'0 0 0 6px rgba(26,26,26,0.12),0 0 0 12px rgba(26,26,26,0.06)' }}></div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#444] bg-[rgba(245,243,239,0.9)] px-3 py-1">Love Pier Beach Cafe</div>
          </div>
        </div>
        <div className="bg-bg border-t border-black/10 px-10 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-10 items-start sm:px-5 sm:gap-6">
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">{t.address}</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light">{renderLines(t.addressValue)}</div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">{t.hoursLabel}</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light">{t.hoursCompact}</div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">{t.contact}</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light"><a href="tel:+6632123456" className="text-muted hover:text-ink transition-colors">+66 32 123 456</a><br/><a href="mailto:hello@lovepier.cafe" className="text-muted hover:text-ink transition-colors">hello@lovepier.cafe</a></div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">{t.follow}</span>
            <div className="flex gap-3 items-center flex-wrap">
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink hover:[&_svg]:text-bg transition-all flex items-center justify-center w-8 h-8" aria-label="Instagram"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="Facebook"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5H8v3h2.5V21h3z"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="LINE"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 4 3.6 7.3 8.5 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.6-3.4 2.6-4.9 0-4.4-4.5-8-10-8z"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="TikTok"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.3 4.3 0 0 1-2.6-1.6 4.3 4.3 0 0 1-.8-2.2h-3v12c0 1-.8 1.9-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9c0-1 .8-1.9 1.9-1.9.2 0 .4 0 .6.1V9.1a5 5 0 0 0-.6 0 5 5 0 1 0 5 5V8.4a7.4 7.4 0 0 0 4.3 1.4V6.7a4.4 4.4 0 0 1-1-.9z"/></svg></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
