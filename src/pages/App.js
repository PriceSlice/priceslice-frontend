import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Key from '../Key/Key';
import Map from './Map';
import States from './States';
import Table from './Table';
import { useParams } from "react-router-dom";
import About from "./About"
import Sidebar from "../Sidebar/Sidebar";
import Modal from './Modal'


function App() {
  const { id } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Sidebar/><Map/><Key/></div>}></Route>
        <Route path="/United States" element={<div><Sidebar/><States/><Key/></div>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/table/:id" element={<RouteWrapper component={Table} />} />
        <Route path="/:id" element={<RouteWrapper component={Table} />} />
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Modal/>
    </BrowserRouter>
  );
  function RouteWrapper({ component: Component }) {
    const { id } = useParams(); // Now we are within the routing context and useParams works
    return <Component id={id} />; // Pass the id as a prop to the component
  }
};
export default App;