import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '3em',
    borderRadius: 4,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  colorPrimary: {
    backgroundColor: '#C4C4C4',
  },
  barColorPrimary: {
    backgroundColor: '#60BEA3',
  },
}));

const LinearDeterminateProgress = () => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  useEffect(() => {
    const progress = () => {
      setCompleted(oldCompleted => {
        // if (oldCompleted === 60) {
        //   return 0;
        // }
        const diff = Math.random() * 100;
        return Math.min(oldCompleted + diff, 60);
      });
    }

    const timer = setInterval(progress, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress classes={{ root: classes.root, colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
        variant="determinate" value={completed} />
    </div>
  );
}

export default LinearDeterminateProgress