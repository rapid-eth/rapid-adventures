import React, { useState, useEffect } from 'react';
import Box from '3box';
import EditProfile from '3box-profile-edit-react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import loading from '../../../assets/loading.svg';

const defaultState = {
  box: undefined,
  myProfile: undefined,
  myAddress: undefined,
  space: undefined
}

const spaceName = 'rapid-adventures';

const ThreeBox = () => {
  return (
    <div>
      Success!
        <Button size="small" variant="contained" color="primary" onClick={() => setShowProfile(true)}>
        3box Profile
        </Button>
      <ProfileModal threebox={threebox} open={showProfile} handleClose={() => setShowProfile(false)} />
    </div>
  )
}

export default ThreeBox
