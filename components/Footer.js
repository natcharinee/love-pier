export default function Footer({ tagline = 'THE SEA IS <em>ALWAYS OPEN</em>' }) {
  const html = tagline.replace(/<em>/g, '<em class="italic text-gold">');
  return (
    <footer className="bg-ink px-10 pt-16 pb-10 overflow-hidden reveal">
      <div
        className="font-display font-light text-bg tracking-[-0.03em] leading-[0.9] whitespace-nowrap overflow-hidden text-[clamp(36px,10vw,140px)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="mt-10 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase">© 2026 Love Pier Beach Cafe · All Rights Reserved</div>
        <div className="font-display text-base font-light text-white/50 tracking-[0.2em]">Love Pier</div>
      </div>
    </footer>
  )
}
