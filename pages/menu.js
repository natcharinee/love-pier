import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../lib/language'

const COFFEE_PRICE_KEYS = ['hot', 'iced', 'blended']

const COFFEE_PRICE_LABELS = {
  th: { hot: 'ร้อน', iced: 'เย็น', blended: 'ปั่น' },
  en: { hot: 'Hot', iced: 'Iced', blended: 'Frappe' },
  zh: { hot: '热', iced: '冰', blended: '冰沙' },
}

const COFFEE_ADDONS_COPY = {
  en: [
    { name: 'Add an Extra Shot', price: '35' },
    { name: 'Milk Oat', price: '20' },
  ],
  th: [
    { name: 'เพิ่มเอสเพรสโซ่ช็อต', price: '35' },
    { name: 'เปลี่ยนนมข้าวโอ๊ต', price: '20' },
  ],
  zh: [
    { name: '加一份浓缩', price: '35' },
    { name: '换燕麦奶', price: '20' },
  ],
}

function CoffeePriceHeader({ priceLabels }) {
  return (
    <div
      aria-hidden
      className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[60px_1fr_auto] gap-3 sm:gap-5 pb-2 -mb-1 lg:col-span-2"
    >
      <span />
      <span />
      <div className="flex justify-end gap-5 sm:gap-6 shrink-0 min-w-[108px] sm:min-w-[120px]">
        {COFFEE_PRICE_KEYS.map((key) => (
          <span
            key={key}
            className="font-sans text-[9px] tracking-[0.12em] uppercase text-muted w-9 sm:w-10 text-center shrink-0"
          >
            {priceLabels[key]}
          </span>
        ))}
      </div>
    </div>
  )
}

function MenuItem({ num, name, badge, desc, price, prices, showDrinkPrices }) {
  const priceCell = prices && showDrinkPrices ? (
    <div className="flex justify-end gap-5 sm:gap-6 shrink-0 min-w-[108px] sm:min-w-[120px] pt-0.5">
      {COFFEE_PRICE_KEYS.map((key) => (
        <span
          key={key}
          className={`font-display text-[17px] sm:text-[19px] tabular-nums leading-none w-9 sm:w-10 text-center shrink-0 ${prices[key] ? 'text-gold' : 'text-[#ccc]'}`}
        >
          {prices[key] ?? '–'}
        </span>
      ))}
    </div>
  ) : (
    <div className="font-display text-[20px] sm:text-[22px] text-gold whitespace-nowrap pt-0.5 shrink-0">{price}</div>
  )

  return (
    <div className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[60px_1fr_auto] gap-3 sm:gap-5 py-5 sm:py-6 border-b border-dashed border-black/[0.08] items-start cursor-pointer">
      <span className="text-[10px] tracking-[0.25em] text-[#bbb] pt-1">{num}</span>
      <div className="min-w-0">
        <div className="font-display text-[20px] sm:text-[22px] font-light text-ink leading-[1.1]">
          {name}{badge && <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase ml-2 align-middle">{badge}</span>}
        </div>
        {desc ? <div className="text-xs text-muted mt-1.5 leading-relaxed font-light">{desc}</div> : null}
      </div>
      {priceCell}
    </div>
  )
}

function CoffeeAddOns({ items }) {
  return (
    <div className="mt-8 pt-6 border-t border-dashed border-black/10 lg:col-span-2 space-y-4">
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-baseline gap-6 text-sm font-light text-[#555]">
          <span>{item.name}</span>
          <span className="font-display text-[18px] text-gold tabular-nums shrink-0">฿{item.price}</span>
        </div>
      ))}
    </div>
  )
}

function MatchaTasteNotes({ notes }) {
  return (
    <div className="mt-10 pt-8 border-t border-dashed border-black/10 lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {notes.map((note) => (
          <div key={note.title} className="flex gap-4 items-start">
            <div className={`w-11 h-11 rounded-full shrink-0 mt-0.5 ring-1 ring-black/10 ${note.swatch}`} aria-hidden />
            <div>
              <h3 className="text-[11px] tracking-[0.15em] uppercase text-[#888] font-light leading-snug mb-2.5">{note.title}</h3>
              <p className="text-sm text-[#555] font-light leading-[1.85]">{note.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const TIERED_PRICE_CATEGORIES = ['coffee']

function MenuSection({ num, cat, title, titleEm, subtitle, items, bg, priceLabels, menuAddOns, tasteNotes }) {
  return (
    <section className={`px-4 py-14 border-b border-black/10 reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20${bg ? ' bg-white' : ''}`} data-cat={cat}>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 mb-10 lg:mb-16 sm:gap-4 sm:mb-9">
        <div><div className="font-display text-6xl lg:text-[80px] text-black/[0.08] leading-none font-light sm:text-5xl">{num}</div></div>
        <div>
          <h2 className="font-display font-light leading-[1.05] text-ink text-[clamp(36px,4vw,52px)]">
            {title}
            {titleEm ? <> <em className="italic text-gold">{titleEm}</em></> : null}
          </h2>
          <p className="text-sm text-[#777] leading-[1.8] font-light mt-3.5 max-w-[540px]">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        {priceLabels && <CoffeePriceHeader priceLabels={priceLabels} />}
        {items.map((item) => (
          <MenuItem key={item.num} {...item} showDrinkPrices={!!priceLabels} />
        ))}
        {menuAddOns?.length ? <CoffeeAddOns items={menuAddOns} /> : null}
        {tasteNotes?.length ? <MatchaTasteNotes notes={tasteNotes} /> : null}
      </div>
    </section>
  )
}

const MENU_DATA = [
  {
    num: '01', cat: 'chickenRice', title: 'Singapore', titleEm: 'Chicken Rice', bg: false,
    subtitle: 'Tender poached chicken with fragrant chicken rice, three signature sauces, and warm chicken soup.',
    items: [
      { num:'01', name:'Set — Mixed Chicken · Small', desc:'1 plate of rice · mixed parts', price:'150' },
      { num:'02', name:'Set — Mixed Chicken · Medium', desc:'2 plates of rice · mixed parts', price:'280' },
      { num:'03', name:'Set — Mixed Chicken · Large', desc:'4 plates of rice · mixed parts', price:'550' },
      { num:'04', name:'Signature Chicken Rice Tray', badge:'Signature', desc:'4 plates of rice · thigh or breast', price:'670' },
      { num:'05', name:'Sesame Oil Liver', desc:'Plate', price:'150' },
      { num:'06', name:'Boiled Chicken Blood', desc:'Plate', price:'100' },
      { num:'07', name:'Chicken Rice', desc:'Bowl', price:'35' },
      { num:'08', name:'Orange Chili Ginger Sauce', desc:'Small jar', price:'25' },
      { num:'09', name:'Ginger Oil Sauce', desc:'Small jar', price:'25' },
      { num:'10', name:'Soybean Paste Dipping Sauce', desc:'Soybean paste, ginger, fresh chili · small jar', price:'25' },
      { num:'11', name:'Dine-in Dipping Sauces', desc:'Various sauces for dine-in', price:'Free' },
    ],
  },
  {
    num: '02', cat: 'mains', title: 'Mains', titleEm: '& the Sea', bg: true,
    subtitle: 'Catch of the day, slow-cooked plates, and bowls built around what came in this morning. Substantial, unhurried, honest.',
    items: [
      { num:'32', name:'Grilled Sea Bass', badge:'Signature', desc:'Whole fish, lemon-herb butter, sea salt potatoes, house salad.', price:'420' },
      { num:'33', name:'Pier Prawn Pasta', desc:'Tiger prawns, cherry tomato, garlic, chilli, linguine, basil oil.', price:'360' },
      { num:'34', name:'Thai Basil Fish Bowl', desc:'Flash-fried barramundi, holy basil, jasmine rice, fried egg.', price:'280' },
      { num:'35', name:'Mushroom Risotto', desc:'Porcini, oyster mushroom, parmesan, truffle oil, fresh herb.', price:'320' },
      { num:'36', name:'Beach BBQ Plate', desc:'Mixed grill — chicken thigh, corn, sweet potato, slaw, BBQ glaze.', price:'380' },
      { num:'37', name:'Som Tum Salad Bowl', desc:'Green papaya, peanuts, dried shrimp, cherry tomato, lime dressing.', price:'220' },
    ],
  },
  {
    num: '03', cat: 'breakfast', title: 'Breakfast', titleEm: 'all day', bg: false,
    subtitle: 'Light plates and sandwiches — served from open to close.',
    items: [
      { num:'01', name:'Pier Breakfast Plate', badge:'Signature', price:'280' },
      { num:'02', name:'Smoked Salmon Sandwich', price:'240' },
      { num:'03', name:'Chicken & Avocado Ciabatta', price:'220' },
      { num:'04', name:'Eggs Benedict', price:'260' },
      { num:'05', name:'Coconut Granola Bowl', price:'220' },
    ],
  },
  {
    num: '04', cat: 'coffee', title: 'Coffee', titleEm: '', bg: false,
    subtitle: 'Hot, iced, and frappe — prices per menu.',
    items: [
      { num:'01', name:'Americano', prices:{ hot:'90', iced:'100', blended:null } },
      { num:'02', name:'Espresso', prices:{ hot:'80', iced:'120', blended:'135' } },
      { num:'03', name:'Cappuccino', prices:{ hot:'90', iced:'120', blended:'135' } },
      { num:'04', name:'Latte', prices:{ hot:'90', iced:'120', blended:'135' } },
      { num:'05', name:'Mocca', prices:{ hot:'90', iced:'120', blended:'135' } },
      { num:'06', name:'Caramel Macchiato', prices:{ hot:'100', iced:'130', blended:'145' } },
      { num:'07', name:'Dirty', badge:'Signature', prices:{ hot:null, iced:'130', blended:null } },
      { num:'08', name:'Soft Coffee Latte', prices:{ hot:null, iced:'150', blended:null } },
      { num:'09', name:'Yuzu Black Coffee', prices:{ hot:null, iced:'140', blended:null } },
      { num:'10', name:'Orange Black Coffee', prices:{ hot:null, iced:'140', blended:null } },
      { num:'11', name:'Coconut Coffee', prices:{ hot:null, iced:'140', blended:null } },
    ],
  },
  {
    num: '05', cat: 'matcha', title: 'Matcha', titleEm: '', bg: true,
    subtitle: 'Stone-ground matcha whisked to order — pure, creamy, and gently sweet.',
    items: [
      { num:'00', name:'PANG Signature', badge:'Signature', desc:'Matcha x Khao Lam Latte', price:'179' },
      { num:'01', name:'Pure Matcha', price:'140' },
      { num:'02', name:'Matcha Latte', price:'150' },
      { num:'03', name:'Dirty Matcha', price:'150' },
      { num:'04', name:'Coconut Matcha', price:'150' },
      { num:'05', name:'Orange Matcha', price:'150' },
      { num:'06', name:'Matcha Yuzu', price:'150' },
      { num:'07', name:'Soft Matcha', price:'160' },
    ],
  },
  {
    num: '06', cat: 'nonCoffee', title: 'Non Coffee', titleEm: '', bg: true,
    subtitle: 'Thai tea, chocolate, and creamy frappes — no espresso.',
    items: [
      { num:'01', name:'Premium Thai Tea', price:'100' },
      { num:'02', name:'Thai Tea Frappe', price:'120' },
      { num:'03', name:'Chocolate', price:'100' },
      { num:'04', name:'Chocolate Frappe', price:'120' },
      { num:'05', name:'Coconut Milk Frappe', price:'120' },
    ],
  },
  {
    num: '07', cat: 'italianSoda', title: 'Italian Soda', titleEm: '', bg: false,
    subtitle: 'Sparkling sodas with fruit, honey, and coastal brightness.',
    items: [
      { num:'01', name:'Lemon Honey Soda', price:'120' },
      { num:'02', name:'Yuzu Soda', price:'120' },
      { num:'03', name:'Strawberry Soda', price:'120' },
      { num:'04', name:'Lychee Soda', price:'120' },
      { num:'05', name:'Blue Ocean Soda', price:'120' },
    ],
  },
  {
    num: '08', cat: 'other', title: 'Other', titleEm: '', bg: true,
    subtitle: 'Still and sparkling water, soft drinks, and everyday essentials.',
    items: [
      { num:'01', name:'Purra Water', price:'20' },
      { num:'02', name:'Evian Mineral Water', price:'60' },
      { num:'03', name:'Coke', price:'40' },
      { num:'04', name:'Coke Zero', price:'40' },
    ],
  },
  {
    num: '09', cat: 'sweets', title: 'Sweet', titleEm: 'Desserts', bg: false,
    subtitle: 'House-made cakes, pies, and classics to close the meal.',
    items: [
      { num:'01', name:'Coconut Cake', price:'150' },
      { num:'02', name:'Strawberry Cheese Pie', price:'189' },
      { num:'03', name:'Blueberry Cheese Pie', price:'189' },
      { num:'04', name:'Chocolate Cake', price:'140' },
      { num:'05', name:'Banoffee', price:'150' },
      { num:'06', name:'Red Velvet Cake', price:'130' },
      { num:'07', name:'Orange Cake', price:'90' },
      { num:'08', name:'Egg Tart', price:'55' },
      { num:'09', name:'Tiramisu', price:'150' },
    ],
  },
]

const SECTION_COPY = {
  th: {
    coffee: { title: 'Coffee', titleEm: '', subtitle: 'ร้อน · เย็น · ปั่น — ราคาตามเมนู' },
    matcha: { title: 'Matcha', titleEm: '', subtitle: 'มัทฉะเกรดพรีเมี่ยม ตีฟองทีละแก้ว หอมนุ่มละมุน' },
    nonCoffee: { title: 'Non Coffee', titleEm: '', subtitle: 'ชาไทย ช็อกโกแลต และเครื่องดื่มปั่น — ไม่มีกาแฟ' },
    italianSoda: { title: 'Italian Soda', titleEm: '', subtitle: 'โซดาผสมผลไม้และน้ำผึ้ง สดชื่นเหมาะกับอากาศริมทะเล' },
    other: { title: 'Other', titleEm: '', subtitle: 'น้ำดื่ม น้ำแร่ และเครื่องดื่มอัดลม' },
    chickenRice: { title: 'ข้าวมันไก่', titleEm: 'สิงคโปร์ / ไหหลำ', subtitle: 'ไก่ต้มนุ่ม ข้าวมันหอม น้ำจิ้มสูตรเด็ด 3 แบบ และซุปไก่ร้อนๆ' },
    mains: { title: 'จานหลัก', titleEm: 'วัตถุดิบชั้นดี', subtitle: 'จานหลักรสกลมกล่อมจากวัตถุดิบสดใหม่ประจำวัน' },
    breakfast: { title: 'อาหารเช้า', titleEm: 'ตลอดวัน', subtitle: 'จานเบาและแซนด์วิช เสิร์ฟได้ทุกเวลา สบายๆ ริมทะเล' },
    sweets: { title: 'Sweet', titleEm: 'Desserts', subtitle: 'เค้กและพายโฮมเมด หวานกำลังดีปิดมื้ออย่างลงตัว' },
  },
  zh: {
    coffee: { title: 'Coffee', titleEm: '', subtitle: '热饮 · 冰饮 · 冰沙 — 价格见菜单。' },
    matcha: { title: 'Matcha', titleEm: '', subtitle: '石磨抹茶现点现打，香气清甜，口感细腻。' },
    nonCoffee: { title: 'Non Coffee', titleEm: '', subtitle: '泰茶、巧克力与冰沙饮品，不含咖啡。' },
    italianSoda: { title: 'Italian Soda', titleEm: '', subtitle: '气泡苏打配水果与蜂蜜，清爽顺口。' },
    other: { title: 'Other', titleEm: '', subtitle: '饮用水、矿泉水与汽水。' },
    chickenRice: { title: '海南鸡饭', titleEm: '新加坡 / 海南', subtitle: '嫩滑白切鸡、香浓鸡油饭、三款招牌蘸料与热鸡汤。' },
    mains: { title: '主菜', titleEm: '& 海味', subtitle: '以当日新鲜食材为主角，口味平衡、份量满足。' },
    breakfast: { title: '早餐', titleEm: '全天供应', subtitle: '轻食与三明治，从早到晚都能点，海边吃更舒服。' },
    sweets: { title: 'Sweet', titleEm: 'Desserts', subtitle: '自制蛋糕与派点，甜度适中，收尾刚好。' },
  },
}

const FOOTER_TAGLINE = {
  th: 'ทานให้อิ่ม <em>นั่งให้นาน</em>',
  zh: '吃好 <em>坐久一点</em>',
  en: 'EAT WELL, <em>STAY LONGER</em>',
}

const BREAKFAST_DESC_COPY = {
  en: {
    '01': { badge: 'Signature', desc: 'Two eggs any style, sourdough, avocado, smoked salmon, and garden greens.' },
    '02': { desc: 'Smoked salmon, cream cheese, cucumber, and dill on toasted sourdough.' },
    '03': { desc: 'Grilled chicken, avocado, tomato, and herb mayo on ciabatta.' },
    '04': { desc: 'Poached eggs, brioche, ham, and lemon hollandaise.' },
    '05': { desc: 'House granola, coconut yogurt, seasonal fruit, and honey.' },
  },
  th: {
    '01': { name: 'เพียร์เบรกฟาสต์เพลต', badge: 'เมนูแนะนำ', desc: 'ไข่ 2 ฟอง ซาวโดว์ อะโวคาโด แซลมอนรมควัน และผักสด' },
    '02': { name: 'แซนด์วิชแซลมอนรมควัน', desc: 'ครีมชีส แตงกวา ดิล บนขนมปังซาวโดว์ปิ้ง' },
    '03': { name: 'แซนด์วิชไก่อะโวคาโด', desc: 'ไก่ย่าง อะโวคาโด มะเขือเทศ มายองเนสสมุนไพร บนขนมปังเซียบัตตา' },
    '04': { name: 'เอ้กเบเนดิกต์', desc: 'ไข่ลวก บริยอช แฮม และซอสฮอลแลนเดส' },
    '05': { name: 'โคโคนัทกราโนล่าโบวล์', desc: 'กราโนล่าโฮมเมด โยเกิร์ตมะพร้าว ผลไม้ตามฤดูกาล และน้ำผึ้ง' },
  },
  zh: {
    '01': { badge: '招牌', desc: '两颗蛋、酸种面包、牛油果、烟熏三文鱼与鲜蔬。' },
    '02': { desc: '烟熏三文鱼、奶油芝士、黄瓜与莳萝，配烤酸种面包。' },
    '03': { desc: '烤鸡、牛油果、番茄与香草蛋黄酱，配夏巴塔。' },
    '04': { desc: '水波蛋、布里欧修、火腿与荷兰酱。' },
    '05': { desc: '自制麦片、椰子酸奶、时令水果与蜂蜜。' },
  },
}

const CHICKEN_RICE_DESC_COPY = {
  en: {
    '01': { desc: 'Mixed chicken parts · 1 plate of chicken rice' },
    '02': { desc: 'Mixed chicken parts · 2 plates of chicken rice' },
    '03': { desc: 'Mixed chicken parts · 4 plates of chicken rice' },
    '04': { badge: 'Signature', desc: 'Thigh or breast · 4 plates of chicken rice' },
    '05': { desc: 'Sesame oil liver — plate' },
    '06': { desc: 'Boiled chicken blood — plate' },
    '07': { desc: 'Fragrant chicken rice — bowl' },
    '08': { desc: 'Orange chili ginger sauce — small jar' },
    '09': { desc: 'Ginger oil sauce — small jar' },
    '10': { desc: 'Soybean paste, ginger, and fresh chili — small jar' },
    '11': { desc: 'Various dipping sauces for dine-in' },
  },
  th: {
    '01': { name: 'เซต — ข้าวมันไก่ ขนาดเล็ก', desc: 'เนื้อไก่คละส่วน · ข้าวมัน 1 จาน' },
    '02': { name: 'เซต — ข้าวมันไก่ ขนาดกลาง', desc: 'เนื้อไก่คละส่วน · ข้าวมัน 2 จาน' },
    '03': { name: 'เซต — ข้าวมันไก่ ขนาดใหญ่', desc: 'เนื้อไก่คละส่วน · ข้าวมัน 4 จาน' },
    '04': { name: 'ข้าวมันไก่ซิกเนเจอร์ เสิร์ฟเป็นถาด', badge: 'เมนูแนะนำ', desc: 'น่องสะโพกหรือเนื้ออก · ข้าวมัน 4 จาน' },
    '05': { name: 'ตับน้ำมันงา', desc: 'จาน' },
    '06': { name: 'เลือดไก่ต้ม', desc: 'จาน' },
    '07': { name: 'ข้าวมัน', desc: 'ชาม' },
    '08': { name: 'น้ำจิ้มพริกส้มขิง', desc: 'กระปุกเล็ก' },
    '09': { name: 'น้ำจิ้มน้ำมันขิง', desc: 'กระปุกเล็ก' },
    '10': { name: 'น้ำจิ้มเต้าเจี๊ยว + ขิง + พริกสด', desc: 'กระปุกเล็ก' },
    '11': { name: 'น้ำจิ้มต่างๆ ทานที่ร้าน', desc: 'ฟรี' },
  },
  zh: {
    '01': { desc: '鸡肉混搭部位 · 鸡油饭 1 盘' },
    '02': { desc: '鸡肉混搭部位 · 鸡油饭 2 盘' },
    '03': { desc: '鸡肉混搭部位 · 鸡油饭 4 盘' },
    '04': { badge: '招牌', desc: '鸡腿或鸡胸 · 鸡油饭 4 盘' },
    '05': { desc: '麻油鸡肝 · 盘' },
    '06': { desc: '白切鸡血 · 盘' },
    '07': { desc: '鸡油饭 · 碗' },
    '08': { desc: '橘椒姜蘸酱 · 小罐' },
    '09': { desc: '姜油蘸酱 · 小罐' },
    '10': { desc: '豆酱 + 姜 + 鲜辣椒 · 小罐' },
    '11': { desc: '堂食蘸料（多款）' },
  },
}

const SWEETS_DESC_COPY = {
  en: {
    '01': { desc: 'Fluffy coconut sponge with cream and toasted coconut — light, tropical, and fragrant.' },
    '02': { desc: 'Cream cheese pie topped with fresh strawberries and glossy berry glaze.' },
    '03': { desc: 'Cream cheese pie with a thick blueberry compote — tangy, sweet, and rich.' },
    '04': { desc: 'Dark chocolate layer cake — moist, deep cocoa, and indulgent.' },
    '05': { desc: 'Banana, caramel, biscuit base, and whipped cream — classic banoffee in a glass.' },
    '06': { desc: 'Red velvet with cream cheese frosting — soft crumb, gentle cocoa, and balanced sweetness.' },
    '07': { desc: 'Orange layer cake with citrus glaze — bright, moist, and refreshing.' },
    '08': { desc: 'Golden egg tarts with buttery pastry and silky custard.' },
    '09': { desc: 'Espresso-soaked layers, mascarpone cream, and cocoa — smooth and aromatic.' },
  },
  th: {
    '01': { desc: 'เค้กมะพร้าวเนื้อนุ่ม ครีมหอมมะพร้าว โรยมะพร้าวคั่ว' },
    '02': { desc: 'ชีสพายครีมชีส ท็อปสตรอเบอร์รี่สด ซอสผลไม้เงาใส' },
    '03': { desc: 'ชีสพายครีมชีส ท็อปบลูเบอร์รี่เข้มข้น เปรี้ยวหวานกลมกล่อม' },
    '04': { desc: 'เค้กช็อกโกแลตชั้นละมุน โกโก้เข้ม หวานน้อยพอดี' },
    '05': { desc: 'บานอฟฟี่เลเยอร์กล้วย คาราเมล บิสกิต และวิปครีม' },
    '06': { desc: 'เรดเวลเวทนุ่ม ฟรอสติ้งครีมชีส รสกลมกล่อม' },
    '07': { desc: 'เค้กส้มชั้นนุ่ม น้ำส้มหอม เปรี้ยวหวานสดชื่น' },
    '08': { desc: 'ทาร์ตไข่กรอบนอก เนื้อคัสตาร์ดเนียน หอมเนย' },
    '09': { desc: 'ทีรามิสุชั้นเอสเพรสโซ ครีมมาสคาร์โพนี โรยโกโก้' },
  },
  zh: {
    '01': { desc: '椰香海绵蛋糕配奶油与烤椰丝，轻盈热带。' },
    '02': { desc: '芝士派配新鲜草莓与亮面莓果酱。' },
    '03': { desc: '芝士派配浓郁蓝莓酱，酸甜饱满。' },
    '04': { desc: '巧克力层蛋糕，湿润浓郁，可可香气足。' },
    '05': { desc: '香蕉焦糖、饼干底与鲜奶油，经典班夫风味。' },
    '06': { desc: '红丝绒配奶油芝士霜，口感柔软，甜度均衡。' },
    '07': { desc: '橙子层蛋糕配柑橘淋面，清新湿润。' },
    '08': { desc: '金黄蛋挞，酥皮黄油香，内馅丝滑。' },
    '09': { desc: '浓缩咖啡浸润层次，马斯卡彭奶油，可可香气。' },
  },
}

const DRINK_MENU_CATS = ['nonCoffee', 'italianSoda', 'other']

const DRINK_MENU_DESC_COPY = {
  nonCoffee: {
    en: {
      '01': { desc: 'Premium Thai tea, iced — rich, aromatic, and classic.' },
      '02': { desc: 'Thai tea blended smooth with ice.' },
      '03': { desc: 'Iced chocolate — deep cocoa, creamy finish.' },
      '04': { desc: 'Chocolate blended frappe — thick, cold, and indulgent.' },
      '05': { desc: 'Fresh coconut milk blended — creamy, tropical, lightly sweet.' },
    },
    th: {
      '01': { desc: 'ชาไทยพรีเมี่ยมเย็น หอมเครื่องเทศ รสเข้มกลมกล่อม' },
      '02': { desc: 'ชาไทยปั่น เนื้อเนียน เย็นจัด หวานมันกำลังดี' },
      '03': { desc: 'ช็อกโกแลตเย็น โกโก้เข้ม รสนุ่มครีมมี่' },
      '04': { desc: 'ช็อกโกแลตปั่น เนื้อหนา เย็นสดชื่น' },
      '05': { desc: 'มะพร้าวนมสดปั่น หอมมะพร้าว ครีมมี่ หวานน้อย' },
    },
    zh: {
      '01': { desc: '精品泰式冰茶，茶香浓郁，经典顺口。' },
      '02': { desc: '泰茶冰沙，细腻冰爽，甜润均衡。' },
      '03': { desc: '冰巧克力，可可浓郁，口感顺滑。' },
      '04': { desc: '巧克力冰沙，绵密冰爽，甜而不腻。' },
      '05': { desc: '鲜椰奶冰沙，椰香细腻，热带清甜。' },
    },
  },
  italianSoda: {
    en: {
      '01': { desc: 'Sparkling soda with lemon and honey — bright and gently sweet.' },
      '02': { desc: 'Yuzu soda with citrus pulp — tangy, aromatic, refreshing.' },
      '03': { desc: 'Strawberry soda — fruity, vibrant, and ice-cold.' },
      '04': { desc: 'Lychee soda — floral, sweet, and crystal clear.' },
      '05': { desc: 'Blue ocean soda — layered blue, tropical, and eye-catching.' },
    },
    th: {
      '01': { desc: 'โซดาเลมอนผสมน้ำผึ้ง เปรี้ยวหวานสดชื่น' },
      '02': { desc: 'โซดายูซุ กลิ่นส้มซ่า เนื้อผลสด ดื่มเย็นสดชื่น' },
      '03': { desc: 'โซดาสตรอเบอร์รี่ หอมผลไม้ สีสด รสหวานอมเปรี้ยว' },
      '04': { desc: 'โซดาลิ้นจี่ หอมดอกไม้ หวานกลมกล่อม' },
      '05': { desc: 'โซดาบลูโอเชียน ชั้นสีฟ้า หวานสดชื่น ดื่มง่าย' },
    },
    zh: {
      '01': { desc: '柠檬蜂蜜苏打，酸甜明亮，清爽顺口。' },
      '02': { desc: '柚子苏打，果香清新，冰爽解渴。' },
      '03': { desc: '草莓苏打，果味鲜明，冰凉甜美。' },
      '04': { desc: '荔枝苏打，花香清甜，透亮爽口。' },
      '05': { desc: '蓝色海洋苏打，层次分明，热带清爽。' },
    },
  },
  other: {
    en: {
      '01': { desc: 'Purra drinking water.' },
      '02': { desc: 'Evian mineral water.' },
      '03': { desc: 'Coca-Cola, chilled.' },
      '04': { desc: 'Coca-Cola Zero, chilled.' },
    },
    th: {
      '01': { desc: 'น้ำดื่มเพอร์ร่า' },
      '02': { desc: 'น้ำแร่เอเวียง' },
      '03': { desc: 'โค้กเย็น' },
      '04': { desc: 'โค้กซีโร่เย็น' },
    },
    zh: {
      '01': { desc: 'Purra 饮用水。' },
      '02': { desc: '依云矿泉水。' },
      '03': { desc: '冰镇可口可乐。' },
      '04': { desc: '冰镇零度可乐。' },
    },
  },
}

const COFFEE_DESC_COPY = {
  en: {
    '01': { desc: 'Espresso lengthened with hot water — clean, bright, and easy to sip.' },
    '02': { desc: 'A short, intense shot pulled fresh to order.' },
    '03': { desc: 'Classic espresso, steamed milk, and foam in equal parts.' },
    '04': { desc: 'Double espresso with steamed milk, smooth and mellow.' },
    '05': { desc: 'Espresso, chocolate, and steamed milk finished with cocoa.' },
    '06': { desc: 'Espresso marked with caramel and silky steamed milk.' },
    '07': { badge: 'Signature', desc: 'Chilled milk topped with hot espresso — layered, bold, and smooth.' },
    '08': { desc: 'Gentle espresso and milk, light-bodied and softly sweet.' },
    '09': { desc: 'Iced americano with yuzu — bright citrus over a clean coffee base.' },
    '10': { desc: 'Iced americano with fresh orange — fruity, tangy, and refreshing.' },
    '11': { desc: 'Iced americano with coconut — tropical, creamy, and beach-ready.' },
  },
  th: {
    '01': { desc: 'เอสเพรสโซผสมน้ำร้อน รสสะอาด หอมกลม ดื่มง่าย' },
    '02': { desc: 'ช็อตเข้มข้น ดึงสดทุกแก้ว' },
    '03': { desc: 'สูตรคลาสสิก เอสเพรสโซ นมสตีม และฟองนมสมดุล' },
    '04': { desc: 'ดับเบิลเอสเพรสโซกับนมสตีม นุ่มละมุน' },
    '05': { desc: 'เอสเพรสโซ ช็อกโกแลต และนม หอมเข้มโรยโกโก้' },
    '06': { desc: 'เอสเพรสโซ คาราเมล และนมสตีม หวานนุ่มกลมกล่อม' },
    '07': { badge: 'ซิกเนเจอร์', desc: 'นมเย็นท็อปด้วยเอสเพรสโซร้อน ชั้นชัด รสเข้มแต่ลื่น' },
    '08': { desc: 'กาแฟนมเนื้อเบา รสนุ่ม หวานน้อย ดื่มง่าย' },
    '09': { desc: 'อเมริกาโน่เย็นผสมยูซุ เปรี้ยวสดชื่น กลิ่นกาแฟสะอาด' },
    '10': { desc: 'อเมริกาโน่เย็นผสมน้ำส้มสด หอมเปรี้ยว สดชื่น' },
    '11': { desc: 'อเมริกาโน่เย็นผสมมะพร้าว หอมท็อปปิคอล นุ่มลื่น' },
  },
  zh: {
    '01': { desc: '浓缩加热水，口感干净明亮，顺口好饮。' },
    '02': { desc: '短萃浓烈，现点现做。' },
    '03': { desc: '经典浓缩、蒸奶与奶泡，比例均衡。' },
    '04': { desc: '双份浓缩配蒸奶，顺滑柔和。' },
    '05': { desc: '浓缩、巧克力与蒸奶，撒可可粉。' },
    '06': { desc: '浓缩、焦糖与蒸奶，香甜细腻。' },
    '07': { badge: '招牌', desc: '冰牛奶上浇热浓缩，层次分明。' },
    '08': { desc: '轻柔咖啡拿铁，口感轻盈、微甜顺口。' },
    '09': { desc: '冰美式配柚子，柑橘明亮，咖啡干净。' },
    '10': { desc: '冰美式配鲜橙汁，果香酸甜，清爽解渴。' },
    '11': { desc: '冰美式配椰子，热带椰香，顺滑耐喝。' },
  },
}

const MATCHA_TASTE_NOTES = {
  en: [
    {
      swatch: 'bg-[#b5d39a]',
      title: 'Premium Matcha from Japan — Yame City',
      desc: 'Creamy and mellow with rich, kusa mochi and buttery flavours evocative of walnuts and almonds.',
    },
    {
      swatch: 'bg-[#3a5630]',
      title: 'Premium Matcha from Japan',
      desc: 'Seaweed, roasted nut, umami salty, rich and creamy.',
    },
  ],
  th: [
    {
      swatch: 'bg-[#b5d39a]',
      title: 'มัทฉะพรีเมี่ยมจากประเทศญี่ปุ่น เมืองยาเมะ',
      desc: 'นุ่มครีมมี่ ละมุน เข้มข้น หอมหญ้าหนูหน้าและเนย โน้ตถั่ววอลนัทและอัลมอนด์',
    },
    {
      swatch: 'bg-[#3a5630]',
      title: 'มัทฉะพรีเมี่ยมจากประเทศญี่ปุ่น',
      desc: 'สาหร่าย ถั่วคั่ว อูมามิเค็ม เข้มข้นและครีมมี่',
    },
  ],
  zh: [
    {
      swatch: 'bg-[#b5d39a]',
      title: '日本精品抹茶 — 八女市',
      desc: '口感绵密柔和，带有糯米与黄油香气，并浮现核桃与杏仁的坚果韵。',
    },
    {
      swatch: 'bg-[#3a5630]',
      title: '日本精品抹茶',
      desc: '海苔、焙炒坚果、鲜咸旨味，浓郁而顺滑。',
    },
  ],
}

const MATCHA_DESC_COPY = {
  en: {
    '00': { desc: 'Matcha x Khao Lam Latte — our house signature blend.' },
    '01': { desc: 'Premium matcha whisked pure — rich, grassy, and clean.' },
    '02': { desc: 'Matcha with steamed milk, smooth and balanced.' },
    '03': { desc: 'Chilled milk topped with matcha — layered, bold, and smooth.' },
    '04': { desc: 'Matcha with coconut — creamy, tropical, and gently sweet.' },
    '05': { desc: 'Matcha with fresh orange — bright, tangy, and refreshing.' },
    '06': { desc: 'Matcha with yuzu — citrusy, aromatic, and crisp.' },
    '07': { desc: 'Soft matcha blend — light-bodied, mellow, and easy to drink.' },
  },
  th: {
    '00': { badge: 'ซิกเนเจอร์', desc: 'มัทฉะ x ข้าวหลามหนองมน ลาเต้ — สูตรซิกเนเจอร์เฉพาะร้าน' },
    '01': { desc: 'มัทฉะพรีเมียมตีฟองแบบเพียว หอมเขียว เข้มข้น รสสะอาด' },
    '02': { desc: 'มัทฉะผสมนมสตีม เนื้อนุ่ม รสกลมกล่อม' },
    '03': { desc: 'นมเย็นท็อปมัทฉะ ชั้นชัด รสเข้มแต่ลื่น' },
    '04': { desc: 'มัทฉะผสมมะพร้าว หอมครีมมี่ ท็อปปิคอลนุ่มละมุน' },
    '05': { desc: 'มัทฉะผสมส้มสด เปรี้ยวหอม สดชื่น' },
    '06': { desc: 'มัทฉะผสมยูซุ กลิ่นส้มซ่า สดกลมกล่อม' },
    '07': { desc: 'มัทฉะสูตรซอฟท์ เนื้อเบา หวานน้อย ดื่มง่าย' },
  },
  zh: {
    '00': { badge: '招牌', desc: '抹茶 x 烤糯米香拿铁 — 门店招牌特调，层次丰富、顺口耐喝。' },
    '01': { desc: '精品抹茶纯饮，茶香浓郁，口感干净。' },
    '02': { desc: '抹茶与蒸奶，顺滑平衡。' },
    '03': { desc: '冰牛奶上浇抹茶，层次分明。' },
    '04': { desc: '抹茶配椰子，椰香细腻，热带顺口。' },
    '05': { desc: '抹茶配鲜橙，果香酸甜，清爽解渴。' },
    '06': { desc: '抹茶配柚子，柑橘明亮，香气清新。' },
    '07': { desc: '轻柔抹茶，口感轻盈，微甜顺口。' },
  },
}

const ITEM_COPY = {
  th: {
    '32': { name: 'ปลากะพงย่าง', badge: 'ซิกเนเจอร์', desc: 'ปลากะพงย่างทั้งตัว หอมเนยสมุนไพร เสิร์ฟพร้อมมันฝรั่งและสลัดสด' },
    '33': { name: 'พาสตากุ้งเพียร์', desc: 'กุ้งลายเสือ มะเขือเทศเชอร์รี กระเทียม พริก และลิงกวีนี' },
    '34': { name: 'โบวล์ปลากะเพรา', desc: 'ปลากะพงทอด กะเพรา ข้าวหอมมะลิ และไข่ดาว' },
    '35': { name: 'ริซอตโตเห็ด', desc: 'พอร์ชินี เห็ดนางรม พาร์เมซาน และทรัฟเฟิลออยล์' },
    '36': { name: 'บีชบาร์บีคิวเพลต', desc: 'รวมย่าง ไก่ ข้าวโพด มันหวาน และสลอว์' },
    '37': { name: 'ส้มตำโบวล์', desc: 'มะละกอ ถั่วลิสง กุ้งแห้ง มะเขือเทศ และน้ำยำมะนาว' },
  },
  zh: {
    '32': { name: '香烤海鲈', badge: '招牌', desc: '整尾海鲈搭配柠檬香草黄油，鲜味层次更突出。' },
    '33': { name: 'Pier 大虾意面', desc: '虎虾、樱桃番茄、蒜香辣味与罗勒油。' },
    '34': { name: '罗勒鱼饭碗', desc: '脆煎海鲈配圣罗勒、茉莉香米与煎蛋。' },
    '35': { name: '蘑菇烩饭', desc: '牛肝菌、平菇、帕玛森与松露油。' },
    '36': { name: '海滩烧烤拼盘', desc: '烤鸡腿、玉米、红薯、卷心菜沙拉。' },
    '37': { name: '青木瓜沙拉碗', desc: '青木瓜、花生、虾米与青柠酱汁。' },
  },
}

const MENU_PAGE_COPY = {
  en: {
    title: 'Menu — Love Pier Beach Cafe',
    hero: 'Menu <em class="italic text-gold">Love Pier Beach Cafe</em>',
    desc: "Every drink and dish is built around what's fresh right now.",
    specialsLabel: "Today's Specials",
    chefLine1: 'Recommended Specials',
  },
  th: {
    title: 'Menu — Love Pier Beach Cafe',
    hero: 'Menu <em class="italic text-gold">Love Pier Beach Cafe</em>',
    desc: 'เมนูของเราปรับตามวัตถุดิบสดใหม่ในแต่ละช่วงเวลา',
    specialsLabel: 'เมนูพิเศษวันนี้',
    chefLine1: 'เมนูพิเศษ',
  },
  zh: {
    title: 'Menu — Love Pier Beach Cafe',
    hero: 'Menu <em class="italic text-gold">Love Pier Beach Cafe</em>',
    desc: '我们的菜单根据当季食材与每日新鲜度持续调整。',
    specialsLabel: '今日推荐',
    chefLine1: '精选推荐',
  },
}

const FEATURED_COPY = {
  en: [
    { name: 'Singapore Chicken Rice & Hainanese Chicken Rice', sub: 'A classic chicken rice', price: '฿150-฿670' },
    { name: 'PANG Signature', sub: 'Matcha x Khao Lam Latte', price: '฿179' },
    { name: 'DIRTY COFFEE', sub: 'LIMITED EDITION : COFFEE', price: '฿130' },
  ],
  th: [
    { name: 'Singapore Chicken Rice & Hainanese Chicken Rice', sub: 'A classic chicken rice', price: '฿150-฿670' },
    { name: 'PANG Signature', sub: 'Matcha x Khao Lam Latte', price: '฿179' },
    { name: 'DIRTY COFFEE', sub: 'LIMITED EDITION : COFFEE', price: '฿130' },
  ],
  zh: [
    { name: 'Singapore Chicken Rice & Hainanese Chicken Rice', sub: 'A classic chicken rice', price: '฿150-฿670' },
    { name: 'PANG Signature', sub: '门店特调配方，层次丰富、顺口耐喝', price: '฿179' },
    { name: 'DIRTY COFFEE', sub: 'LIMITED EDITION : COFFEE', price: '฿130' },
  ],
}

const TAB_SECTION_CATS = {
  food: ['chickenRice', 'mains', 'breakfast'],
  coffee: ['coffee'],
  matcha: ['matcha'],
  drinks: ['nonCoffee', 'italianSoda', 'other'],
  sweets: ['sweets'],
}

function sectionMatchesTab(section, activeTab) {
  if (!activeTab) return true
  if (activeTab === 'signature') return section.items.some((item) => item.badge)
  return TAB_SECTION_CATS[activeTab]?.includes(section.cat) ?? false
}

function itemsForTab(section, activeTab) {
  if (activeTab === 'signature') return section.items.filter((item) => item.badge)
  return section.items
}

function drinkPriceLabels(lang) {
  return COFFEE_PRICE_LABELS[lang] || COFFEE_PRICE_LABELS.en
}

function menuAddOnsForCategory(cat, lang) {
  if (cat === 'coffee') return COFFEE_ADDONS_COPY[lang] || COFFEE_ADDONS_COPY.en
  return undefined
}

function matchaTasteNotes(lang) {
  return MATCHA_TASTE_NOTES[lang] || MATCHA_TASTE_NOTES.en
}

function localizeMenuData(data, lang) {
  if (!ITEM_COPY[lang] && !SECTION_COPY[lang] && !COFFEE_DESC_COPY[lang] && !MATCHA_DESC_COPY[lang] && !SWEETS_DESC_COPY[lang] && !CHICKEN_RICE_DESC_COPY[lang] && !BREAKFAST_DESC_COPY[lang] && !DRINK_MENU_DESC_COPY.nonCoffee[lang]) return data
  return data.map((section) => {
    const sectionCopy = SECTION_COPY[lang]?.[section.cat] || {}
    return {
      ...section,
      ...sectionCopy,
      items: section.items.map((item) => {
        if (section.cat === 'coffee' || section.cat === 'matcha' || section.cat === 'sweets' || section.cat === 'chickenRice' || section.cat === 'breakfast') {
          const copySource =
            section.cat === 'coffee' ? COFFEE_DESC_COPY
            : section.cat === 'matcha' ? MATCHA_DESC_COPY
            : section.cat === 'sweets' ? SWEETS_DESC_COPY
            : section.cat === 'breakfast' ? BREAKFAST_DESC_COPY
            : CHICKEN_RICE_DESC_COPY
          const copy = copySource[lang]?.[item.num] || copySource.en?.[item.num] || {}
          return { ...item, ...copy }
        }
        if (DRINK_MENU_CATS.includes(section.cat)) {
          const copySource = DRINK_MENU_DESC_COPY[section.cat]
          const copy = copySource[lang]?.[item.num] || copySource.en?.[item.num] || {}
          return { ...item, ...copy }
        }
        return {
          ...item,
          ...(lang === 'th'
            ? (() => {
                const localized = ITEM_COPY[lang]?.[item.num] || {}
                if (section.cat === 'mains') return localized
                const { name, ...rest } = localized
                return rest
              })()
            : (ITEM_COPY[lang]?.[item.num] || {})),
        }
      }),
    }
  })
}

export default function Menu() {
  const { lang } = useLanguage()
  const tabs = lang === 'th'
    ? [
        { label: 'ทั้งหมด', cat: null },
        { label: 'Signatrue', cat: 'signature' },
        { label: 'อาหาร', cat: 'food' },
        { label: 'กาแฟ', cat: 'coffee' },
        { label: 'มัทฉะ', cat: 'matcha' },
        { label: 'เครื่องดื่ม', cat: 'drinks' },
        { label: 'ของหวาน', cat: 'sweets' },
      ]
    : lang === 'zh'
      ? [
          { label: '全部', cat: null },
          { label: 'Signatrue', cat: 'signature' },
          { label: '餐食', cat: 'food' },
          { label: '咖啡', cat: 'coffee' },
          { label: '抹茶', cat: 'matcha' },
          { label: '饮品', cat: 'drinks' },
          { label: '甜品', cat: 'sweets' },
        ]
      : [
          { label: 'All', cat: null },
          { label: 'Signatrue', cat: 'signature' },
          { label: 'Food', cat: 'food' },
          { label: 'Coffee', cat: 'coffee' },
          { label: 'Matcha', cat: 'matcha' },
          { label: 'Drinks', cat: 'drinks' },
          { label: 'Sweets', cat: 'sweets' },
        ]
  const t = MENU_PAGE_COPY[lang] || MENU_PAGE_COPY.en
  const [activeTab, setActiveTab] = useState(null)
  const menuData = localizeMenuData(MENU_DATA, lang)
  const featured = FEATURED_COPY[lang] || FEATURED_COPY.en

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>

      {/* Menu Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 reveal">
        <div className="px-4 py-12 flex flex-col justify-center sm:px-6 sm:py-12 lg:px-16 lg:py-20">
          <h1 className="font-display font-light leading-[0.95] text-ink tracking-[-0.02em] mb-5 text-[clamp(48px,6vw,76px)]" dangerouslySetInnerHTML={{ __html: t.hero.replace(/\n/g, '<br/>') }} />
          <p className="text-[15px] leading-[1.9] text-[#555] font-light max-w-[480px]">{t.desc}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full aspect-[4/5] object-cover object-[50%_62%] [filter:saturate(0.7)]" src="/uploads/menu-hero-custom.png" alt="menu hero" />
      </section>

      {/* Category tabs */}
      <div className="flex gap-5 lg:gap-7 px-4 py-5 lg:py-8 border-b border-black/10 overflow-x-auto [scrollbar-width:none] bg-white sticky top-[61px] lg:top-[67px] z-50 reveal sm:px-6 sm:gap-4">
        {tabs.map(({ label, cat }) => (
          <button
            key={cat ?? 'all'}
            onClick={() => setActiveTab(cat)}
            className={`font-display text-[22px] font-light whitespace-nowrap cursor-pointer border-none bg-transparent px-0 py-1 border-b transition-colors sm:text-lg ${activeTab === cat ? 'text-ink border-gold' : 'text-[#aaa] border-transparent hover:text-ink'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Menu sections */}
      {menuData.map((section) => {
        if (!sectionMatchesTab(section, activeTab)) return null
        const items = itemsForTab(section, activeTab)
        return (
          <MenuSection
            key={section.cat}
            {...section}
            items={items}
            priceLabels={TIERED_PRICE_CATEGORIES.includes(section.cat) ? drinkPriceLabels(lang) : undefined}
            menuAddOns={menuAddOnsForCategory(section.cat, lang)}
            tasteNotes={section.cat === 'matcha' ? matchaTasteNotes(lang) : undefined}
          />
        )
      })}

      {/* Featured */}
      <section className="bg-ink text-bg px-4 py-14 reveal sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">{t.specialsLabel}</div>
        <h2 className="font-display font-light leading-[1.1] mb-12 max-w-[800px] text-[clamp(36px,5vw,60px)]">{t.chefLine1}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { img:'/uploads/grilled-sea-bass-custom.png', ...featured[0] },
            { img:'/uploads/weekend-brunch-custom.png', ...featured[1] },
            { img:'/uploads/caramel-sea-salt-custom.png', ...featured[2] },
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

      <Footer tagline={FOOTER_TAGLINE[lang] || FOOTER_TAGLINE.en} />
    </>
  )
}
