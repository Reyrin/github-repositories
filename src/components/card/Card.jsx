import React from 'react'

function Card(props) {
  return (
    <div>
      <button className="back-btn" onClick={() => props.history.goBack()}>Back</button>
      Card Repo
    </div>
  )
}

export default Card
