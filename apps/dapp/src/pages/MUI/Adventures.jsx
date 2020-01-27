import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardActions, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import adventures from 'data/adventureList.json';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    height: 300
  },
  right: {
    flexDirection: 'row-reverse'
  }
}));

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          adventures.data.map(({ title, subtitle, image, alias }, index) =>
            <Grid item xs key={index}>
              <Card className={classes.card}>
                <CardHeader title={title} subheader={subtitle} />
                <CardMedia>
                  <img src={image} className={classes.image} alt={`${title} logo`} />
                </CardMedia>
                <CardActions className={classes.right}>
                  <Button variant="contained" color="primary" onClick={() => {
                    history.push(`/adventures/${alias}`)
                  }}>
                    Let's go!
                </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
}

