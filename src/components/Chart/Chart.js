import React from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react.js';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ data, values }) => {    
    // Get all values names
    const valuesArr = values.map(val => val.name);

    // Create [] of values by name instead of wha API gives us
    const valuesByName = valuesArr.map(function(value) {
        const valueName = value.toString();
        const valueDataByName = {};
        data.map(item => Object.assign(valueDataByName, { [item.name]: item[value] }));

        return { valueName, valueData: valueDataByName };
    })

    // Normalize data to fit Charts API:
    // [ valueName: name, valueData: [ { name, data } ]]
    const chartData = valuesByName.map(function(valueItem) {
        const points = function() {
            let pointsArr = [];
            for (const [key, value] of Object.entries(valueItem.valueData)) {
                pointsArr.push({ label: `${key}`, y: +value }) ;
            }
            return pointsArr;
        }

        return {
            type: "stackedColumn",
            name: valueItem.valueName,
            showInLegend: true,
            yValueFormatString: "#####",
            dataPoints: points()
        }
    });

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Values by name",
            fontFamily: "verdana"
        },
        axisY: {
            title: "value",
            prefix: "",
            suffix: ""
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true,
            cursor: "pointer",
        },
        data: chartData       
    }

    return (
        <div>
            <CanvasJSChart options = {options}
            />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    )
}

export default Chart;
