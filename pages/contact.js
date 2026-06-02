import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

const FAQ = [
  { q: 'Do I need a reservation?', a: 'Walk-ins are always welcome. Reservations are recommended for weekends, sunset hour, and groups larger than four.' },
  { q: 'Are you dog-friendly?', a: 'Yes — well-behaved dogs are welcome on the outdoor terrace. We even keep a water bowl by the door.' },
  { q: 'Do you have parking?', a: 'Free on-site parking for 18 cars, with separate motorbike and bicycle racks. EV charging available.' },
  { q: 'Is the cafe accessible?', a: 'The main floor and terrace are step-free with a wheelchair-accessible restroom. Please call ahead for group bookings.' },
  { q: 'Can I host a private event?', a: 'Yes — the whole cafe is available for private bookings on Mondays. Capacity is 60 standing, 38 seated.' },
  { q: 'Do you have vegetarian options?', a: 'About half of our menu is vegetarian; we mark vegan and gluten-free options clearly. Anything else can usually be adjusted.' },
]

import { useState } from 'react'

export default function Contact() {
  const { lang } = useLanguage()
  const t = lang === 'th'
    ? {
        title: 'Contact — Love Pier Beach Cafe',
        getInTouch: 'ติดต่อเรา',
        hero: 'ทักทายเรา\nหรือแวะมาได้เลย',
        intro: 'เราตอบกลับส่วนใหญ่ภายในไม่กี่ชั่วโมงในเวลาทำการ',
        phone: 'โทรศัพท์', email: 'อีเมล', line: 'ไลน์', reservation: 'จองโต๊ะ',
        bookArrow: 'จองโต๊ะ →',
        sendTitle: 'ส่งข้อความ\nหาเรา',
        sendDesc: 'ไม่ว่าจะเป็นอีเวนต์ส่วนตัว สื่อ หรือพาร์ตเนอร์ เราพร้อมตอบกลับ',
        subject: 'หัวข้อ', fullName: 'ชื่อ-นามสกุล', phoneLabel: 'เบอร์โทร (ไม่บังคับ)', company: 'บริษัท (ไม่บังคับ)',
        message: 'ข้อความ', send: 'ส่งข้อความ', privacy: 'การส่งแบบฟอร์มถือว่ายอมรับนโยบายความเป็นส่วนตัว',
        subjects: ['ทั่วไป', 'อีเวนต์ส่วนตัว', 'สื่อ', 'ขายส่ง', 'ร่วมงาน'],
        messagePlaceholder: 'บอกรายละเอียดที่ต้องการได้เลย…',
        followTitle: 'ติดตามเรา',
        followDesc: 'แท็ก #lovepiercafe เพื่อให้เรารีแชร์',
        quick: 'คำถามที่พบบ่อย',
      }
    : lang === 'zh'
      ? {
          title: 'Contact — Love Pier Beach Cafe',
          getInTouch: '联系我们',
          hero: '欢迎联系\n或直接来访',
          intro: '营业时段内通常几小时内回复。',
          phone: '电话', email: '邮箱', line: 'LINE', reservation: '预订',
          bookArrow: '预订座位 →',
          sendTitle: '给我们\n留言',
          sendDesc: '无论是包场、媒体还是合作，我们都会尽快回复。',
          subject: '主题', fullName: '姓名', phoneLabel: '电话（可选）', company: '公司（可选）',
          message: '留言内容', send: '发送消息', privacy: '提交即表示同意隐私政策。',
          subjects: ['一般咨询', '包场活动', '媒体', '批发', '招聘'],
          messagePlaceholder: '请告诉我们您的需求…',
          followTitle: '关注我们',
          followDesc: '使用 #lovepiercafe 标记，我们会定期精选分享。',
          quick: '常见问题',
        }
      : {
          title: 'Contact — Love Pier Beach Cafe',
          getInTouch: 'Get in touch',
          hero: 'Say hello,\nor just visit',
          intro: 'We answer most messages within a few hours during open hours.',
          phone: 'Phone', email: 'Email', line: 'LINE', reservation: 'Reservation',
          bookArrow: 'Book a table →',
          sendTitle: 'Send us a\nquick note',
          sendDesc: "Whether it's a private event, press inquiry, partnership, or question — we'll get back to you.",
          subject: 'Subject', fullName: 'Full name', phoneLabel: 'Phone (optional)', company: 'Company (optional)',
          message: 'Your message', send: 'Send Message', privacy: 'By submitting you agree to our privacy policy.',
          subjects: ['General', 'Private Event', 'Press', 'Wholesale', 'Careers'],
          messagePlaceholder: 'Tell us what you have in mind…',
          followTitle: 'Follow us, say hello',
          followDesc: 'Tag #lovepiercafe to be featured.',
          quick: 'Quick answers',
        }
  const [subject, setSubject] = useState(t.subjects[0])

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Contact hero */}
      <section className="px-4 pt-12 pb-10 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-9 lg:gap-20 items-start border-b border-black/10 reveal sm:px-6 lg:pt-20 lg:pb-16">
        <div>
          <span className="block text-[10px] tracking-[0.4em] uppercase text-muted mb-5">{t.getInTouch}</span>
          <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,6vw,80px)]">{t.hero.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
          <p className="mt-6 text-sm text-[#666] leading-[1.9] font-light max-w-[420px]">{t.intro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          <a href="tel:0642523293" className="flex flex-col gap-2 p-6 sm:p-7 lg:p-8 bg-white border border-black/10 hover:bg-[#fffdf6] hover:border-gold transition-all duration-200">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{t.phone}</span>
            <div className="font-display text-[22px] font-normal text-ink leading-[1.2]">064-252-3293</div>
            <div className="text-xs text-muted font-light mt-1">Open hours only</div>
          </a>
          <a href="mailto:cafe.lovepier@gmail.com" className="flex flex-col gap-2 p-6 sm:p-7 lg:p-8 bg-white border border-black/10 hover:bg-[#fffdf6] hover:border-gold transition-all duration-200">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{t.email}</span>
            <div className="font-display text-[22px] font-normal text-ink leading-[1.2]">cafe.lovepier@gmail.com</div>
            <div className="text-xs text-muted font-light mt-1">Reply within 24h</div>
          </a>
          <a href="#" className="flex flex-col gap-2 p-6 sm:p-7 lg:p-8 bg-white border border-black/10 hover:bg-[#fffdf6] hover:border-gold transition-all duration-200">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{t.line}</span>
            <div className="font-display text-[22px] font-normal text-ink leading-[1.2]">@lovepier</div>
            <div className="text-xs text-muted font-light mt-1">Fastest for last-minute</div>
          </a>
          <Link href="/reservation" className="flex flex-col gap-2 p-6 sm:p-7 lg:p-8 bg-white border border-black/10 hover:bg-[#fffdf6] hover:border-gold transition-all duration-200">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{t.reservation}</span>
            <div className="font-display text-[22px] font-normal text-ink leading-[1.2]">{t.bookArrow}</div>
            <div className="text-xs text-muted font-light mt-1">Confirmed in 2 hours</div>
          </Link>
        </div>
      </section>

      {/* Form section */}
      <section className="px-4 py-16 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-9 lg:gap-20 items-start border-b border-black/10 bg-white reveal sm:px-6 sm:py-16">
        <div>
          <h2 className="font-display font-light leading-[1.05] mb-5 text-[clamp(36px,4.5vw,56px)]">{t.sendTitle.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h2>
          <p className="text-sm text-[#666] leading-[1.9] mb-8 font-light">{t.sendDesc}</p>
          <ul className="list-none">
            {[
              ['Private events', 'The whole cafe sleeps 60 standing, 38 seated.'],
              ['Press & media', 'Photo permits, features, interviews welcome.'],
              ['Wholesale', 'Our beans available to hotels & small shops.'],
              ['Careers', 'Open positions posted via LINE Official.'],
            ].map(([label, text]) => (
              <li key={label} className="flex items-baseline gap-4 py-3.5 border-b border-black/10 text-[13px] text-[#555] font-light before:content-['·'] before:text-gold before:text-2xl">
                <strong className="text-ink font-medium min-w-[100px] inline-block">{label}</strong>{text}
              </li>
            ))}
          </ul>
        </div>
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-5"
          onSubmit={e => { e.preventDefault(); alert('Message sent.') }}
        >
          <div className="flex flex-col lg:col-span-2">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2">{t.subject}</label>
            <div className="flex gap-2 flex-wrap">
              {t.subjects.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSubject(s)}
                  className={`text-[11px] tracking-[0.15em] uppercase px-[14px] py-[7px] border cursor-pointer transition-all duration-200 ${subject === s ? 'bg-ink text-bg border-ink' : 'border-black/[0.12] text-[#888] hover:border-ink hover:text-ink'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="cname">{t.fullName}</label>
            <input className="c-input" type="text" id="cname" placeholder="Your name" required />
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="cemail">{t.email}</label>
            <input className="c-input" type="email" id="cemail" placeholder="you@example.com" required />
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="cphone">{t.phoneLabel}</label>
            <input className="c-input" type="tel" id="cphone" placeholder="+66" />
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="ccompany">{t.company}</label>
            <input className="c-input" type="text" id="ccompany" placeholder="If applicable" />
          </div>
          <div className="flex flex-col lg:col-span-2">
            <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="cmessage">{t.message}</label>
            <textarea className="c-input" id="cmessage" placeholder={t.messagePlaceholder} required></textarea>
          </div>
          <div className="lg:col-span-2 flex flex-wrap sm:flex-col justify-between items-center sm:items-start gap-6 mt-4 sm:gap-3.5">
            <span className="text-[11px] text-[#aaa] tracking-[0.1em]">{t.privacy}</span>
            <button type="submit" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-colors duration-300 cursor-pointer">{t.send}</button>
          </div>
        </form>
      </section>

      {/* Socials block */}
      <section className="px-4 py-14 border-b border-black/10 text-center reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <h3 className="font-display font-light mb-4 text-[clamp(32px,4vw,48px)]">{t.followTitle}</h3>
        <p className="text-sm text-[#777] mb-9 font-light">{t.followDesc}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="flex items-center gap-3 px-6 py-3.5 border border-black/[0.12] text-[11px] tracking-[0.25em] uppercase text-[#555] hover:bg-ink hover:text-bg hover:border-ink transition-all duration-200"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61590549024692" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 border border-black/[0.12] text-[11px] tracking-[0.25em] uppercase text-[#555] hover:bg-ink hover:text-bg hover:border-ink transition-all duration-200"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5H8v3h2.5V21h3z"/></svg>Facebook</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3.5 border border-black/[0.12] text-[11px] tracking-[0.25em] uppercase text-[#555] hover:bg-ink hover:text-bg hover:border-ink transition-all duration-200"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 4 3.6 7.3 8.5 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.6-3.4 2.6-4.9 0-4.4-4.5-8-10-8z"/></svg>LINE Official</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3.5 border border-black/[0.12] text-[11px] tracking-[0.25em] uppercase text-[#555] hover:bg-ink hover:text-bg hover:border-ink transition-all duration-200"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.3 4.3 0 0 1-2.6-1.6 4.3 4.3 0 0 1-.8-2.2h-3v12c0 1-.8 1.9-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9c0-1 .8-1.9 1.9-1.9.2 0 .4 0 .6.1V9.1a5 5 0 0 0-.6 0 5 5 0 1 0 5 5V8.4a7.4 7.4 0 0 0 4.3 1.4V6.7a4.4 4.4 0 0 1-1-.9z"/></svg>TikTok</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 border-b border-black/10 reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <div className="mb-12">
          <h3 className="font-display font-light leading-[1.05] text-[clamp(32px,4vw,48px)]">{t.quick}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="py-6 border-b border-black/10">
              <h4 className="font-display text-[20px] font-normal text-ink mb-2">{q}</h4>
              <p className="text-[13px] text-[#666] leading-[1.8] font-light">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline="WE'LL <em>ANSWER SOON</em>" />
    </>
  )
}
