import React from "react";
import Ecom from "./E-Commerce/Ecom"
import { BrowserRouter as Router, Routes, link, nav, Route, navlink, } from "react-router-dom";
//"antd/lib/breadcrumb/Breadcrumb";
//import { Button, DatePicker, version } from "antd";//
//import "antd/dist/antd.css";
import Registration from './Component/Registration/Registration';
import Parent from "./Parent";
// import Home from "./Component/Homev/Home";
//import "./Component/Login/Login.css";
import Loginform from "./Component/Login/Loginform";
//import Component from "./Class/ClassComponent";
import Media from "./Media Queries/CSS"
import Create from "./Fetch and Axios/Create/Create";
import Tables from "./Fetch and Axios/Read/Read";
import Home from "./Fetch and Axios/Home/Home";


const App = () => {
  
    return(
      <>
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Registration />}/>
        <Route exact path="/a" element={<Loginform/>}/>
        <Route exact path="/b" element={<Home/>}/> */}
        <Route exact path="/Crud" element={<Create />} />
        <Route exact path="/Tables" element={<Tables />} />
        <Route exact path="/Home" element={<Home/>}/>
      </Routes>
    </Router>

  </>
    );
  }

export default App;



