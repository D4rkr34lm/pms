import Calender from "../../components/Calender/Calender";

import "./Time.css";

function Time(){
    const currentMonth = new Date();
    
    return(
        <div id="main-content">
            <Calender id="calender" startMonth={currentMonth}/>
        </div>
    );
}

export default Time;