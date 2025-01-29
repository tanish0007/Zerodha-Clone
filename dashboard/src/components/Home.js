import React from "react";
import "../index.css";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Dashboard />
    </>
  );
};

export default Home;