import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Button } from '@material-ui/core';
import TestingSnackbars from './TestingSnackbars';
import StartAdventureModal from './StartAdventureModal'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [show, toggleShow] = useState(false);

  const handleStartAdventureModalClose = () => {
    toggleShow(false)
  }


  return (
    <div className={classes.root}>
      <Container>
        <h1>Snackbar test</h1>
        <TestingSnackbars />
        <Divider />
        <h1>Modal example</h1>
        <Button onClick={() => { toggleShow(true) }}>
          Start an Adventure
        </Button>
        <StartAdventureModal open={show} handleClose={handleStartAdventureModalClose} />
        <Divider />
      </Container>
    </div >
  );
}
