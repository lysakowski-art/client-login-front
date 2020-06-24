import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import LoginPanel from "./components/LoginPanel";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={LoginPanel} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
