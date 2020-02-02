import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4">Coming soon...</Typography>
      <br /><br />
      <Button variant="contained" onClick={history.goBack}>
        Go back
    </Button>
    </Container>
  )
}

export default NotFound