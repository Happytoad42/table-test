import React from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react.js';

import styles from './Chart.module.scss'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {

    const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }

    return (
        <div className='wrapper border'   >
            <CanvasJSChart className={styles.chart} options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
        </div>
    )
}

export default Chart;
