
const dataLineCharts = { 
    
    labels: ['Mondey', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[
      {
        label: 'income', 
        type: "line",
        data:[
            300,
            200,
            210,
            100,
            234,
            210,
            100,
            12,
        ],
        
        borderColor:'rgb(254,132,2)', 
        pointBackgroundColor: 'rgb(93,143,238)',
        pointBorderColor: 'rgb(254,132,2)',       
        pointBackgroundColor: 'rgb(254,132,2)',
        pointBorderColor: 'rgb(254,132,2)',
        borderWidth: 4,
        borderDash: [15, 5],
        fill: false
          
      }, 
      {
        label: 'expense ',
        data:[
          100,
          300,
          210,
          220,
          300,
          232,
          324,
        ],
         
        backgroundColor: '#d0dffa',
        barPercentage: 0.6,  
        borderColor: 'rgb(93,143,238)',
        hoverBorderColor: 'rgba(93,143,238,0.6)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(93,143,238)',
        pointBorderColor: 'rgb(93,143,238)', 
        
      }      
    ]
};

export default dataLineCharts;

