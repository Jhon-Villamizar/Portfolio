import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AdminProvider from './store/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </React.StrictMode>,
)
