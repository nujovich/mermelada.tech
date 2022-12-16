import React from 'react'
import './item.style.css'

function Item({ title, excerpt, category }) {
  return (
    <div className={category}>
      <img
        className='image-blog'
        src='../../../public/default-thumbnail.jpg'
        alt='default' />
      <div className={category+'-description'}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default Item