import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
