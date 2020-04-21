import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({anecdote, votes}) => (
  <div>
    <h1> Anecdote of the day </h1>
    <p> {anecdote} </p>
    <p> Has {votes} votes </p>
  </div>
)

const Result = ({result, votes}) => (
  <div>
    <h1> Anecdote with most votes </h1>
    <p> {result} </p>
    <p> Has {votes} votes </p>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const copy = [...points]
  let maxIndex = 0

  const randomInteger = (x) => {
    return Math.floor(Math.random() * x)
  }

  const selectAnecdote = () => {
    let value = randomInteger(anecdotes.length)
    console.log('Anecdote ' + value + ' has been selected.')
    setSelected(value)
  }

  const vote = () => {
    copy[selected] += 1
    setPoints(copy)
    console.log('Anecdote ' + selected + ' has ' + copy[selected] + ' votes.')
  } 

  const mostVotes = () => {
    maxIndex = points.indexOf(Math.max(...points))
    return anecdotes[maxIndex]
  }

  return (
    <div>
      <Header anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={vote} text='vote' />
      <Button onClick={selectAnecdote} text='next anecdote' />
      <Result result={mostVotes()} votes={points[maxIndex]}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
