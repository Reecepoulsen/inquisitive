import React from 'react'
import "./InteractIcon.scss"

export default function InteractIcon({children, interactFunc}) {
  return (
    <div className='interactIcon' onClick={interactFunc}>{children}</div>
  )
}
