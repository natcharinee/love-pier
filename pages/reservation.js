import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'

const OCCASIONS = ['Just visiting', 'Birthday', 'Anniversary', 'Date', 'Business', 'Other']

export default function Reservation() {
  const [occasion, setOccasion] = useState('Just visiting')

  return (
    <>
      <Head>
        <title>Reservation — Love Pier Beach Cafe</title>
      </Head>

      <section className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] min-h-screen border-b border-black/10">
        {/* Image side */}
        <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto reveal-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover [filter:saturate(0.7)]" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85" alt="cafe interior" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-bg max-w-[80%] sm:bottom-6 sm:left-6">
            <span className="block text-[10px] tracking-[0.4em] uppercase text-[rgba(245,243,239,0.6)] mb-3">Reserve a table</span>
            <h1 className="font-display font-light leading-none tracking-[-0.02em] text-[clamp(40px,5vw,60px)]">Save a seat<br/>by the <em className="italic text-gold">sea</em></h1>
          </div>
        </div>
        {/* Form side */}
        <div className="px-16 py-20 flex flex-col justify-center reveal sm:px-6 sm:py-12">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">— Step 01 of 01</div>
          <h2 className="font-display font-light mb-3 leading-[1.1] text-[clamp(32px,3.5vw,44px)]">Tell us when<br/>you&apos;re <em className="italic">coming</em></h2>
          <p className="text-[13px] text-[#777] font-light mb-10 leading-[1.7] max-w-[420px]">Reservations are confirmed within 2 hours by email or LINE. Walk-ins are always welcome, but a table by the window is best booked.</p>

          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-5 max-w-[560px] sm:max-w-none"
            onSubmit={e => { e.preventDefault(); alert('Reservation request sent.') }}
          >
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="name">Full name</label>
              <input className="res-input" type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="phone">Phone</label>
              <input className="res-input" type="tel" id="phone" placeholder="+66" required />
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="email">Email</label>
              <input className="res-input" type="email" id="email" placeholder="you@example.com" required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="date">Date</label>
              <input className="res-input" type="date" id="date" required />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="time">Time</label>
              <select className="res-input" id="time" required>
                <option value="">Select time</option>
                {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="guests">Guests</label>
              <select className="res-input" id="guests" required>
                {['1 person','2 people','3 people','4 people','5–6 people','7+ people (group)'].map(g => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="seating">Seating preference</label>
              <select className="res-input" id="seating">
                {['No preference','Window seat','Outdoor terrace','Counter / bar','Private corner'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2">Occasion</label>
              <div className="flex gap-2 flex-wrap">
                {OCCASIONS.map(occ => (
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
              <label className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] mb-2" htmlFor="notes">Special requests</label>
              <textarea className="res-input" id="notes" placeholder="Allergies, dietary needs, special arrangements…"></textarea>
            </div>
            <div className="lg:col-span-2 flex flex-wrap items-center gap-6 mt-9 sm:flex-col sm:items-start sm:gap-3.5">
              <button type="submit" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 border-none hover:bg-gold hover:text-ink transition-colors duration-300 cursor-pointer">Request Table</button>
              <div className="text-[11px] text-[#aaa] tracking-[0.1em] leading-relaxed">By submitting you agree to our<br/>cancellation &amp; privacy policy.</div>
            </div>
          </form>
        </div>
      </section>

      {/* Policy strip */}
      <section className="bg-white px-10 py-16 border-b border-black/10 reveal sm:px-6 sm:py-12">
        <h3 className="font-display font-light mb-8 text-[clamp(28px,3vw,40px)]">The fine <em className="italic text-gold">print</em></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-7">
          {[
            { n:'01', title:'Confirmation', text:"You'll receive an email or LINE message within 2 hours confirming your reservation. If we miss you, we'll call." },
            { n:'02', title:'Group bookings', text:'For groups of 7 or more, please call us directly. We hold a private corner for parties up to 24.' },
            { n:'03', title:'Late arrivals', text:'We hold your table for 15 minutes past the reserved time. After that, we may offer it to walk-ins.' },
            { n:'04', title:'Cancellations', text:'Free cancellation up to 4 hours before. Same-day no-shows may affect future reservation priority.' },
          ].map(({ n, title, text }) => (
            <div key={n}>
              <div className="font-display text-[36px] text-gold font-light leading-none">{n}</div>
              <h4 className="font-display text-lg font-normal mt-3.5 mb-2">{title}</h4>
              <p className="text-[13px] text-[#777] leading-[1.7] font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline="A SEAT, <em>WAITING FOR YOU</em>" />
    </>
  )
}
