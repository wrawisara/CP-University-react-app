import Register from "./Register";
import "./App.css";
import Axios from "axios";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Topbar from "./components/Topbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={< Dashboard/>}></Route>
          {/* <Route path="/" element={<LoginForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
