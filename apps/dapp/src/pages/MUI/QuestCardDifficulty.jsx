import React from 'react';
import { Tooltip } from '@material-ui/core';
import diffEasy from '../../assets/diffEasy.svg'
import diffMedium from '../../assets/diffMedium.svg'
import diffHard from '../../assets/diffHard.svg'

const QuestCardDifficulty = ({ difficulty }) => {
  const renderIcon = () => {
    switch (difficulty) {
      case 1:
        return <img src={diffEasy} alt="low difficulty" style={{ height: '2em' }} />
      case 2:
        return <img src={diffMedium} alt="medium difficulty" style={{ height: '2em' }} />
      case 3:
        return <img src={diffHard} alt="high difficulty" style={{ height: '2em' }} />
      default:
        return <div />
    }
  }

  return (
    <Tooltip title={`Difficulty: ${difficulty}`}>
      {renderIcon()}
    </Tooltip >
  )
}
export default QuestCardDifficulty