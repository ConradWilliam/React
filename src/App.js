import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import About from "./routes/About";

import "./index.css";

export default function App() {
    return (
      <div className="App">

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/About" element={<About/>}/>


      </Routes>
      </div>
   
  );
}


