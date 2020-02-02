import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Paper, Button } from '@material-ui/core';
import IOSSwitch from './IOSSwitch'
import ConfirmResetIntroModal from './ConfirmResetIntroSettingModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  const [showResetIntroModal, setShowResetIntroModal] = useState(false);

  const handleResetIntroModalClose = () => {
    setShowResetIntroModal(false)
  }

  return (
    <Paper>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <FormControlLabel
            control={
              <IOSSwitch onChange={() => { }} value="checkedB" />
            }
            label="Light/dark theme driven by your OS settings?"
          />
        </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <FormControlLabel
            control={
              <IOSSwitch onChange={() => { }} value="checkedB" />
            }
            label="Reticulate splines?"
          />
        </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <FormControlLabel
            control={
              <IOSSwitch onChange={() => { }} value="checkedB" />
            }
            label="Remember me?"
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Button variant="contained" onClick={() => { setShowResetIntroModal(true) }}>Reset intro UI</Button>
          <ConfirmResetIntroModal open={showResetIntroModal} handleClose={handleResetIntroModalClose} />
        </Grid>
      </Grid>
    </Paper>
  );
}
