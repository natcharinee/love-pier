import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Love Pier Beach Cafe — Home</title>
      </Head>

      {/* HERO HEADER */}
      <header className="px-10 pt-12 pb-8 text-center reveal lg:px-10 md:px-5 sm:px-5">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">PHETCHABURI · THAILAND</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(40px,7vw,88px)]">Love Pier<br/>Beach Cafe</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] mt-8 pt-5 border-t border-black/10 items-start gap-4 lg:gap-0">
          <div className="text-center lg:text-left">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">Hours</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">Mon–Fri 08:00–21:00<br/>Sat–Sun 07:00–22:00</div>
          </div>
          <div className="text-center lg:px-10">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">Est.</span>
            <div className="text-xs text-[#444] leading-relaxed font-display text-[22px]">2017</div>
          </div>
          <div className="text-center lg:text-right">
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#aaa] mb-1.5">Location</span>
            <div className="text-xs text-[#444] leading-relaxed font-light">123 Moo 4, Narathat Beach Rd<br/>Cha-am, Phetchaburi</div>
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

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[3px] mt-[3px] reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)] hover:[filter:saturate(1)] transition-[filter] duration-500" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="coffee" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.7)] hover:[filter:saturate(1)] transition-[filter] duration-500" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&q=80" alt="cafe" />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] px-10 py-20 items-start reveal lg:px-10 sm:px-5 sm:py-16">
        <div>
          <h2 className="font-display font-light leading-[0.92] text-ink tracking-[-0.02em] text-[clamp(40px,6vw,72px)]">Love<br/>Pier<br/><em className="italic text-gold">&amp; Coffee</em></h2>
          <Link href="/menu" className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#666] after:content-['→'] after:text-sm after:transition-transform after:duration-200 hover:after:translate-x-1">Explore Menu</Link>
        </div>
        <div className="pt-2">
          <div className="text-[9px] tracking-[0.4em] uppercase text-[#bbb] mb-5 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-[#bbb]">Since 2017</div>
          <div className="text-sm leading-[1.9] text-[#555] font-light max-w-[520px]">
            <p className="mb-4">Love Pier Beach Cafe sits 200 meters from the shoreline of Cha-am, where the Gulf of Thailand meets a quieter kind of morning. We opened with a single conviction: that great coffee and great views belong together.</p>
            <p className="mb-4">Our menu is shaped by the sea — cold brews steeped overnight, single-origin pour-overs, and plates built from ingredients sourced the same day from local fishermen and farmers.</p>
            <p>We are not just a cafe. We are a place to arrive slowly, stay longer, and leave with a full chest.</p>
          </div>
        </div>
      </section>

      <div className="relative w-full aspect-[16/8] overflow-hidden mt-[3px] reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover [filter:brightness(0.55)_saturate(0.5)]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85" alt="atmosphere" />
        <div className="absolute bottom-10 left-10 font-display font-light text-[rgba(255,255,255,0.85)] leading-[1.1] text-[clamp(28px,4vw,48px)] sm:bottom-6 sm:left-6">Where the<br/>shore meets<br/><em className="italic text-gold">the cup</em></div>
      </div>

      <section className="bg-white px-10 py-16 reveal lg:px-10 sm:px-5">
        <div className="mb-12">
          <span className="block text-[9px] tracking-[0.4em] uppercase text-[#bbb] mb-3">The Numbers</span>
          <h3 className="font-display font-light leading-[1.05] text-ink text-[clamp(28px,3.5vw,44px)]">A little about<br/><em className="italic text-gold">what we do</em></h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[#eee]">
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[56px] font-light text-ink leading-none tracking-[-0.02em]">8+</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">Years Open</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">Serving the beach community since 2017, rain and sun alike.</div>
          </div>
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[56px] font-light text-ink leading-none tracking-[-0.02em]">200m</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">To the Shore</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">Walk two minutes and your feet are in the sand.</div>
          </div>
          <div className="px-8 py-10 border-r border-b border-[#eee] sm:px-6 sm:py-7">
            <div className="font-display text-[56px] font-light text-ink leading-none tracking-[-0.02em]">70+</div>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#bbb] mt-2.5">Menu Items</span>
            <div className="text-[13px] text-[#777] mt-2.5 leading-relaxed font-light max-w-[220px]">From specialty coffee to fresh-catch plates, crafted daily.</div>
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
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">Address</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light">123 Moo 4, Narathat Beach Rd<br/>Cha-am, Phetchaburi 76120</div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">Hours</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light">Mon–Fri · 08:00 – 21:00<br/>Sat–Sun · 07:00 – 22:00</div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">Contact</span>
            <div className="text-[13px] text-[#444] leading-[1.7] font-light"><a href="tel:+6632123456" className="text-muted hover:text-ink transition-colors">+66 32 123 456</a><br/><a href="mailto:hello@lovepier.cafe" className="text-muted hover:text-ink transition-colors">hello@lovepier.cafe</a></div>
          </div>
          <div>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-[#bbb] mb-2">Follow</span>
            <div className="flex gap-3 items-center flex-wrap">
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink hover:[&_svg]:text-bg transition-all flex items-center justify-center w-8 h-8" aria-label="Instagram"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="Facebook"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5H8v3h2.5V21h3z"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="LINE"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 4 3.6 7.3 8.5 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.6-3.4 2.6-4.9 0-4.4-4.5-8-10-8z"/></svg></a>
              <a href="#" className="text-muted border border-black/[0.12] p-2 hover:border-ink hover:text-ink hover:bg-ink transition-all flex items-center justify-center w-8 h-8" aria-label="TikTok"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.3 4.3 0 0 1-2.6-1.6 4.3 4.3 0 0 1-.8-2.2h-3v12c0 1-.8 1.9-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9c0-1 .8-1.9 1.9-1.9.2 0 .4 0 .6.1V9.1a5 5 0 0 0-.6 0 5 5 0 1 0 5 5V8.4a7.4 7.4 0 0 0 4.3 1.4V6.7a4.4 4.4 0 0 1-1-.9z"/></svg></a>
            </div>
          </div>
        </div>
      </div>

      <Footer tagline="THE SEA IS <em>ALWAYS OPEN</em>" />
    </>
  )
}
