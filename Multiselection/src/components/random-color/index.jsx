import { useEffect, useState } from "react";
import "./style.css";
export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
   const g = randomColorUtility(256);
  const b = randomColorUtility(256);
  setColor(`rgb(${r}, ${g},${b})`);
  }

  useEffect(()=>{
if (typeofColor === "rgb") handleCreateRandomRgbColor();
else handleCreateRandomHexColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[typeofColor])
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: color,
      }}
    >
      <div>
        <button className="Hex-btn" onClick={() => setTypeofColor("hex")}>
          Select HEX Color
        </button>
        <button
          className="Random-btn"
          onClick={
            typeofColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          {" "}
          Generate
        </button>
        <button className="Rgb-btn" onClick={() => setTypeofColor("rgb")}>
          Select RGB Color
        </button>
        <div className="display">
          <h3>{typeofColor === 'rgb' ? 'RGB COLOR' : 'HEX COLOR' }</h3>
          <h1>{color}</h1>
      </div>
      </div>
     
    </div>
  );
}
