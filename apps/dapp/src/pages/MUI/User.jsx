import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexDirection: 'row',
    height: '100%',
    // paddingTop: theme.spacing(2),
    backgroundColor: '#EFEFEF',
  },
  header: {
    backgroundColor: '#4364AB',
    height: 300,
    padding: theme.spacing(2),
    color: 'white',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  control: {
    padding: theme.spacing(2),
  },
  profilePic: {
    height: 371,
    width: 371,
    backgroundColor: '#EEEEEE',
    position: 'relative',
    top: -190,
    left: 25,
    borderRadius: 4,
    boxShadow: '5px 5px 5px gray',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
}));

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <header className={classes.header}>
          <Grid container spacing={4}>
            <Grid item xs={5} />
            <Grid item xs={7}>
              <Typography variant="h4">
                Robbie Kruszinski
              </Typography>
              <Typography variant="h6">
                Consensys - RAPID
              </Typography>
            </Grid>
          </Grid>
        </header>
        <section>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <div className={classes.profilePic}>
                <Typography variant="h6">
                  Robbie Kruszinski
                </Typography>
                <Typography variant="body2">
                  Consensys - RAPID
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
      <Container>
        <Grid container spacing={4}>
        </Grid>
      </Container>
    </div>
  );
}

export default User