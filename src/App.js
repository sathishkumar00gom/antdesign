import React from "react";
import { BrowserRouter as Router, Routes, link, nav, Route, navlink, } from "react-router-dom";
//"antd/lib/breadcrumb/Breadcrumb";
//import { Button, DatePicker, version } from "antd";//
//import "antd/dist/antd.css";
import Registration from './Component/Registration/Registration';
import Parent from "./Parent";
import Home from "./Component/Homev/Home";
//import "./Component/Login/Login.css";
import Loginform from "./Component/Login/Loginform";
//import Component from "./Class/ClassComponent";


class App extends React.Component {
render(){
  return(
      <>
       {/*  */}
  <Router>
    <Routes>
      <Route exact path="/" element={<Registration />}/>
        <Route exact path="/a" element={<Loginform/>}/>
        <Route exact path="/b" element={<Home/>}/>


        </Routes>
      </Router>
      
    </>
    );
  }
}
    export default App;



