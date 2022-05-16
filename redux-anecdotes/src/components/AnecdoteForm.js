import { useState } from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  const [anecdote, setAnecdote] = useState('');
  const addAnecdote = (event) => {
    event.preventDefault();
    props.createAnecdote(anecdote);
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

const mapDispatch = { createAnecdote };
const ConnectedAnecdoteForm = connect(null, mapDispatch)(AnecdoteForm);
export default ConnectedAnecdoteForm;