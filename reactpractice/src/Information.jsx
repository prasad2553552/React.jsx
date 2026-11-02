import React from 'react'

function Information() {
  const studentName = "Ramprasad";
  const course = "React JS";
  const age = 27;
  return (
    <div>
      <h1>Student Details</h1>
      <h2>name:{studentName}</h2>
      <p>course:{course}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default Information


