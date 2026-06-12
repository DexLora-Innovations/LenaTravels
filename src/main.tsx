import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { LanguageProvider } from '@/contexts/LanguageContext'

function bootstrap() {
  const root = document.getElementById('root')
  if (!root) return

  createRoot(root).render(
    <React.StrictMode>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </React.StrictMode>
  )
}

bootstrap()
