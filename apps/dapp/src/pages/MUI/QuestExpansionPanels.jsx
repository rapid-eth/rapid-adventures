import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Grid, Button, Typography } from '@material-ui/core';
import adventures from '../../data/adventureList.json';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QuestModal from './QuestModal';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    marginBottom: theme.spacing(2)
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  }
}));

const QuestExpansionPanels = ({ questId }) => {
  const classes = useStyles()
  const [showQuestModal, setShowQuestModal] = useState(false)
  const adventure = adventures.data.find((adv) => adv.alias === questId)

  const { id: defaultPanel } = adventure.quests.length && adventure.quests[0];
  const [expanded, setExpanded] = React.useState(defaultPanel);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleQuestModalClose = () => {
    setShowQuestModal(false)
  }

  return (
    <div className={classes.root}>
      {adventure.quests.map(({ id, properties: { title, subtitle, summary, content, image } }, index) =>
        <div key={index}>
          <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{title}</Typography>
              <Typography className={classes.secondaryHeading}>{subtitle}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img src={image} style={{ height: 200 }} alt={`${title} logo`} />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1">
                    {content}
                  </Typography>
                  <Button variant="contained" onClick={() => {
                    setShowQuestModal(true)
                  }}>Go</Button>
                </Grid>
              </Grid>
              <QuestModal open={showQuestModal} handleClose={handleQuestModalClose} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )}
    </div>
  );
}
export default QuestExpansionPanels