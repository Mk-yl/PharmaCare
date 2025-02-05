import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <Auth0Provider
    domain="dev-lnc7ywxlqkvuaqi5.us.auth0.com"
    clientId="CoFCYmyXCXfZqgz34mVFtpioR9twDbx6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);


