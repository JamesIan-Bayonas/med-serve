import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// THE MISSING WIRE: This tells React to inject the Tailwind compiled styles into the browser
import './index.css' 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
