import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
        </Grid>
      </Container>
    </div>
  );
}

export default User