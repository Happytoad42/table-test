import React from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react.js';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ data, values }) => {
    const valuesArr = values.map(val => val.name);

    const valuesByName = valuesArr.map(function(value) {
        debugger;
        const valueName = value.toString();
        const valueDataByName = {};
        data.map(item => Object.assign(valueDataByName, { [item.name]: item[value] }));

        return { valueName, valueData: valueDataByName };
    })


    const toggleDataSeries = (e) => {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
    }
    
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
    
    console.log(chartData)


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
            itemclick: toggleDataSeries
        },
        data: chartData
        
        
        // [
        //     {
        //         type: "stackedColumn",
        //         name: "val1",
        //         showInLegend: true,
        //         yValueFormatString: "#,##",
        //         dataPoints: [
        //             { label: "DAY1", y: 114 },
        //             { label: "DAY2", y: 14 },
        //             { label: "DAY3", y: 4 },
        //             { label: "DAY4", y: 24 },
        //             { label: "DAY5", y: 54 },
        //         ]
        //     },
        //     {
        //         type: "stackedColumn",
        //         name: "val2",
        //         showInLegend: true,
        //         yValueFormatString: "#,##",
        //         dataPoints: [
        //             { label: "DAY1", y: 14 },
        //             { label: "DAY2", y: 24 },
        //             { label: "DAY3", y: 34 },
        //             { label: "DAY4", y: 64 },
        //             { label: "DAY5", y: 34 },
        //         ]
        //     },
        //     {
        //         type: "stackedColumn",
        //         name: "val3",
        //         showInLegend: true,
        //         yValueFormatString: "#,##",
        //         dataPoints: [
        //             { label: "DAY1", y: 34 },
        //             { label: "DAY2", y: 64 },
        //             { label: "DAY3", y: 94 },
        //             { label: "DAY4", y: 114 },
        //             { label: "DAY5", y: 24 },
        //         ]
        //     },
        // ]
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
