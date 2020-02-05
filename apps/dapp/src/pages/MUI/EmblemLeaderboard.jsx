import React from 'react';
import ProfileHover from 'profile-hover';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Title from './Title';
import useAPI from './fetchData';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const EmblemLeaderboard = () => {
  const classes = useStyles();
  const { data: emblemsData, loading, error } = useAPI('https://api.rapid-mesh.com/v1/leaderboard/emblems?n=6')

  return (
    <React.Fragment>
      <Title>Top Holders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Emblem Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && <tr><td colSpan="3"><LinearProgress /></td></tr>}
          {error && <tr><td colSpan="3">Sorry, something went wrong</td></tr>}
          {emblemsData && emblemsData.map(row => (
            <TableRow key={row.address}>
              <TableCell><ProfileHover address={row.address} /></TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell>{row.emblemCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}

export default EmblemLeaderboard