import React from 'react'

function Comp2(props) {
  return (
    <>
    <div style={{color:"purple"}}>
    <props.data/>
    </div>
    <div style={{color:"orange"}}>
    <props.data/>
    </div>
    
    </>
  )
}

export default Comp2;