import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if(!token){
  //         window.location.href = "http://localhost:3000/login";
  //     }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

root.render( <App />);