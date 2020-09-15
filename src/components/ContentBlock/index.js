import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import MoneyButton from '../MoneyButton/index';
import MoneyForm from '../MoneyForm/index';
import DataTable from '../DataTable/index';

import s from './ContentBlock.module.scss';

class ContentBlock extends Component {
  state = {
  //   charges: JSON.parse(localStorage.getItem("charges")),
  //   incomes: JSON.parse(localStorage.getItem("incomes")),
    moneyRowData: '',
  }

  // handleAddMoney = (total) => {
    // e.preventDefault();

    // console.log('submit', total);

    // this.setState( ({wordArr}) => {
    //   const newWordArr = [
    //     ...wordArr,
    //     newValue,
    //   ];
    //   return {
    //     wordArr: newWordArr,
    //   }
    // });
  // }
  show

  getMoneyRowData = id => {
    const {item, onShowMoneyForm} = this.props;

    this.setState( () => {
      // const moneyRow = item.filter(row => {
      //   return (row.id === id) ? row : '';
      // });

      const idx = item.findIndex( item => item.id === id);

      return {
        moneyRowData: item[idx] ? item[idx] : '',
      }
    });

    // console.log(this.state.moneyRowData);

    onShowMoneyForm();
  }


  render() {
    const { item, onAddMoney, onDeleteMoney, onShowMoneyForm, isActiveMoneyForm } = this.props;

    return (
      <main className={s.pageContent}>
        <Toolbar />
        <Container maxWidth="lg" className={s.container}>
          <Grid container spacing={3}>

            <Grid item className={s.mla} xs={12} md={4} lg={3}>
              <Paper className={`${s.fixedHeight} ${s.shadow}`}>
                1232131
              </Paper>
            </Grid>

            <Grid item xs={12} className={s.filterRow}>
              <MoneyButton onClick={this.getMoneyRowData} />
            </Grid>

            {/* <DataTable item={item} onDeleteMoney={onDeleteMoney} showMoneyForm={onShowMoneyForm} /> */}
            <DataTable item={item} onDeleteMoney={onDeleteMoney} showMoneyForm={this.getMoneyRowData} />

          </Grid>
        </Container>

        <Drawer
          anchor="right"
          open={isActiveMoneyForm}
          onClose={onShowMoneyForm}
          className={s.formRight}
        >
          <div className={s.formWrapper}>
            <MoneyForm onAddMoney={onAddMoney} isEdit={this.state.moneyRowData}/>
          </div>
        </Drawer>
      </main>
    );
  }
}

export default ContentBlock;
