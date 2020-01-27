import React from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import QuestExpansionPanels from './QuestExpansionPanels';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function AdventureDetail() {
  const classes = useStyles();
  const { id } = useParams();
  console.log('useParams', id)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <QuestExpansionPanels questId={id} />
      </Grid>
    </Grid>
  );
}