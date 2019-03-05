import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Divier from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import withStyles from '@material-ui/core/styles/withStyles';

import muiStyles from '../material/adminviewinfo';

class AdminViewInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: '',
      active: true,
      changePassword: true,
      id: null,
      email: null,
      mobile: null,
      fullname: null,
      createdAt: null,
      updatedAt: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.admininfo !== nextProps.admininfo ||
      this.state.open !== nextProps.open ||
      this.state.type !== nextState.type ||
      this.state.active !== nextState.active||
      this.state.changePassword !== nextState.changePassword ||
      this.state.email !== nextState.email ||
      this.state.mobile !== nextState.mobile ||
      this.state.fullname !== nextState.fullname
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.admininfo !== this.props.admininfo) {
      const { admininfo, open } = this.props;
      this.setState({
        open,
        type: admininfo.type,
        active: admininfo.active,
        changePassword: admininfo.changePassword,
        id: admininfo._id,
        email: admininfo.email,
        mobile: admininfo.mobile,
        fullname: admininfo.fullname,
        createdAt: admininfo.createdAt,
        updatedAt: admininfo.updatedAt,
      });
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    const {
      open,
      ...other
    } = this.state
    this.props.onSubmit({ ...other });
    this.props.onClose();
  };

  handleClose() {
    this.props.onClose();
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    });
  }
  render() { 
    const { classes, ...other } = this.props;
    const { open } = this.state;
    return ( 
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        open={ open }
        {...other}
      >
        <DialogTitle>Administrators</DialogTitle>
        <Divier />
        <form>
          <DialogContent>
            <FormGroup className={classes.formgroup}>
              <TextField
                id="name"
                label="Fullname"
                name="fullname"
                value={ this.state.fullname? this.state.fullname: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
              <TextField
                id="email"
                label="Email"
                name="email"
                value={ this.state.email? this.state.email: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
              <TextField
                id="mobile"
                label="Mobile"
                name="mobile"
                value={ this.state.mobile? this.state.mobile: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
            </FormGroup>
            <FormGroup className={classes.formgroup}>
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.active }
                    onChange={ this.handleChange }
                    name="active"
                  />
                }
                label={this.state.active ? "Active": "Inactive"}
                color="primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.changePassword }
                    onChange={ this.handleChange }
                    name="changePassword"
                  />
                }
                label={this.state.changePassword ? "Change Password": "Not Change Password"}
                color="primary"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="primary"
            >
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };
};
 
export default withStyles(muiStyles)(AdminViewInfo);