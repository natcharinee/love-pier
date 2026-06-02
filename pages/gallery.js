import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

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
  const { lang } = useLanguage()
  const filters = lang === 'th'
    ? [{label:'ทั้งหมด',cat:null},{label:'ภายในร้าน',cat:'interior'},{label:'อาหารและเครื่องดื่ม',cat:'food'},{label:'ชายหาด',cat:'beach'},{label:'อีเวนต์',cat:'events'},{label:'ผู้มาเยือน',cat:'guests'}]
    : lang === 'zh'
      ? [{label:'全部',cat:null},{label:'店内',cat:'interior'},{label:'餐饮',cat:'food'},{label:'海边',cat:'beach'},{label:'活动',cat:'events'},{label:'客人',cat:'guests'}]
      : [{label:'All',cat:null},{label:'Interior',cat:'interior'},{label:'Food & Drink',cat:'food'},{label:'Beach',cat:'beach'},{label:'Events',cat:'events'},{label:'Guests',cat:'guests'}]
  const t = lang === 'th'
    ? { title:'Gallery — Love Pier Beach Cafe', g:'แกลเลอรี', h:'ช่วงเวลา\nริมทะเล', d:'รวมบรรยากาศกาแฟ แสงเช้า และผู้คนที่แวะเวียน', share:'แชร์ช่วงเวลาของคุณ', shareD:'แท็ก #lovepiercafe เพื่อให้เรารีโพสต์' }
    : lang === 'zh'
      ? { title:'Gallery — Love Pier Beach Cafe', g:'图库', h:'海边的\n日常片段', d:'收录咖啡、日落与每位来访者的片刻。', share:'分享你的时刻', shareD:'在 Instagram 使用 #lovepiercafe' }
      : { title:'Gallery — Love Pier Beach Cafe', g:'Gallery', h:'Moments by\nthe shore', d:'A slice of life at Love Pier.', share:'Share your moment with us', shareD:'Tag #lovepiercafe on Instagram.' }
  const [activeFilter, setActiveFilter] = useState(null)

  const visible = activeFilter ? TILES.filter(t => t.cat === activeFilter) : TILES

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Page header */}
      <header className="px-4 pt-12 pb-8 text-center border-b border-black/10 reveal sm:px-6 lg:px-10 lg:pt-16 lg:pb-10">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted mb-3">{t.g}</div>
        <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">{t.h.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
        <p className="mt-4 text-sm text-[#666] font-light max-w-[580px] mx-auto leading-[1.8]">{t.d}</p>
      </header>

      {/* Gallery filters */}
      <div className="flex gap-4 lg:gap-6 px-4 py-5 lg:py-8 border-b border-black/10 bg-white flex-wrap reveal sm:px-6 sm:gap-3.5">
        {filters.map(({ label, cat }) => (
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
      <div className="gallery-grid p-1.5 reveal">
        {visible.map((tile, i) => (
          <div
            key={i}
            className="g-tile gallery-item"
            style={{ '--col': tile.col, '--row': tile.row, '--mcol': tile.col >= 6 ? 2 : 1, '--mrow': 1, aspectRatio: tile.ratio }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tile.src} alt="" />
            <div className="g-tile-caption">{tile.cap}</div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <section className="bg-ink text-bg px-4 py-14 text-center reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <h2 className="font-display font-light mb-7 leading-[1.05] text-[clamp(40px,5vw,64px)]">{t.share}</h2>
        <p className="text-sm text-[rgba(245,243,239,0.6)] mb-8 max-w-[480px] mx-auto leading-[1.8]">{t.shareD}</p>
        <a href="#" className="inline-block bg-gold text-ink text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-bg transition-colors duration-300">@lovepier.cafe</a>
      </section>

      <Footer tagline="EVERY VISIT, <em>A NEW VIEW</em>" />
    </>
  )
}
