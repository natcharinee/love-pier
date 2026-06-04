import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { FOOTER_TAGLINES } from '../lib/footerTagline'
import { useLanguage } from '../lib/language'

const RESERVATION_COPY = {
  th: {
    title: 'Reservation — Love Pier Beach Cafe',
    heroTag: 'จองโต๊ะ',
    heroTitle: 'จองที่นั่ง\nริมทะเล',
    step: '— ขั้นตอน 01 จาก 01',
    formTitle: 'บอกวันเวลา\nที่คุณจะมา',
    intro: 'เราจะยืนยันการจองภายใน 2 ชั่วโมงทางอีเมลหรือ LINE',
    fullName: 'ชื่อ-นามสกุล', phone: 'เบอร์โทร', email: 'อีเมล', date: 'วันที่', time: 'เวลา', guests: 'จำนวนแขก',
    seating: 'โซนที่นั่ง', occasion: 'โอกาสพิเศษ', notes: 'ความต้องการเพิ่มเติม',
    request: 'ส่งคำขอจองโต๊ะ', policy: 'การส่งแบบฟอร์มถือว่ายอมรับนโยบายความเป็นส่วนตัวและการยกเลิก',
    selectTime: 'เลือกเวลา',
    namePlaceholder: 'ชื่อของคุณ',
    emailPlaceholder: 'you@example.com',
    sentMessage: 'ส่งคำขอจองโต๊ะแล้ว',
    imageAlt: 'บรรยากาศภายในร้าน',
    guestOptions: ['1 คน', '2 คน', '3 คน', '4 คน', '5–6 คน', '7+ คน (กลุ่ม)'],
    seatingOptions: ['ไม่ระบุ', 'ริมหน้าต่าง', 'โซนเทอเรซ', 'เคาน์เตอร์บาร์', 'มุมส่วนตัว'],
    occasions: ['มาทานทั่วไป', 'วันเกิด', 'วันครบรอบ', 'เดต', 'ธุรกิจ', 'อื่นๆ'],
    notesPlaceholder: 'แพ้อาหาร ข้อจำกัดด้านอาหาร หรือคำขอพิเศษ…',
    fine: 'เงื่อนไขการจอง',
    finePrint: [
      { n: '01', title: 'การยืนยัน', text: 'เราจะยืนยันทางอีเมลหรือ LINE ภายใน 2 ชั่วโมง หากติดต่อไม่ได้เราจะโทรกลับ' },
      { n: '02', title: 'จองกลุ่มใหญ่', text: 'สำหรับกลุ่ม 7 คนขึ้นไป กรุณาโทรจองโดยตรง มีมุมส่วนตัวรองรับ' },
      { n: '03', title: 'มาสาย', text: 'เราถือที่นั่งไว้ให้ 20 นาทีหลังเวลาจอง หลังจากนั้นอาจให้ลูกค้า walk-in' },
      { n: '04', title: 'การยกเลิก', text: 'รบกวนยกเลิกกับทางร้าน ก่อนเวลาจริง 4 ชั่วโมง' },
    ],
  },
  zh: {
    title: 'Reservation — Love Pier Beach Cafe',
    heroTag: '预订座位',
    heroTitle: '预留海边\n座位',
    step: '— 第 01 步（共 01 步）',
    formTitle: '告诉我们\n您的到店时间',
    intro: '我们会在 2 小时内通过邮件或 LINE 确认预订。',
    fullName: '姓名', phone: '电话', email: '邮箱', date: '日期', time: '时间', guests: '人数',
    seating: '座位偏好', occasion: '到店目的', notes: '特别需求',
    request: '提交预订', policy: '提交即表示您同意取消与隐私政策。',
    selectTime: '选择时间',
    namePlaceholder: '您的姓名',
    emailPlaceholder: 'you@example.com',
    sentMessage: '预订请求已发送',
    imageAlt: '店内环境',
    guestOptions: ['1 位', '2 位', '3 位', '4 位', '5–6 位', '7 位以上（团体）'],
    seatingOptions: ['无偏好', '靠窗', '露台', '吧台', '安静角落'],
    occasions: ['日常到访', '生日', '纪念日', '约会', '商务', '其他'],
    notesPlaceholder: '过敏、饮食限制或其他安排…',
    fine: '预订说明',
    finePrint: [
      { n: '01', title: '预订确认', text: '我们将在 2 小时内通过邮件或 LINE 确认。若联系不上，我们会致电您。' },
      { n: '02', title: '大型团体', text: '7 人以上请致电直接预订。设有私人角落。' },
      { n: '03', title: '迟到', text: '预订时间后我们为您保留座位 20 分钟，之后可能提供给现场客人。' },
      { n: '04', title: '取消', text: '请于实际预订时间前 4 小时联系本店取消。' },
    ],
  },
  en: {
    title: 'Reservation — Love Pier Beach Cafe',
    heroTag: 'Reserve a table',
    heroTitle: 'Save a seat\nby the sea',
    step: '— Step 01 of 01',
    formTitle: "Tell us when\nyou're coming",
    intro: 'Reservations are confirmed within 2 hours by email or LINE.',
    fullName: 'Full name', phone: 'Phone', email: 'Email', date: 'Date', time: 'Time', guests: 'Guests',
    seating: 'Seating preference', occasion: 'Occasion', notes: 'Special requests',
    request: 'Request Table', policy: 'By submitting you agree to our cancellation & privacy policy.',
    selectTime: 'Select time',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    sentMessage: 'Your reservation request has been sent.',
    imageAlt: 'Cafe interior',
    guestOptions: ['1 person', '2 people', '3 people', '4 people', '5–6 people', '7+ people (group)'],
    seatingOptions: ['No preference', 'Window seat', 'Outdoor terrace', 'Counter / bar', 'Private corner'],
    occasions: ['Just visiting', 'Birthday', 'Anniversary', 'Date', 'Business', 'Other'],
    notesPlaceholder: 'Allergies, dietary needs, special arrangements…',
    fine: 'The fine print',
    finePrint: [
      { n: '01', title: 'Confirmation', text: 'We will confirm by email or LINE within 2 hours. If we cannot reach you, we will call.' },
      { n: '02', title: 'Large groups', text: 'For groups of 7 or more, please call to book directly. A private corner is available.' },
      { n: '03', title: 'Late arrival', text: 'We hold your table for 20 minutes after the reserved time. After that, we may seat walk-in guests.' },
      { n: '04', title: 'Cancellation', text: 'Please cancel with us at least 4 hours before your reservation time.' },
    ],
  },
}

export default function Reservation() {
  const { lang } = useLanguage()
  const t = RESERVATION_COPY[lang] || RESERVATION_COPY.en
  const [occasion, setOccasion] = useState(t.occasions[0])

  useEffect(() => {
    setOccasion(RESERVATION_COPY[lang]?.occasions[0] || RESERVATION_COPY.en.occasions[0])
  }, [lang])

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      <section className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] min-h-screen border-b border-black/10">
        {/* Image side */}
        <div className="relative overflow-hidden aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto reveal-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover [filter:saturate(0.7)]" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85" alt={t.imageAlt} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
          <div className="absolute bottom-6 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 text-bg max-w-[85%] sm:max-w-[80%]">
            <span className="block text-[10px] tracking-[0.4em] uppercase text-[rgba(245,243,239,0.6)] mb-3">{t.heroTag}</span>
            <h1 className="font-display font-light leading-none tracking-[-0.02em] text-[clamp(40px,5vw,60px)]">{t.heroTitle.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
          </div>
        </div>
        {/* Form side */}
        <div className="px-4 py-12 flex flex-col justify-center reveal sm:px-6 sm:py-12 lg:px-16 lg:py-20">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">{t.step}</div>
          <h2 className="font-display font-light mb-3 leading-[1.1] text-[clamp(32px,3.5vw,44px)]">{t.formTitle.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h2>
          <p className="text-[13px] text-[#777] font-light mb-10 leading-[1.7] max-w-[420px]">{t.intro}</p>

          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-5 max-w-[560px] sm:max-w-none"
            onSubmit={e => { e.preventDefault(); alert(t.sentMessage) }}
          >
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="name">{t.fullName}</label>
              <input className="res-input" type="text" id="name" placeholder={t.namePlaceholder} required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="phone">{t.phone}</label>
              <input className="res-input" type="tel" id="phone" placeholder="+66" required />
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="email">{t.email}</label>
              <input className="res-input" type="email" id="email" placeholder={t.emailPlaceholder} required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="date">{t.date}</label>
              <input className="res-input" type="date" id="date" required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="time">{t.time}</label>
              <select key={`time-${lang}`} className="res-input" id="time" required>
                <option value="">{t.selectTime}</option>
                {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="guests">{t.guests}</label>
              <select key={`guests-${lang}`} className="res-input" id="guests" required>
                {t.guestOptions.map(g => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="seating">{t.seating}</label>
              <select key={`seating-${lang}`} className="res-input" id="seating">
                {t.seatingOptions.map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2">{t.occasion}</label>
              <div className="flex gap-2 flex-wrap">
                {t.occasions.map(occ => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`text-[11px] tracking-[0.15em] uppercase px-[14px] py-[7px] border cursor-pointer transition-all duration-200 ${occasion === occ ? 'bg-ink text-bg border-ink' : 'border-black/[0.12] text-[#888] hover:border-ink hover:text-ink'}`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="notes">{t.notes}</label>
              <textarea className="res-input" id="notes" placeholder={t.notesPlaceholder}></textarea>
            </div>
            <div className="lg:col-span-2 flex flex-wrap items-center gap-6 mt-9 sm:flex-col sm:items-start sm:gap-3.5">
              <button type="submit" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 border-none hover:bg-gold hover:text-ink transition-colors duration-300 cursor-pointer">{t.request}</button>
              <div className="text-[11px] text-[#aaa] tracking-[0.1em] leading-relaxed">{t.policy}</div>
            </div>
          </form>
        </div>
      </section>

      {/* Policy strip */}
      <section className="bg-white px-4 py-12 border-b border-black/10 reveal sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <h3 className="font-display font-light mb-8 text-[clamp(28px,3vw,40px)]">{t.fine}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-7">
          {t.finePrint.map(({ n, title, text }) => (
            <div key={n}>
              <div className="font-display text-[36px] text-gold font-light leading-none">{n}</div>
              <h4 className="font-display text-lg font-normal mt-3.5 mb-2">{title}</h4>
              <p className="text-[13px] text-[#777] leading-[1.7] font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline={FOOTER_TAGLINES.reservation} />
    </>
  )
}
