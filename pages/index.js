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
        hoursValue: 'เปิดทุกวัน (ยกเว้นวันพุธ) 09:00-18:00',
        est: 'ก่อตั้ง',
        location: 'ที่ตั้ง',
        locationValue: '800 108 แสนสุข\nอำเภอเมือง จังหวัดชลบุรี 20130',
        exploreMenu: 'ดูเมนู',
        since: 'ตั้งแต่ปี 2026',
        about1: '<strong>LOVE PIER BEACH CAFE</strong> คาเฟ่ริมชายหาดบางแสน ที่ให้ทุกมื้อพิเศษกว่าที่เคย',
        about2: 'สัมผัสรสชาติของ "<em class="italic">ข้าวมันไก่สิงคโปร์และข้าวมันไก่ไหหลำ สูตรต้นตำรับ</em>" พร้อมจิบเครื่องดื่มซิกเนเจอร์ ที่ได้แรงบันดาลใจจาก "<em class="italic">ข้าวหลามหนองมน</em>" เอกลักษณ์แห่งบางแสนที่ถูกถ่ายทอดออกมาในรูปแบบใหม่ อย่างละมุน',
        about3: 'นั่งรับลมทะเล ฟังเสียงคลื่นเบา ๆ ท่ามกลางบรรยากาศอบอุ่นริมชายหาด และเก็บภาพความทรงจำที่มุมท่าเรือสุดโรแมนติก',
        about4: 'เพราะบางช่วงเวลาที่สวยงาม ไม่ได้ต้องการอะไรมากไปกว่าอาหารดี ๆ เครื่องดื่มแก้วโปรด และคนพิเศษที่นั่งมองพระอาทิตย์ตกไปด้วยกัน ที่ <strong class="italic">LOVE PIER BEACH CAFE</strong>',
        where: 'เมื่อชายฝั่ง\nมาเจอกับ\n<em class="italic text-gold">จานโปรด</em>',
        numbers: 'ตัวเลขของเรา',
        little: 'เกี่ยวกับ\n<em class="italic text-gold">Love Pier</em>',
        yearsOpen: 'ปีที่เปิดบริการ',
        yearsDesc: 'ให้บริการชุมชนริมทะเลตั้งแต่ปี 2026',
        toShore: 'ระยะถึงชายหาด',
        toShoreDesc: 'เดินเพียงไม่กี่นาที ก็ถึงหาดทราย',
        menuItems: 'รายการเมนู',
        menuItemsDesc: 'กาแฟและอาหารที่ตั้งใจทำสดใหม่ทุกวัน',
        address: 'ที่อยู่',
        addressValue: '800 108 แสนสุข\nอำเภอเมือง จังหวัดชลบุรี 20130',
        hoursCompact: 'เปิดทุกวัน (ยกเว้นวันพุธ) · 09:00-18:00',
        contact: 'ติดต่อ',
        follow: 'ติดตาม',
      }
    : lang === 'zh'
      ? {
          title: 'Love Pier Beach Cafe — 首页',
          city: 'chonburi . thailand',
          hoursLabel: '营业时间',
        hoursValue: '每日营业（周三除外） 09:00-18:00',
          est: '创立',
          location: '地址',
          locationValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
          exploreMenu: '查看菜单',
          since: '自 2026 年起',
          about1: 'Love Pier Cafe 是邦盛海边的一家咖啡馆，让每一餐都比以往更特别。',
          about2: '品尝<em class="italic">“新加坡鸡饭与海南鸡饭（传统原味）”</em>，再搭配受<em class="italic">“农蒙竹筒糯米饭”</em>启发的招牌饮品，把邦盛在地风味以更细腻的方式重新呈现。',
          about3: '在温暖的海边氛围里吹着海风、听着轻柔浪声，也在通往海面的浪漫码头留下属于你的回忆。',
          about4: '有些美好时刻，其实只需要好食物、喜欢的那杯饮品，以及一起看夕阳的人。就在 <strong class="italic">LOVE PIER BEACH CAFE</strong>。',
          where: '当海岸\n遇见\n<em class="italic text-gold">一杯咖啡</em>',
          numbers: '我们的数据',
          little: '关于\n<em class="italic text-gold">Love Pier</em>',
          yearsOpen: '营业年数',
          yearsDesc: '自 2026 年起服务海边社区。',
          toShore: '到海边距离',
          toShoreDesc: '步行片刻即可踏上沙滩。',
          menuItems: '菜单数量',
          menuItemsDesc: '咖啡与餐点每日新鲜制作。',
          address: '地址',
          addressValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
          hoursCompact: '每日营业（周三除外） · 09:00-18:00',
          contact: '联系',
          follow: '关注我们',
        }
      : {
        title: 'Love Pier Beach Cafe — Home',
        city: 'chonburi . thailand',
        hoursLabel: 'Hours',
      hoursValue: 'Open daily (except Wednesday) 09:00-18:00',
        est: 'Est.',
        location: 'Location',
        locationValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
        exploreMenu: 'Explore Menu',
        since: 'Since 2026',
        about1: 'Love Pier Cafe is a beachside cafe in Bangsaen where every meal feels more special.',
        about2: 'Enjoy signature Singaporean and Hainanese chicken rice made from original recipes, paired with house drinks inspired by Nong Mon khao lam, reimagined with a softer, modern touch.',
        about3: 'Sit by the sea breeze, listen to the gentle waves, and capture memories at our romantic pier stretching out toward the water.',
        about4: 'Some beautiful moments only need great food, a favorite drink, and someone special to watch the sunset with at <strong class="italic">LOVE PIER BEACH CAFE</strong>.',
        where: 'Where the\nshore meets\n<em class="italic text-gold">the cup</em>',
        numbers: 'The Numbers',
        little: 'About\n<em class="italic text-gold">Love Pier</em>',
        yearsOpen: 'Years Open',
        yearsDesc: 'Serving our beachside community since 2026.',
        toShore: 'To the Shore',
        toShoreDesc: 'Only a short walk and your feet are in the sand.',
        menuItems: 'Menu Items',
        menuItemsDesc: 'Coffee and dishes prepared fresh every day.',
        address: 'Address',
        addressValue: '800 108 Saensuk\nMueang Chonburi, Chonburi 20130',
      hoursCompact: 'Open daily (except Wednesday) · 09:00-18:00',
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
      <header className="px-4 pt-10 pb-7 text-center reveal sm:px-6 lg:px-10 lg:pt-12 lg:pb-8">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">{t.city}</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(40px,7vw,88px)]">Love Pier<br/>Beach Cafe</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 pt-5 border-t border-black/10 items-start gap-4 lg:gap-0">
          <div className="text-left">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">{t.hoursLabel}</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">{t.hoursValue}</div>
          </div>
          <div className="text-right lg:justify-self-end">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">{t.location}</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">{renderLines(t.locationValue)}</div>
          </div>
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

      <section className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] px-4 py-14 items-start reveal sm:px-6 sm:py-16 lg:px-10 lg:py-20 gap-10 lg:gap-0">
        <div>
          <h2 className="font-display font-light leading-[0.92] text-ink tracking-[-0.02em] text-[clamp(40px,6vw,72px)]">
            Beach Vibes,<br/>
            Cafe by The Sea,<br/>
            <span className="inline-flex flex-wrap items-baseline gap-x-4 gap-y-3">
              <em className="italic text-gold">Singapore Chicken Rice</em>
              <Link href="/menu" className="inline-flex shrink-0 items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#5f5a51] bg-[#ece7dc] border border-[#d8cdbb] px-5 py-2.5 hover:bg-[#e4dccd] hover:text-ink transition-colors duration-200 after:content-['→'] after:text-base after:transition-transform after:duration-200 hover:after:translate-x-1">{t.exploreMenu}</Link>
            </span>
          </h2>
        </div>
        <div className="pt-2">
          <div className="text-[9px] tracking-[0.4em] uppercase text-[#bbb] mb-5 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-[#bbb]">{t.since}</div>
          <div className="text-sm leading-[1.9] text-[#555] font-light max-w-none">
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.about1 }} />
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.about2 }} />
            <p dangerouslySetInnerHTML={{ __html: `${t.about3}${'about4' in t ? ` ${t.about4}` : ''}` }} />
          </div>
        </div>
      </section>

      <div className="relative w-full aspect-[16/10] md:aspect-[16/8] overflow-hidden mt-[3px] reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover [filter:brightness(0.55)_saturate(0.5)]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85" alt="atmosphere" />
        <div className="absolute bottom-10 left-10 font-display font-light text-[rgba(255,255,255,0.85)] leading-[1.1] text-[clamp(28px,4vw,48px)] sm:bottom-6 sm:left-6" dangerouslySetInnerHTML={{ __html: t.where.replace(/\n/g, '<br/>') }} />
      </div>

      <section className="bg-white px-4 py-14 reveal sm:px-6 sm:py-16 lg:px-10">
        <div className="mb-12">
          <h3 className="font-display font-light leading-[1.05] text-ink text-[clamp(28px,3.5vw,44px)]" dangerouslySetInnerHTML={{ __html: t.little.replace(/\n/g, '<br/>') }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#eee]">
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[44px] sm:text-[56px] font-light text-ink leading-none tracking-[-0.02em]">200m</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">{t.toShore}</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">{t.toShoreDesc}</div>
          </div>
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[44px] sm:text-[56px] font-light text-ink leading-none tracking-[-0.02em]">70+</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">{t.menuItems}</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">{t.menuItemsDesc}</div>
          </div>
        </div>
      </section>

      {/* Mosaic grid */}
      <div className="grid gap-[3px] mt-[3px] reveal grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[280px]">
        <div className="overflow-hidden bg-[#e8e4de] md:col-span-2 lg:col-span-7 lg:row-span-2"><img className="w-full h-full object-cover object-[50%_55%] [filter:saturate(0.72)_contrast(0.96)_brightness(0.94)_sepia(0.05)] hover:[filter:saturate(0.88)_contrast(0.98)_brightness(0.97)_sepia(0.03)] hover:scale-[1.03] transition-all duration-700" src="/uploads/home-beach-panorama.png" alt="beach" /></div>
        <div className="overflow-hidden bg-[#e8e4de] md:col-span-1 lg:col-span-5"><img className="w-full h-full object-cover object-[50%_45%] [filter:saturate(0.72)_contrast(0.96)_brightness(0.94)_sepia(0.05)] hover:[filter:saturate(0.88)_contrast(0.98)_brightness(0.97)_sepia(0.03)] hover:scale-[1.03] transition-all duration-700" src="/uploads/home-cafe-interior.png" alt="cafe" /></div>
        <div className="overflow-hidden bg-[#e8e4de] md:col-span-1 lg:col-span-5"><img className="w-full h-full object-cover object-[50%_72%] [filter:saturate(0.72)_contrast(0.96)_brightness(0.94)_sepia(0.05)] hover:[filter:saturate(0.88)_contrast(0.98)_brightness(0.97)_sepia(0.03)] hover:scale-[1.03] transition-all duration-700" src="/uploads/home-espresso.png" alt="coffee" /></div>
      </div>

      {/* Map section */}
      <div className="reveal">
        <div className="w-full h-72 sm:h-80 bg-[#d9d7d1] relative overflow-hidden">
          <div className="absolute inset-0 opacity-55" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)', backgroundSize:'44px 44px' }}></div>
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.96 }} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="1200" height="320" fill="#d9d7d1" />
            <path d="M0 0 H430 C470 35, 472 82, 448 116 C430 143, 430 172, 448 201 C471 239, 468 287, 430 320 H0 Z" fill="#9fc4ce" />
            <path d="M430 0 C470 35, 472 82, 448 116 C430 143, 430 172, 448 201 C471 239, 468 287, 430 320" fill="none" stroke="#c9a96e" strokeWidth="10" opacity="0.36" />

            <path d="M160 -20 V360" stroke="#b8b1a8" strokeWidth="8" />
            <path d="M640 -20 V360" stroke="#b4ada4" strokeWidth="9" />
            <path d="M960 -20 V360" stroke="#b4ada4" strokeWidth="9" />
            <path d="M-20 86 H1220" stroke="#b9b2a9" strokeWidth="7" />
            <path d="M-20 214 H1220" stroke="#b9b2a9" strokeWidth="6" />

            <g stroke="#b2aca2" strokeWidth="4" fill="none" opacity="0.95">
              <path d="M520 62 L580 62 L580 122 L700 122 L700 84 L760 84" />
              <path d="M548 154 L618 154 L618 198 L710 198" />
              <path d="M520 246 L606 246 L606 286 L742 286" />
              <path d="M792 52 L842 52 L842 132 L932 132 L932 92 L1010 92" />
              <path d="M794 176 L860 176 L860 236 L938 236 L938 270 L1032 270" />
              <path d="M690 236 L732 236 L732 270 L780 270" />
            </g>

            <g stroke="#94bcc7" strokeWidth="4" fill="none" opacity="0.82">
              <path d="M474 134 C512 150, 538 166, 560 188 C584 212, 604 238, 626 264" />
              <path d="M516 106 C546 116, 572 132, 598 158" />
            </g>

            <g fontFamily="Jost, sans-serif" fontSize="11" letterSpacing="1" fill="#736e66" opacity="0.78">
              <text x="72" y="52">GULF OF THAILAND</text>
              <text x="742" y="58">SAENSUK ROAD</text>
              <text x="986" y="166" transform="rotate(-90 986,166)">SUKHUMVIT ROAD</text>
              <text x="700" y="304">MUEANG CHONBURI</text>
            </g>
          </svg>
          <a
            href="https://maps.app.goo.gl/CYDRrd6hoxRv7z4j8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Love Pier Beach Cafe in Google Maps"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group max-w-[90vw]"
          >
            <div className="w-5 h-5 rounded-full bg-ink group-hover:scale-110 transition-transform" style={{ boxShadow:'0 0 0 6px rgba(26,26,26,0.12),0 0 0 12px rgba(26,26,26,0.06)' }}></div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#444] bg-[rgba(245,243,239,0.9)] px-3 py-1 group-hover:bg-[rgba(245,243,239,1)] transition-colors text-center">Love Pier Beach Cafe</div>
          </a>
        </div>
        <div className="bg-bg border-t border-black/10 px-4 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-8 lg:gap-10 items-start sm:px-6">
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
            <div className="text-[13px] text-[#444] leading-[1.7] font-light"><a href="tel:0642523293" className="text-muted hover:text-ink transition-colors">064-252-3293</a><br/><a href="mailto:cafe.lovepier@gmail.com" className="text-muted hover:text-ink transition-colors break-all">cafe.lovepier@gmail.com</a></div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">{t.follow}</span>
            <div className="flex gap-3 items-center flex-wrap">
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink hover:[&_svg]:text-bg transition-all flex items-center justify-center w-8 h-8" aria-label="Instagram"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg></a>
              <a href="https://www.facebook.com/profile.php?id=61590549024692" target="_blank" rel="noopener noreferrer" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="Facebook"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5H8v3h2.5V21h3z"/></svg></a>
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
