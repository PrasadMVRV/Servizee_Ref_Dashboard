import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import { withStyles } from 'tss-react/mui';
import useStyles from 'enl-components/Tables/tableStyle-jss';
import messageStyles from 'enl-styles/Messages.scss';
import progressStyles from 'enl-styles/Progress.scss';

const CustomTableCell = withStyles(TableCell, theme => ({
  head: {
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}));

let id = 0;
function createData(name, progress, status) {
  id += 1;
  return {
    id,
    name,
    progress,
    status,
  };
}

const data = [
  createData('Frozen yoghurt', 24, 'Error'),
  createData('Ice cream sandwich', 37, 'Warning'),
  createData('Eclair', 24, 'Info'),
  createData('Cupcake', 67, 'Default'),
  createData('Gingerbread', 89, 'Success'),
];

function StatusLabel() {
  const { classes, cx } = useStyles();
  const getStatus = status => {
    switch (status) {
      case 'Error': return messageStyles.bgError;
      case 'Warning': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Success': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  const getProgress = status => {
    switch (status) {
      case 'Error': return progressStyles.bgError;
      case 'Warning': return progressStyles.bgWarning;
      case 'Info': return progressStyles.bgInfo;
      case 'Success': return progressStyles.bgSuccess;
      default: return progressStyles.bgDefault;
    }
  };
  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">Nutrition</Typography>
        </div>
      </Toolbar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell padding="normal">Dessert (100g serving)</CustomTableCell>
            <CustomTableCell>Progress</CustomTableCell>
            <CustomTableCell>Status</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => ([
            <TableRow key={n.id} className={getStatus(n.status)}>
              <TableCell padding="normal">{n.name}</TableCell>
              <TableCell align="right">
                <LinearProgress variant="determinate" className={getProgress(n.status)} value={n.progress} />
              </TableCell>
              <TableCell>
                <Chip label={n.status} className={cx(classes.tableChip, getStatus(n.status))} />
              </TableCell>
            </TableRow>
          ]))}
        </TableBody>
      </Table>
    </div>
  );
}

export default StatusLabel;
