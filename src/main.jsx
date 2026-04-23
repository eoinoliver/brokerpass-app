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
window.clarity = window.clarity || function() {
      (window.clarity.q = window.clarity.q || []).push(arguments)
}
const clEl = document.createElement('script')
clEl.async = true
clEl.src = 'https://www.clarity.ms/tag/wg1sd0nuox'
const firstScript = document.getElementsByTagName('script')[0]
firstScript.parentNode.insertBefore(clEl, firstScript)

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode><App /></React.StrictMode>React.StrictMode>,
    )</React.StrictMode>
