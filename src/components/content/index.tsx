import React from 'react';
import './style.css'
type ContentProps = {
    text: string
}
const Content: React.FC<ContentProps> = (props) => (
    <div className='content'>{props.text}</div>
  )
export default Content