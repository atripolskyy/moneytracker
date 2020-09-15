import React, { Component } from 'react';

import s from './MoneyButton.module.scss';
import Button from '@material-ui/core/Button';

class MoneyButton extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <Button
        className={s.buttonAddMore}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Add more
      </Button>
    );
  }
}

export default MoneyButton;
