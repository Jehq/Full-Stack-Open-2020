import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>
        console.log(props)
        {props.course.name}
      </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const p = props.course.parts
  return (
    <>
      <Part part={p[0].name} exercises={p[0].exercises} />
      <Part part={p[1].name} exercises={p[1].exercises} />
      <Part part={p[2].name} exercises={p[2].exercises} />
    </>
  )
}

const Total = (props) => {
  const p = props.course.parts
  return (
    <>
      <p>
        Number of exercises {p[0].exercises + p[1].exercises + p[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
