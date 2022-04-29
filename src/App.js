import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voot from "./Redux/Reduxui/Redux"
import Add from "./Redux/Reduxui/createRedux"
import Edit from "./Redux/Reduxui/Edit"
import Sports from "./Redux/Reduxsports/Reduxsports"
import "./App.css"
import Addpremium from "./Redux/Reduxpremiumui/Premium";
import Editpremium from "./Redux/Reduxpremiumui/Editpremium";
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";

const Premium = React.lazy(() => import("./Redux/Reduxpremiumui/Premium"))




const App = () => {

  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Router>
          <Routes>
            <Route exact path="/Voot" element={<Voot />} />
            <Route exact path="/Add" element={<Add />} />
            <Route exact path="/Edit/:id" element={<Edit />} />
            <Route exact path="/Premium" element={<Premium />} />
            <Route exact path="/Sports" element={<Sports />} />
            <Route exact path="/premium/Addpremium" element={<Addpremium />} />
            <Route exact path="/Editpremium/:id" element={<Editpremium />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Registration" element={<Registration />} />

          </Routes>
        </Router>
      </Suspense>

    </>
  );
}

export default App;



