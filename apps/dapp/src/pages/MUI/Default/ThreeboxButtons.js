import React, { useState } from 'react';
import Box from '3box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ThreeboxButtons() {
  const classes = useStyles();
  const [addresses, setAddresses] = useState();
  const [box, setBox] = useState();
  const [profile, setProfile] = useState();
  const [space, setSpace] = useState();

  const checkWallet = async () => {
    const fetchedAddresses = await window.ethereum.enable();
    setAddresses(fetchedAddresses)
  }

  const checkBox = async () => {
    const fetchedBox = await Box.openBox(addresses[0], window.ethereum, {});
    setBox(fetchedBox)
  }

  const checkProfile = async () => {
    const fetchedProfile = await Box.getProfile(myAddress);
    setProfile(fetchedProfile)
  }

  const checkSpace = async () => {
    const fetchedSpace = await box.openSpace();
    setSpace(fetchedSpace)
  }

  const handleLogin = async () => {
    const addresses = await window.ethereum.enable();
    const myAddress = addresses[0];

    const box = await Box.openBox(myAddress, window.ethereum, {});
    const space = await box.openSpace(spaceName);

    setThreebox({ box, myProfile, myAddress, space });
    box.onSyncDone(() => console.log('syncdone'));
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Button onClick={checkWallet}>
            Check Wallet
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Button onClick={checkBox}>
            Check Box
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Button onClick={checkProfile}>
            Check Profile
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Button onClick={checkSpace}>
            Check Space
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}