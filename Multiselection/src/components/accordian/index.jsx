import { useState } from "react";
import data from "./data";
import "./style.css"
export default function Accordian() {
  const [selected, setSelelcted] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handlesingleSelection = (getid) => {
      setSelelcted(getid===selected?null:getid);
    };

   function handleMultiSelection(getid) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getid);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getid);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
console.log(selected,multiple)
    return (
      <div className="wrapper">
        <button
        onClick={()=>setEnableMultiSelection(!enableMultiSelection)}
        >Enable Multi-Selection</button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection?() =>handleMultiSelection(dataItem.id)
                    :()=>  handlesingleSelection(dataItem.id)
                     }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span >+</span>
                </div>
                {
                enableMultiSelection?
                multiple.indexOf(dataItem.id) !==-1 &&
                <div className="content">{dataItem.answer} </div> :
                selected === dataItem.id &&  <div className="content">{dataItem.answer} </div>
                } 
          
              </div>
            ))
          ) : (
            <div>no data found</div>
          )}
        </div>
      </div>
    );
}
