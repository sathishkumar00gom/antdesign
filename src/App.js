import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voot from "./Redux/Reduxui/Redux"
import Add from "./Redux/Reduxui/createRedux"
import Edit from "./Redux/Reduxui/Edit"
import "./App.css"



const App = () => {
  
    return(
      <>
    <Router>
      <Routes>
        <Route exact path="/Voot" element={<Voot/>}/>
        <Route exact path="/Add" element={<Add/>}/>
        <Route exact path="/Edit" element={<Edit/>}/>
      </Routes>
    </Router>

  </>
    );
  }

export default App;



