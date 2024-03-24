import React from "react";
import { useHistory} from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => { 
    const history = useHistory();
    const domain = "dev-86m2q4h7bw4ovrf6.us.auth0.com" // process.env.REACT_APP_AUTHO_DOMAIN;
    const clientId = "FxNQqb4VLm5ijlJnFpO4XyPBz3vsOkTM" //process.env.REACT_APP_AUTHO_CLIENT_ID;

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo ||-window.location.pathname);
        // navigate(appstate?.returnTo || window.location.pathname);


    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
        {children}
        </Auth0Provider>
    )

}; 



export default Auth0ProviderWithHistory;



