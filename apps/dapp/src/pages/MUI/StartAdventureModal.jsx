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
    textAlign: 'center'
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <img src={startAdventure} alt="start adventure" style={{ padding: '0 2em' }} />
            </div>
            <div>
              <Typography variant="body2" gutterBottom>
                Text explaining Adventures on a high level
              </Typography>
              <Typography gutterBottom variant="bold">
                As a reward you’ll
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>
                    Climb the leaderboards
                  </li>
                  <li>
                    Loot rewards for completion
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </Typography>
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
