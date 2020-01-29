import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Button, AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import rapidLogo from '../../assets/rapid.svg'

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
  card: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(10)
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
}));

const AdventuresPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [selectedAdventureId, selectAdventure] = useState()
  const adventure = adventures.data.find(({ id }) => id === selectedAdventureId)
  const [questSearch, setQuestSearch] = useState()
  const inputEl = useRef(null);

  const handleChange = (event) => {
    setQuestSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputEl.current);
    console.log(inputEl.current.value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.adventureCards}>
        <Typography>Adventure Catalog</Typography>
        <div className={classes.wide}>
          {
            adventures.data.map(({ id, title, subtitle, image, alias }) =>
              <div key={id} className={clsx(classes.card, selectedAdventureId === id && classes.selected)} onClick={() => selectAdventure(id)}>
                <img src={rapidLogo} alt="rapid logo" />
                <br />
                {title}
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
            {adventure.quests.map(({ id, properties: { title } }) => <div key={id}>{title}</div>)}
          </div>
        }
      </div>
    </div>
  );
}

export default AdventuresPage
