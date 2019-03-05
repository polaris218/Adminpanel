import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import Filter from './toolbar/Filter';
import muiStyles from '../material/toolbar';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class EnhancedToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen(value) {
    this.setState({
      value,
      open: true,
    });
  };
  
  handleSubmit(params) {
    this.setState({
      open: false,
    });
    this.props.getSenderDataWatcher(params);
  };

  handleClose() {
    this.setState({
      open: false,
    })
  };
  render() { 
    const { numSelected, classes, type, title } = this.props;
    return ( 
      <Toolbar
        className={ classNames(classes.root, {
          [classes.highlight]: numSelected > 0,      
        }) }
      >
        <div className={classes.title}>
          {/* { numSeleted > 0 ? (
            <Typography color="inherit" variant="subtitle1">
                {numSeleted} seleted
            </Typography>        
          ) : (
            <Typography variant="h6" >
              Sender
            </Typography>
          )} */}
          <Typography variant="h6" >
            {title}
          </Typography>     
        </div>
        {/* <div className={ classes.spacer } /> */ }
        { this.props.type !== "Administrator" && (
          <div className={ classes.actions }>
            <Tooltip title="Filter list">
              <IconButton
                onClick={this.handleOpen}
              >
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Filter
              classes={{
                paper: classes.paper,
              }}
              open={ this.state.open }
              onClose={ this.handleClose }
              onSubmit= { this.handleSubmit }
              type={type}
            />
          </div> 
        )}  
      </Toolbar>
    );
  }
}

EnhancedToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(EnhancedToolbar));