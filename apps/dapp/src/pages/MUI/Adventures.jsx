import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Button, AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useLocalStorage from '../../util/useLocalStorage';
import QuestCard from './QuestCard';
import rapidLogo from '../../assets/rapid.svg'
import DataContext from '../../DataContext'
import StartAdventureModal from './StartAdventureModal'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  adventureCards: {
    flexBasis: '30%',
    borderRadius: '0 36px 36px 0',
    backgroundColor: '#E9E9E9',
    padding: '18px 0 18px 18px',
  },
  wide: {
    width: '100%',
  },
  questCards: {
    flexBasis: '70%',
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginTop: 10,
  },
  adventureCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DADADA',
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
    backgroundColor: '#FFFFFF',
    transition: 'background 0.2s linear',
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
  const { state: { adventures, quests } } = useContext(DataContext);
  const [selectedAdventureId, selectAdventure] = useState(1);
  const [showStartAdventureModal, setShowStartAdventureModal] = useLocalStorage("startAdventureModal", true)
  const classes = useStyles();

  const selectedQuests = quests.data.filter(quest => quest.adventures.includes(selectedAdventureId))
  const [searchFilter, setSearchFilter] = useState('');

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  }

  const filteredQuests = selectedQuests && selectedQuests.filter((quest) => {
    const { properties: { title, subtitle, summary, content }, reward: { token }, alias } = quest;

    // greedy search. global and case insensitive
    const matchMe = (title + ' ' + alias + ' ' + token + ' ' + content + ' ' + subtitle + ' ' + summary).toLocaleLowerCase()
    return matchMe.includes(searchFilter.trim())
  })
  console.log('>', searchFilter)
  console.log('>fq', filteredQuests)

  const handleStartAdventureModalClose = () => {
    setShowStartAdventureModal(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <div className={classes.adventureCards}>
        <Typography variant="h6" className={classes.questToolbar}>
          Adventure Catalog
        </Typography>
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
                value={searchFilter}
                onChange={handleChange}
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
            {filteredQuests.length
              ? filteredQuests.map(({ id, ...rest }) => {
                return <QuestCard key={id} {...rest} />
              })
              : selectedQuests.map(({ id, ...rest }) => {
                return <QuestCard key={id} {...rest} />
              }
              )}
          </div>
        }
      </div>
      <StartAdventureModal open={showStartAdventureModal} handleClose={handleStartAdventureModalClose} />
    </div>
  );
}

export default AdventuresPage


