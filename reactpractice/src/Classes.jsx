import React from 'react'
class Student {
    constructor(name,course){
        this.name=name;
        this.course=course;
    }
}
function Classes() {
    const student = new Student("Ramprasad","React JS")
  return (
    <div>
      <h1>ES6 Classes</h1>
      <p>Student Name:{student.name}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}

export default Classes
