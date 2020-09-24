import  React from 'react';
import {Bar} from "react-chartjs-2";
import dataBarCharts from "./dataBarCharts";


function BarChart() {
   const options ={
        title: {
            display: true,
            text: 'Income categories',
            fontSize: 20
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{               
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500
                },
                gridLines: {
                    display: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        maintainAspectRatio: false
    }

    return (  
        <div className="barChart">                
        <Bar data = {dataBarCharts} options = {options} />    
        </div>                         
    )
}

export default BarChart;