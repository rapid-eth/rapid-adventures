import React, { useState, useEffect } from 'react';
import EditProfile from '3box-profile-edit-react';
import Box from '3box';

const defaultState = {
  box: undefined,
  myProfile: undefined,
  myAddress: undefined,
  space: undefined
}

const spaceName = '3boxtest';

const customFields = [
  {
    key: 'preferredCoin',
    field: 'Preferred Coin',
    inputType: 'dropdown',
    options: [{
      value: 'eth',
      display: 'Ethereum'
    }, {
      value: 'MESH',
      display: 'MeshToken'
    }]
  }, {
    key: 'backupAddress',
    field: 'Backup Address',
    inputType: 'text'
  }
];

const ThreeBox = () => {
  const [threebox, setThreebox] = useState(defaultState);

  useEffect(() => {
    handleLogin()
  }, [])

  const handleLogin = async () => {
    const addresses = await window.ethereum.enable();
    const myAddress = addresses[0];

    const box = await Box.openBox(myAddress, window.ethereum, {});
    const myProfile = await Box.getProfile(myAddress);
    const space = await box.openSpace(spaceName);

    setThreebox({ box, myProfile, myAddress, space });
    box.onSyncDone(() => console.log('syncdone'));
  }

  return (
    threebox.box ?
      <EditProfile
        // required
        box={threebox.box}
        space={threebox.space}
        currentUserAddr={threebox.myAddress}

        // optional
        customFields={customFields}
      // currentUser3BoxProfile={myProfile}
      // redirectFn
      />
      : <div>ThreeBox</div>

  )
}

export default ThreeBox