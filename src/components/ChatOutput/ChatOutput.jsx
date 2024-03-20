import React, {useState} from 'react'
import "./ChatOutput.scss"
import ChatInteractions from '../ChatInteraction/ChatInteractions'

export default function ChatOutput({content}) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className='chatOutput' onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      <p className='chatOutput__content'>{content}</p>
      <ChatInteractions display={mouseOver}/>
    </div>
  )
}