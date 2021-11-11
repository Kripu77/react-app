import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain="kripu-khadka.au.auth0.com"
    clientId="3wNQP88JwfbCSZEOwEN0LdFpPXNPoF4B"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);
