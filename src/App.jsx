import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Time from "./pages/Time/Time";
import Finance from "./pages/Finance";
import Household from "./pages/Household";
import NoSite from "./pages/NoSite";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Layout/>}>
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


export default App;