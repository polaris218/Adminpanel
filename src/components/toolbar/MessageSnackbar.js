import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import muiStyles from '../../material/messagesnackbar';
class MessageSnackbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return ( nextProps.open !== this.props.open)
  };

  componentDidUpdate(prevProps) {
    if (this.props.open === true) this.setState({ open: true });
  };
  render() { 
    const { classes, onClose, } = this.props;
    const { open } = this.state;
    return ( 
      <SnackbarContent
        action={ [
          <IconButton
            key="close"
            color="inherit"
            className={ classes.close }
            onClose={this.props.onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ] }
        message={
          <span>Successfully Created</span>
        }
      />
    );
  }
}
 
export default withStyles(muiStyles)(MessageSnackbar);