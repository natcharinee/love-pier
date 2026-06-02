import Head from 'next/head'
import Footer from '../components/Footer'

export default function Location() {
  return (
    <>
      <Head>
        <title>Location — Love Pier Beach Cafe</title>
      </Head>

      {/* Page header */}
      <header className="px-10 pt-16 pb-10 text-center border-b border-black/10 reveal sm:px-5 sm:pt-10 sm:pb-7">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">Find us</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">Two hundred<br/>meters from <em className="italic text-gold">the sea</em></h1>
        <p className="mt-4 text-sm text-[#666] font-light max-w-[580px] mx-auto leading-[1.8]">We sit at the quiet end of Narathat Beach Road. Easy to find, easier to stay.</p>
      </header>

      {/* Big map (iframe) */}
      <div className="w-full h-[540px] bg-[#dedad3] relative overflow-hidden border-b border-black/10 reveal sm:h-[360px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189!2d100.9272293!3d13.2520411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b54b8ceda3d5%3A0x6dad4e501d5d1adf!2sLOVE%20PIER%20BEACH%20CAFE!5e1!3m2!1sth!2sth!4v1716000000000"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:0, filter:'saturate(0.7) contrast(1.05)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Love Pier Beach Cafe location"
        />
      </div>

      {/* Info bar */}
      <div className="bg-bg px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-black/10 reveal sm:px-6 sm:py-7 sm:gap-6">
        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Address</h4>
          <p className="text-sm text-ink leading-[1.7] font-light">123 Moo 4, Narathat Beach Road<br/>Cha-am, Phetchaburi 76120<br/><span className="text-muted text-xs">Thailand</span></p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Hours</h4>
          <p className="text-sm text-ink leading-[1.7] font-light">Mon–Fri · 08:00 – 21:00<br/>Sat–Sun · 07:00 – 22:00<br/><span className="text-muted text-xs">Kitchen closes 30 min before</span></p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Phone</h4>
          <p className="text-sm text-ink leading-[1.7] font-light">
            <a href="tel:+6632123456" className="hover:text-gold transition-colors">+66 32 123 456</a><br/>
            <a href="mailto:hello@lovepier.cafe" className="hover:text-gold transition-colors">hello@lovepier.cafe</a><br/>
            <span className="text-muted text-xs">LINE: @lovepier</span>
          </p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Coordinates</h4>
          <p className="text-sm text-ink leading-[1.7] font-light">
            13.2537° N<br/>100.9287° E<br/>
            <span className="text-muted text-xs"><a href="https://maps.app.goo.gl/CYDRrd6hoxRv7z4j8" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Open in Google Maps</a></span>
          </p>
        </div>
      </div>

      {/* Directions */}
      <section className="px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 border-b border-black/10 reveal sm:px-6 sm:py-14 sm:gap-12">
        <div>
          <h2 className="font-display font-light mb-6 leading-[1.05] text-[clamp(36px,4.5vw,56px)]">How to get<br/><em className="italic text-gold">here</em></h2>
          <p className="text-sm text-[#555] leading-[1.9] font-light mb-8 max-w-[480px]">From Bangkok, head south along the coast. The drive is about 2 hours and 20 minutes — most of it is windows-down beach road.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://maps.app.goo.gl/CYDRrd6hoxRv7z4j8" target="_blank" rel="noopener noreferrer" className="inline-block bg-ink text-bg text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-ink transition-colors duration-300">Open in Google Maps</a>
            <a href="https://maps.apple.com/?ll=13.2537115,100.9287388&q=Love+Pier+Beach+Cafe" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent text-ink text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 border border-black/20 hover:border-gold hover:text-gold transition-colors duration-300">Open in Apple Maps</a>
          </div>
        </div>
        <div className="flex flex-col">
          {[
            { mode:'By car', title:'2h 20m from Bangkok', text:'Take Phetkasem Road south. Free parking on site for 18 cars and a small motorbike lot at the rear.' },
            { mode:'By train', title:'3h from Hua Lamphong', text:'Take the train to Cha-am Station, then a 12-minute songthaew or taxi to the beach road.' },
            { mode:'By bus', title:'2h 30m from Bangkok Southern Bus Terminal', text:'Direct minivans run hourly. Ask for the Cha-am beach stop.' },
            { mode:'Walking', title:'2 min from the shore', text:"Walk straight from the main beach pier, cross Narathat Road. We're the building with the wide blue awning." },
          ].map(({ mode, title, text }) => (
            <div key={mode} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-t border-black/10 sm:grid-cols-[60px_1fr] sm:gap-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#aaa] pt-1">{mode}</div>
              <div>
                <strong className="font-display text-lg font-normal text-ink block mb-1">{title}</strong>
                <span className="text-[13px] text-[#777] font-light leading-[1.7]">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parking strip */}
      <section className="bg-ink text-bg px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal sm:px-6 sm:py-14 sm:gap-9">
        <div className="reveal-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.55)_brightness(0.8)]" src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=80" alt="exterior" />
        </div>
        <div>
          <h2 className="font-display font-light mb-4 leading-[1.05] text-[clamp(32px,4vw,52px)]">Parking <em className="italic text-gold">&amp; access</em></h2>
          <p className="text-sm text-[rgba(245,243,239,0.65)] leading-[1.8] mb-4 font-light">We&apos;ve kept things simple. Free, attended parking on site — and the beach is one short walk away.</p>
          <ul className="list-none text-[13px] text-[rgba(245,243,239,0.7)] font-light">
            {[
              '18 free car spaces on site',
              'Dedicated motorbike & bicycle racks',
              'Wheelchair-accessible entrance & restroom',
              'Dog-friendly terrace seating',
              'EV charging station (Type 2 · 7kW)',
            ].map(item => (
              <li key={item} className="py-2.5 border-b border-white/[0.08] before:content-['·'] before:text-gold before:mr-3">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer tagline="ALWAYS <em>EASY TO FIND</em>" />
    </>
  )
}
