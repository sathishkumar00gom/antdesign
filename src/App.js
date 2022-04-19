import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voot from "./Redux/Reduxui/Redux"
import Add from "./Redux/Reduxui/createRedux"
import Edit from "./Redux/Reduxui/Edit"
import Premium from "./Redux/Reduxpremiumui/Reduxpremiumui"
import Sports from "./Redux/Reduxsports/Reduxsports"
import "./App.css"
import Addpremium from "./Redux/Reduxpremiumui/Createpremium";
import Editpremium from "./Redux/Reduxpremiumui/Editpremium";



const App = () => {
  
    return(
      <>
    <Router>
      <Routes>
        <Route exact path="/Voot" element={<Voot/>}/>
        <Route exact path="/Add" element={<Add/>}/>
        <Route exact path="/Edit/:id" element={<Edit/>}/>
        <Route exact path="/Premium" element={<Premium/>}/>
        <Route exact path="/Sports" element={<Sports/>}/>
        <Route exact path="/premium/Addpremium" element={<Addpremium/>}/>
        <Route exact path="/Editpremium/:id" element={<Editpremium/>}/>
      </Routes>
    </Router>

  </>
    );
  }

export default App;



