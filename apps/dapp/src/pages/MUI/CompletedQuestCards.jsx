import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import ProgressContext from '../../ProgressContext';
import DataContext from '../../DataContext'

const useCompletedQuestStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // height: 200,
    marginBottom: '1em'
  },
  image: {
    width: 200,
  },
  left: {
    // flexBasis: 200,
    backgroundImage: 'linear-gradient(#1100D4, #2F8BE1)',
    padding: theme.spacing(1),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 200
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4)
  }
}))

const CompletedQuestCards = () => {
  const classes = useCompletedQuestStyles();
  const { progress: { completedQuests } } = useContext(ProgressContext);
  const { state: { quests } } = useContext(DataContext);
  const completedQuestsData = quests.data.map((quest) => {
    if (completedQuests.includes(quest.id)) {
      return quest
    }
    return false
  }).filter(e => e)

  return (
    <div>
      {completedQuestsData.map((quest, index) =>
        <Card className={classes.root} key={index}>
          <div className={classes.left}>
            <img src={quest.properties.image} alt="logo" className={classes.image} />
          </div>
          <div className={classes.right}>
            <Typography variant="h4">
              {quest.properties.title}
            </Typography>
          </div>
        </Card>
      )
      }
    </div>
  )
}

export default CompletedQuestCards