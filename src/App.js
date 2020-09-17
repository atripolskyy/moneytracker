import React, { Component } from 'react';
import s from './components/WrapperBlock/WrapperBlock.module.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom' //router
import HeaderBlock from './components/HeaderBlock/index';
import SidebarBlock from './components/SidebarBlock/index';
import ContentBlock from './components/ContentBlock/index';
// import { Router } from '@material-ui/icons'; // i don't know why it's there
import Chart from "./components/Charts/charts"
import AutorisationUser from "./components/Login/autorisationUser"


const dataList = [
  {
    total: 13,
    category: 1,
    description: 'Dinner',
    date: '01/01/2020',
    id: 1,
  },
  {
    total: 110,
    category: 2,
    description: 'team building',
    date: '02/01/2020',
    id: 2,
  },
  {
    total: 253,
    category: 3,
    description: 'tickets',
    date: '05/01/2020',
    id: 3,
  },
  {
    total: 400,
    category: 1,
    description: 'cafe',
    date: '11/01/2020',
    id: 4,
  },
];

// const MENU = [
//   { 
//     title: "Autorisation User",
//     path: "/",
//     component: AutorisationUser,
//     exact: true
//   }, {
//     title: "Table",
//     path: "/table",
//     component: ContentBlock,
//     exact: true
//   }, { 
//     title: "Charts",
//     path: "/chart",
//     component: Chart,
//     exact: true
//   }
// ];


class App extends Component {
  state = {
    dataArr: dataList,
    isActiveMoneyForm: false,
    // editMoneyId: null,
    chartData:{}
  }

  handleShowMoneyForm = () => {
    //console.log('id: ', id);

    this.setState( state => {
      return {
        isActiveMoneyForm: !state.isActiveMoneyForm,
        // editMoneyId: id,
      }
    });
  }

  handleAddMoney = (id = null, total, category, description, date) => {
    const lastDataArrId = this.state.dataArr[this.state.dataArr.length - 1].id;

    // console.log(lastDataArrId);

    const newValue = {
      total,
      category,
      description,
      date,
      id: (id !== null) ? id : lastDataArrId + 1,
    };

    if (id !== null) {
      this.setState( ({dataArr, isActiveMoneyForm}) => {
        const idx = dataArr.findIndex( item => item.id === id);

        dataArr[idx] = newValue;

        return {
          isActiveMoneyForm: !isActiveMoneyForm,
        }
      });
    } else {
      this.setState( ({dataArr, isActiveMoneyForm}) => {
        const newDataArr = [
          ...dataArr,
          newValue,
        ];
        return {
          dataArr: newDataArr,
          isActiveMoneyForm: !isActiveMoneyForm,
        }
      });
    }

    // console.log(date);
  }

  handleDeleteMoney = id => {
    console.log('delete money, id: ', id);

    this.setState( ({dataArr}) => {
      const idx = dataArr.findIndex( item => item.id === id);

      const newDataArr = [
        ...dataArr.slice(0, idx),
        ...dataArr.slice(idx + 1),
      ];
      return {
        dataArr: newDataArr,
      }
    });
  }

  
  render() {
    const { dataArr, isActiveMoneyForm } = this.state;

    return (
      <div className={s.wrapper}>       
          <Router>
          <HeaderBlock />          
              <Switch>                      
                <Route path="/moneytracker" exact  component={AutorisationUser} >
                  <AutorisationUser />
                </Route>
                <Route path="/home" exact component={ContentBlock}>
                <SidebarBlock />
                  <ContentBlock
                      onAddMoney={this.handleAddMoney}
                      onDeleteMoney={this.handleDeleteMoney}
                      onShowMoneyForm={this.handleShowMoneyForm}
                      isActiveMoneyForm={isActiveMoneyForm}
                      // editMoneyId={editMoneyId}
                      item={dataArr}
                    /> 
                </Route>                      
                {/* <myPieChart>
                  <canvas id="myChart"></canvas>
                </myPieChart> */}
                {/* <Home /> */}    
                  <Route path="/chart" exact component={Chart}>
                  <SidebarBlock />
                    <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                  </Route> 
            </Switch>                   
        </Router>                 
      </div>
    );
  }
}

export default App;
