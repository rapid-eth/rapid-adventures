import React from 'react';
import { Tooltip } from '@material-ui/core';
import lowRewardLogo from '../../assets/lowRewardLogo.svg'
import midRewardLogo from '../../assets/midRewardLogo.svg'
import highRewardLogo from '../../assets/highRewardLogo.svg'

const QuestCardReward = ({ reward }) => {
  const renderIcon = () => {
    switch (reward) {
      case 1:
        return <img src={lowRewardLogo} alt="low reward" style={{ height: '2em' }} />
      case 2:
        return <img src={midRewardLogo} alt="medium reward" style={{ height: '2em' }} />
      case 3:
        return <img src={highRewardLogo} alt="high reward" style={{ height: '2em' }} />
      default:
        return <div />
    }
  }

  return (
    <Tooltip title={`Reward: ${reward}`}>
      {renderIcon()}
    </Tooltip >
  )
}
export default QuestCardReward