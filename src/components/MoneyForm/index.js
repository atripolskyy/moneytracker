import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import s from './MoneyForm.module.scss';

class MoneyForm extends Component {
  // constructor(props) {
  //   super(props);

  // }

  state = {
  //   charges: JSON.parse(localStorage.getItem("charges")) === null ? [] : JSON.parse(localStorage.getItem("charges")),
    total: this.props.isEdit.total ? this.props.isEdit.total : '',
    category: this.props.isEdit.category ? this.props.isEdit.category : 1,
    description: this.props.isEdit.description ? this.props.isEdit.description : '',
    date: this.props.isEdit.date ? this.props.isEdit.date : moment().format(),
    id: this.props.isEdit.id ? this.props.isEdit.id : null,
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

  handleChangeCategory = (e) => {
    const inputValue = e.target.value;

    this.setState({
      category: inputValue,
    });
  }

  handleChangeDescription = (e) => {
    const inputValue = e.target.value;

    if (inputValue.trim() !== '') {
      this.setState({
        description: inputValue,
      });
    } else {
      this.setState({
        description: '',
      });
    }
  }

  handleChangeDate = (date) => {
    this.setState({
      date: moment(date).format()
    });
  };

  // handleSubmitAmout = (e) => {
  //   e.preventDefault();

  //   const charges = [...this.state.charges, {
  //     total: this.state.total,
  //     category: 2,
  //     date: '02/09/2020',
  //     description: 'fsdfsdf',
  //   }];

  //   this.setState({
  //     charges,
  //     total: 0,
  //   });

  //   localStorage.setItem('charges', JSON.stringify(charges));
  // }

  handleAddMoney = (e) => {
    e.preventDefault();

    const { onAddMoney } = this.props;

    if (this.state.total !== '') {
      onAddMoney(this.state.id, this.state.total, this.state.category, this.state.description, this.state.date);

      this.setState( () => {
        return {
          id: null,
          total: '',
          category: 1,
          description: '',
          date: '',
        }
      });
    }
  }

  render() {
    return (
      <>
        <Typography variant="h5" gutterBottom>
        { this.state.id ? `Edit charge` : `New charge`}
        </Typography>
        <form
          noValidate
          autoComplete="off"
          className={s.form}
          onSubmit={this.handleAddMoney}
        >
          <TextField
            id="outlined-number"
            label="Total"
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.total}
            variant="outlined"
            onChange={this.handleChangeTotal}
          />

          <FormControl variant="outlined">
            <InputLabel shrink id="category-select-placeholder-label">Category</InputLabel>
            <Select
              labelId="category-select-placeholder-label"
              id="demo-simple-select-outlined"
              value={this.state.category}
              displayEmpty
              onChange={this.handleChangeCategory}

            >
              <MenuItem value={1}>Travel</MenuItem>
              <MenuItem value={2}>Entertainment</MenuItem>
              <MenuItem value={3}>Food</MenuItem>
              <MenuItem value={4}>Clothes</MenuItem>
              <MenuItem value={5}>Other</MenuItem>
            </Select>
          </FormControl>

          <div className="MuiFormControl-root">
            <InputLabel
              className="MuiInputLabel-formControl MuiInputLabel-shrink MuiInputLabel-outlined"
              shrink
            >Description</InputLabel>
            <TextareaAutosize
              value={this.state.description}
              onChange={this.handleChangeDescription}
              rowsMax={6}
              rowsMin={4}
            />
          </div>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="dd/MM/yyyy"
              value={this.state.date}
              onChange={this.handleChangeDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>

          <Button variant="contained" color="primary" type="submit">
          { this.state.id ? `Edit charge` : `Add new charge`}
          </Button>
        </form>
      </>
    );
  }
}

export default MoneyForm;
