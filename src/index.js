import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

import "./index.css"

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
   
  </Router>,
  document.getElementById("root")
);
