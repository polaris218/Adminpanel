import TableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles/withStyles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

let id = 0;
const createData = (
  name, calories, fat, carbs, protein
) => {
  id++;
  return { id, name, calories, fat, carbs, protein };   
}

export const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: lighten(theme.palette.common.black, 0.5),
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const muiStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
    },
  },
  tableWrapper: {
    overflowX: 'auto',    
  }
});

export const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];