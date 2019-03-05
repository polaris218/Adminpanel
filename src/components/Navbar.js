import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AdminIcon from '@material-ui/icons/AccountBox';
import AccountIconOutlined from '@material-ui/icons/GroupAdd';

import muiStyles from '../material/appbar';
import Senders from './Senders';
import Couriers from './Couriers';
import AccountNew from './AccountNew';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import Administrators from './Administrators';
import Financial from './Financial';


class Navbar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        open: false,
        panel: null,
      }
      this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
      this.handleDrawerClose = this.handleDrawerClose.bind(this);    
  };
  
  handleDrawerOpen() {
    this.setState({
        open: true,
    });
  };

  handleDrawerClose() {
    this.setState({
        open: false,
    });
  };

  render() { 
    const { classes, panel } = this.props;
    const { open } = this.state;
    return ( 
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            { ['Sender', 'Customer', 'Courier', 'Partner'].map((text, index) => (
              <ListItem button key={ text } onClick={ () => this.props.setPanelWatcher(text) }>
                { index === 0 && <AdminIcon /> }
                { index === 1 && <AdminIcon /> }
                { index === 2 && <AdminIcon /> }
                { index === 3 && <AdminIcon /> }
                <ListItemText primary={ text } />
              </ListItem>
            )) }
            <ListItem button onClick={ () => this.props.setPanelWatcher('admin') }>
              <AdminIcon />
              <ListItemText primary="Administrator" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <AccountIconOutlined />
              <ListItemText primary="Create New Admin" onClick={ () => this.props.setPanelWatcher('createnew')} />
            </ListItem>
            <ListItem button>
              <AccountIconOutlined />
              <ListItemText primary="Financial Data" onClick={ () => this.props.setPanelWatcher('financial')} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={ classes.drawerHeader } />
          { panel === 'createnew' && <AccountNew /> }
          { panel === 'admin' && <Administrators /> }
          { panel === 'Sender' && <Senders /> }
          { panel === 'Courier' && <Couriers /> }
          { panel === 'financial' && <Financial /> }
        </main>
      </div>
    );
  }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles, { withTheme: true })(Navbar));