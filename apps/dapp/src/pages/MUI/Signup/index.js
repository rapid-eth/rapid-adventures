import React from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/consensys-logo-transparent.png';
import metamask from './metamask.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    background: `url(${logo}), linear-gradient(121.1deg, rgba(72, 91, 237, 0.82) 15.71%, #8D34D7 28.19%, rgba(204, 139, 252, 0.62) 54.17%, rgba(238, 168, 172, 0.427083) 65.83%, rgba(188, 46, 25, 0.13) 83.5%), #D1631A`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, classes.image)}>
      <div>
        <img src={metamask} alt="metamask fox" />
      </div>
    </div>
  );
}