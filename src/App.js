import React from "react";
import "./App.css"
import PersonalInfo from "./Components/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router";


function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode.isDark);
  return (
   <div className={`${!mode ? "bg-primary" : "bg-secondary"}`}>
    <div className={`mx-8 md:mx-16 lg:mx-18  h-screen`}>
      <Routes>
        <Route  element={<PersonalInfo />}
         path="/step1" />
      </Routes>
    </div>
   </div>
  );
}

export default App;
