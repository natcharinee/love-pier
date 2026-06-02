import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

function MenuItem({ num, name, badge, desc, price }) {
  return (
    <div className="grid grid-cols-[60px_1fr_auto] gap-5 py-6 border-b border-dashed border-black/[0.08] items-start cursor-pointer">
      <span className="text-[10px] tracking-[0.25em] text-[#bbb] pt-1">{num}</span>
      <div>
        <div className="font-display text-[22px] font-light text-ink leading-[1.1]">
          {name}{badge && <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase ml-2 align-middle">{badge}</span>}
        </div>
        <div className="text-xs text-muted mt-1.5 leading-relaxed font-light">{desc}</div>
      </div>
      <div className="font-display text-[22px] text-gold whitespace-nowrap pt-0.5">{price}</div>
    </div>
  )
}

function MenuSection({ num, cat, title, titleEm, subtitle, items, bg }) {
  return (
    <section className={`px-10 py-20 border-b border-black/10 reveal sm:px-6 sm:py-14${bg ? ' bg-white' : ''}`} data-cat={cat}>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 mb-16 sm:gap-4 sm:mb-9">
        <div><div className="font-display text-[80px] text-black/[0.08] leading-none font-light sm:text-5xl">{num}</div></div>
        <div>
          <h2 className="font-display font-light leading-[1.05] text-ink text-[clamp(36px,4vw,52px)]">{title} <em className="italic text-gold">{titleEm}</em></h2>
          <p className="text-sm text-[#777] leading-[1.8] font-light mt-3.5 max-w-[540px]">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        {items.map(item => <MenuItem key={item.num} {...item} />)}
      </div>
    </section>
  )
}

const MENU_DATA = [
  {
    num: '01', cat: 'coffee', title: 'Coffee', titleEm: '& Espresso', bg: false,
    subtitle: 'Single-origin beans sourced from Chiang Rai and roasted weekly. Pulled and steeped with precision.',
    items: [
      { num:'01', name:'Cold Brew Sunrise', badge:'Signature', desc:'Steeped 12 hours, served with house syrup & orange peel.', price:'120' },
      { num:'02', name:'Sea Breeze Latte', desc:'Double espresso, steamed milk, a whisper of sea salt.', price:'140' },
      { num:'03', name:'Espresso Tonic', desc:'Espresso poured over tonic, ice, and a slice of lime.', price:'130' },
      { num:'04', name:'Pour-Over of the Week', desc:'Ask the barista. Single origin, hand-poured.', price:'160' },
      { num:'05', name:'Cappuccino', desc:'Classic 1:1:1 ratio. Served small, served hot.', price:'110' },
      { num:'06', name:'Thai Iced Coffee', desc:'Strong, sweetened, and served the way it should be.', price:'90' },
    ],
  },
  {
    num: '02', cat: 'tea', title: 'Tea', titleEm: '& Refreshers', bg: true,
    subtitle: 'Loose-leaf teas, herbal infusions, and seasonal coolers built for warm afternoons by the shore.',
    items: [
      { num:'07', name:'Matcha Serenity', badge:'Signature', desc:'Ceremonial-grade matcha, oat milk, raw honey.', price:'140' },
      { num:'08', name:'Coconut Pandan Cooler', desc:'Pandan-infused coconut water, lime, mint.', price:'120' },
      { num:'09', name:'Butterfly Lemonade', desc:'Butterfly pea flower, soda, lemon. Color-changing.', price:'110' },
      { num:'10', name:'Earl Grey Foam', desc:'Cold-steeped earl grey, salted cream cap.', price:'130' },
    ],
  },
  {
    num: '03', cat: 'breakfast', title: 'Breakfast', titleEm: 'all day', bg: false,
    subtitle: 'Slow mornings deserve good food. Served from open to close.',
    items: [
      { num:'11', name:'Pier Breakfast Plate', badge:'Signature', desc:'Two eggs, sourdough, avocado, smoked salmon, garden greens.', price:'280' },
      { num:'12', name:'Coconut Granola Bowl', desc:'House granola, coconut yogurt, seasonal fruit, honey.', price:'220' },
      { num:'13', name:'Eggs Benedict', desc:'Poached eggs, brioche, ham, lemon hollandaise.', price:'260' },
      { num:'14', name:'Rice Porridge with Prawn', desc:'Fresh prawns, ginger, fried garlic, soft-boiled egg.', price:'240' },
    ],
  },
  {
    num: '04', cat: 'mains', title: 'Mains', titleEm: '& the Sea', bg: true,
    subtitle: 'Catch of the day, slow-cooked plates, and bowls built around what came in this morning. Substantial, unhurried, honest.',
    items: [
      { num:'15', name:'Grilled Sea Bass', badge:'Signature', desc:'Whole fish, lemon-herb butter, sea salt potatoes, house salad.', price:'420' },
      { num:'16', name:'Pier Prawn Pasta', desc:'Tiger prawns, cherry tomato, garlic, chilli, linguine, basil oil.', price:'360' },
      { num:'17', name:'Thai Basil Fish Bowl', desc:'Flash-fried barramundi, holy basil, jasmine rice, fried egg.', price:'280' },
      { num:'18', name:'Mushroom Risotto', desc:'Porcini, oyster mushroom, parmesan, truffle oil, fresh herb.', price:'320' },
      { num:'19', name:'Beach BBQ Plate', desc:'Mixed grill — chicken thigh, corn, sweet potato, slaw, BBQ glaze.', price:'380' },
      { num:'20', name:'Som Tum Salad Bowl', desc:'Green papaya, peanuts, dried shrimp, cherry tomato, lime dressing.', price:'220' },
    ],
  },
  {
    num: '05', cat: 'sweets', title: 'Sweets', titleEm: '& endings', bg: false,
    subtitle: 'Small plates to close on — local fruit, house-made pastries, and things that go well with a last cup of coffee.',
    items: [
      { num:'21', name:'Coconut Panna Cotta', badge:'Signature', desc:'Kaffir lime infusion, mango coulis, sesame tuile.', price:'180' },
      { num:'22', name:'Thai Tea Crème Brûlée', desc:'Classic custard steeped with Thai tea, caramelised crust.', price:'160' },
      { num:'23', name:'Banana Foster Waffle', desc:'Brioche waffle, caramelised banana, rum butter, vanilla cream.', price:'200' },
      { num:'24', name:'Seasonal Fruit Plate', desc:'Whatever is ripe today — sliced and served with honey yogurt dip.', price:'120' },
    ],
  },
  {
    num: '06', cat: 'drinks', title: 'Drinks', titleEm: '& mocktails', bg: true,
    subtitle: 'From freshly pressed juices and craft sodas to alcohol-free cocktails that taste like the coast smells.',
    items: [
      { num:'25', name:'Pier Lemonade', badge:'Signature', desc:'House lemon syrup, soda, fresh mint, salted rim.', price:'90' },
      { num:'26', name:'Green Mango Soda', desc:'Pressed green mango, ginger syrup, sparkling water.', price:'95' },
      { num:'27', name:'Young Coconut', desc:'Straight from the shell, served with a straw and a spoon.', price:'80' },
      { num:'28', name:'Watermelon Fizz', desc:'Fresh watermelon, lime, basil seed, lychee soda.', price:'100' },
      { num:'29', name:'Fresh Orange & Ginger', desc:'Cold-pressed, no sugar added. Served over ice.', price:'110' },
      { num:'30', name:'Sparkling Water', desc:'Perrier or S.Pellegrino, 330ml.', price:'60' },
    ],
  },
]

export default function Menu() {
  const { lang } = useLanguage()
  const tabs = lang === 'th'
    ? [
        { label: 'ทั้งหมด', cat: null }, { label: 'กาแฟ', cat: 'coffee' }, { label: 'ชาและรีเฟรชเชอร์', cat: 'tea' },
        { label: 'อาหารเช้า', cat: 'breakfast' }, { label: 'จานหลัก', cat: 'mains' }, { label: 'ของหวาน', cat: 'sweets' }, { label: 'เครื่องดื่ม', cat: 'drinks' },
      ]
    : lang === 'zh'
      ? [
          { label: '全部', cat: null }, { label: '咖啡', cat: 'coffee' }, { label: '茶与清爽饮品', cat: 'tea' },
          { label: '早餐', cat: 'breakfast' }, { label: '主菜', cat: 'mains' }, { label: '甜品', cat: 'sweets' }, { label: '饮品', cat: 'drinks' },
        ]
      : [
          { label: 'All', cat: null }, { label: 'Coffee', cat: 'coffee' }, { label: 'Tea & Refreshers', cat: 'tea' },
          { label: 'Breakfast', cat: 'breakfast' }, { label: 'Mains', cat: 'mains' }, { label: 'Sweets', cat: 'sweets' }, { label: 'Drinks', cat: 'drinks' },
        ]
  const t = lang === 'th'
    ? { title: 'Menu — Love Pier Beach Cafe', menu: 'เมนู', hero: 'เมนูที่ตั้งใจ\nเพื่อกลิ่นทะเล', desc: 'เมนูของเราปรับตามวัตถุดิบสดใหม่ในแต่ละช่วงเวลา', specials: 'เมนูพิเศษวันนี้', chef: 'ตัวเลือกพิเศษ\nตามฤดูกาล' }
    : lang === 'zh'
      ? { title: 'Menu — Love Pier Beach Cafe', menu: '菜单', hero: '用心制作\n与海相伴', desc: '我们的菜单根据当季食材与每日新鲜度持续调整。', specials: '今日推荐', chef: '主厨精选\n当季限定' }
      : { title: 'Menu — Love Pier Beach Cafe', menu: 'The Menu', hero: 'Crafted with\nthe sea in mind', desc: "Every drink and dish is built around what's fresh right now.", specials: "Today's Specials", chef: "Chef's choice\nof the season" }
  const [activeTab, setActiveTab] = useState(null)

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Menu Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 reveal">
        <div className="px-16 py-20 flex flex-col justify-center sm:px-6 sm:py-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted mb-4 block">{t.menu}</span>
          <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] mb-5 text-[clamp(48px,6vw,76px)]">{t.hero.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h1>
          <p className="text-[15px] leading-[1.9] text-[#555] font-light max-w-[480px]">{t.desc}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/5] object-cover [filter:saturate(0.7)]" src="/uploads/menu-hero-custom.png" alt="menu hero" />
      </section>

      {/* Category tabs */}
      <div className="flex gap-7 px-10 py-8 border-b border-black/10 overflow-x-auto [scrollbar-width:none] bg-white sticky top-[67px] z-50 reveal sm:px-6 sm:py-5 sm:gap-4 sm:top-[60px]">
        {tabs.map(({ label, cat }) => (
          <button
            key={label}
            onClick={() => setActiveTab(cat)}
            className={`font-display text-[22px] font-light whitespace-nowrap cursor-pointer border-none bg-transparent px-0 py-1 border-b transition-colors sm:text-lg ${activeTab === cat ? 'text-ink border-gold' : 'text-[#aaa] border-transparent hover:text-ink'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Menu sections */}
      {MENU_DATA.map(section => (
        (!activeTab || activeTab === section.cat) && (
          <MenuSection key={section.cat} {...section} />
        )
      ))}

      {/* Featured */}
      <section className="bg-ink text-bg px-10 py-20 reveal sm:px-6 sm:py-14">
        <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">{t.specials}</div>
        <h2 className="font-display font-light leading-[1.1] mb-12 max-w-[800px] text-[clamp(36px,5vw,60px)]">{t.chef.split('\n').map((l,i)=><span key={i}>{l}{i===0?<br/>:null}</span>)}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80', name:'Grilled Sea Bass', sub:'Whole, lemon, herbs', price:'฿420' },
            { img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', name:'Weekend Brunch Plate', sub:'Sat–Sun only · until 14:00', price:'฿380' },
            { img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', name:'Caramel Sea Salt Latte', sub:'Limited edition · May', price:'฿150' },
          ].map(({ img, name, sub, price }) => (
            <div key={name} className="group flex flex-col gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full aspect-[4/5] object-cover [filter:saturate(0.6)] group-hover:[filter:saturate(1)] transition-[filter] duration-500" src={img} alt={name} />
              <div className="font-display text-[22px] font-light mt-1.5">{name}</div>
              <div className="text-[11px] tracking-[0.15em] text-[rgba(245,243,239,0.5)] uppercase mt-0.5">{sub}</div>
              <div className="font-display text-lg text-gold mt-1.5">{price}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer tagline="EAT WELL, <em>STAY LONGER</em>" />
    </>
  )
}
