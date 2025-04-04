import React from "react";
import ServiceAdd from "./components/ServiceAdd";
import { ServiceList } from "./components/ServiceList";
import "./App.css";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <ServiceAdd />
      <br />
      <Filter />
      <ServiceList />
    </>
  );
}

export default App;
