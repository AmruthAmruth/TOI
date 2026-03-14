import React from 'react'

const Chiled = ({send}) => {
    const handleClick=()=>{
        send("Hello from Chiled")
    }
  return (
    <div>
        <h1>I'm Chiled</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Chiled