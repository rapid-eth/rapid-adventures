import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, Button, Typography } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };

  return {
    root: {
      width: '100%',
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      '&$expanded': {
        minHeight: 64,
      },
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
    questCardExpanded: {
    },
    questCardHeader: {
      position: 'absolute',
      top: -41,
      right: 25,
      width: '50%',
      display: 'flex',
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(1),
      borderBottom: '1px solid gray',
      borderRadius: '4px 4px 0 0'
    },
    questCardButtonContainer: {
      position: 'absolute',
      bottom: -18,
      right: 25,
    }
  }
})

const QuestCard = ({ title, subtitle, ...rest }) => {
  const classes = useStyles();
  const [expanded, toggleExpanded] = useState(false);

  const handleClick = () => {
    toggleExpanded(!expanded)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {subtitle}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <div className={classes.questCard}>
        <header className={classes.questCardHeader}>
          <Typography>Difficulty: 1</Typography>
          &nbsp;&nbsp;
        <Typography>Estimated time: 123</Typography>
          &nbsp;&nbsp;
        <Typography>Reward: 5 ETH</Typography>
        </header>
        <Typography>{title}</Typography>
        <Grow in={expanded}>
          <Expander subtitle={subtitle} />
        </Grow>
        <div className={classes.questCardButtonContainer}>
          <Button size="small" variant="contained" color="primary" onClick={handleClick}>
            More Info
        </Button>
          &nbsp; &nbsp;
        <Button size="small" variant="contained" color="primary">
            Start Quest
        </Button>
        </div>
      </div>
    </div>

  )
}

export default QuestCard


const Expander = (props) => {
  return <Typography {...props} style={{ minHeight: 400 }}>{props.subtitle}</Typography>
}

