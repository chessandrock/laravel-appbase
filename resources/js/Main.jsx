/* Importación de bibliotecas base */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Importación de biblioteca react-router-dom */
import { BrowserRouter } from 'react-router-dom'

/* Importación de biblioteca redux, react-redux y redux-persist */
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './reducers'

/* Importación de biblioteca react-helmet-async */
import { Helmet, HelmetProvider } from 'react-helmet-async'

/* Importación de biblioteca i18next */
import './i18n'
import i18next from 'i18next'

/* Importación de bibliotecas de diseño */
import './assets/app.css'

/* Importación de aplicación */
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <Helmet>
              <title>{i18next.t('app.title', { ns: 'common' })}</title>
            </Helmet>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
