import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
const totalMaximun = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((i) => (
        <ChartBar
          value={i.value}
          maxValue={totalMaximun}
          label={i.label}
          key={i.label}
        />
      ))}
      
    </div>
  );
};

export default Chart;
