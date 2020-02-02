import React from 'react';
import { Tooltip } from '@material-ui/core';
import lowRewardLogo from '../../assets/lowRewardLogo.svg'
import midRewardLogo from '../../assets/midRewardLogo.svg'
import highRewardLogo from '../../assets/highRewardLogo.svg'

const QuestCardReward = ({ reward: { token = "", amount = 0 } }) => {
  const renderIcon = () => {
    if (amount <= 1) {
      return <img src={lowRewardLogo} alt="low reward" style={{ height: '2em' }} />
    } else if (amount > 1 && amount <= 30) {
      return <img src={midRewardLogo} alt="medium reward" style={{ height: '2em' }} />
    } else if (amount > 30) {
      return <img src={midRewardLogo} alt="medium reward" style={{ height: '2em' }} />
    }
    return <div />;     //failsafe
  }

  return (
    <Tooltip title={`Reward: ${amount} ${token}`}>
      <div>
        {token}&nbsp;{renderIcon()}
      </div>
    </Tooltip >
  )
}
export default QuestCardReward