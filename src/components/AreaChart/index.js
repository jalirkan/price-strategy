import BaseChart from "../BaseChart";
import classnames from "classnames";
import * as d3 from "d3";

import "./index.scss";

function drawAreaChart(props) {
  const {
    svgRef,
    data,
    xScale,
    yScale,
    width,
    height,
    margin,
    areaClass,
    strokeWidth,
  } = props;

  const svg = d3.select(svgRef.current).select("g");

  const line = d3
    .line()
    .x((d) => xScale(d.label))
    .y((d) => yScale(d.value))
    .curve(d3.curveNatural);
  svg
    .append("path")
    .datum(data)
    .attr("stroke-width", strokeWidth)
    .attr("class", classnames(["area-chart__area", areaClass]))
    .attr(
      "d",
      d3
        .area()
        .x((d) => xScale(d.label))
        .y0(yScale(0))
        .y1((d) => yScale(d.value))
    );
}

export default BaseChart(drawAreaChart);
