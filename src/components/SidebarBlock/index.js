import React, { Component } from "react";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import s from "./SidebarBlock.module.scss";

import { NavLink } from "react-router-dom"; //links for buttons @markov

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
             {/* add navigation on siteBar  @markov */}
              <NavLink to="/home"> 
                <ListItem button>
                  <ListItemText
                    primary="Home"
                    classes={{ primary: s.listSidebarItem }}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/charts">
                <ListItem button>
                  <ListItemText
                    primary="Charts"
                    classes={{ primary: s.listSidebarItem }}
                  />
                </ListItem>
              </NavLink>
              {/* need create Categories component */}
              <NavLink to="#"> 
                <ListItem button>
                  <ListItemText
                    primary="Categories"
                    classes={{ primary: s.listSidebarItem }}
                  />
                </ListItem>
              </NavLink>
           {/* / add navigation on siteBar  @markov */}
            </List>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default SidebarBlock;
