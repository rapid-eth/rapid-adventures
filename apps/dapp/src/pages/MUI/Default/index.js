import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from '@reach/router';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/darkBackgroundLogo.png';
import StepperDemo from './StepperDemo';

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
      <div style={{ position: 'absolute', left: 100, top: 100, textAlign: 'center', color: 'white' }}>
        <Typography variant="h5">
          RAPID ADVENTURES
        </Typography>
        <Typography variant="h6">
          activate your life
        </Typography>
      </div>
      <Grid container component="main">
        <Grid item xs={false} sm={2} md={2} />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          {pageIndex === 0 && <Step1 setPageIndex={setPageIndex} />}
          {pageIndex === 1 && <Step2 setPageIndex={setPageIndex} />}
        </Grid>
        <Grid item xs={false} sm={2} md={2} />
      </Grid>
      <div style={{ position: 'absolute', bottom: 50, right: 50, display: 'flex', justifyContent: 'space-between', width: 500, color: 'white', textAlign: 'center' }}>
        <div>
          <Typography variant="h5">
            Main
          </Typography>
          <Typography variant="h6">
            network
          </Typography>
        </div>
        <div>
          <Typography variant="h5">
            Meta
          </Typography>
          <Typography variant="h6">
            free system
          </Typography>
        </div>
        <div>
          <Typography variant="h5">
            Credentials
          </Typography>
          <Typography variant="h6">
            authentication
          </Typography>
        </div>

      </div>
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
          <Grid item md={4}>
            <div style={{ backgroundColor: '#F2F2F2', height: 400, marginRight: 10 }}>&nbsp;</div>
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
          <div style={{}}>
            <Button variant="contained" color="primary" onClick={() => {
              setPageIndex(1)
            }}>
              Learn More
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  )
}


const Step2 = ({ setPageIndex }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <StepperDemo />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary" onClick={() => {
          setPageIndex(0)
        }}>
          Back
      </Button>
      </CardActions>
    </Card>
  )
}