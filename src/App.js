import React from "react";
import { BrowserRouter as Router, Routes, link, nav, Route, navlink, } from "react-router-dom";
//"antd/lib/breadcrumb/Breadcrumb";
//import { Button, DatePicker, version } from "antd";//
//import "antd/dist/antd.css";
import Registration from './Component/Registration/Registration';
import Parent from "./Parent";
import Home from "./Homev/Home";
//import "./Component/Login/Login.css";
import Login from "./Component/Login/Loginform";
//import Component from "./Class/ClassComponent";


class App extends React.Component {
render(){
  return(
      <>
      <Home/>
  {/* <Router>
    <Routes>
      <Route exact path="/" element={<Registration />}/>
        <Route exact path="/a" element={<Login />}/>


        </Routes>
      </Router> */}
    </>
    );
  }
}
    export default App;



