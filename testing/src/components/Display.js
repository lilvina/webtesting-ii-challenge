import React from 'react';

const Display = props => {
  return (
    <div>
      <p>{props.ball}</p>
      <p>{props.strike}</p>
      <p>{props.foul}</p>
      <p>{props.hit}</p>
    </div>

  )
}

export default Display;
