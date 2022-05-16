import { useState } from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const AnecdoteForm = () => {
  const [anecdote, setAnecdote] = useState('');
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    dispatch(createAnecdote(anecdote));
    setAnecdote('');
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            value={anecdote}
            onChange={({ target }) => setAnecdote(target.value)} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;