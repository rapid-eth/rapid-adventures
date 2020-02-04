import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import ProfileHover from 'profile-hover';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BalancesLeaderboard from './BalancesLeaderboard';
import EmblemLeaderboard from './EmblemLeaderboard';

const ADDRESSES = [
  '0xa8ee0babe72cd9a80ae45dd74cd3eae7a82fd5d1',
  '0x762920c6eF772cEC2Db85577964156628277eA70',
  '0x7003c993aFc27E148e3823C4741CB5c55B4cc2F6'
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  profileRows: {
    marginBottom: '1em'
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Balances" {...a11yProps(0)} />
          <Tab label="Emblems" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BalancesLeaderboard />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EmblemLeaderboard />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ADDRESSES.map((addr, index) =>
              <div className={classes.profileRows}>
                <ProfileHover address={addr} />
              </div>
            )}
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}