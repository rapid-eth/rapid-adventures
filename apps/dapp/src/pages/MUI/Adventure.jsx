import React from 'react';
import { Link } from '@reach/router'
import { withEthers } from 'ethers-react-system'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AdventureExpansionPanels from './AdventureExpansionPanels';

import adventures from 'data/adventureList.json';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://material-ui.com/">
        RAPID Team
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography >
  );
}

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
}));

export default function Dashboard() {
  // const ethers = withEthers();
  const classes = useStyles();
  // const [address, setAddress] = React.useState('');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper>
          <AdventureExpansionPanels />
        </Paper>
      </Grid>
    </Grid>
  );
}