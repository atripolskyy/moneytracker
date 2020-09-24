import  React from 'react';
import {Doughnut} from "react-chartjs-2";
import dataDoughnutCharts from "./dataDoughnutCharts"


function DoughnutChart () {
    const options = { 
        title: {
            display: true,
            text: 'Charges categories',
            fontSize: 20
        },
        legend:{
            display:true,
            position:'right',
            fullWidth: true
        },
        maintainAspectRatio: false
        
    };

    return (  
        <div className="doughnutChart">
            <Doughnut  data = {dataDoughnutCharts} options = {options} />  
        </div>                                                 
    )
}

export default DoughnutChart;