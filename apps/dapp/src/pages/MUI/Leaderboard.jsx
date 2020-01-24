import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/CircularProgress';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Leaderboard = () => {
  const classes = useStyles();
  const [loading, toggleLoading] = useState(false);
  const [leaders, setLeaders] = useState();
  useEffect(() => {
    toggleLoading(true);
    const fetchLeaders = async () => {
      try {
        const responseAsJson = await fetch('https://api.rapid-mesh.com/v1/leaderboard/emblems?n=10').then(response => response.json())
        setLeaders(responseAsJson);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchLeaders();
  }, []);

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
        {loading
          ? <LinearProgress />
          : <TableBody>
            {leaders && leaders.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.balance}</TableCell>
                <TableCell>{row.emblemCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        }

      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment >
  );
}

export default Leaderboard