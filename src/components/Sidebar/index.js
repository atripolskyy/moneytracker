import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

import s from './Sidebar.module.scss';

class Sidebar extends Component {
  render() {
    return (
      <Drawer
        className={s.drawer}
        variant="permanent"
        classes={{
          paper: s.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={s.drawerContainer}>
          <div className={s.alignCenter}>
          <Avatar className={s.large}>U</Avatar>
          <p className={s.userName}>Hello, User!</p>
          </div>
          <Divider />
          <div className={s.sidebarWidgetWrapper}>
            <List>
              <ListItem button>
                <ListItemText primary="Home" classes={{ primary: s.listSidebarItem }} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Charts" classes={{ primary: s.listSidebarItem }} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Categories" classes={{ primary: s.listSidebarItem }} />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default Sidebar;
