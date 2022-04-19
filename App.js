import React, { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [indexValue, setIndexValue] = useState(0)
  const [vote, setVote] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

  const handleChange = () => {
    setIndexValue(Math.floor(Math.random()*anecdotes.length))
  }

  const onVoteAdd = () => {
    setVote({
    ...vote,
    [indexValue]: vote[indexValue]+1
    })
  }

  const findingMaxValue = () => {
    let max = -1, maxKey = -1

    for(let key in vote) {
      if (vote[key] > max) {
        maxKey = key
        max = vote[key]
      }
    }

    return maxKey
  }

  return (
    <div className="App">
      <h1>Anecdote of the Day . !</h1>
      <p> Vote for a Anecdote to set it as the highest !!! </p>
      <button onClick = {handleChange}>Next Anecdotes...</button> &nbsp;&nbsp;
      <button onClick = {onVoteAdd}>Vote</button>
      <h2>{anecdotes[indexValue]}</h2>
      <h4>Has {vote[indexValue]} Votes</h4>
      <h1>Anecdote with most Votes</h1>
      <h4>{anecdotes[findingMaxValue()]}</h4>
    </div>
  );
}

export default App;
