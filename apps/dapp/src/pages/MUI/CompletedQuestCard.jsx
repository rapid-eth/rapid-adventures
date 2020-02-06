import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Typography } from '@material-ui/core';

const useCompletedQuestStyles = makeStyles(theme => ({

}))

const CompletedQuestCard = () => {
  const classes = useCompletedQuestStyles();

  return (
    <Card>
      Hello world
    </Card>
  )
}

export default CompletedQuestCard