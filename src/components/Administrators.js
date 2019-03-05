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
import AdminViewInfo from './AdminViewInfo';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import {
  CustomTableCell,
} from '../material/sender';
import muiStyles from '../material/administrator';

const tblHeaders = [
  'fullname',
  'email',
  'mobile',
  'active',
  'changePassword',
  'createdAt',
  'updatedAt'
];

class Administrators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      administrator: [],
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getAdminDataWatcher();
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps.admin, this.props.admin);
  //   return (
  //     nextProps.admin !== this.props.admin ||
  //     nextState.open !== this.state.open ||
  //     nextState.administrator !== this.state.administrator
  //   )
  // };
  // componentDidUpdate(prevProps) {
  //   if (prevProps.admin !== this.props.admin) {
  //     const { admin } = this.props;
  //     this.setState({
  //       administrator: admin,
  //     });
  //   }
  // };

  componentDidMount() {
    const { admin } = this.props;
    this.setState({
      administrator: admin,
    });
  };
  handleClose() {
    this.setState({
      open: false,
    });
  };

  handleSubmit(update) {
    this.props.updateAdminDataUpdateWatcher(update);
  };
  render() { 
    const { classes, admin } = this.props;
    return ( 
      <Paper>
        <EnhancedToolbar title="Administrator" type="Administrator" />
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
              { admin.map(row => (
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
                          this.props.getAdminDataByIdWatcher(row._id)
                        }}
                    >
                      <DetailIcon />
                    </IconButton>
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
                    { row.active && <DoneIcon color="primary" /> }
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    { row.changePassword && <DoneIcon color="primary" /> }
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    { moment(row.createdAt).format('LLLL') }
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    { moment(row.updatedAt).format('LLLL') }
                  </CustomTableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table> 
          <AdminViewInfo
            classes={{
              paper: classes.paper,
            }}
            open={ this.state.open }
            onClose={ this.handleClose }
            onSubmit={ this.handleSubmit }
            admininfo={ this.props.admininfo }  
          />
        </div>   
      </Paper>
     );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(Administrators));