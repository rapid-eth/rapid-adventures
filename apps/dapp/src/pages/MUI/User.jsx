import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Divider, Avatar, LinearProgress } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CompletedQuestCards from './CompletedQuestCards';
import UserModal from './UserModal';

import awardBadge from '../../assets/awardBadge.svg'
import contactBadge from '../../assets/contactBadge.svg'
import questBadge from '../../assets/questBadge.svg'
import blue from '../../assets/blue.png'
import avatar from '../../assets/avatar-example.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    background: `url(${blue}) repeat-x #EFEFEF`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  profilePic: {
    height: 371,
    width: 371,
    margin: '0 auto',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    boxShadow: '5px 5px 5px gray',
    display: 'flex',
    flexDirection: 'column'
  },
  numberCircle: {
    display: 'inline-block',
    lineHeight: 0,
    borderRadius: '50%',
    backgroundColor: '#4364AB',
    fontSize: 24
  },
  numberCircleChild: {
    display: 'inline-block',
    paddingTop: '50%',
    paddingBottom: '50%',
    marginLeft: 8,
    marginRight: 8,
    color: '#EFEFEF'
  },
  badge: {
    height: 52
  },
  avatar: {
    height: 225,
    width: 225,
    margin: '0 auto',
  },
  profileButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    top: -10
  },
  avatarSize: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  progress: {
    height: '1em',
    borderRadius: 4,
    marginBottom: theme.spacing(2),
  },
  barColorPrimary: {
    backgroundColor: '#E7A845',
  },
  colorPrimary: {
    backgroundColor: '#C4C4C4',
  }
}));

const User = () => {
  const classes = useStyles();
  const [showModal, toggleShowModal] = useState(false);

  const handleModalClose = () => {
    toggleShowModal(false);
  }

  return (
    <div className={classes.root}>
      <UserModal open={showModal} handleClose={handleModalClose} />
      <div>
        <Grid container>
          <Grid item xs={5} style={{ margin: '0 auto', paddingTop: 100, paddingRight: '1em' }}>
            <div className={classes.profilePic}>
              <AccountBoxIcon className={classes.avatar} />
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 1em 1em 1em', position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={questBadge} alt="quest" className={classes.badge} /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      123
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={awardBadge} alt="award" className={classes.badge} /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      421
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={contactBadge} alt="contact" className={classes.badge} /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      102
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.profileButtons}>
                <Button variant="contained" style={{ backgroundColor: '#5037CE', color: 'white' }}
                  onClick={() => {
                    toggleShowModal(true)
                  }}
                >
                  <AddCircleOutlineIcon /> &nbsp;
                  INFO
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#ECA200', color: 'white' }}>
                  <AddCircleOutlineIcon /> &nbsp;
                  MESH
                </Button>
              </div>
            </div>
            <div style={{ marginTop: '2em' }}>
              <Typography variant="h4">
                Teams
              </Typography>
              <br />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Avatar label="Person 1" src={avatar} className={classes.avatarSize} />
                <Avatar label="Person 2" src={avatar} className={classes.avatarSize} />
                <Avatar label="Person 3" src={avatar} className={classes.avatarSize} />
                <Avatar label="Person 4" src={avatar} className={classes.avatarSize} />
                <Avatar label="Person 5" src={avatar} className={classes.avatarSize} />
              </div>
            </div>
            <Divider variant="middle" style={{ marginTop: '2em', marginBottom: '3em' }} />
            <div>
              <Typography variant="h4">
                Stats
              </Typography>
              <div style={{ padding: '1em 3em' }}>
                <LinearProgress variant="determinate" value={12} className={classes.progress} classes={{ barColorPrimary: classes.barColorPrimary, colorPrimary: classes.colorPrimary }} />
                <LinearProgress variant="determinate" value={59} className={classes.progress} classes={{ barColorPrimary: classes.barColorPrimary, colorPrimary: classes.colorPrimary }} />
                <LinearProgress variant="determinate" value={39} className={classes.progress} classes={{ barColorPrimary: classes.barColorPrimary, colorPrimary: classes.colorPrimary }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={7} style={{ paddingTop: 220, color: 'white' }}>
            <div>
              <Typography variant="h4">
                Robbie Kruszinski
              </Typography>
              <Typography variant="h6">
                Consensys - RAPID
              </Typography>
            </div>
            <div style={{ marginTop: '2em', marginBottom: '30em' }}>
              <Typography variant="h5" style={{ color: 'gray', marginTop: '1em', marginBottom: '1em' }}>
                Completed Quests
              </Typography>
              <CompletedQuestCards />
            </div>
          </Grid>
        </Grid>
        <section>
          <Grid container>
          </Grid>
        </section>
      </div>
    </div >
  );
}

export default User