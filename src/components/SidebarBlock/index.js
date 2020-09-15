import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import s from './SidebarBlock.module.scss';

class SidebarBlock extends Component {
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

export default SidebarBlock;
