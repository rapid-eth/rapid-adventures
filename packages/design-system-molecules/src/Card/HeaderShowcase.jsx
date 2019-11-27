/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BackgroundImage } from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    <BackgroundImage ratio={.2} opacity={.3} src={props.imageCover} />
  )
}

export default FooterDefault