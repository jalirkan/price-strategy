// import Coeffs from "get-parabola";
// import { by3Points } from "get-parabola";

// export const createData = (xNew = 30000, yNew = 50) => {
//   const lineFn = Coeffs.getLineBy3Points([
//     { x: 69000, y: 0 },
//     { x: xNew, y: yNew },
//     { x: 0, y: 100 },
//   ]);
//   function generateParabola() {
//     const parabola = [];
//     for (let i = 0; i < 100; i += 5) {
//       const value = lineFn(i);
//     }
//     parabola.push({
//       label: i,
//       value,
//       tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
//     });
//   }
// };
