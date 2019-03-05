import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const actionStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends Component {
  constructor(props) {
    super(props);
    this.handleFirstPageButtonClick = this.handleFirstPageButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleNextPageButtonClick = this.handleNextPageButtonClick.bind(this);
    this.handleLastPageButtonClick = this.handleLastPageButtonClick.bind(this);
  };

  handleFirstPageButtonClick(event) {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick(event) {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextPageButtonClick(event) {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick(event) {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };
  render() { 
    const { classes, count, page,rowsPerPage, theme } = this.props;
    return ( 
      <div className={classes.root}>
        <IconButton
          onClick={ this.handleBackButtonClick }
          disabled={ page === 0 }
        >
          {theme.direction === 'rtl' ? <LastPageIcon />: <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={ this.handleBackButtonClick}
          disabled={page === 0}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight />: <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={ this.handleNextPageButtonClick }
          disabled={page >= Math.ceil(count/rowsPerPage) -1 }
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft />: <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count/rowsPerPage) -1}
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
     );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
}
export default withStyles(actionStyles, { withTheme: true })(TablePaginationActions);