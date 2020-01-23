import React from 'react';
import EditProfile from '3box-profile-edit-react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  dialog: {
    background: 'none',
  },
}));

const ProfileModal = ({ open, handleClose, threebox }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      classes={{ paper: classes.dialog }}
    >
      <EditProfile
        // required
        box={threebox.box}
        space={threebox.space}
        currentUserAddr={threebox.myAddress}

        // optional
        currentUser3BoxProfile={threebox.myProfile}
      // redirectFn
      />
    </Dialog >
  )
}

export default ProfileModal