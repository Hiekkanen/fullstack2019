import React from 'react'


const Course = (props) => {
  console.log('Course works')
  console.log(props)
  const { course } = props
  //const totalAmount = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div key={props.id}>
      <div><Header course={course} /></div>
      <div><Content parts={course.parts} /></div>
      <div><Total course={course} /></div>
    </div>
  )

}

const Header = (props) => {
  console.log('Header works')
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  console.log('content works')
  console.log(props)
  return (
    <div>
      {props.parts.map(part => <Part part={part} key={part.id} />)}
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  
  return (
    <div key={props.id}>
      {props.part.name} {props.part.exercises} 
    </div>
  )
}

const Total = (props) => {
  const course = props.course
  const totalAmount = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <b>total of {totalAmount} exercises</b>
}



export default Course;
