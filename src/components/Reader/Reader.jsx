import React, {useState} from 'react'
import HighlightActions from '../HighlightActions/HighlightActions'
import "./Reader.scss"


export default function Reader({content, center}) {
  const [selectedText, setSelectedText] = useState("");

  const getSelectedText = () => {
    let text = "";
    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange().text;
    }
    text = text.toString();
    if (text) console.log(text);
    return text;
  }

  return (
      <div className={`reader ${center ? "center" : ""}`} onMouseUp={() => setSelectedText(getSelectedText())}>
        <HighlightActions selectedText={selectedText}/>
        <div className='contentWrapper'>
          {content}
        </div>
      </div>
    )
}


