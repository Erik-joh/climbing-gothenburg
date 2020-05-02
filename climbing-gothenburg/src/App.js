import React from "react";
import Home from "./pages/Home";
import Routes from "./pages/Routes";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const paths = ["/", "Routes"];
  return (
    <div className="App">
      <Menu paths={paths} />
      <Router>
        <Home path={paths[0]} />
        <Routes path={paths[1]} />
      </Router>
    </div>
  );
}

export default App;
