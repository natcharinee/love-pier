import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { LanguageProvider } from '../lib/language'
import {
  destroySmoothScroll,
  initSmoothScroll,
  resetSmoothScroll,
} from '../lib/smoothScroll'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    let cancelled = false

    initSmoothScroll().catch(() => {})

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.08 })

    function observeReveal() {
      document.querySelectorAll('.reveal, .reveal-img').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }

    observeReveal()
    const mo = new MutationObserver(observeReveal)
    mo.observe(document.body, { childList: true, subtree: true })

    const onRouteDone = () => {
      if (!cancelled) resetSmoothScroll()
      observeReveal()
    }

    router.events.on('routeChangeComplete', onRouteDone)

    return () => {
      cancelled = true
      router.events.off('routeChangeComplete', onRouteDone)
      destroySmoothScroll()
      observer.disconnect()
      mo.disconnect()
    }
  }, [router.events])

  return (
    <LanguageProvider>
      <Layout><Component {...pageProps} /></Layout>
    </LanguageProvider>
  )
}
