import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { grey } from '@material-ui/core/colors';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupIcon from '@material-ui/icons/Group';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import ListIcon from '@material-ui/icons/List';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HelpIcon from '@material-ui/icons/Help';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArrowUpwardIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Earn" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArrowDownwardIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Give" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Guide" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader style={{ color: grey[500] }} inset>Developer Tools</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AcUnitIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Adventures" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Quests" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Catalog" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Testing" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FiberSmartRecordIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Playground" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsBackupRestoreIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Prequalifier" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Leaderboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Collections" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon style={{ color: grey[500] }} />
      </ListItemIcon>
      <ListItemText primary="Team" />
    </ListItem>
  </div>
);