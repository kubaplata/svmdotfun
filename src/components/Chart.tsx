"use client"

import {AreaChart} from "@tremor/react";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

export function Chart() {
    return (
        <AreaChart
            className="w-full h-full"
            colors={["#000000"]}
            data={chartData}
            showAnimation={true}
            animationDuration={1000}
            index="month"
            curveType={"natural"}
            showGridLines={false}
            showYAxis={false}
            showXAxis={false}
            showTooltip={true}
            showLegend={false}
            categories={['desktop']}
        />
    );
}
