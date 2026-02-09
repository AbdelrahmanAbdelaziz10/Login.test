import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './Component/Context/AuthContext.jsx'; // تأكد من المسار
import { BrowserRouter } from 'react-router-dom'; // <-- مهم جدًا

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)