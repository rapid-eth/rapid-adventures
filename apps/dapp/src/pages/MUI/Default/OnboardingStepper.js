import React, { useState, useEffect } from 'react';
import { navigate } from "@reach/router"
import Box from '3box';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import metamaskLogo from '../../../assets/metamask-fox-wordmark-horizontal.svg';
import threeBoxLogo from '../../../assets/3box-logo.svg';
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
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  logo: {
    height: 100,
  },
  threeBoxLogo: {
    height: 50,
    marginRight: 25,
  },
  threeboxDiv: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25
  }
}));

function getSteps() {
  return ['Metamask', '3box', 'Remember Me'];
}

const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms));
}

export default function OnboardingStepper() {
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={metamaskLogo} className={classes.logo} alt="metamask logo" />
              {checks.metamask === 'loading' && <img src={loading} alt="loading animation" style={{ width: 30 }} />}
              {checks.metamask === true && <CheckCircleIcon style={{ color: 'green' }} />}
            </div>
            <Typography variant="body2">
              Metamask is how the app knows who you are.
            </Typography>

            {checks.metamask === true
              ? <div>
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                  Next
                </Button>
              </div>
              : <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" size="small" onClick={async () => {
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
              </div>
            }
          </div>
        );
      case 1:
        return (
          <div>
            <div className={classes.threeboxDiv} style={{}}>
              <img src={threeBoxLogo} className={classes.threeBoxLogo} alt="threebox logo" />
              {checks.threebox === 'loading' && <img src={loading} alt="loading animation" style={{ width: 30 }} />}
              {checks.threebox === true && <CheckCircleIcon style={{ color: 'green' }} onClick={() => {
                if (threeboxLoaded) setShowProfile(true)
              }} />}
            </div>
            <Typography variant="body2">
              3box provides decentralized profiles to save your progress.
            </Typography>

            {!checks.threebox &&
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" size="small" onClick={async () => {
                  setChecks({ ...checks, threebox: 'loading' })
                  await handleLogin()
                  setChecks({ ...checks, threebox: true })
                }}>
                  Check 3box
                </Button>
              </div>
            }
            {(checks.threebox === 'loading' || checks.threebox) &&
              <div>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  disabled={!threeboxLoaded}
                >
                  Next
                </Button>
              </div>
            }
          </div >
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

            <div>
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => { navigate('/') }}
                className={classes.button}
              >
                Dashboard
              </Button>
            </div>
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
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
  );
}
