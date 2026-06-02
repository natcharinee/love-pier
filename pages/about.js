import Head from 'next/head'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

export default function About() {
  const { lang } = useLanguage()
  const t = lang === 'th'
    ? { title:'About — Love Pier Beach Cafe', story:'เรื่องราวของเรา · ตั้งแต่ปี 2026', hero:'คาเฟ่ที่สร้างขึ้น\nเพื่อเวลาที่ช้าลง', brief:'8 ปีในภาพรวม', timeline:'ไทม์ไลน์', values:'สิ่งที่เราให้ความสำคัญ', people:'ทีมของเรา' }
    : lang === 'zh'
      ? { title:'About — Love Pier Beach Cafe', story:'我们的故事 · 自 2026 年', hero:'一间咖啡馆\n为慢节奏而生', brief:'八年回顾', timeline:'时间线', values:'我们的坚持', people:'我们的团队' }
      : { title:'About — Love Pier Beach Cafe', story:'Our Story · Since 2026', hero:'A cafe\nbuilt on slow time', brief:'Eight years, in brief', timeline:'A timeline', values:'What we care about', people:'The people' }
  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Story hero */}
      <section className="relative h-[62vh] lg:h-[70vh] min-h-[420px] lg:min-h-[480px] overflow-hidden border-b border-black/10 reveal-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover [filter:saturate(0.6)_brightness(0.85)]" src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=85" alt="story hero" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-16 text-bg">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[rgba(245,243,239,0.6)] mb-4">{t.story}</div>
          <h1 className="font-display font-light leading-[0.9] tracking-[-0.03em] max-w-[1000px] text-[clamp(56px,8vw,110px)]">{t.hero.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
        </div>
      </section>

      {/* Story intro */}
      <section className="px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start border-b border-black/10 reveal sm:px-6 sm:py-16 sm:gap-8 lg:px-10 lg:py-24">
        <div className="font-display font-light leading-[1.35] text-ink tracking-[-0.01em] text-[clamp(28px,3vw,38px)]">
          <em className="italic text-gold">Love Pier</em> started with one decision: that the sea should be louder than the coffee machine. Everything else followed.
        </div>
        <div className="text-sm leading-[2] text-[#555] font-light">
          <p className="mb-4">In early 2017, two friends — a photographer and a former barista — drove down Phetkasem Road with no plan beyond an idea: that there should be a place on the Cha-am coast where mornings are not rushed, the menu is not crowded, and the music is just loud enough to hear over the waves.</p>
          <p className="mb-4">We rented a building with a wide blue awning, painted the walls the color of low tide, and opened with eleven menu items. Nothing has fundamentally changed since — only sharpened.</p>
          <p>Eight years on, we are a team of twelve. Our coffee is still single-origin, still roasted weekly. Our breakfasts still feature whatever the morning fishermen drop off at the back door. Our regulars still order the same thing on Tuesdays.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16 border-b border-black/10 bg-white reveal sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="mb-16">
          <span className="block text-[10px] tracking-[0.4em] uppercase text-muted mb-3">{t.brief}</span>
          <h2 className="font-display font-light leading-[1.05] text-[clamp(36px,4.5vw,56px)]">{t.timeline}</h2>
        </div>
        <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr]">
          {[
            { year:'2017', title:'The doors opened', text:'A small cafe with eleven menu items, twenty seats, and a hand-painted sign. We served thirty-four people on our first day. We remember every one of them.', img:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80' },
            { year:'2019', title:'The terrace was built', text:'We added the outdoor terrace overlooking the beach road. It was supposed to seat twelve. On most evenings it seats twenty-five, depending on how friendly the crowd is.', img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
            { year:'2021', title:'The roastery, in the back', text:'We installed a small roaster in the back room and started roasting our own beans. The smell of roasting coffee competes with the sea breeze; it\'s a fair fight.', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' },
            { year:'2024', title:'Loyalty program · Live music', text:'We started The Pier Loyalty, our coffee-card-meets-perks program. Friday night live jazz also began — a tradition we now can\'t imagine giving up.', img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80' },
            { year:'2026', title:'Where we are now', text:'A team of twelve, seventy-something menu items, and a quiet conviction that we are doing exactly the work we want to be doing. The next chapter is being written, slowly.', img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80' },
          ].map(({ year, title, text, img }) => (
            <>
              <div key={year + '-year'} className="font-display text-[28px] font-normal text-gold py-8 border-t border-black/10 sm:text-[22px] sm:py-6">{year}</div>
              <div key={year + '-content'} className="py-8 pl-10 border-t border-black/10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start sm:py-6 sm:pl-6 sm:gap-5">
                <div>
                  <h3 className="font-display text-2xl font-normal text-ink mb-2.5">{title}</h3>
                  <p className="text-sm text-[#666] leading-[1.85] font-light">{text}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full aspect-[4/3] object-cover [filter:saturate(0.6)]" src={img} alt={year} />
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 bg-ink text-bg reveal sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <h2 className="font-display font-light leading-[1.05] text-[clamp(36px,4.5vw,60px)]">{t.values}</h2>
          <p className="text-[13px] text-[rgba(245,243,239,0.5)] max-w-xs leading-[1.8]">Four things hold steady, no matter how busy the season. They show up in every cup we pour and every plate we send out.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[rgba(255,255,255,0.08)]">
          {[
            { n:'01', title:'Slowness, on purpose', text:"We don't push tables to turn over. If you sit for three hours with one filter coffee, you've understood the place." },
            { n:'02', title:'Local before far', text:'Ingredients walk in from down the road wherever possible. Fish, eggs, herbs, vegetables — same-day, same-coast.' },
            { n:'03', title:'One thing, well', text:"We'd rather serve a small menu we believe in than a long menu we don't. Same with coffee. Same with playlists." },
            { n:'04', title:'Quiet beats clever', text:"Beautiful food doesn't need a flourish. Beautiful coffee doesn't need a story. We let the work speak softly." },
            { n:'05', title:'Hire kind people', text:'Skills can be taught. Warmth cannot. Our team is small for a reason — we work with people we want to work with.' },
            { n:'06', title:'Care for the coast', text:'1% of every coffee sold goes to local beach cleanup. We pick up after ourselves; we pick up after others when needed.' },
          ].map(({ n, title, text }) => (
            <div key={n} className="px-6 py-8 sm:px-8 sm:py-10 border-r border-b border-[rgba(255,255,255,0.08)]">
              <div className="font-display text-[44px] sm:text-[56px] font-light text-gold leading-none tracking-[-0.02em]">{n}</div>
              <h4 className="font-display text-[22px] font-light mt-4 mb-2.5">{title}</h4>
              <p className="text-[13px] text-[rgba(245,243,239,0.6)] leading-[1.8] font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-white px-4 py-16 text-center reveal sm:px-6 sm:py-16 lg:px-16 lg:py-24">
        <blockquote className="font-display font-light leading-[1.3] text-ink tracking-[-0.01em] max-w-[900px] mx-auto text-[clamp(28px,3.5vw,44px)]">
          &ldquo;<em className="italic text-gold">The sea</em> doesn&rsquo;t care if it&rsquo;s a busy Tuesday. Neither, in our best moments, do we.&rdquo;
        </blockquote>
        <cite className="block mt-8 font-sans text-[11px] tracking-[0.3em] uppercase text-muted not-italic">— Pim &amp; Tao, founders</cite>
      </section>

      {/* Team */}
      <section className="px-4 py-16 border-b border-black/10 reveal sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="mb-14">
          <h2 className="font-display font-light leading-[1.05] text-[clamp(36px,4.5vw,56px)]">{t.people}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name:'Pim Charoenpong', role:'Co-Founder · Roaster', bio:'Used to take photographs for living. Now takes them for fun and roasts beans for living. Lives ten minutes up the road.', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80' },
            { name:'Tao Sirisin', role:'Co-Founder · Kitchen', bio:'Trained at a small bistro in Chiang Mai. Believes that nothing on a brunch plate should fight with anything else on the plate.', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80' },
            { name:'Mai Suthep', role:'Head Barista', bio:'National latte art finalist 2024. Drinks her espresso with two ice cubes — never anyone else\'s order, just hers.', img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80' },
            { name:'Nat Pongpat', role:'Sommelier · Friday Wine Host', bio:'Five years at a wine bar in Bangkok. Came south for the salt air. Stayed for the slower customers.', img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80' },
          ].map(({ name, role, bio, img }) => (
            <div key={name} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full aspect-[4/5] object-cover [filter:saturate(0.65)_grayscale(0.2)] group-hover:[filter:saturate(0.95)] transition-[filter] duration-300 mb-4" src={img} alt={name} />
              <h4 className="font-display text-[22px] font-normal text-ink">{name}</h4>
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mt-1">{role}</div>
              <p className="text-xs text-[#777] mt-2.5 leading-[1.7] font-light">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline="STILL <em>WIDE OPEN</em>" />
    </>
  )
}
