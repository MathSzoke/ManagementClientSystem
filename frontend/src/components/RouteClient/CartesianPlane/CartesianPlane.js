import React, { useEffect, useRef, useState } from 'react';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import "./CartesianPlane.css";

export default function CartesianPlane({ coordinates })
{
    const [rendered, setRendered] = useState(false);
    const svgRef = useRef(null);

    useEffect(() => {
        if (!rendered && coordinates.length > 0) {
            const width = 700;
            const height = 700;
            const padding = 10;

            const vis = d3.select(svgRef.current)
                .attr("width", width)
                .attr("height", height);

            const xScale = d3.scaleLinear().domain([100, -100]).range([width - padding, padding]);
            const yScale = d3.scaleLinear().domain([-100, 100]).range([height - padding, padding]);

            const yAxis = d3.axisLeft().scale(yScale);
            const xAxis = d3.axisBottom().scale(xScale);

            const xAxisPlot = vis.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + (height / 2) + ")")
                .call(xAxis.tickSize(-height, 0, 0));

            const yAxisPlot = vis.append("g")
                .attr("class", "axis axis--y")
                .attr("transform", "translate(" + (width / 2) + ",0)")
                .call(yAxis.tickSize(-width, 0, 0));

            xAxisPlot.selectAll(".tick line")
                .attr("y1", (width - (2 * padding)) / 2 * -1)
                .attr("y2", (width - (2 * padding)) / 2 * 1);

            yAxisPlot.selectAll(".tick line")
                .attr("x1", (width - (2 * padding)) / 2 * -1)
                .attr("x2", (width - (2 * padding)) / 2 * 1);

            coordinates.forEach((coord, index) => {
                const color = d3.schemeCategory10[index % 10]; // Obter uma cor diferente para cada cliente
                vis.append("circle")
                    .attr("cx", xScale(coord.coordinateX))
                    .attr("cy", yScale(coord.coordinateY))
                    .attr("r", 6)
                    .attr("fill", color);

                vis.append("line")
                    .attr("x1", xScale(0))
                    .attr("y1", yScale(0))
                    .attr("x2", xScale(coord.coordinateX))
                    .attr("y2", yScale(coord.coordinateY))
                    .attr("stroke", color)
                    .attr("stroke-width", 2);
            });

            setRendered(true);
        }
    }, [rendered, coordinates]);

    return (
        <div id="graph">
            <svg ref={svgRef}></svg>
        </div>
    );
}
