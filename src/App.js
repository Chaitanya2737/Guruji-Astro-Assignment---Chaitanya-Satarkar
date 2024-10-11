import React from "react";
import "./App.css"
import PersonalInfo from "./Components/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import AddressInfo from "./Components/AddressInfo";
import Confirmation from "./Components/Confirmation";
import ModeSwitcher from "./Components/ModeSwitcher";


function App() {
  const mode = useSelector((state) => state.mode.isDark);
  return (
   <div className={`${!mode ? "bg-primary" : "bg-secondary"}`}>
     <ModeSwitcher />
    <div className={`mx-8 md:mx-16 lg:mx-18  h-screen`}>
      <Routes>
        <Route  element={<PersonalInfo />}
         path="/" />
                 <Route  element={<AddressInfo />}
         path="/step2" />
                  <Route  element={<Confirmation />}
         path="/step3" />
      </Routes>
    </div>
   </div>
  );
}

export default App;
