const dataDoughnutCharts = { 
  labels: ['Dinner', 'team building', 'tickets', 'cafe'],
  datasets:[
    {     
      data:[13, 110, 253, 400, ],
      backgroundColor:[
        'rgba(255, 99, 132, 12)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      hoverBorderColor: [
        `rgba(255, 99, 132, 1)`,
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ]
    }
  ]
};

export default dataDoughnutCharts;