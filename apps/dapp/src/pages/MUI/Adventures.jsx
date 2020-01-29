import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Button, AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import rapidLogo from '../../assets/rapid.svg'
import DataContext from '../../DataContext'
import adventures from 'data/adventureList.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  adventureCards: {
    flexBasis: '30%',
    borderRadius: 36,
    backgroundColor: '#E9E9E9',
    padding: 18,
    marginRight: theme.spacing(2)
  },
  wide: {
    width: '100%',
  },
  questCards: {
    flexBasis: '70%',
    borderRadius: 36,
    backgroundColor: '#E9E9E9',
    padding: 18,
  },
  adventureCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(10),
    position: 'relative'
  },
  adventureCardButton: {
    position: 'absolute',
    bottom: -18,
    right: 25
  },
  selected: {
    outline: '4px solid #5436D6',
    transition: 'outline 0.2s linear',
  },
  right: {
    flexDirection: 'row-reverse'
  },
  questToolbar: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  questCard: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(15)
  },
  questCardHeader: {
    position: 'absolute',
    top: -41,
    right: 25,
    width: '50%',
    display: 'flex',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    borderBottom: '1px solid gray',
    borderRadius: '4px 4px 0 0'
  },
  questCardButtonContainer: {
    position: 'absolute',
    bottom: -18,
    right: 25,
  }
}));

const AdventuresPage = () => {
  const data = useContext(DataContext);
  console.log('data', data);
  const history = useHistory();
  const classes = useStyles();
  const [selectedAdventureId, selectAdventure] = useState()
  const adventure = adventures.data.find(({ id }) => id === selectedAdventureId)
  const inputEl = useRef(null);

  // const { quests: theQuests } = adventure;
  // const filteredQuests = theQuests.length && theQuests.filter((quest) => {
  //   return quest.match(/ /)
  // })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <div className={classes.adventureCards}>
        <Typography>Adventure Catalog</Typography>
        <div className={classes.wide}>
          {
            adventures.data.map(({ id, title, subtitle, image, alias }) =>
              <div key={id} className={clsx(classes.adventureCard, selectedAdventureId === id && classes.selected)} onClick={() => selectAdventure(id)}>
                <img src={rapidLogo} alt="rapid logo" />
                <br />
                {title}
                <Button size="small" variant="contained" color="primary" className={classes.adventureCardButton}>
                  <AddCircleIcon />&nbsp; Explore
                </Button>
              </div>
            )
          }
        </div>
      </div>
      <div className={classes.questCards}>
        <Toolbar>
          <Typography variant="h6" className={classes.questToolbar}>
            Quests
          </Typography>
          <div className={classes.search}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                inputRef={inputEl}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>
        </Toolbar>
        {selectedAdventureId &&
          <div className={classes.quests}>
            {adventure.quests.map(({ id, properties: { title, subtitle } }) =>
              <div key={id} className={classes.questCard}>
                <header className={classes.questCardHeader}>
                  <Typography>Difficulty: 1</Typography>
                  &nbsp;&nbsp;
                  <Typography>Estimated time: 123</Typography>
                  &nbsp;&nbsp;
                  <Typography>Reward: 5 ETH</Typography>
                </header>
                <Typography>{title}</Typography>
                <Typography>{subtitle}</Typography>
                <div className={classes.questCardButtonContainer}>
                  <Button size="small" variant="contained" color="primary">
                    More Info
                  </Button>
                  &nbsp; &nbsp;
                  <Button size="small" variant="contained" color="primary">
                    Start Quest
                  </Button>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default AdventuresPage
