import React from 'react'
import '../../Styles/app.css';

function Button({ play, isPlaying }) {
  return (
    <div className='btn-container'>
    <div onClick={play} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
  </div>
  )
}

export default Button