import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import s from './DataTable.module.scss';

// import data from '../../services/data';

class DataTable extends Component {

  // state = {
  //   charges: [...data.charges],
  // }

  createData = (category, description, date, total, actions) => {
    return { category, description, date, total, actions };
  }

  render() {
    const rows = this.props.data !== null ?
      this.props.data.map(item => this.createData(item.category, item.description, item.date, item.total, '...'))
      : [];

    return (
      <Grid item xs={12}>
        <TableContainer component={Paper} className={s.tableContainer}>
          <Table className={s.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Money</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.category}>
                        <TableCell component="th" scope="row">
                          {row.category}
                        </TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                        <TableCell align="right">{row.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    )
  }
}

export default DataTable;
