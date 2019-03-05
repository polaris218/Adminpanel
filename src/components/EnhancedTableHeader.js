import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';

import tableheader from '../material/tableheader';

class EnhancedTableHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {
        rows: [
          { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
          { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
          { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
          { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
          { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
        ]
      }
  }
  render() { 
    return ( 
      <TableHead>
        <TableRow>
           {
             this.state.rows.map(row => {
              <TableCell
                key={ row.id }
                aligh={ row.numeric ? 'right' : 'left' }
                padding={ row.disablePadding ? 'none' : 'default' }  
                sortDirection={false}
              >
                <Tooltip
                  title=""
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                 {row.label}      
                </Tooltip>
              </TableCell>    
             })        
           }     
        </TableRow>
      </TableHead>
    );
  }
}
 
export default withStyles(tableheader)(EnhancedTableHeader);