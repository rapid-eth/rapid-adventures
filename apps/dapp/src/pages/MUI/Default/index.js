import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/darkBackgroundLogo.png';
import virtualReality from '../../../assets/virtual-reality.svg';
import OnboardingStepper from './OnboardingStepper';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    background: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundColor:
    //   theme.palette.type === 'dark' ? theme.palette.grey[900] : null,
    backgroundPosition: 'center',
  },
  content: {
    padding: theme.spacing(5, 4, 1, 5),
  },
  actions: {
    borderTop: '1px solid #DDDDDD',
    padding: theme.spacing(3, 2),
  },
  rightContainer: {
    padding: '0rem 2rem'
  }
}));

const Default = () => {
  const classes = useStyles();
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className={clsx(classes.root, classes.image)}>
      <CssBaseline />
      <Grid container component="main">
        <Grid item xs={false} sm={2} md={2} />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          {pageIndex === 0 && <Step1 setPageIndex={setPageIndex} />}
          {pageIndex === 1 && <Step2 setPageIndex={setPageIndex} />}
        </Grid>
        <Grid item xs={false} sm={2} md={2} />
      </Grid>
    </div >
  );
}

export default Default


const Step1 = ({ setPageIndex }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography variant="h3">
          Come join us!
      </Typography>
        <br /><br />
        <Grid container style={{ marginBottom: 20 }}>
          <Grid item md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={virtualReality} style={{ width: '100%', marginRight: 10 }} alt="virtual reality figure head" />
          </Grid>
          <Grid item md={8} className={classes.rightContainer}>
            <Typography variant="h5">
              Activate your life
                  </Typography>
            <br /><br />
            <Typography variant="h5">
              Rapid Adventures is... (High level overview explanation)
                  </Typography>
            <br /><br />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate pellentesque adipiscing pellentesque ut euismod mattis malesuada turpis eget. Donec tellus in eu scelerisque. Nec lacus sed aenean adipiscing rhoncus. Faucibus sit augue aliquet arcu.
                  </Typography>
            <br /><br />
            <Typography variant="body2" style={{ textAlign: 'center' }}>
              So let’s get you set up to join the Rapid Adventures!
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.actions}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex' }}>
            <Button component={Link} to={'/signup'} variant="contained" color="primary">Sign in</Button>
            &nbsp;&nbsp;&nbsp;
            <Button component={Link} to={'/signin'} variant="contained">
              Sign up
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={() => {
              setPageIndex(1)
            }}>
              Next
            </Button>
          </div>
        </div>
      </CardActions>
    </Card >
  )
}

const Step2 = ({ setPageIndex }) => {
  return (
    <OnboardingStepper setPageIndex={setPageIndex} />
  )
}