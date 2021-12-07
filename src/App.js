import React, { useState, useEffect } from "react";
import AreaChart from "./components/AreaChart";
import "./App.css";
import Coeffs from "get-parabola";

// const generateParabola = (xNew = 10000, yNew = 50) => {
const lineFn = Coeffs.getLineBy3Points([
  { x: 0, y: 0 },
  { x: 50, y: 10000 },
  { x: 100, y: 69000 },
]);

const parabola = [];
for (let i = 0; i <= 100; i += 10) {
  let value = lineFn(i);

  parabola.push({
    label: i,
    value,
    tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
  });
}
let data = parabola;
// };

const findA = (multiplier) => {
  const aCoef = [];
  aCoef.push(multiplier * 1);
};

// const heatMapdata = [];
// for (let i = 0; i < 20; i++) {
//   for (let j = 0; j < 20; j++) {
//     const depth = Math.floor(Math.random() * 20 + 3);
//     heatMapdata.push({
//       label: i,
//       value: j,
//       depth,
//       tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${j}<br><b>depth: </b>${depth}`,
//     });
//   }
// }
function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   generateParabola();
  // }, []);

  // function regenerateData() {
  //   const chartData = [];
  //   for (let i = 0; i < 20; i++) {
  //     const value = Math.floor(Math.random() * i + 3);
  //     chartData.push({
  //       label: i,
  //       value,
  //       tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
  //     });
  //   }

  // function generateParabola() {
  //   const parabola = [];
  //   for (let i = 0; i < 100; i += 5) {
  //     const value = lineFn(i);

  //     parabola.push({
  //       label: i,
  //       value,
  //       tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
  //     });
  //   }
  //   return parabola;
  // }
  // let parabola1 = generateParabola();
  // setData(parabola1);

  return (
    <div className="App">
      <button>Change Data</button>
      {/* <HeatMap
        svgProps={{
          margin: { top: 80, bottom: 80, left: 80, right: 80 },
          width: 400,
          height: 400,
        }}
        axisProps={{
          xLabel: "X Axis",
          yLabel: "Y Axis",
        }}
        data={heatMapdata}
        strokeWidth={4}
      />
      <BarChart
        svgProps={{
          margin: { top: 80, bottom: 80, left: 80, right: 80 },
          width: 600,
          height: 400,
        }}
        axisProps={{
          xLabel: "X Axis",
          yLabel: "Y Axis",
        }}
        data={data}
        strokeWidth={4}
      /> */}
      {
        /* <ScatterPlot
        svgProps={{
          margin: { top: 80, bottom: 80, left: 80, right: 80 },
          width: 600,
          height: 400,
        }}
        axisProps={{
          xLabel: 'X Axis',
          yLabel: 'Y Axis',
        }}
        data={data}
        pointWidth={4}
      />*/
        <AreaChart
          svgProps={{
            margin: { top: 80, bottom: 80, left: 80, right: 80 },
            width: 600,
            height: 400,
          }}
          axisProps={{
            xLabel: "Drawdown",
            yLabel: "Percent Cash Deployed",
          }}
          data={data}
          strokeWidth={4}
        />
      }
    </div>
  );
}
export default App;
