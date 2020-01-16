import React from 'react';
import clsx from 'clsx';
import { Link } from '@reach/router';
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
import logo from '../../../assets/consensys-logo-transparent.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    background: `url(${logo}), linear-gradient(121.1deg, rgba(72, 91, 237, 0.82) 15.71%, #8D34D7 28.19%, rgba(204, 139, 252, 0.62) 54.17%, rgba(238, 168, 172, 0.427083) 65.83%, rgba(188, 46, 25, 0.13) 83.5%), #D1631A`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundPosition: 'center',
  },
  card: {
    margin: theme.spacing(8, 4),
    minWidth: 600,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, classes.image)}>
      <div style={{ position: 'absolute', left: 100, top: 100, textAlign: 'center', color: 'white' }}>
        <Typography variant="h5">
          MESH HUB
        </Typography>
        <Typography variant="h6">
          activate your life
        </Typography>
      </div>
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={2} md={4} />
        <Grid item xs={12} sm={8} md={4} component={Paper} className={classes.card} elevation={6} square>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Come join us!
              </Typography>
              <br /><br />
              <Grid container style={{ marginBottom: 20 }}>
                <Grid item md={4}>
                  <div style={{ backgroundColor: '#F2F2F2', height: 400, marginRight: 10 }}>&nbsp;</div>
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h5">
                    Some tools you'll need
                  </Typography>
                  <br /><br />
                  <Typography variant="h6">
                    <ul style={{ marginLeft: 20 }}>
                      <li>Metamask</li>
                      <li>3box</li>
                      <li>Tools...</li>
                    </ul>
                  </Typography>
                  <br /><br />
                  <Typography variant="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate pellentesque adipiscing pellentesque ut euismod mattis malesuada turpis eget. Donec tellus in eu scelerisque. Nec lacus sed aenean adipiscing rhoncus. Faucibus sit augue aliquet arcu.
                  </Typography>
                  <br /><br />
                  <Typography variant="body2" style={{ textAlign: 'center' }}>
                    So let’s get you set up to join the MESH HUB!
                </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex' }}>

                </div>
                <div style={{}}>
                  <Button component={Link} to={'/signin'} variant="contained" color="primary">
                    Sign up
                  </Button>
                </div>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={false} sm={2} md={4} />
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