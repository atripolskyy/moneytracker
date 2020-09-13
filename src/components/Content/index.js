import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import DataTable from '../DataTable/index';
import Form from '../Form/index';

import s from './Content.module.scss';

class Content extends Component {
  state = {
    open: false,
    charges: JSON.parse(localStorage.getItem("charges")),
    incomes: JSON.parse(localStorage.getItem("incomes")),
    total: 0,
    category: null,
    date: null,
    description: '',
  }

  handleShowForm = () => {
    this.setState( state => {
      return {
        open: !state.open,
      }
    });
  }

  render() {
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
              <Button
                className={s.buttonAddMore}
                variant="contained"
                color="primary"
                onClick={ this.handleShowForm }
              >
                Add more
              </Button>
            </Grid>

            <DataTable data={this.state.charges}/>
          </Grid>
        </Container>

        <Drawer
          anchor="right"
          open={ this.state.open }
          onClose={ this.handleShowForm }
          className={s.formRight}
        >
          <div className={s.formWrapper}>

            <Form total={this.state.total}/>

          </div>
        </Drawer>
      </main>
    );
  }
}

export default Content;
