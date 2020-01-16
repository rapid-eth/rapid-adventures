import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import metamaskLogo from '../../../assets/metamask-fox-wordmark-horizontal.svg';
import threeBoxLogo from '../../../assets/3box-logo.svg';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import loading from '../../../assets/3box-logo.svg';
import Threebox from './ThreeBox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  logo: {
    height: 200,
  },
  threeBoxLogo: {
    padding: theme.spacing(3, 3),
    height: 200,
  }
}));

function getSteps() {
  return ['Metamask', '3box', 'Logon'];
}


export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [checks, setChecks] = React.useState({
    metamask: false,
    threebox: false,
  });
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

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <img src={metamaskLogo} className={classes.logo} alt="metamask logo" />
            <Typography variant="body2">
              Metamask is how the app knows who you are.
            </Typography>

            <Button variant="contained" secondary="" size="small" onClick={() => {
              // setLoading()
              if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
                // Web3 browser user detected. 

                setChecks({ ...checks, metamask: true })
              }
              // unsetLoading()
            }}>
              Check Metamask
            </Button>
            {/* <Slide direction="up" in={checks.metamask === true} mountOnEnter unmountOnExit> */}
            {/* <CheckCircleIcon /> */}
            {/* </Slide> */}
            {checks.metamask === false && <HelpOutlineIcon />}
            {checks.metamask === 'loading' && <img src={loading} alt="loading animation" />}
            {checks.metamask === true && <CheckCircleIcon />}

          </div>
        );
      case 1:
        return (
          <div>
            <img src={threeBoxLogo} className={classes.threeBoxLogo} alt="threebox logo" />
            <Typography variant="body2">
              3box is how the app knows data about you.
            </Typography>

            <Button variant="contained" size="small" onClick={() => {
              setChecks({ ...checks, threebox: true })
            }}>
              Check 3box
            </Button>
            <Threebox />
          </div>
        );
      case 2:
        return `It's adventure time baby!`;
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
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button variant="contained" color="primary" onClick={() => {
            localStorage.setItem('onboarded', true)
          }}>
            Sign Up
          </Button>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
