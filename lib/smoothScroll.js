let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export async function initSmoothScroll() {
  if (typeof window === 'undefined') return null

  const { default: Lenis } = await import('lenis')

  const root = document.documentElement
  root.classList.add('lenis', 'lenis-smooth')

  lenisInstance = new Lenis({
    autoRaf: true,
    lerp: 0.08,
    smoothWheel: true,
    syncTouch: true,
    anchors: true,
    stopInertiaOnNavigate: true,
    prevent: (node) => {
      if (!node || typeof node.closest !== 'function') return false
      return Boolean(
        node.closest('.overflow-x-auto') ||
          node.closest('.menu-overlay') ||
          node.closest('[data-lenis-prevent]')
      )
    },
  })

  return lenisInstance
}

export function destroySmoothScroll() {
  lenisInstance?.destroy()
  lenisInstance = null
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped')
  }
}

export function stopSmoothScroll() {
  lenisInstance?.stop()
}

export function startSmoothScroll() {
  lenisInstance?.start()
}

export function resetSmoothScroll() {
  lenisInstance?.scrollTo(0, { immediate: true })
  lenisInstance?.resize()
}
