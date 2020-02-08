import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import startAdventure from '../../assets/start-adventure.svg'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold'
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
      <Typography variant="h6" className={classes.title}>{children}</Typography>
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
  dividers: {
    borderTop: 'inherit'
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function StartAdventureDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="start-adventure-dialog-title" onClose={handleClose}>
          Time to start an Adventure!
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
            <div style={{ width: '50%' }}>
              <img src={startAdventure} alt="start adventure" style={{ width: '100%', padding: '0 4em 0 2em' }} />
            </div>
            <div>
              <Typography variant="h6" gutterBottom>
                Text explaining Adventures on a high level
              </Typography>
              <Typography gutterBottom variant="body1">
                As a reward you’ll
              </Typography>
              <ul>
                <li>
                  Climb the leaderboards
                  </li>
                <li>
                  Loot rewards for completion
                  </li>
                <li>
                  Get emblems to rep your accomplishments
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose} color="primary">
            Let's go
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
