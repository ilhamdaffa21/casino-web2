import React, {Component} from "react";
import reactDom from "react-dom";
import { NavLink, Route, Routes, Navigate, Router } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import Sport from "./Pages/sport";
import Landing from "./Pages/landing";

function App() {
  return (
    <>
    <div className="header">
      <NavLink to="/landing" className="title">BESTBET</NavLink>
        <div className="buttoncontainer">
          <div className="langbutton">ENG</div>
          <button className="buttonin">LOG IN</button>
          <button className="buttonup">SIGN UP</button>
        </div>
    </div>

    <div className="headerbot">
      <div className="linkcontainer">
          <div className="link">Hot Games</div>
          <div className="link">Slots</div>
          <div className="link">Live Casino</div>
          <NavLink to="/sport" className="link">Sports</NavLink>
          <div className="link">Arcade</div>
          <div className="link">Poker</div>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Navigate replace to="/landing" />} />
        <Route path="/sport" element={<Sport />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
    </Routes>
    
    
    <img className="stiker1" src={`https://cdn.livechatinc.com/cloud/?uri=https%3A%2F%2Fcdn.livechat-files.com%2Fapi%2Ffile%2Flc%2Fmain%2F13384410%2F0%2Fec%2Fb37525d1bea119850c3bbfa931116fd7.png`}/>
    <img className="stiker2" src={`https://cdn.livechatinc.com/cloud/?uri=https%3A%2F%2Fcdn.livechat-files.com%2Fapi%2Ffile%2Flc%2Fmain%2F12683781%2F0%2Fec%2Fe7a5c01a6f38e5e8f42e9de4f217f7ff.png`}/>
    <footer className="footer">
      <p>GAME PROVIDER</p>
      <img src={`https://files.sitestatic.net/images/footer_pwrdby_idr.png?v=1`}/>
    </footer>
    </>
  );
}

export default App;
