import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import InfoIcon from '@material-ui/icons/Info'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AboutDialog from './AboutDialog';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [aboutDialogOpen, setAboutDialogOpen] = React.useState(false);
  const history = useHistory()

  const handleAboutDialogOpen = event => {
    setAnchorEl(null);
    setAboutDialogOpen(true);
  };

  const handleAboutDialogClose = event => {
    setAboutDialogOpen(false);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goTo = (path) => {
    history.push(path);
    handleClose();
  }

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <AboutDialog aboutDialogOpen={aboutDialogOpen} handleAboutDialogClose={handleAboutDialogClose} />
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleAboutDialogOpen}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </MenuItem>
        <MenuItem onClick={() => goTo('/settings')}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem onClick={() => goTo('/joinus')}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}