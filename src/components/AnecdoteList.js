import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
  <div>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    return [...state.anecdotes]
      .filter( anecdote => state.filter ? anecdote.content.includes(state.filter) : true )
      .sort((a,b) => b.votes - a.votes)
  })

  const handleVote = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
  }

  return (
    <div>
      <Filter />
      {anecdotes.map(anecdote => 
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick = {() => handleVote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList