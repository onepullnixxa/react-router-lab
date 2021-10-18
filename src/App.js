import React from "react";
import "./App.css";
//Import route and components
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";

function App() {
  return (
    // Using the Route component to specify each route
    <div className="App">
      <Nav />
      <Switch>
        {/* this "/" path may also be placed at the bottom in order to run the same way w/o using "exact" path */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => <Stocks {...routerProps} />}
        />
        <Route path="/stocks">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
