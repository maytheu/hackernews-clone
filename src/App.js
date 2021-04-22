import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import News from "./component/News";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news/:details" exact component={News} />
    </Switch>
  );
}

export default App;
