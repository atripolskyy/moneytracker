import React from 'react';

import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Content from './components/Content/index';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h1>Hello</h1>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
