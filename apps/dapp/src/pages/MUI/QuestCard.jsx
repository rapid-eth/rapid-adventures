import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import { Button, Typography, Collapse, Divider, Checkbox, Grid } from '@material-ui/core';
import QuestCardDifficulty from './QuestCardDifficulty';
import QuestCardReward from './QuestCardReward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ProgressContext from '../../ProgressContext';

import lowLevelLogo from '../../assets/lowLevelLogo.svg'

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '100%',
      background: 'transparent',
    },
    questCard: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
    },
    questCardMargin: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
    questCardHeader: {
      minWidth: 400,
      marginLeft: 'auto',
      backgroundColor: '#E9E9E9',
      padding: theme.spacing(1),
      borderBottom: '1px solid gray',
      borderRadius: '4px 4px 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&> *': {
        marginRight: '1em'
      }
    },
    questCardContent: {
      backgroundColor: '#E9E9E9',
      padding: theme.spacing(5),
      borderRadius: 4,
    },
    questCardExpandedContent: {
      backgroundColor: '#E9E9E9',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    questCardExpandedContentHidden: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
    },
    questCardButtonContainer: {
      marginLeft: 'auto',
      position: 'relative',
      top: -18,
      right: 25,
    },
    expandButton: {
      minWidth: 'inherit',
    },
  }
})

const QuestCard = ({ id, properties: { title, subtitle, summary, content, image }, difficulty, reward, estimatedTime, selectedAdventureId, noMargin, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, toggleExpanded] = useState(false);
  const { progress, setProgress } = useContext(ProgressContext);

  const handleClick = () => {
    toggleExpanded(!expanded)
  }

  return (
    <div className={classes.root}>
      <div className={clsx(classes.questCard, noMargin ? null : classes.questCardMargin)}>
        <header className={classes.questCardHeader}>
          <Checkbox />
          <QuestCardDifficulty difficulty={difficulty} />
          <Typography>Estimated Time: {estimatedTime}</Typography>
          <QuestCardReward reward={reward} />
        </header>
        <div className={classes.questCardContent}>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant='h6' component="span"><b>{title || ''}</b></Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography component="span" style={{ marginLeft: '3em' }}>{subtitle || ''}</Typography>
            </Grid>
          </Grid>
        </div>
        <Collapse in={expanded} className={classes.questCardExpandedContent} classes={{ hidden: classes.questCardExpandedContentHidden }}>
          <Expander subtitle={subtitle || ''} id={id} content={content} image={image} progress={progress} setProgress={setProgress} />
        </Collapse>
        <div className={classes.questCardButtonContainer}>
          <Button size="small" variant="contained" color="primary" onClick={handleClick} classes={{ root: classes.expandButton }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={
            () => history.push(`/adventure/${selectedAdventureId}`)
          }
          >
            Start Quest
        </Button>
        </div>
      </div>
    </div >
  )
}

export default QuestCard


const Expander = ({ id, image, content, progress, setProgress }) => {
  return (
    <div>
      <Divider style={{ margin: '1em 0' }} />
      <Grid container>
        <Grid item xs={3} style={{ padding: '1em' }}>
          <img src={image} style={{ width: '100%' }} alt="quest logo" />
        </Grid>
        <Grid item xs={9} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '2em' }}>
          <Typography style={{ marginTop: '1em' }}>{content}</Typography>
          <Button color="primary" variant="contained" size="small" style={{ marginTop: '2em' }}
            disabled={progress.loggedQuests.includes(id)}
            onClick={() => {
              setProgress({ ...progress, loggedQuests: [...progress.loggedQuests, id] })
            }}
          >
            <PlaylistAddIcon /> &nbsp;
            Add To Quest Log
          </Button>
        </Grid>
      </Grid>
    </div >
  )
}
