import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Collapse } from '@material-ui/core';
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
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      padding: theme.spacing(2),
      backgroundColor: theme.palette.common.white,
      borderRadius: 4,
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(15)
    },
    questCardHeader: {
      position: 'absolute',
      top: -45,
      right: 25,
      width: '50%',
      backgroundColor: theme.palette.common.white,
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

const QuestCard = ({ properties: { title, subtitle }, difficulty, reward, estimatedTime, ...rest }) => {
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
          <QuestCardDifficulty difficulty={3} />
          &nbsp;&nbsp;
        <Typography>Estimated Time: 123</Typography>
          &nbsp;&nbsp;
          <QuestCardReward reward={1} />
        </header>
        <Typography>{title}</Typography>
        <Collapse in={expanded}>
          <Expander subtitle={subtitle} />
        </Collapse>
        <div className={classes.questCardButtonContainer}>
          <Button size="small" variant="contained" color="primary" onClick={handleClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          &nbsp; &nbsp;
        <Button size="small" variant="contained" color="primary" onClick={
            () => history.push('/adventure/1')
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
  return <Typography {...props} style={{ minHeight: 400 }}>{props.subtitle}</Typography>
}
