import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <span>
      <button onClick={onClick}>
        {text}
      </button>
      &nbsp;  
    </span>
  )
}

const Feedback = ({submits}) => {
  return (
    <>
      <h1> Feedback </h1>
      <Button onClick={submits.submitGood} text='good' />
      <Button onClick={submits.submitNeutral} text='neutral' />
      <Button onClick={submits.submitBad} text='bad' />
    </>
  )
}

const Statistic = ({value, text}) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  if (stats.all === 0) {
    return (
      <>
        <h1> Statistics </h1>
        <p> No feedback given. </p>
      </>
    )
  }
  
  return (
    <>
      <h1> Statistics </h1>
      <table>
        <tbody>
          <Statistic text='Good: ' value={stats.good}/>
          <Statistic text='Neutral: ' value={stats.neutral}/>
          <Statistic text='Bad: ' value={stats.bad}/>
          <Statistic text='All: ' value={stats.all}/>
          <Statistic text='Average: ' value={stats.average}/>
          <Statistic text='Positive: ' value={stats.positive}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = () => {
    return good + neutral + bad
  }

  const average = () => {
    return (good - bad) / all()
  }

  const positive = () => {
    return (100 * good / all()) + '%'
  }

  const submitGood = () => {
    setGood(good + 1)
  }

  const submitNeutral = () => {
    setNeutral(neutral + 1)
  }

  const submitBad = () => {
    setBad(bad + 1)
  }

  const submits = {
    submitGood: submitGood,
    submitNeutral: submitNeutral,
    submitBad: submitBad
  }

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all(),
    average: average(),
    positive: positive()
  }

  return (
    <div>
      <Feedback submits={submits} />
      <Statistics stats={stats} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)