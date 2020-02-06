import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import CompletedQuestCards from './CompletedQuestCards'

import awardBadge from '../../assets/awardBadge.svg'
import contactBadge from '../../assets/contactBadge.svg'
import questBadge from '../../assets/questBadge.svg'
import blue from '../../assets/blue.png'

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
    flexDirection: 'column-reverse'
  },
  numberCircle: {
    display: 'inline-block',
    lineHeight: 0,
    borderRadius: '50%',
    backgroundColor: '#4364AB',
    fontSize: 32
  },
  numberCircleChild: {
    display: 'inline-block',
    paddingTop: '50%',
    paddingBottom: '50%',
    marginLeft: 8,
    marginRight: 8,
    color: '#EFEFEF'
  }
}));

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid container>
          <Grid item xs={5} style={{ margin: '0 auto', paddingTop: 100 }}>
            <div className={classes.profilePic}>
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1em' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={questBadge} alt="quest" /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      123
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={awardBadge} alt="award" /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      421
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={contactBadge} alt="contact" /><br />
                  <div className={classes.numberCircle}>
                    <div className={classes.numberCircleChild}>
                      102
                    </div>
                  </div>
                </div>
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
          <Grid item xs={5}>
          </Grid>
          <Grid item xs={7}>

          </Grid>
        </Grid>
        <section>
          <Grid container>

          </Grid>
        </section>
      </div>
    </div>
  );
}

export default User