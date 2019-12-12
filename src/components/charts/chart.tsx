import React, { FC, useRef, useEffect, useState } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import css from '@styled-system/css'
import { Card } from '../card'
import { Divider } from '../divider'
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Button } from '../button'
import { Flex } from '../flex'
import { ChartTheme } from '../../theme'
import styled from 'styled-components'
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight, scaleBand } from 'd3';


export interface BarChartProps {
    data: any

}

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null)
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            console.log(entries)
            entries.forEach(entry => {
                setDimensions(entry.contentRect)
            })
        })
        resizeObserver.observe(observeTarget)
        return () => {
            resizeObserver.unobserve(observeTarget);
        }
    }, [ref])
    return dimensions;
}

export const BarChart: FC<BarChartProps> = ({ data }, props) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef)

    useEffect(() => {
        const svg = select(svgRef.current)
        console.log(dimensions)

        if (!dimensions) return;

        const xScale = scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, dimensions.width]) // change
            .padding(0.5)

        const yScale = scaleLinear()
            .domain([0, 150]) // todo
            .range([dimensions.height, 0]) // change

        const colorScale = scaleLinear()
            .domain([75, 100, 150])
            .range(["green", "orange", "red"])
            .clamp(true)

        // X-Axis
        const xAxis = axisBottom(xScale).ticks(data.length);
        svg
            .select(".x-axis")
            .style("transform", `translateY(${dimensions.height}px)`)
            .call(xAxis);

        // Y-Axis
        const yAxis = axisRight(yScale)
        svg
            .select(".y-axis")
            .style("transform", `translateX(${dimensions.width}px)`)
            .call(yAxis);

        svg
            .selectAll(".bar")
            .data(data)
            .join('rect')
            .style("transform", "scale(1,-1)")
            .attr('class', 'bar')
            .attr('x', (value, index) => xScale(index))
            .attr('y', -dimensions.height)
            .attr('width', xScale.bandwidth())
            .on("mouseenter", (value, index) => {
                svg
                    .selectAll('.tooltip')
                    .data([value])
                    .join(enter => enter.append('text').attr('y', yScale(value) - 4))
                    .attr('class', 'tooltip')
                    .text(value)
                    .attr('x', xScale(index) + xScale.bandwidth() / 2)
                    .attr('text-anchor', 'middle')
                    .transition()
                    .attr('y', yScale(value) - 8)
                    .attr('opacity', 1)
            })
            .on("mouseleave", () => svg.select(".tooltip").remove())
            .transition()
            .attr('height', value => dimensions.height - yScale(value))
            .attr('fill', colorScale)

    }, [data, dimensions])

    return (
        <div ref={wrapperRef}>
            <BaseSvg ref={svgRef} data={props.data}>
                <g className="x-axis" />
                <g className="y-axis" />
            </BaseSvg>
        </div>

    )
}

const BaseSvg = styled.svg(
    css({
        bg: "Mono10",
        overflow: 'visible',
        width: '100%',

    }),

    {
        '.tooltip': {
            fontSize: '12px',
            backgroundColor: '#000',
            fontColor: 'green',
            height: '12px',
            width: '12px',
            padding: '4px',
            borderRadius: '4px',
        }
    }
)


