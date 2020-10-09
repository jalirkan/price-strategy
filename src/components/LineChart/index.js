import BaseChart from '../BaseChart';
import classnames from 'classnames';
import * as d3 from 'd3';

import './index.scss';

function drawLineChart(props) {
  const {
    svgRef,
    tooltipRef,
    data,
    xScale,
    yScale,
    width,
    height,
    margin,
    lineClass,
    markerClass,
    strokeWidth,
  } = props;

  const svg = d3.select(svgRef.current).select('g');
  const tooltip = d3.select(tooltipRef.current);

  const line = d3
    .line()
    .x((d) => xScale(d.label))
    .y((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke-width', strokeWidth)
    .attr('class', 'line')
    .attr('d', line)
    .attr('class', classnames(['line-chart__path', lineClass]));

  const focus = svg
    .append('g')
    .attr('class', 'focus')
    .style('display', 'none');

  focus
    .append('circle')
    .attr('r', 5)
    .attr('class', classnames(['line-chart__circle', markerClass]));

  svg
    .append('rect')
    .attr('class', 'overlay')
    .attr('width', width)
    .attr('height', height)
    .style('opacity', 0)
    .on('mouseover', () => {
      focus.style('display', null);
    })
    .on('mouseout', () => {
      focus.style('opacity', 0);
      tooltip
        .transition()
        .duration(300)
        .style('opacity', 0);
    })
    .on('mousemove', mousemove);

  function mousemove(event) {
    const bisect = d3.bisector((d) => d.label).left;
    const xPos = d3.mouse(this)[0];
    const x0 = bisect(data, xScale.invert(xPos));
    const d0 = data[x0];

    focus.style('opacity', 1);

    focus.attr(
      'transform',
      `translate(${xScale(d0.label)},${yScale(d0.value)})`,
    );

    tooltip
      .transition()
      .duration(300)
      .style('opacity', 0.9);

    tooltip
      .html(d0.tooltipContent || d0.label)
      .style(
        'transform',
        'translate(-50%,-100%)',
      )
      .style(
        'left',
        `${xScale(d0.label) + margin.left}px`,
      )
      .style(
        'top',
        `${yScale(d0.value) + margin.top - 10}px`,
      );
  }
}

export default BaseChart(drawLineChart);
