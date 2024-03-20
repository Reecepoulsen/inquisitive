import React from 'react'
import "./HighlightActions.scss"
import InteractIcon from '../InteractIcon/InteractIcon'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TryIcon from '@mui/icons-material/Try';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const basicFunc = () => console.log("Hello world");

export default function HighlightActions({selectedText, setCenter}) {
  return (
    <div className={`highlightActions ${selectedText ? "" : "fadeOut"}`}>
      <InteractIcon interactFunc={() => setCenter(false)}> 
        <TryIcon fontSize='small'/>
      </InteractIcon > 
      <InteractIcon interactFunc={basicFunc}> 
        <NoteAddIcon fontSize='small'/>
      </InteractIcon> 
      <InteractIcon interactFunc={basicFunc}> 
        <DriveFileRenameOutlineIcon fontSize='small'/>
      </InteractIcon> 
    </div>
  )
}