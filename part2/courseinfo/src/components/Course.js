import React from 'react'
import ReactDOM from 'react-dom'


const Course = (props) => {
  console.log('Course works')
    console.log(props)
    const { course } = props


    const totalAmount = course.parts.reduce((sum, part) =>  sum + part.exercises, 0)
   


    return (
      <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      Total is {totalAmount}
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
        {props.parts.map((part, i) => <Part part={part}/>)}
      </div>
    )
  }
  
  const Part = (props) => {
    console.log(props)
    return (
      <div>
          {props.part.name} {props.part.exercises}
      </div>
    )
  }


  


  


export default Course;
