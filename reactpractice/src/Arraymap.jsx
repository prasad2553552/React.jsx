import React from 'react'

function Arraymap () {
    const student = ["Ramprasad","Ravi","Suresh"];
  return (
    <div>
      <h1>Array Map</h1>
      <ul>
        {student.map((student, index)=>(
            <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  )
}

export default Arraymap
