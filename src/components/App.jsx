import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/card/:username/:reponame" component={Card} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
