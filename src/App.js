import "./App.css";
import { useContext, useState, useEffect } from "react";
// import { themeContext } from "./Context";
import GridLoader from "react-spinners/GridLoader";
import Toggle from "./components/Toggle/Toggle";
import { SyncLoader } from "react-spinners";
import Hero from "./components/HomePage/Home";
import Home from "./components/HomePage/Home";
import HeThong from "./components/About/HeThong";
import ISO from "./components/About/GioiThieu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Fragment } from 'react';
import GioiThieu from "./components/About/GioiThieu";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categorise/ProductGrid";
import ProductDetails from "./components/Categorise/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<GioiThieu />} />
            <Route exact path='/about_system' element={<HeThong />} />
            <Route exact path='/about_iso' element={<ISO />} />
            <Route exact path='/about_picture' element={<GioiThieu />} />
            <Route exact path='/product_cate' element={<Categories />} />
            <Route exact path='/product_detail' element={<ProductDetails />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
