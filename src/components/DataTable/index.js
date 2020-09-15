import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import s from './DataTable.module.scss';

// import data from '../../services/data';

const createData = (date, category, description, total, id) => {
  return { date, category, description, total, id };
}

class DataTable extends Component {
// const DataTable = ({ item = [], onDeleteMoney, showMoneyForm }) => {
  // createData = (category, description, date, total, actions) => {
  //   return { category, description, date, total, actions };
  // }

  // render() {
    // const rows = this.props.data !== null ?
    //   this.props.data.map(item => this.createData(item.category, item.description, item.date, item.total, '...'))
    //   : [];

  render() {
    // const rows = item.map(row => createData(row.date, row.category, row.description, row.total, row.id))
    const rows = this.props.item !== null ?
      this.props.item.map(row => createData(row.date, row.category, row.description, row.total, row.id))
      : [];

    const {showMoneyForm, onDeleteMoney} = this.props;

    return (
    <Grid item xs={12}>
      <TableContainer component={Paper} className={s.tableContainer}>
          <Table className={s.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>

                <TableCell align="right">Money</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell><div>{row.date}</div></TableCell>
                  <TableCell component="th" scope="row"><div>{row.category}</div></TableCell>
                  <TableCell><div>{row.description}</div></TableCell>

                  <TableCell align="right"><div>{row.total}</div></TableCell>
                  <TableCell align="right">
                    <IconButton color="inherit" onClick={ () => { showMoneyForm(row.id); } }>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={ () => { onDeleteMoney(row.id); } }>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    </Grid>
    );
  }
}

export default DataTable;
