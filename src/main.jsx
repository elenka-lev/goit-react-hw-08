import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
          />
          </PersistGate>
      </BrowserRouter> 
    </Provider>
  </StrictMode>,
)
