import React from 'react'
import "./ChatInteractions.scss"
import InteractIcon from '../InteractIcon/InteractIcon'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ChatInteractions({display}) {
  return (
    <div className={`chatInteractions` + (display ? "" : ` fadeOut`)}>
      <InteractIcon>
        <ThumbUpOffAltIcon fontSize='small'/>
      </InteractIcon>
      <InteractIcon>
        <ThumbDownOffAltIcon fontSize='small'/>
      </InteractIcon>
      <InteractIcon>
        <ContentCopyIcon fontSize='small'/>
      </InteractIcon>
    </div>
  )
}

