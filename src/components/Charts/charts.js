import React, {Component} from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';

class Chart extends Component{
    componentWillMount(){    
         this.getChartData();
       }
    
      getChartData(){
        
        this.setState({
          chartData:{
              
            labels: ['Dinner', 'team building', 'tickets', 'cafe'],
            datasets:[
              {
                
                data:[
                    13,
                    110,
                    253,
                    400,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)'
                ]
              }
            ]
          }
        });
      }
    
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,        
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              
              display:this.props.displayTitle,
              text:'Income categories',
              fontSize:25,
            
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Summary ',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Doughnut 
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Charges Categories',
              fontSize:20
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;