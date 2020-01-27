import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/rapid-logo.png'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  centered: {
    margin: '0 auto'
  }
}));

const AboutDialog = ({ aboutDialogOpen, handleAboutDialogClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog aria-labelledby="About-Dialog" open={aboutDialogOpen} onClose={handleAboutDialogClose} TransitionComponent={Transition}>
        <DialogTitle id="About-This-App" onClose={handleAboutDialogClose}>
          About this app
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={0}>
            <Grid item classes={{ item: classes.centered }}>
              <img src={logo} alt="logo" />
            </Grid>
          </Grid>

          <Typography gutterBottom>
            RAPID Adventures is a creation of the RAPID team.
          </Typography>
          <br />
          <Typography gutterBottom>
            Patrick, Kames, Joe, Robbie, Billy
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAboutDialogClose} color="primary">
            Sweet!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}


export default AboutDialog
