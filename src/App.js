import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import About from "./routes/About";
import Landlord from "./routes/Landlord";
import BookNow from "./routes/BookNow";
import "./index.css";

export default function App() {
    return (
      <div className="App">

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Landlord" element={<Landlord/>}/>
        <Route path="/BookNow" element={<BookNow/>}/>
      </Routes>
      </div>
   
  );
}


