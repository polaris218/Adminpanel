import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import SyncIcon from '@material-ui/icons/Sync';
import DetailIcon from '@material-ui/icons/Details';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

import EnhancedToolbar from './EnhancedToolbar';
import TablePaginationActions from './toolbar/TablePaginationActions';
import ViewInfo from './UserViewInfo';
import {
    CustomTableCell,
    muiStyles,
} from '../material/sender';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

const tblHeaders = [
  // 'ID',
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
class Sender extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rows: this.props.senders,
      page: 0,
      rowsPerPage: 10,
      senders: [],
      };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getSendersDataWatcher();
  };

  handleOpen(id) {
    this.setState({
      open: true,
    });
  };

  handleClose() {
    this.setState({
      open: false,
    });
  };
  handleSubmit(data) {
    this.props.updateUserDataWatcher(data);
  }
  handleChangePage(event, page) {
    this.setState({ page });
  };

  handleChangeRowsPerPage(event) {
    this.setState({
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    });
  };
  render() { 
    const { classes, senders, panel } = this.props;
    const { page, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, senders.length - page * rowsPerPage);

    return ( 
      <Paper className={ classes.root }>
        <EnhancedToolbar title={panel} type={panel.toLowerCase()} />
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
              {
                // row.type === panel.toLowerCase() && (
                senders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow
                  className={ classes.row }
                  key={ row._id }
                  name="id"
                  value={row.cityId}
                >
                  <CustomTableCell align="center">
                    <IconButton
                      onClick={() => {
                          this.setState({ open: true });
                          this.props.getUserDataByIdWatcher(row._id)
                        }}
                    >
                      <DetailIcon />
                    </IconButton>
                  </CustomTableCell>
                  {/* <CustomTableCell align="center">
                    { row._id }
                  </CustomTableCell> */}
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
              )}
              {
                emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <CustomTableCell colSpan={6} />
                  </TableRow>
                )
              }
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={ [10, 20, 50] }
                    colSpan={ 3 }
                    count={ senders.length }
                    rowsPerPage={ rowsPerPage }
                    page={ page }
                    SelectProps={ {
                      native: true,
                    } }
                    onChangePage={ this.handleChangePage }
                    onChangeRowsPerPage={ this.handleChangeRowsPerPage }
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table> 
          <ViewInfo
            classes={{
              paper: classes.paper,
            }}
            open={ this.state.open }
            onClose={ this.handleClose }
            onSubmit={ this.handleSubmit }
            userinfo={ this.props.userDetail }  
          />
        </div>   
      </Paper>
    );
  }
};

Sender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(muiStyles)(Sender));