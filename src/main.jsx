import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </StrictMode>,
)
