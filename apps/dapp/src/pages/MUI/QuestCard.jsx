import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Collapse, Divider } from '@material-ui/core';
import QuestCardDifficulty from './QuestCardDifficulty';
import QuestCardReward from './QuestCardReward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import lowLevelLogo from '../../assets/lowLevelLogo.svg'

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '100%',
    },
    questCard: {
      position: 'relative',
      padding: theme.spacing(2),
      backgroundColor: '#E9E9E9',
      borderRadius: 4,
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(15),
    },
    questCardHeader: {
      position: 'absolute',
      top: -49,
      right: 25,
      width: '50%',
      backgroundColor: '#E9E9E9',
      padding: theme.spacing(1),
      borderBottom: '1px solid gray',
      borderRadius: '4px 4px 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    questCardButtonContainer: {
      position: 'absolute',
      bottom: -18,
      right: 25,
    }
  }
})

const QuestCard = ({ properties: { title, subtitle, summary, content }, difficulty, reward, estimatedTime, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, toggleExpanded] = useState(false);

  const handleClick = () => {
    toggleExpanded(!expanded)
  }

  return (
    <div className={classes.root}>
      <div className={classes.questCard}>
        <header className={classes.questCardHeader}>
          <QuestCardDifficulty difficulty={difficulty} />
          &nbsp;&nbsp;
          <Typography>Estimated Time: {estimatedTime}</Typography>
          &nbsp;&nbsp;
          <QuestCardReward reward={reward} />
        </header>
        <div>
          <Typography component="span" style={{ marginRight: '3em' }}>{title}</Typography>
          <Typography component="span">{subtitle}</Typography>
        </div>
        <Collapse in={expanded}>
          <Expander subtitle={subtitle} content={content} />
        </Collapse>
        <div className={classes.questCardButtonContainer}>
          <Button size="small" variant="contained" color="primary" onClick={handleClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          &nbsp; &nbsp;
        <Button size="small" variant="contained" color="primary" onClick={
            () => history.push(`/adventure/${adventureId}`)
          }>
            Start Quest
        </Button>
        </div>
      </div>
    </div >

  )
}

export default QuestCard


const Expander = (props) => {
  return (
    <div>
      <Divider style={{ margin: '1em 0' }} />
      <Typography >{props.content}</Typography>
    </div>
  )
}
