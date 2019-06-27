import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h2>give feedback</h2>
      <Button label="good" onClick={() => setGood(good + 1)} />
      <Button label="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button label="bad" onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}





const Button = (props) => (
  <button onClick={props.onClick}>{props.label}</button>
)



const Statistics = (props) => {

  let totalClicks = (props.good + props.neutral + props.bad);
  //variable to calculate total clicks

  if (totalClicks === 0) {
    return (
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><Statistic text="good" value={props.good} /></tr>
          <tr><Statistic text="neutral" value={props.neutral} /></tr>
          <tr><Statistic text="bad" value={props.bad} /></tr>
          <tr><Statistic text="all" value={totalClicks} /></tr>
          <tr><Statistic text="average" value={roundNumber((props.good + -props.bad) / totalClicks)} /></tr>
          <tr><Statistic text="positive" value={roundNumber(100 * props.good / totalClicks) + " %"} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const roundNumber = (num) => {
  // a helper function to round the numbers
  return Math.round(10 * num) /10
}


const Statistic = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}




ReactDOM.render(<App />,
  document.getElementById('root')
)