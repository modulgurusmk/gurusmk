import './style.css'
import { renderLanding } from './pages/landing.js'
import { renderKurikulum } from './pages/kurikulum.js'
import { registerSW } from 'virtual:pwa-register'

// Register the service worker for offline support (auto-updates on new builds)
registerSW({ immediate: true })

const root = document.querySelector('#app')

function route() {
  root.innerHTML = ''
  if (window.location.pathname === '/kurikulum') {
    renderKurikulum(root)
  } else {
    renderLanding(root)
  }
}

// Re-render on browser back/forward navigation
window.addEventListener('popstate', route)

route()
