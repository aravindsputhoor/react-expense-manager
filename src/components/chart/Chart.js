import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointsVAlues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totlaMaximum = Math.max(...dataPointsVAlues);
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint=> <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totlaMaximum} label={dataPoint.label} />)}
    </div>
  )
}

export default Chart