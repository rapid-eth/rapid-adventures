import React, { useState, useEffect, useRef, useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Button, Checkbox, Grid, LinearProgress } from '@material-ui/core';
import lottie from 'lottie-web';
import QuestCardDifficulty from './QuestCardDifficulty';
import QuestCardReward from './QuestCardReward';
import ProgressContext from '../../ProgressContext';
import cardBg1 from '../../assets/card-bg-1.svg';
import cardBg2 from '../../assets/card-bg-2.svg';
import sadDay from '../../assets/sad-day.svg';
import boxOpen from '../../assets/box-open.svg';
import highRewardLogo from '../../assets/highRewardLogo.svg'
import finishConfetti from '../../assets/10952-confetti-3.json';

const ColorCheckbox = withStyles({
  root: {
    color: '#A6A6A6',
    '&$checked': {
      color: '#60BEA3',
    },
  },
  checked: {},
})(Checkbox);

const useCardStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#E9E9E9',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(4),
  },
  headerStats: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    '&> *': {
      marginRight: '1em'
    },
  },
  content: {
    backgroundColor: '#F5F5F5',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  },
  startQuestButton: {
    marginLeft: 25,
    top: -20,
    marginBottom: theme.spacing(3)
  },
  step1: {
    backgroundImage: `url(${cardBg1})`,
  },
  verticalDivider: {
    borderRight: '1px solid #979797'
  },
  step2: {
    backgroundImage: `url(${cardBg2})`
  },
  step2Right: {
    textAlign: 'center',
    listStylePosition: 'inside',
  },
  step4Left: {
    color: theme.palette.common.white,
  },
  step4Right: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%'
  },
  finish: {
    marginBottom: theme.spacing(3)
  },
  finishBackground: {
    background: 'linear-gradient(180deg, #B4AF3B 0%, rgba(255, 255, 255, 0) 100%), #86208E'
  },
  questLogo: {
    width: '100%'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  }
}));

const QuestCard = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const { progress, setProgress } = useContext(ProgressContext);

  return (
    <div>
      {activeStep === 1 && <Step1 setActiveStep={setActiveStep} activeStep={activeStep} {...props} />}
      {activeStep === 2 && <Step2 setActiveStep={setActiveStep} activeStep={activeStep} {...props} />}
      {activeStep === 3 && <Step3 setActiveStep={setActiveStep} activeStep={activeStep} {...props} />}
      {activeStep === 4 && <Step4 setActiveStep={setActiveStep} activeStep={activeStep} progress={progress} setProgress={setProgress} {...props} />}
      {activeStep === 5 && <Step5 setActiveStep={setActiveStep} activeStep={activeStep} {...props} />}
    </div>
  )
}

export default QuestCard

const Step1 = ({ setActiveStep, ...rest }) => {
  const classes = useCardStyles();
  const { properties: { title, image } } = rest;

  return (
    <div>
      <header className={classes.header}>
        <Typography variant="h4">
          {title || "Quest"}
        </Typography>
        <div className={classes.headerStats}>
          <Typography>Estimated Time: {rest.estimatedTime}</Typography>
          <ColorCheckbox />
          <QuestCardDifficulty difficulty={rest.difficulty} />
          <QuestCardReward reward={rest.reward} />
        </div>
      </header>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <img src={image} alt={title} className={classes.questLogo} />
          </Grid>
          <Grid item xs={9} className={classes.rightSide}>
            <Typography>
              Info to understand cards <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => setActiveStep(2)}>
        Start Quest
    </Button>
    </div>
  )
}

const Step2 = ({ setActiveStep, activeStep, ...rest }) => {
  const classes = useCardStyles();
  const { properties: { title } } = rest;
  return (
    <div>
      <header className={classes.header}>
        <Typography variant="h4">
          {title || "Quest"} Step 1
        </Typography>
        <div className={classes.headerStats}>
          <HeaderLinearProgress progress={activeStep} />
        </div>
      </header>
      <div className={clsx(classes.content, classes.step1)}>
        <Grid container spacing={5}>
          <Grid item xs={6} className={classes.verticalDivider}>
            <Typography>
              Info to understand cards <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, <br />
              fusce velit. Dictum ornare a id feugiat dictumst. Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst.<br />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>What will you need?</Typography>
            <ol>
              <li>Reference link</li>
              <li>Reference link</li>
              <li>External tool to help</li>
            </ol>
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => window.alert('check callback fired. prequalifier goes here')}>
        Check
      </Button>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => setActiveStep(3)}>
        Next
      </Button>
    </div>
  )
}

const Step3 = ({ setActiveStep, activeStep, ...rest }) => {
  const classes = useCardStyles();
  const { properties: { title } } = rest;
  return (
    <div>
      <header className={classes.header}>
        <Typography variant="h4">
          {title || "Quest"} Step 2
        </Typography>
        <div className={classes.headerStats}>
          <HeaderLinearProgress progress={activeStep} />
        </div>
      </header>
      <div className={clsx(classes.content, classes.step2)}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Typography variant="h5">Quest:</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, <br />
              fusce velit. Dictum ornare a id feugiat dictumst. Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst.<br />
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.step2Right}>
            <Typography>What will you need?</Typography>
            <ol>
              <li>Reference link</li>
              <li>Reference link</li>
              <li>External tool to help</li>
            </ol>
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => window.alert('check callback fired. another prequalifier goes here')}>
        Check
      </Button>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => setActiveStep(4)}>
        Next
      </Button>
    </div >
  )
}

const Step4 = ({ setActiveStep, activeStep, progress, setProgress, ...rest }) => {
  const classes = useCardStyles();
  const { id, properties: { title } } = rest;

  return (
    <div>
      <header className={classes.header}>
        <Typography variant="h4">
          {title || "Quest"} Prequalifier Check is Sad
        </Typography>
        <div className={classes.headerStats}>
          <HeaderLinearProgress progress={activeStep} />
        </div>
      </header>
      <div className={classes.content}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <img src={sadDay} alt="sad face" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              Uh oh, looks like something didn’t pass.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst.
            </Typography>
            <Typography>
              Did you make sure to:
            </Typography>
            <ol>
              <li>example // link</li>
              <li>example // link</li>
              <li>example // link</li>
            </ol>
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" className={classes.startQuestButton} onClick={() => window.alert('check callback fired. another prequalifier goes here')}>
        Check
      </Button>
      <Button variant="contained" color="primary" className={classes.startQuestButton}
        onClick={() => {
          setActiveStep(5);
          setProgress({ ...progress, completedQuests: [...progress.completedQuests, id] })
        }}
      >
        Next
      </Button>
    </div>
  )
}

const Step5 = ({ setActiveStep, activeStep, ...rest }) => {
  const classes = useCardStyles();
  const { properties: { title } } = rest;
  const element = useRef();

  useEffect(() => {
    if (element.current)
      lottie.loadAnimation({
        animationData: finishConfetti,
        container: element.current,
        renderer: 'svg',
        autoplay: true,
      });
  }, [element]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={element} style={{ position: 'absolute' }}></div>
      <header className={classes.header}>
        <Typography variant="h4">
          {title || "Quest"}
        </Typography>
        <div className={classes.headerStats}>
          <HeaderLinearProgress progress={activeStep} />
        </div>
      </header>
      <div className={clsx(classes.content, classes.finishBackground)}>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <div className={classes.step4Left}>
              <Typography variant="h4">
                Congrats!
            </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst.
            </Typography>
              <br /><br />
              <Typography>
                Transaction ID: <a href="https://etherscan.io/tx/0xb325c0494036dc580c90f0c38687dc7015bde972e9414474c84e49422877b51d" target="_new">0xb325c0494036dc580c90f0c38687dc7015bde972e9414474c84e49422877b51d</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.step4Right}>
              <div>
                <img src={highRewardLogo} alt="high rewards" style={{ height: '4em' }} />
                <Typography>
                  Reward: 5 DEV
                </Typography>
              </div>

              <img src={boxOpen} alt="open gift box" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.finish} />
    </div >
  )
}

const useProgressBarStyles = makeStyles(theme => ({
  root: {
    width: '15em',
    height: '3em',
    borderRadius: 4,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  colorPrimary: {
    backgroundColor: '#C4C4C4',
  },
  barColorPrimary: {
    backgroundColor: '#60BEA3',
  },
}));

const HeaderLinearProgress = ({ progress }) => {
  const classes = useProgressBarStyles();

  return (
    <LinearProgress variant="determinate" value={progress * 20}
      classes={{ root: classes.root, colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
    />
  )
}