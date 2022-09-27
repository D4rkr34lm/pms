import { Outlet, Link } from "react-router-dom";

import AtlasIcon from "../../icons/atlas.png"
import LoginIcon from "../../icons/login.png";
import CalenderIcon from "../../icons/calender.png";
import FinanceIcon from "../../icons/finance.png";
import HouseholdIcon from "../../icons/household.png";

import "./Layout.css";

function Private(){
    

    return(
        <>
            <header id="header">
                <img id="atlas-button" alt="Image not found" src={AtlasIcon}></img>
                <div id="header-text">
                    <h1 id="main-header">Atlas PMS</h1>
                    <h2 id="sub-header">Your Personal Managment Software</h2>
                </div>
                <img id="account-button" alt="Image not found" src={LoginIcon}></img>
            </header>
            <nav id="nav">
                <Link className="nav-link" to="/time"><img className="nav-icon" src={CalenderIcon}/>Time Managment</Link>
                <Link className="nav-link" to="/finance"><img className="nav-icon" src={FinanceIcon}/>Finance</Link>
                <Link className="nav-link" to="/household"><img className="nav-icon" src={HouseholdIcon}/>Household</Link>
            </nav>
            <Outlet/>
            <div id="bottom-bar">
                
            </div>
        </>
    );
}

export default Private;