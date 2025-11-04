import React from 'react'
import './card.css'
function card(props) {
  return (
    <div id='crt'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s" alt="" />
      <h1>{props.name} </h1>
      <h1>{props.edu}</h1>
    </div>
  )
}

export default card
