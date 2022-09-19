import { useRef, useState } from "react";
import "./Calender.css";

function Calender(props){
    const [month, setMonth] = useState(props.startMonth);

    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);



    let inMonth = 0;
    let weeks = [];
    let dayCounter = 1;

    for(let w = 0; w < 6; w ++){
        let weekElements = [];
        
        for(let d = 0; d < 7; d ++){
            if(inMonth === 0 && d === firstDay.getDay()){
                inMonth = 1;
            }
            else if(inMonth === 1 && dayCounter === lastDay.getDate()){
                inMonth = 2;
            }
            else if(inMonth !== 1){
                weekElements.push(<Spacer/>);
                continue;
            }

            const dayDate = new Date(month.getFullYear(), month.getMonth(), dayCounter);
            dayCounter++;
            weekElements.push(<Tile date={dayDate} onClick={props.onClick}/>);
        }

        let week = (
            <div className="calender-week">
                {weekElements}
            </div>
        );

        weeks.push(week);

        if(inMonth === 2){
            break;
        }
    }

    return(
        <div className="calender" id={props.id}>
            <Header month={month} setMonth={setMonth}/>
            <Legend/>
            {weeks}
        </div>
    );
}

function Header(props){
    const leftArrow = "<<";
    const rightArrow = ">>";
    const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return(
        <div className="calender-header">
            <button className="calender-header-prev-button" onClick={() => {props.setMonth(new Date(props.month.getFullYear(), props.month.getMonth() - 1))}}>{leftArrow}</button>
            <p className="calender-header-display">{months[props.month.getMonth()]} {props.month.getFullYear()}</p>
            <button className="calender-header-next-button" onClick={() => {props.setMonth(new Date(props.month.getFullYear(), props.month.getMonth() + 1))}}>{rightArrow}</button>
        </div>
    );
}

function Legend(){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let legendParts = [];

    for(let n = 0; n < 7; n++){
        const legendPart = <p className={"calender-legend-part-" + n}>{days[n]}</p>
        legendParts.push(legendPart);
    }
    
    return(
        <div className="calender-legend">
            {legendParts}
        </div>
    );
}

function Tile(props){
    return(
        <div className="calender-tile">
            <button className="calender-tile-button" onClick={() => {props.onClick(props.date)}}>{props.date.getDate()}</button>
        </div>
    );
}

function Spacer(){
    return(
        <div className="calender-tile-spacer">
        </div>

    );
}

export default Calender;