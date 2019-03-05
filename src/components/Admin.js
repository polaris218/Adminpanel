import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import SyncIcon from '@material-ui/icons/Sync';
import DetailIcon from '@material-ui/icons/Details';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

import EnhancedToolbar from './EnhancedToolbar';
import ViewInfo from './UserViewInfo';
import {
    CustomTableCell,
    muiStyles,
} from '../material/sender';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

const tblHeaders = [
  'ID',
  'fullname',
  'email',
  'mobile',
  'Location',
  'isAdminVerified',
  'verfied',
  'isBlocked',
  'isDocVerified',
  'isEmailVerified',
  'cityId',
  'inService',
  'documents',
  'bankInfo',
  'expirtyStart',
  'rating',
  'createdAt',
  'updatedAt'
];
class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
        open: false,
        rows: this.props.users,
      };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  };

  componentWillMount() {
    this.props.getUsersDataWatcher();
  };

  
  handleOpen() {
    this.setState({
      open: true,
    })
  };

  handleClose() {
    this.setState({
      open: false,
    });
  };
  render() { 
    const { classes, users } = this.props;
    return ( 
      <Paper className={classes.root}>
        <EnhancedToolbar title="Administrator" />
          <div className={ classes.tableWrapper }>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell align="center">#</CustomTableCell>
                {
                  tblHeaders.map(item => (
                    <CustomTableCell key={ item } align="center">{ item }</CustomTableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
            { users.map(row => (
              row.type === 'admin' && (
              <TableRow
                className={ classes.row }
                key={ row._id }
                name="id"
                value={row.cityId}
              >
                <CustomTableCell align="center">
                  <IconButton
                    onClick={this.handleOpen}
                  >
                    <DetailIcon />
                  </IconButton>
                </CustomTableCell>
                <CustomTableCell align="center">
                   { row._id }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.fullname }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.email }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.mobile }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { `${row.location.coordinates[0]}, ${row.location.coordinates[1]}` }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.isAdminVerified && <DoneIcon color="primary" /> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.verified && <DoneIcon color="primary" /> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.isBlocked && <BlockIcon color="secondary" /> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.isDocVerified && <DoneIcon color="primary"/> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.isEmailVerified && <DoneIcon color="primary"/> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.cityId }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.inService && <SyncIcon /> }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.documents }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.bankInfo }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.expiryStart }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { row.rating }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { moment(row.createdAt).format('LLLL') }
                </CustomTableCell>
                <CustomTableCell align="center">
                  { moment(row.updatedAt).format('LLLL') }
                </CustomTableCell>
              </TableRow>
              )  
              
            ))}
            </TableBody>
          </Table> 
          <ViewInfo
            classes={{
              paper: classes.paper,
            }}
            open={ this.state.open }
            onClose={ this.handleClose }
          />
        </div>   
      </Paper>
    );
  }
};

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(muiStyles)(Admin));