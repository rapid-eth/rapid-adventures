import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import ErrorBoundary from '../../ErrorBoundary'
import ProfileMenu from './ProfileMenu';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://rapidteam.io/">
        RAPID Team
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography >
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingLeft: 65, // keep right padding when drawer closed
    paddingRight: 24, // keep right padding when drawer closed
    display: 'flex',
    justifyContent: 'center',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#1E1A5E',
    color: theme.palette.primary.contrastText
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto'
  },
  currentNetwork: {
    fontSize: 10,
    color: '#666',
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRight: '1px solid #DFE0EB'
  },
  centered: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  balances: {
    // outline: '1px solid yellow'
  },
  amountGroup: {
    paddingRight: theme.spacing(3),
  },
  amount: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  noPadding: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const AppDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar color="inherit" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.flexGrow}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className={classes.currentNetwork}>
                <Typography>CURRENT NETWORK</Typography>
                <div className={classes.centered}>
                  <Typography>Rinkeby&nbsp;</Typography>
                  <CheckCircleIcon style={{ color: "green", height: '.75em' }} />
                </div>
              </div>
              <div className={classes.balances}>
                <span className={classes.amountGroup}>
                  <Typography className={classes.amount} component="span">0</Typography> ETH
                </span>
                <span className={classes.amountGroup}>
                  <Typography className={classes.amount} component="span">0</Typography> MESH
                </span>
                <span className={classes.amountGroup}>
                  <Typography className={classes.amount} component="span">0</Typography> TIPBOT
                </span>
              </div>
            </div>
          </div>
          {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Rapid Adventures Dashboard
          </Typography> */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    </>
  )
}

const PrivateLayout = ({ component: Component, title, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppDrawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div >
          <ErrorBoundary>
            <Component {...rest} />
          </ErrorBoundary>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </main>
    </div>
  );
}

export default PrivateLayout 