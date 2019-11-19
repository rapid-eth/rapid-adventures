/* --- Global --- */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable'

const Paper = styled(ContentEditable)`
  border-radius: 20px;
  box-shadow: 0px -6px 8px -11px rgba(88,103,221,0.15), 0px -7px 8px -5px rgba(88,103,221,0.15);
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  & > * {
    outline: none;
  }
  &:before {
    background-color: #FFF;
    borderRadius: 12px;
    content: Edit Mode;
    position: absolute;
    top: 0; left: 0; right:0 
    margin: 0 auto
  }
`

export default props => {
  const [ updateRef ] = useState(props.updateRef)
  const [ innerRefCreate, setInnerRef ] = useState(React.createRef())

  useEffect( () => { 
    const ref = React.createRef()
    setInnerRef(ref)
  }, [updateRef])
  
  return (
    <Paper
      innerRef={innerRefCreate}
      html={props.html}
      disabled={props.isPreview}
      onChange={props.onChange}
      tagName='article'
      {...props}
    />
  )
}