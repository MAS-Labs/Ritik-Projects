import { useState } from "react"
import data from "./data";
import "./style.css";

export default function Accordian(){

const [selected,setSelected] = useState(null);
const [enblemultiselection,setenblemultiselection] = useState(false);
const [multiple,setmultiple] = useState([]);


function hadlesingleSelection(getCurrentId){
    console.log(getCurrentId);
    setSelected(getCurrentId);
}

function handlemultiselection(getCurrentId){
   let cpyMultiple = [...multiple];
   const findIndeOfCurrentId = cpyMultiple.indexOf(getCurrentId)
   console.log(findIndeOfCurrentId);
}
    return <div className="wrapper">
        <div className="accordian">
            <button onClick={()=>handlemultiselection(!setenblemultiselection)}>Enable Multi Selection</button>
            {
                
                data && data.length > 0 ? (
                data.map((dataItem)=> ( <div className="item">
                    <div onClick={
                        enblemultiselection
                       ? ()=> handlemultiselection(dataItem.id)
                       : () => hadlesingleSelection(dataItem.id)
                        } className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? 
                        <div className="content">{dataItem.answer}</div>
                        : null
                    }
                </div>))
                ):( <div>No Data found !</div>
            )}
        </div>

    </div>
}