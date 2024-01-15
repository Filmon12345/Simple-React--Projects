import { useState } from "react";
import data from "./data";
import "./style.css"
export default function Accordian() {
  const [selected, setSelelcted] = useState(null);
  const handlesingleSelection = (getid) => {
    setSelelcted(getid===selected?null:getid);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                    {
                  
                     handlesingleSelection(dataItem.id)}}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span >+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
