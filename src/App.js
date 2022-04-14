import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('content', content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: { content }
    })
  }

  return (
    <div>
      <Anecdotes />
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App