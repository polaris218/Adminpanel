import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import moment from 'moment';

import muiStyles from '../material/financial';

class UserViewInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: 'paper',
      long: null,
      lati: null,
      type: '',
      verified: false,
      isBlocked: false,
      isDocVerified: false,
      isEmailVerified: false,
      cityId: [],
      inService: false,
      id: null,
      documents: [],
      bankinfo: [],
      expiryStart: '',
      rating: '',
      fullname: '',
      email: '',
      mobile: '',
      createdAt: '',
      updatedAt: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOK = this.handleOK.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.userinfo !== nextProps.userinfo ||
      this.state.open !== nextProps.open ||
      this.state.long !== nextState.long ||
      this.state.lati !== nextState.lati ||
      this.state.verified !== nextState.verified ||
      this.state.isBlocked !== nextState.isBlocked ||
      this.state.isDocVerified !== nextState.isDocVerified ||
      this.state.isEmailVerified !== nextState.isEmailVerified ||
      this.state.inService !== nextState.inService ||
      this.state.fullname !== nextState.fullname ||
      this.state.email !== nextState.email ||
      this.state.mobile !== nextState.mobile
    );  
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userinfo !== this.props.userinfo) {
      const { userinfo, open } = this.props;
      this.setState({
        open,
        long: userinfo.location.coordinates[0],
        lati: userinfo.location.coordinates[1],
        type: userinfo.type,
        verified: userinfo.verified,
        isBlocked: userinfo.isBlocked,
        isDocVerified: userinfo.isDocVerified,
        isEmailVerified: userinfo.isEmailVerified,
        cityId: userinfo.cityId,
        id: userinfo._id,
        inService: userinfo.inService,
        documents: userinfo.documents,
        bankinfo: userinfo.bankinfo,
        expiryStart: userinfo.expiryStart,
        rating: userinfo.rating,
        fullname: userinfo.fullname,
        email: userinfo.email,
        mobile: userinfo.mobile,
        createdAt: userinfo.createdAt,
        updatedAt: userinfo.updatedAt,
      });
    }
  };

  handleCancel() {
    this.props.onClose();
  };

  handleOK() {
    this.props.onClose();
  };
  handleOpen() {
    this.setState({
      scroll
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const {
      open,
      scroll,
      createdAt,
      updatedAt,
      long,
      lati,
      ...others
    } = this.state;
    const location = {
      type: "Point",
      coordinates: [
        long,
        lati,
      ]
    }
    const senddata = { location, ...others };
    this.props.onSubmit(senddata);
    this.props.onClose();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    });
  };

  render() { 
    const { classes, ...other } = this.props;
    const { open } = this.state;
    return ( 
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xl"
        scroll={ this.state.scroll }
        open={ open }
        { ...other }
      >
        <DialogTitle>Detailed Information</DialogTitle>
        <form onSubmit={this.handleSubmit}>
          <DialogContent>
            <Divider />
            <FormGroup row>
              <TextField
                className={classes.textfield}
                id="name"
                label="Fullname"
                name="fullname"
                value={ this.state.fullname? this.state.fullname: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
              <TextField
                className={classes.textfield}
                id="email"
                label="Email"
                name="email"
                value={ this.state.email? this.state.email: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
              <TextField
                className={classes.textfield}
                id="mobile"
                label="Mobile"
                name="mobile"
                value={ this.state.mobile? this.state.mobile: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                className={classes.textfield}
                id="rating"
                label="Rating"
                name="rating"
                value={ this.state.rating? this.state.rating: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
            </FormGroup>
            <FormGroup
              className={classes.switchform}
              row
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.verified }
                    onChange={ this.handleChange }
                    name="verified"
                  />
                }
                label={this.state.verified ? "Verified": "Not Verified"}
                color="primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.isDocVerified }
                    onChange={ this.handleChange }
                    name="isDocVerified"
                  />
                }
                label={this.state.isDocVerified ? "Doc Verified": "Doc Not Verified"}
                color="primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.isEmailVerified }
                    onChange={ this.handleChange }
                    name="isEmailVerified"
                  />
                }
                label={this.state.isEmailVerified ? "Email Verified": "Email Not verified"}
                color="primary"
              />
              
            </FormGroup>
            <FormGroup
              className={classes.switchform}
              row
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.isBlocked }
                    onChange={ this.handleChange }
                    name="isBlocked"
                  />
                }
                label={this.state.isBlocked ? "Blocked": "Unblocked"}
                color="primary"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.inService }
                    onChange={ this.handleChange }
                    name="inService"
                  />
                }
                label={this.state.inService ? "In Service": "Not In Service"}
                color="primary"
              />
            </FormGroup>
            <FormGroup
              className={classes.switchform}
              row
            >
              <TextField
                id="long"
                label="longitude"
                name="long"
                value={ this.state.long? this.state.long: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
              <TextField
                id="lati"
                label="latitude"
                name="lati"
                value={ this.state.lati? this.state.lati: '' }
                onChange={ this.handleChange }
                margin="normal"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.handleCancel } color="primary">
              Cancel
            </Button>
            <Button onClick={ this.handleSubmit } color="primary">
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
     );
  }
}

export default withStyles(muiStyles)(UserViewInfo);