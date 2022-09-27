import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";

import Public from "./pages/Layout/Public";
import Landing from "./pages/Landing";
import Login from "./pages/Login/Login";

import Private from "./pages/Layout/Private";
import Home from "./pages/Home";
import Time from "./pages/Time/Time";
import Finance from "./pages/Finance";
import Household from "./pages/Household";
import NoSite from "./pages/NoSite";

import "./App.css";

function App(){
    const cookies = new Cookies();
    
    const [loggedIn, setLoggedIn] = useState(cookies.get("loggedIn"));
    
    if(typeof loggedIn === "undefined"){
        cookies.set("loggedIn", "false");
        setLoggedIn("false");
    }

    if(loggedIn === "true"){
        return(
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Private/>}>
                        <Route index element={<Home/>}/>
                        <Route path="time" element={<Time/>}/>
                        <Route path="finance" element={<Finance/>}/>
                        <Route path="household" element={<Household/>}/>
                        <Route path="*" element={<NoSite/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
    else{
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Public/>}>
                    <Route index element={<Landing/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<NoSite/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;