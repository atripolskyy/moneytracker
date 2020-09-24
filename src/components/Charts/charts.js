import React, {Component} from 'react';
import LineChart  from "./LineChart/lineChart";
import BarChart from "./BarChart/BarChart";
import DoughnutChart from "./DoughnutChart/doughnutChart"
import './charts.scss';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from "@material-ui/core/Button"


class Charts extends Component{


  render(){
    return (
      <div className="charts">                         
        <LineChart />       
        <DoughnutChart />       
        <BarChart />                                     
      </div>
    )
  }
}

export default Charts;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {   
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function FullWidthGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
//         <Grid item xs={8}>
//           <Paper className={classes.paper} spacing={2} ><LineChart /></Paper>
//         </Grid>
//         <Grid item xs={6} sm={6}>
//           <Paper className={classes.paper}><DoughnutChart /></Paper>
//         </Grid>
//         <Grid item xs={6} sm={6}>
//           <Paper className={classes.paper}><BarChart />  </Paper>
//         </Grid>       
//       </Grid>
//     </div>
//   );
// }






//----------------------------------------------------------------------------------------------------------------------------------

{/* <Button variant="contained" color="primary" type = "button" className="btnCharts">Week</Button>
        <Button variant="contained" color="primary" type = "button" className="btnCharts">Mounth</Button> */} 