import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import s from './Form.module.scss';

class Form extends Component {
  state = {
    charges: JSON.parse(localStorage.getItem("charges")) === null ? [] : JSON.parse(localStorage.getItem("charges")),
    total: '',
    category: null,
    date: null,
    description: '',
  }

  handleChangeTotal = (e) => {
    const inputValue = e.target.value;

    if (inputValue.trim() !== '') {
      this.setState({
        total: inputValue,
      });
    } else {
      this.setState({
        total: '',
      });
    }
  }

  handleSubmitAmout = (e) => {
    e.preventDefault();

    const charges = [...this.state.charges, {
      total: this.state.total,
      category: 2,
      date: '02/09/2020',
      description: 'fsdfsdf',
    }];

    this.setState({
      charges,
      total: 0,
    });

    localStorage.setItem('charges', JSON.stringify(charges));
  }

  render() {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          New charge
        </Typography>
        <form
              noValidate
              autoComplete="off"
              className={s.form}
              onSubmit={this.handleSubmitAmout}
        >
              <TextField
                label="Total"
                type="number"
                onChange={this.handleChangeTotal}
              />
              <TextField label="Description" onChange={this.handleChangeDescription} />

              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="10"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <Button variant="contained" color="primary" type="submit">
                Add new charge
              </Button>
        </form>
      </>
    );
  }
}

export default Form;
