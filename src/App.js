import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
