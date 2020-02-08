import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Typography, LinearProgress, Divider } from '@material-ui/core';
import AdventureDetailQuestCard from './AdventureDetailQuestCard';
import AdventureDetailProgress from './AdventureDetailProgress';
import AdventurePieChart from './AdventurePieChart';
import rapidAdventureLogo from '../../assets/rapid.svg'
import DataContext from '../../DataContext';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#DADADA',
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(12),
    display: 'flex',
    flexDirection: 'row',
  },
  imageMargin: {
    margin: theme.spacing(5),
  },
  content: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  paper: {
    backgroundColor: '#F8F8F8',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  sidebar: {
    backgroundColor: '#E9E9E9',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

export default function AdventureDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const { state: { quests } } = useContext(DataContext);
  const selectedQuests = quests.data.filter(quest => quest.adventures.includes(Number.parseInt(id)))

  return (
    <Grid container>
      <Grid item xs={9} md={9} lg={9}>
        <div className={classes.header}>
          <img src={rapidAdventureLogo} alt="RAPID logo" className={classes.imageMargin} />
          <div>
            <p>
              <em>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum, fusce velit. Dictum ornare a id feugiat dictumst. Elementum proin fermentum lobortis nun"
              </em>
            </p>
            <Typography>Adventure Progress</Typography>
            <AdventureDetailProgress />
          </div>
        </div>
        <div className={classes.content}>
          {selectedQuests.map(({ id, ...rest }) => {
            return <AdventureDetailQuestCard key={id} id={id} selectedAdventureId={id} {...rest} />
          })}
        </div>
      </Grid>
      <Grid item xs={3} className={classes.sidebar}>
        <AdventurePieChart />
        <Divider />
        <Typography variant="body1" style={{ marginTop: '2em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam proin donec nibh vestibulum,
          fusce velit. Dictum ornare a id feugiat dictumst. Elementum proin fermentum lobortis nunc
          tristique aliquet rutrum viverra erat. Egestas blandit ridiculus tincidunt pellentesque varius.
          Elementum proin fermentum lobortis nunc tristique aliquet rutrum viverra erat. Egestas blandit
          ridiculus tincidunt pellentesque varius.
        </Typography>
        <Typography variant="body1" style={{ marginTop: '3em' }}>
          Elementum proin fermentum lobortis nunc tristique aliquet rutrum viverra erat. Egestas blandit
          ridiculus tincidunt pellentesque varius.
        </Typography>
      </Grid>
    </Grid >
  );
}