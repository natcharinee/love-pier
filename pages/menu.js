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

const SECTION_COPY = {
  th: {
    coffee: { title: 'กาแฟ', titleEm: '& เอสเพรสโซ', subtitle: 'เมล็ดคัดพิเศษคั่วสดทุกสัปดาห์ เสิร์ฟแก้วต่อแก้วด้วยความแม่นยำ' },
    tea: { title: 'ชา', titleEm: '& เครื่องดื่มสดชื่น', subtitle: 'ชาและเครื่องดื่มเย็นที่ออกแบบมาให้สดชื่นพอดีกับบรรยากาศริมทะเล' },
    breakfast: { title: 'อาหารเช้า', titleEm: 'ตลอดวัน', subtitle: 'เมนูเช้าซิกเนเจอร์ที่พร้อมเสิร์ฟได้ทุกเวลาแบบไม่ต้องรีบ' },
    mains: { title: 'จานหลัก', titleEm: '& กลิ่นทะเล', subtitle: 'จานหลักรสกลมกล่อมจากวัตถุดิบสดใหม่ประจำวัน' },
    sweets: { title: 'ของหวาน', titleEm: '& ปิดมื้อ', subtitle: 'ของหวานโฮมเมดที่ช่วยให้มื้อนี้จบอย่างน่าจดจำ' },
    drinks: { title: 'เครื่องดื่ม', titleEm: '& ม็อกเทล', subtitle: 'น้ำผลไม้สด โซดา และม็อกเทลรสบาลานซ์ ดื่มง่ายทุกแก้ว' },
  },
  zh: {
    coffee: { title: '咖啡', titleEm: '& 浓缩', subtitle: '每周新鲜烘焙精品豆，风味层次更干净、更稳定。' },
    tea: { title: '茶饮', titleEm: '& 清爽特调', subtitle: '花草茶与季节冷饮，入口清爽，最适合海边午后。' },
    breakfast: { title: '早餐', titleEm: '全天供应', subtitle: '从早到晚都能吃到的招牌早餐，轻松却不简单。' },
    mains: { title: '主菜', titleEm: '& 海味', subtitle: '以当日新鲜食材为主角，口味平衡、份量满足。' },
    sweets: { title: '甜点', titleEm: '& 收尾', subtitle: '自制甜点与时令水果，让每一餐都收得漂亮。' },
    drinks: { title: '饮品', titleEm: '& 无酒精特调', subtitle: '鲜榨果汁与气泡特调，口感明亮、回味清爽。' },
  },
}

const ITEM_COPY = {
  th: {
    '01': { name: 'โคลด์บรูว์ซันไรส์', badge: 'ซิกเนเจอร์', desc: 'สกัดเย็น 12 ชั่วโมง เสิร์ฟพร้อมไซรัปโฮมเมดและผิวส้ม' },
    '02': { name: 'ซีบรีซลาเต้', desc: 'ดับเบิลเอสเพรสโซ นมสตีม และเกลือทะเลเล็กน้อย' },
    '03': { name: 'เอสเพรสโซโทนิก', desc: 'เอสเพรสโซกับโทนิก น้ำแข็ง และมะนาวฝาน' },
    '04': { name: 'พัวร์โอเวอร์ประจำสัปดาห์', desc: 'เมล็ดเดี่ยวคัดพิเศษ ชงมือทีละแก้ว' },
    '05': { name: 'คาปูชิโน', desc: 'สูตรคลาสสิก 1:1:1 เสิร์ฟร้อนขนาดพอดี' },
    '06': { name: 'กาแฟเย็นไทย', desc: 'เข้ม หอม หวาน ในสไตล์ไทยแท้' },
    '07': { name: 'มัทฉะเซเรนิตี้', badge: 'ซิกเนเจอร์', desc: 'มัทฉะเกรดพิธีการเข้มข้น ผสมนมโอ๊ตเนียนนุ่มและน้ำผึ้งดิบ' },
    '08': { name: 'โคโคนัทแพนดานคูลเลอร์', desc: 'น้ำมะพร้าวผสมใบเตย มะนาว และมินต์' },
    '09': { name: 'บัตเตอร์ฟลายเลมอนเนด', desc: 'อัญชัน โซดา เลมอน เปลี่ยนสีได้' },
    '10': { name: 'เอิร์ลเกรย์โฟม', desc: 'ชาเอิร์ลเกรย์สกัดเย็น ท็อปครีมเค็มนุ่ม' },
    '11': { name: 'เพียร์เบรกฟาสต์เพลต', badge: 'ซิกเนเจอร์', desc: 'เซ็ตยอดนิยมครบจบในจานเดียว ไข่ ซาวโดว์ อะโวคาโด และแซลมอนรมควัน' },
    '12': { name: 'โคโคนัทกราโนล่าโบวล์', desc: 'กราโนล่าโฮมเมด โยเกิร์ตมะพร้าว ผลไม้ตามฤดูกาล' },
    '13': { name: 'เอ้กเบเนดิกต์', desc: 'ไข่ลวก ขนมปังบริยอช แฮม และซอสฮอลแลนเดส' },
    '14': { name: 'โจ๊กกุ้ง', desc: 'กุ้งสด ขิง กระเทียมเจียว และไข่ลวก' },
    '15': { name: 'ปลากะพงย่าง', badge: 'ซิกเนเจอร์', desc: 'ปลากะพงย่างทั้งตัว หอมเนยสมุนไพร เสิร์ฟพร้อมมันฝรั่งและสลัดสด' },
    '16': { name: 'พาสตากุ้งเพียร์', desc: 'กุ้งลายเสือ มะเขือเทศเชอร์รี กระเทียม พริก และลิงกวีนี' },
    '17': { name: 'โบวล์ปลากะเพรา', desc: 'ปลากะพงทอด กะเพรา ข้าวหอมมะลิ และไข่ดาว' },
    '18': { name: 'ริซอตโตเห็ด', desc: 'พอร์ชินี เห็ดนางรม พาร์เมซาน และทรัฟเฟิลออยล์' },
    '19': { name: 'บีชบาร์บีคิวเพลต', desc: 'รวมย่าง ไก่ ข้าวโพด มันหวาน และสลอว์' },
    '20': { name: 'ส้มตำโบวล์', desc: 'มะละกอ ถั่วลิสง กุ้งแห้ง มะเขือเทศ และน้ำยำมะนาว' },
    '21': { name: 'โคโคนัทพานาคอตตา', badge: 'ซิกเนเจอร์', desc: 'พานาคอตตาเนื้อเนียน หอมใบมะกรูด ตัดรสด้วยซอสมะม่วง' },
    '22': { name: 'ไทยทีเครมบรูเล', desc: 'คัสตาร์ดชาไทย หน้าน้ำตาลคาราเมลกรอบ' },
    '23': { name: 'บานาน่าฟอสเตอร์วาฟเฟิล', desc: 'วาฟเฟิลบริยอช กล้วยคาราเมล และครีมวานิลลา' },
    '24': { name: 'ผลไม้ตามฤดูกาล', desc: 'ผลไม้สดประจำวัน เสิร์ฟพร้อมโยเกิร์ตน้ำผึ้ง' },
    '25': { name: 'เพียร์เลมอนเนด', badge: 'ซิกเนเจอร์', desc: 'เลมอนเนดโฮมเมดซาบซ่า สดชื่นด้วยมินต์และโซดา' },
    '26': { name: 'กรีนแมงโก้โซดา', desc: 'มะม่วงเขียวคั้นสด ไซรัปขิง และโซดา' },
    '27': { name: 'มะพร้าวอ่อน', desc: 'เสิร์ฟทั้งลูก พร้อมช้อนและหลอด' },
    '28': { name: 'วอเตอร์เมลอนฟิซ', desc: 'แตงโมสด มะนาว เม็ดแมงลัก และโซดาลิ้นจี่' },
    '29': { name: 'ส้มขิงคั้นสด', desc: 'คั้นสด ไม่เติมน้ำตาล เสิร์ฟพร้อมน้ำแข็ง' },
    '30': { name: 'น้ำแร่ซ่า', desc: 'Perrier หรือ S.Pellegrino ขนาด 330ml' },
  },
  zh: {
    '01': { name: '日出冷萃', badge: '招牌', desc: '12 小时冷萃，搭配自制糖浆与橙皮。' },
    '02': { name: '海风拿铁', desc: '双份浓缩、蒸奶与一抹海盐。' },
    '03': { name: '浓缩汤力', desc: '浓缩咖啡加入汤力水、冰块与青柠。' },
    '04': { name: '本周手冲', desc: '每周单品豆，由咖啡师手冲。' },
    '05': { name: '卡布奇诺', desc: '经典 1:1:1 配比，小杯热饮。' },
    '06': { name: '泰式冰咖啡', desc: '浓郁香甜，经典泰式风味。' },
    '07': { name: '静谧抹茶', badge: '招牌', desc: '仪式级抹茶搭配燕麦奶与生蜂蜜，香气更圆润。' },
    '08': { name: '斑斓椰香清饮', desc: '斑斓浸泡椰子水、青柠与薄荷。' },
    '09': { name: '蝶豆花柠檬汽水', desc: '蝶豆花、苏打与柠檬，颜色会变化。' },
    '10': { name: '伯爵奶盖', desc: '冷泡伯爵茶，咸奶盖。' },
    '11': { name: 'Pier 早餐拼盘', badge: '招牌', desc: '店内高人气早餐拼盘，一份就能满足早午餐需求。' },
    '12': { name: '椰香格兰诺拉碗', desc: '自制麦片、椰子酸奶与时令水果。' },
    '13': { name: '班尼迪克蛋', desc: '水波蛋、布里欧修、火腿与荷兰酱。' },
    '14': { name: '鲜虾粥', desc: '鲜虾、姜、蒜酥与溏心蛋。' },
    '15': { name: '香烤海鲈', badge: '招牌', desc: '整尾海鲈搭配柠檬香草黄油，鲜味层次更突出。' },
    '16': { name: 'Pier 大虾意面', desc: '虎虾、樱桃番茄、蒜香辣味与罗勒油。' },
    '17': { name: '罗勒鱼饭碗', desc: '脆煎海鲈配圣罗勒、茉莉香米与煎蛋。' },
    '18': { name: '蘑菇烩饭', desc: '牛肝菌、平菇、帕玛森与松露油。' },
    '19': { name: '海滩烧烤拼盘', desc: '烤鸡腿、玉米、红薯、卷心菜沙拉。' },
    '20': { name: '青木瓜沙拉碗', desc: '青木瓜、花生、虾米与青柠酱汁。' },
    '21': { name: '椰子奶冻', badge: '招牌', desc: '细腻椰香奶冻，配芒果酱与芝麻脆片，清爽不腻。' },
    '22': { name: '泰奶焦糖布蕾', desc: '泰式奶茶风味布蕾，焦糖脆面。' },
    '23': { name: '香蕉焦糖华夫', desc: '布里欧修华夫、焦糖香蕉与香草奶油。' },
    '24': { name: '时令水果盘', desc: '当日新鲜水果，搭配蜂蜜酸奶蘸酱。' },
    '25': { name: 'Pier 柠檬汽水', badge: '招牌', desc: '自制柠檬糖浆与气泡感平衡，入口明快。' },
    '26': { name: '青芒果苏打', desc: '青芒鲜榨、姜糖浆与气泡水。' },
    '27': { name: '椰青', desc: '整颗上桌，附吸管与小勺。' },
    '28': { name: '西瓜气泡饮', desc: '西瓜、青柠、罗勒籽与荔枝汽水。' },
    '29': { name: '鲜橙姜汁', desc: '冷压鲜榨，无添加糖。' },
    '30': { name: '气泡矿泉水', desc: 'Perrier 或 S.Pellegrino 330ml。' },
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

function localizeMenuData(data, lang) {
  if (!ITEM_COPY[lang] && !SECTION_COPY[lang]) return data
  return data.map((section) => {
    const sectionCopy = SECTION_COPY[lang]?.[section.cat] || {}
    return {
      ...section,
      ...sectionCopy,
      items: section.items.map((item) => ({
        ...item,
        ...(lang === 'th'
          ? (() => {
              const localized = ITEM_COPY[lang]?.[item.num] || {}
              const { name, ...rest } = localized
              return rest
            })()
          : (ITEM_COPY[lang]?.[item.num] || {})),
      })),
    }
  })
}

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
  const menuData = localizeMenuData(MENU_DATA, lang)
  const featured = FEATURED_COPY[lang] || FEATURED_COPY.en

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
      {menuData.map(section => (
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

      <Footer tagline="EAT WELL, <em>STAY LONGER</em>" />
    </>
  )
}
