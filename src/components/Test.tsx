import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
// function FactoryStatus() {

//   return (

//   );
// }

// document.body.innerHTML = "<div id='root'></div>";
// ReactDOM.render(<FactoryStatus />, document.getElementById("root"));

// document.getElementById("sheets-station").click();
// setTimeout(() => {
//   console.log(document.getElementById("sheets-station").outerHTML);
//   console.log(document.getElementById("beams-station").outerHTML);
//   console.log(document.getElementById("bolts-station").outerHTML);
//   console.log(document.getElementById("frames-station").outerHTML);
// }, 200);
export const Test = () => {
  const [sheetsStatus, setSheetsStatus] = useState(true);
  const [beamsStatus, setBeamsStatus] = useState(true);
  const [boltStatus, setBoltsStatus] = useState(true);
  const [framesStatus, setFramesStatus] = useState(true);

  return (
    <div>
      <div>
        <h3>Control Panel</h3>
        <div>
          <input
            type="checkbox"
            id="sheets-status"
            checked={sheetsStatus}
            onChange={() => setSheetsStatus(!sheetsStatus)}
          />
          <span
            id="sheets-station"
            style={{ backgroundColor: sheetsStatus ? "" : "red" }}
          >
            SHEETS
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="beams-status"
            checked={beamsStatus}
            onChange={() => setBeamsStatus(!beamsStatus)}
          />
          <span
            id="beams-station"
            style={{ backgroundColor: sheetsStatus ? "" : "red" }}
          >
            BEAMS
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="bolts-status"
            checked={boltStatus}
            onChange={() => setBoltsStatus(!boltStatus)}
          />
          <span
            id="bolts-station"
            style={{ backgroundColor: boltStatus ? "" : "red" }}
          >
            BOLTS
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="frames-status"
            checked={framesStatus}
            onChange={() => setFramesStatus(!framesStatus)}
          />
          <span
            id="frames-station"
            style={{
              backgroundColor: beamsStatus ? (boltStatus ? "" : "red") : "red",
            }}
          >
            FRAMES
          </span>
        </div>
      </div>
    </div>
  );
};
