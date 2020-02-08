import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { withEthers } from 'ethers-react-system'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DataContext from '../../DataContext';
import Leaderboards from './Leaderboards';
import zombie from '../../assets/zombie.png';
import boxesImage from '../../assets/boxes.svg';
import digitalBox from '../../assets/digitalbox.svg';
import print from '../../assets/print.svg';
import transfer from '../../assets/transfer.svg';
import QuestCard from './QuestCard';
import DashboardPieChart from './DashboardPieChart';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white
  },
  nudgeDown: {
    position: 'relative',
    bottom: -40
  },
  featuredQuestsLeft: {
    backgroundImage: `url(${zombie})`,
    backgroundColor: '#F5F5F5',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  featuredQuestsRight: {
    flexGrow: 1,
    background: '#E8E8E8',
    width: '100%',
    padding: theme.spacing(5),
  },
  questCreation: {
    backgroundColor: '#E8E8E8',
    height: '100%',
  },
  certVault: {
    padding: theme.spacing(2),
    backgroundColor: '#E8E8E8'
  },
  lastTransaction: {
    padding: theme.spacing(2),
    backgroundColor: '#E8E8E8',
    display: 'flex',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { state: { quests } } = useContext(DataContext);
  const ethers = withEthers();
  const history = useHistory();
  const [address, setAddress] = React.useState('');
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const randomQuest = quests.data[Math.floor(Math.random() * quests.data.length)]

  // useEffect(() => {
  //   if (!localStorage.getItem('onboarding')) {
  //     history.push('/joinus')
  //   }
  // }, [])


  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <div>
              <Typography variant="h5">
                Featured Quests / Adventure
              </Typography>
              <Grid container>
                <Grid item xs={6} className={classes.featuredQuestsLeft}>
                </Grid>
                <Grid item xs={6} className={classes.featuredQuestsRight}>
                  <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque arcu ut lectus dapibus sem cursus ornare.</Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Typography variant="h5" className={classes.nudgeDown}>
                Current Quest
              </Typography>
              <QuestCard {...randomQuest} noMargin />
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    Quest Creation
                  </Typography>
                  <Grid container className={classes.questCreation}>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={boxesImage} alt="boxes" />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque arcu utconsectetur adipiscing elit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    Certificate Vault
                  </Typography>
                  <Grid container className={classes.questCreation}>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={digitalBox} alt="digital box" />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque arcu utconsectetur adipiscing elit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div style={{ marginTop: '4em', marginBottom: '3em' }}>
              <Typography variant="h5">
                Last Transaction
              </Typography>
              <div className={classes.lastTransaction}>
                <img src={print} alt="fingerprint" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar />
                  <img src={transfer} alt="transfer" />
                  <Avatar />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">
              Admin
            </Typography>
            <div style={{ display: 'flex', margin: '0 auto' }}>
              <DashboardPieChart />
            </div>
            <Leaderboards />

          </Grid>
        </Grid>
      </Container>
    </div >
  );
}


/* <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <div>
              <br />
              <Button variant='contained' onClick={() => {
                ethers.enableRequest();
              }}>
                call ethers.enableRequest()
            </Button>
              <Divider />
              ethers.isEnableSuccess: {ethers.isEnableSuccess}
              <br />
              Address: {address || ethers.address}
              <br />
              Balance: {address || (ethers.balance && ethers.balance.trimmed)}
            </div>
            <div>
              <Divider />
              current landing pages... TODO: depending on ethers.enableRequest() these may live on one route.
                  <br />
              <Link to="/signup" variant="body2">
                Signup
                  </Link> <br />
              <Link to="/signin" variant="body2">
                Signin
                  </Link> <br />
              <Link to="/learnmore" variant="body2">
                Learn More
                  </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TokenBalance />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BalancesLeaderboard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <EmblemLeaderboard />
          </Paper>
        </Grid>
      </Grid> */