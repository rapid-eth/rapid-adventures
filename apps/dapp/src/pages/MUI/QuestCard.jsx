import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Collapse, Divider, Checkbox, Grid } from '@material-ui/core';
import QuestCardDifficulty from './QuestCardDifficulty';
import QuestCardReward from './QuestCardReward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

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
      padding: theme.spacing(2),
      borderRadius: 4,
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
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
      padding: theme.spacing(4),
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
    }
  }
})

const QuestCard = ({ properties: { title, subtitle, summary, content }, difficulty, reward, estimatedTime, selectedAdventureId, ...rest }) => {
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
          <Checkbox color="green" />
          <QuestCardDifficulty difficulty={difficulty} />
          <Typography>Estimated Time: {estimatedTime}</Typography>
          <QuestCardReward reward={reward} />
        </header>
        <div className={classes.questCardContent}>
          <Grid container>
            <Grid item xs={3}>
              <Typography component="span">{title}</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography component="span" style={{ marginLeft: '3em' }}>{subtitle}</Typography>
            </Grid>
          </Grid>
        </div>
        <Collapse in={expanded} className={classes.questCardExpandedContent} classes={{ hidden: classes.questCardExpandedContentHidden }}>
          <Expander subtitle={subtitle} content={content} />
        </Collapse>
        <div className={classes.questCardButtonContainer}>
          <Button size="small" variant="contained" color="primary" onClick={handleClick} classes={{ root: classes.expandButton }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={
            () => history.push(`/adventure/${selectedAdventureId}`)
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
