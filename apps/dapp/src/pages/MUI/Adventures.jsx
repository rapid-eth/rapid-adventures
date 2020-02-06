import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Button, Toolbar, InputBase, Chip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
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
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white
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
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
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
    position: 'relative',
    cursor: 'pointer'
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
  adventureToolbar: {
    flexGrow: 1,
    marginBottom: 72
  },
  questToolbar: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#E8E8E8',
    '&:hover': {
      backgroundColor: '#EFEFEF',
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
    color: "#4E3FCE",
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
  const adventureQuestCounts = adventures.data.map(adv => {
    return quests.data.filter(quest => quest.adventures.includes(adv.id)).length
  })

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  }

  const filteredQuests = selectedQuests && selectedQuests.filter((quest) => {
    const { properties: { title, subtitle, summary, content }, reward: { token }, alias } = quest;

    // greedy search. global and case insensitive
    const matchMe = (title + ' ' + alias + ' ' + token + ' ' + content + ' ' + subtitle + ' ' + summary).toLocaleLowerCase()
    return matchMe.includes(searchFilter.trim())
  })

  const handleStartAdventureModalClose = () => {
    setShowStartAdventureModal(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <div className={classes.adventureCards}>
        <Typography variant="h6" className={classes.adventureToolbar}>
          Adventure Catalog
        </Typography>
        <div className={classes.wide}>
          {
            adventures.data.map(({ id, title, subtitle, image, alias }, index) => {
              return (
                <div key={id} className={clsx(classes.adventureCard, selectedAdventureId === id && classes.selected)} onClick={() => selectAdventure(id)}>
                  <div>
                    <img src={rapidLogo} alt="rapid logo" style={{ marginRight: '1em', marginBottom: '1em' }} />
                    <Chip label={`${adventureQuestCounts[index]} Quests`} />
                  </div>
                  <br />
                  <div>
                    <Typography variant="h5">{title}</Typography>
                    <br />
                    <Typography variant="body2">{subtitle}</Typography>
                  </div>
                  <Button size="small" variant="contained" color="primary" className={classes.adventureCardButton}>
                    <AddCircleOutlineOutlinedIcon />&nbsp; Explore
                  </Button>
                </div>
              )
            }
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
                return <QuestCard key={id} id={id} selectedAdventureId={selectedAdventureId} {...rest} />
              })
              : selectedQuests.map(({ id, ...rest }) => {
                return <QuestCard key={id} id={id} selectedAdventureId={selectedAdventureId} {...rest} />
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


