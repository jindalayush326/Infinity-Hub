import React from 'react'
import "./Content.css"
import { img_300,unavailable } from '../config'
import Model from './Model'

const Content = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
  return (
    

    <Model media_type={media_type} id={id}>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {vote_average}
   
  </span>

      <img className="poster" src={poster?`${img_300}/${poster}` : unavailable} alt={title}/>
      <b className="title">{title}</b>
      <span className='sunTitle'>
        {media_type==='tv'?"TV Series":"Movie"}
      </span>
      <span className='sunTitle'>
{date}
      </span>
    </Model>
  )
}

export default Content
