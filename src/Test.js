import React from 'react'
import array from './Array'


const Test = () => {
 
  return (
    <div>
      {array.map((item)=>(
        <div key={item.id}>
          <h1>{item.Name} {item.LastName} {item.Degree} {item.age}</h1>
          <button> {item.age>=18 ? "Watch" : "Not Available"} </button>
        </div>
      ))}
    </div>
  )
}

export default Test
