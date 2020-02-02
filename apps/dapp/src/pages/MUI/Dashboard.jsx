import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { withEthers } from 'ethers-react-system'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TokenBalance from './TokenBalance';
import EmblemLeaderboard from './EmblemLeaderboard';
import BalancesLeaderboard from './BalancesLeaderboard';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const ethers = withEthers();
  const classes = useStyles();
  const history = useHistory();
  const [address, setAddress] = React.useState('');
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  // useEffect(() => {
  //   if (!localStorage.getItem('onboarding')) {
  //     history.push('/joinus')
  //   }
  // }, [])


  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <div>
              <br />
              <Button variant='contained' onClick={() => {
                ethers.enableRequest();
              }}>
                call ethers.enableRequest()
            </Button>
              <Divider />
              ethers.isEnableSuccess: {ethers.isEnableSuccess}
              <br />
              Address: {address || ethers.address}
              <br />
              Balance: {address || (ethers.balance && ethers.balance.trimmed)}
            </div>
            <div>
              <Divider />
              current landing pages... TODO: depending on ethers.enableRequest() these may live on one route.
                  <br />
              <Link to="/signup" variant="body2">
                Signup
                  </Link> <br />
              <Link to="/signin" variant="body2">
                Signin
                  </Link> <br />
              <Link to="/learnmore" variant="body2">
                Learn More
                  </Link>
            </div>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TokenBalance />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BalancesLeaderboard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <EmblemLeaderboard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}