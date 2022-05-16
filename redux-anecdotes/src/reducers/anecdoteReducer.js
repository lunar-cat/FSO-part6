import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotes';

const initialState = [];
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(a => a.id === id);
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      };
      return state.map(a => a.id !== id ? a : changedAnecdote);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    modifyAnecdote(state, action) {
      const modifiedAnecdote = action.payload;
      const { id } = modifiedAnecdote;
      return state.map(a => a.id !== id ? a : modifiedAnecdote);
    }
  }
});
export const { setAnecdotes, appendAnecdote, modifyAnecdote } = anecdoteSlice.actions;
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};
export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const modifiedAnecdote = await anecdotesService.upvote(anecdote);
    dispatch(modifyAnecdote(modifiedAnecdote));
  };
};
export default anecdoteSlice.reducer;