import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Box from '3box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Button, Paper, Stepper, Step, StepLabel, StepContent, Card, CardActions, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import metamaskLogo from '../../../assets/metamask.svg';
import threeBoxLogo from '../../../assets/threebox.svg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import loading from '../../../assets/loading.svg';
import ThreeboxProfileModal from './ThreeboxProfileModal';

const defaultThreeboxState = {
  box: undefined,
  myProfile: undefined,
  myAddress: undefined,
  space: undefined
}
const spaceName = 'rapid-adventures';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  content: {
    padding: theme.spacing(5, 4, 1, 5),
  },
  copyPushDown: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(3),
    },
  },
  actions: {
    borderTop: '1px solid #DDDDDD',
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  logo: {
    width: '100%',
  },
  threeBoxLogo: {
    // height: 50,
    // marginRight: 25,
  },
  threeboxDiv: {
    display: 'flex',
    alignItems: 'center',
  }
}));

function getSteps() {
  return ['Metamask', '3box', 'Remember Me'];
}

const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms));
}

const OnboardingStepper = ({ setPageIndex }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [checks, setChecks] = React.useState({
    metamask: false,
    threebox: false,
  });
  const [threeboxLoaded, setThreeboxLoaded] = React.useState(false);
  const [threebox, setThreebox] = useState(defaultThreeboxState);
  const [showProfile, setShowProfile] = useState(false);
  const [rememberMeCheckbox, setRememberMeCheckbox] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    const addresses = await window.ethereum.enable();
    const myAddress = addresses[0];

    const box = await Box.openBox(myAddress, window.ethereum, {});
    const myProfile = await Box.getProfile(myAddress);
    const space = await box.openSpace(spaceName);

    setThreebox({ box, myProfile, myAddress, space });
    box.onSyncDone(() => setSyncDone(true));
    setThreeboxLoaded(true);
  }

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleRememberMeChange = async () => {
    if (syncDone) {
      const response = await threebox.space.public.set('onboarded', true)
      console.log('> 3box set', response)
    }
    localStorage.setItem('onboarded', true);
    setRememberMeCheckbox(true);
  }

  const getStepContent = (step, handleBack, handleNext) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={metamaskLogo} className={classes.logo} alt="metamask logo" />
            </Grid>
            <Grid item xs={8} className={classes.copyPushDown}>
              <Typography variant="h6">
                Metamask is how the app knows who you are.
              </Typography>
              <br />
              <Typography variant="body2">
                Once you’ve got everything set up you’re all set and join us at Rapid Adventures.
                <br />
                After that, we will help set up your profile along with show you around!
              </Typography>
              <br />
              {checks.metamask === 'loading' && <img src={loading} alt="loading animation" style={{ width: 30 }} />}
              {checks.metamask === true && <CheckCircleIcon style={{ color: 'green' }} />}
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={threeBoxLogo} className={classes.logo} alt="threebox logo" />
            </Grid>
            <Grid item xs={8} className={classes.copyPushDown}>
              <Typography variant="h6">
                3box provides decentralized profiles to save your progress.
              </Typography>
              <br />
              {checks.threebox === 'loading' && <img src={loading} alt="loading animation" style={{ width: 30 }} />}
              {checks.threebox === true && <CheckCircleIcon style={{ color: 'green' }} />}
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <div>
            <FormControlLabel
              control={
                <Checkbox value="primary" inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={rememberMeCheckbox}
                  onChange={handleRememberMeChange}
                />
              }
              label="Remember me"
            />
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  const renderActionButtons = () => {
    switch (activeStep) {
      case 0: {
        // Metamask
        return checks.metamask === true
          ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )
          : (
            <Button variant="contained" onClick={async () => {
              setChecks({ ...checks, metamask: 'loading' })
              await sleep(500);
              if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
                // Web3 browser user detected. 
                setChecks({ ...checks, metamask: true })
                return;
              }
              setChecks({ ...checks, metamask: false })
            }}>
              Check Metamask
            </Button>
          )
      }
      case 1: {
        // 3box
        return checks.threebox === true
          ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )
          : (
            <Button variant="contained" onClick={async () => {
              setChecks({ ...checks, threebox: 'loading' })
              await handleLogin()
              setChecks({ ...checks, threebox: true })
            }}>
              Check 3box
          </Button>
          )
      }
      case 2: {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => { history.push('/') }}
            className={classes.button}
          >
            Dashboard
          </Button>
        )
      }
      default:
        return null
    }
  }

  return (
    <Card>
      <CardContent className={classes.content}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon} loading={'asdf'}>{label}</StepLabel>
                <StepContent>
                  <div>{getStepContent(index, handleBack, handleNext)}</div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button variant="contained" color="primary" onClick={() => {
                navigate('/');
              }}>
                Sign Up
          </Button>
              <Button onClick={handleReset} className={classes.button}>
                Reset
          </Button>
            </Paper>
          )}
          {threeboxLoaded && <ThreeboxProfileModal threebox={threebox} open={showProfile} handleClose={() => setShowProfile(false)} />}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        {renderActionButtons()}
      </CardActions>
    </Card>

  );
}

export default OnboardingStepper

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  active: {
    backgroundColor: '#FCAB40',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#FFF'
  }
});

const ColorlibStepIcon = ({ active, completed, icon }) => {
  const classes = useColorlibStepIconStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <CheckCircleIcon style={{ color: 'green' }} /> : <div>{icon}</div>}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};