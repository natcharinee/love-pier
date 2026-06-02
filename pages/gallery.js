import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'

const FILTERS = [
  { label: 'All', cat: null },
  { label: 'Interior', cat: 'interior' },
  { label: 'Food & Drink', cat: 'food' },
  { label: 'Beach', cat: 'beach' },
  { label: 'Events', cat: 'events' },
  { label: 'Guests', cat: 'guests' },
]

const TILES = [
  { cat:'beach',    col:6, row:2, ratio:'4/5',  src:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',  cap:'Morning by the pier' },
  { cat:'food',     col:3, row:1, ratio:'1',    src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',  cap:'Cold brew' },
  { cat:'food',     col:3, row:1, ratio:'1',    src:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',  cap:'Espresso pour' },
  { cat:'interior', col:4, row:1, ratio:'1',    src:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80',     cap:'Interior' },
  { cat:'interior', col:4, row:1, ratio:'1',    src:'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&q=80',  cap:'Corner seat' },
  { cat:'food',     col:4, row:1, ratio:'1',    src:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',  cap:'Caramel latte' },
  { cat:'beach',    col:5, row:1, ratio:'16/9', src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',  cap:'The old pier' },
  { cat:'events',   col:7, row:1, ratio:'16/9', src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80', cap:'Evening lights' },
  { cat:'food',     col:4, row:1, ratio:'4/5',  src:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80',  cap:'Brunch plate' },
  { cat:'guests',   col:4, row:1, ratio:'4/5',  src:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',    cap:'Beach walk' },
  { cat:'beach',    col:4, row:1, ratio:'4/5',  src:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',  cap:'Sand & surf' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState(null)

  const visible = activeFilter ? TILES.filter(t => t.cat === activeFilter) : TILES

  return (
    <>
      <Head>
        <title>Gallery — Love Pier Beach Cafe</title>
      </Head>

      {/* Page header */}
      <header className="px-10 pt-16 pb-10 text-center border-b border-black/10 reveal sm:px-5 sm:pt-10 sm:pb-7">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">Gallery</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">Moments by<br/><em className="italic text-gold">the shore</em></h1>
        <p className="mt-4 text-sm text-[#666] font-light max-w-[580px] mx-auto leading-[1.8]">Eight years of mornings, sunsets, lattes, and a community that keeps returning. Browse a slice of life at Love Pier.</p>
      </header>

      {/* Gallery filters */}
      <div className="flex gap-6 px-10 py-8 border-b border-black/10 bg-white flex-wrap reveal sm:px-6 sm:py-5 sm:gap-3.5">
        {FILTERS.map(({ label, cat }) => (
          <button
            key={label}
            onClick={() => setActiveFilter(cat)}
            className={`text-[11px] tracking-[0.25em] uppercase bg-transparent border-none px-0 py-1.5 border-b cursor-pointer transition-colors ${activeFilter === cat ? 'text-ink border-gold' : 'text-[#aaa] border-transparent hover:text-ink'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid p-1.5 reveal" style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gap:'6px' }}>
        {visible.map((tile, i) => (
          <div
            key={i}
            className="g-tile"
            style={{ gridColumn:`span ${tile.col}`, gridRow:`span ${tile.row}`, aspectRatio: tile.ratio }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tile.src} alt="" />
            <div className="g-tile-caption">{tile.cap}</div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <section className="bg-ink text-bg px-10 py-20 text-center reveal sm:px-6 sm:py-14">
        <h2 className="font-display font-light mb-7 leading-[1.05] text-[clamp(40px,5vw,64px)]">Share <em className="italic text-gold">your moment</em><br/>with us</h2>
        <p className="text-sm text-[rgba(245,243,239,0.6)] mb-8 max-w-[480px] mx-auto leading-[1.8]">Tag #lovepiercafe on Instagram. We re-share our favorites every week and feature one guest each month in our window display.</p>
        <a href="#" className="inline-block bg-gold text-ink text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-bg transition-colors duration-300">@lovepier.cafe</a>
      </section>

      <Footer tagline="EVERY VISIT, <em>A NEW VIEW</em>" />
    </>
  )
}
