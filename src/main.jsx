import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

// Google Analytics
window.dataLayer = window.dataLayer || []
function gtag() { window.dataLayer.push(arguments) }
window.gtag = gtag
gtag('js', new Date())
gtag('config', 'G-6CXYVZMWYF')
const gaEl = document.createElement('script')
gaEl.async = true
gaEl.src = 'https://www.googletagmanager.com/gtag/js?id=G-6CXYVZMWYF'
document.head.appendChild(gaEl)

// Microsoft Clarity
window.clarity = window.clarity || function() {}
window.clarity.q = window.clarity.q || []
const clEl = document.createElement('script')
clEl.async = true
clEl.src = 'https://www.clarity.ms/tag/wg1sd0nuox'
document.head.appendChild(clEl)

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode><App /></React.StrictMode>
      )
