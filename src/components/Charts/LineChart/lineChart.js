import  React from 'react';
import {Line} from "react-chartjs-2";
import dataLineCharts from "./lineDataChart"

function LineChart() {
    const options = { 
        title: { 
            display: true,
            text: 'Summary',
            position: 'top',
            fontSize: 24
        }, 
        legend: {
            display: false
        },
        scales: { 
            yAxes: [
                { 
                    display: false,
                    ticks: { 
                        min: 0,
                        max: 320,
                        stepSize: 100
                    },
                    gridLines: {
                        display: false,
                    }
                }
            ],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }] 
        },
        maintainAspectRatio: false
    };

    return (    
        <div className="lineChart">
            <Line data = {dataLineCharts} options = {options} width={500} height={300} horizontalGuides={5}/>  
        </div>                                                 
    )
}

export default LineChart;

