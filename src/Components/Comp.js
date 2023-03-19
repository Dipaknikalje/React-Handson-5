import React from 'react'
import {useState} from 'react'

function Comp() {
    const [name,setName]= useState("")

  return (
    <div>
        <h1>Hi I am {name}</h1>
        <button onClick={()=>setName('Dipak Nikalje')}>Check name</button>
    </div>
  )
}

export default Comp;