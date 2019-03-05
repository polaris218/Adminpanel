import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MobileCircle from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import CreatedDateIcon from '@material-ui/icons/HowToReg'
import UpdateDateIcon from '@material-ui/icons/Update';
import BankIcon from '@material-ui/icons/Payment';
import ExpiryIcon from '@material-ui/icons/AlarmOff';
import CompanyIcon from '@material-ui/icons/AssignmentIndRounded';
import Grid from '@material-ui/core/Grid';

import muiStyles from '../../material/filter';
import { mapStateToProps, mapDispatchToProps } from '../../actions/action';

const options = [
  { label: 'ID Verified', name: 'idverified' },
  { label: 'Verified', name: 'verified' },
  { label: 'Blocked', name: 'blocked' },
  { label: 'DocVerified', name: 'docverified' },
  { label: 'AdminVerified', name:'adminverified' },
];

const ratings = [
  { label: 'less than 3', name: 'less3' },
  { label: 'more than 3', name: 'more3' },
  { label: 'more than 4', name: 'more4' },
  { label: 'top', name: 'top' },
];

const others = [
  { label: '' },
  { label: '' },
  { label: '' },
  { label: '' },
]

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      email: null,
      name: null,
      mobile: null,
      bank: null,
      company: null,
      create: null,
      update: null,
      expiry: null, 
      anyoption: false,
      idverified: false,
      verified: false,
      blocked: false,
      docverified: false,
      less3: false,
      more3: false,
      more4: false,
      top: false,
      service: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOK = this.handleOK.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.onClose();
    this.props.onSubmit(this.state);
  };
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    });
  };
  handleCancel() {
    this.props.onClose();
  };
  handleOK() {
    this.props.onClose();
  };
  render() { 
    const { value, ...other } = this.props;
    return ( 
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">
          Filter List
          <Divider />
        </DialogTitle>
        <div className="filter-content">
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={16}>
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Verification</FormLabel>
                        <FormGroup>
                          {
                            options.map(option => (
                              <FormControlLabel
                                key={ option.label }
                                control={
                                  <Checkbox
                                    name={ option.name}
                                    onChange={ this.handleChange }
                                  />
                                }
                                label={option.label}
                              >
                              </FormControlLabel>
                            ))
                          }
                        </FormGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Rating</FormLabel>
                        <FormGroup>
                          {
                            ratings.map(rating => (
                              <FormControlLabel
                                key={rating.label}
                                control={
                                  <Checkbox
                                    name={rating.name}
                                    onChange={ this.handleChange }
                                  />
                                }
                                label={rating.label}
                              >
                              </FormControlLabel>
                            ))
                          }
                        </FormGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormLabel component="legend">Add Search Text</FormLabel>
                      <FormControl component="fieldset">
                        <div className="filter-email">
                          <TextField
                            id="email"
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              )
                            }}
                          />
                        </div>
                      <div className="filter-mobile">
                        <TextField
                          id="name"
                          label="Fullname"
                          name="name"
                          onChange={this.handleChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>
                      <div className="filter-mobile">
                        <TextField
                          id="mobile"
                          label="Mobile"
                          name="mobile"  
                          onChange={this.handleChange}
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                <MobileCircle />
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>
                      <div className="filter-mobile">
                        <TextField
                          id="bank"
                          label="Bank"
                          name="bank"
                          onChange={this.handleChange}
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                <BankIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>
                      <div className="filter-mobile">
                        <TextField
                          id="bank"
                          label="Company"
                          name="company"  
                          onChange={this.handleChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CompanyIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>
                      <div className="filter-date">
                        <TextField
                          id="datetime-local"
                          label="created date"
                          type="date"
                          name="create"
                          onChange={this.handleChange}
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                <CreatedDateIcon />
                              </InputAdornment>
                            )
                          } }
                          InputLabelProps={ {
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="filter-date">
                        <TextField
                          id="datetime-local"
                          label="updated date"
                          type="date"
                          name="update"  
                          onChange={this.handleChange}
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                <UpdateDateIcon />
                              </InputAdornment>
                            )
                          } }
                          InputLabelProps={ {
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="filter-date">
                        <TextField
                          id="datetime-local"
                          label="Expiry date"
                          type="date"
                          name="expiry"  
                          onChange={this.handleChange}
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                <ExpiryIcon />
                              </InputAdornment>
                            )
                          } }
                          InputLabelProps={ {
                            shrink: true,
                          }}
                        />
                      </div>
                    </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <FormControl component="fieldset">
                <FormLabel component="legend">Service</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="service"
                        onChange={ this.handleChange }    
                      /> 
                    }
                    label="Service"
                  >
                  </FormControlLabel>
                </FormGroup>
              </FormControl>
              <Divider />
              <Divider />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={ this.handleCancel } color='primary'
              >
                Cancel
              </Button>
              <Button
                onClick={ this.handleSubmit }
                color='primary'
              >
                OK
              </Button>
            </DialogActions>
          </form>
        </div>        
      </Dialog>
    );
  }
}
 
Filter.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default (withStyles(muiStyles)(Filter));