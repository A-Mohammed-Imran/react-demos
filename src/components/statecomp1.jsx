import React from 'react'

const Statecomp1 = ({ count, onClickHandler }) => {
  const handelClick = () => (onClickHandler());
  return (
    <div>
      <p>Number : {count}</p>
      <button onClick={handelClick}>Increment</button>
    </div>
  )
}

export default Statecomp1;