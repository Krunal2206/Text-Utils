import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(29 28 38)";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home text="Analyze your text" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
