import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

// Google Analytics
const GA_ID = 'G-6CXYVZMWYF'
const gaScript = document.createElement('script')
gaScript.async = true
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
document.head.appendChild(gaScript)
window.dataLayer = window.dataLayer || []
function gtag() { window.dataLayer.push(arguments) }
window.gtag = gtag
gtag('js', new Date())
gtag('config', GA_ID)

// Microsoft Clarity
;(function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) }
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y)
})(window, document, 'clarity', 'script', 'wg1sd0nuox')

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>React.StrictMode>,
  )</React.StrictMode>
