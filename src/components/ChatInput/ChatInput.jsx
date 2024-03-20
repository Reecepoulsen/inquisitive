import React from 'react'
import "./ChatInput.scss";

export default function ChatInput() {
  return (
    <div className='chatInput'>
      <input className='chatInput__input' type="text" placeholder='Ask me a question'/>
    </div>
  )
}

