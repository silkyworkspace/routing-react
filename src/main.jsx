// ▼必ず先頭に入れる
import "core-js/stable";
import "regenerator-runtime/runtime";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// リセットCSSのimport
import 'ress/ress.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouterを設置*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
