import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react"; 

import { NavBar, Footer } from "./components";
import { Home, Profile, ExternalApi } from "./views";


import "./app.css";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator while authentication status is being determined
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Only render Profile route if user is authenticated */}
          {isAuthenticated && <Route path="/profile" component={Profile} />}
          <Route path="/external-api" component={ExternalApi} />
          {/* Redirect to Home page if user is not authenticated */}
          {!isAuthenticated && <Redirect to="/" />}
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
