import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import GroupAddIconOutlined from '@material-ui/icons/GroupAddOutlined';
import PasswordIcon from '@material-ui/icons/VpnKey';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';

import muiStyles from '../material/accountnew';
import MessageSnackbar from './toolbar/MessageSnackbar';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class AccountNew extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      changePassword: true,
      showPassword: false,
      mobile: null,
      fullname: null,
      email: null,
      type: "normal",
      open: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.admin !== this.props.admin ||
      nextState.showPassword !== this.state.showPassword
    );
  };
  componentDidUpdate(prevProps) {
    if (prevProps.admin !== this.props.admin) { console.log('const') };
  };

  handleSubmit(event) {
    event.preventDefault();
    const {
      fullname,
      email,
      mobile,
      password,
      active,
      changePassword,
      type,
    } = this.state;

    this.props.createNewAdminWatcher({
      fullname,
      email,
      mobile,
      password,
      active,
      changePassword,
      type,
    });
    event.target.reset();
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    });
  };

  handleClickShowPassword() {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  handleClose() {
    this.setState({ open: false });
  };
  render() { 
    const { classes } = this.props;
    const { open } = this.state;
    return ( 
      <div>
        <Paper className={classes.paper} square>
        <form onSubmit={ this.handleSubmit }>
          <CssBaseline />
          <Avatar className={classes.avatar}>
            <GroupAddIconOutlined />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            color="default"
            gutterBottom
          >
            Create Account
          </Typography>
          <Divider />
          <FormGroup className={classes.formgroup}>
            <TextField
              className={classes.textfield}
              id="name"
              label="Fullname"
              name="fullname"
              onChange={ this.handleChange }
              margin="normal"
              InputProps={ {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.textfield}
              id="email"
              label="Email"
              name="email"
              onChange={ this.handleChange }
              margin="normal"
              InputProps={ {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.textfield}
              id="mobile"
              label="Mobile"
              name="mobile"
              onChange={ this.handleChange }
              margin="normal"
              InputProps={ {
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.textfield}
              id="password"
              type={this.state.showPassword ? "text": "password"}
              label="Password"
              name="password"
              onChange={ this.handleChange }
              margin="normal"
              InputProps={ {
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <VisibilityIcon />: <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </FormGroup>
          <FormGroup row className={classes.formgroup}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.active}
                  onChange={this.handleChange}
                  name="active"
                />
              }
              label={this.state.active ? "Active": "Inactive"}
            />
            </FormGroup>
            <FormGroup row className={classes.formgroup}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.changePassword}
                  onChange={this.handleChange}
                  name="changePassword"
                />
              }
              label={this.state.changePassword ? "Change Password": "Not Change Password"}
            />
          </FormGroup>
          <FormGroup row className={classes.formgroup}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
              Submit
            </Button>
          </FormGroup>
        </form>
        </Paper>
        {/* <Snackbar
          anchorOrigin={ {
            vertical: 'top',
            horizontal: 'center',
          } }
          autoHideDuration={6000}
          open={ open }
          onClose= { this.handleClose }
        >
          <MessageSnackbar
            onClose={this.handleClose}
          />
        </Snackbar> */}
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(AccountNew));