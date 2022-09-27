import { Link, Outlet } from "react-router-dom";

import AtlasIcon from "../../icons/atlas.png"
import LoginIcon from "../../icons/login.png";


//import "./Public.css";

function Public(){
    

    return(
        <>
            <header id="header">
                <Link to="/"><img id="atlas-button" alt="" src={AtlasIcon}></img> </Link>
                <div id="header-text">
                    <h1 id="main-header">Atlas PMS</h1>
                    <h2 id="sub-header">Your Personal Managment Software</h2>
                </div>
                <Link to="/login"><img id="account-button" alt="" src={LoginIcon}></img> </Link>
            </header>
            <Outlet/>
            <div id="bottom-bar">
                
            </div>
        </>
    );
}

export default Public;