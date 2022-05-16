const baseUrl = 'http://localhost:3001/anecdotes';
const headers = new Headers({ 'Content-Type': 'application/json' });

const getAll = async () => {
  const response = await fetch(baseUrl);
  if (response.ok) return response.json();
  else console.log(response.statusText);
};

const create = async (content) => {
  const object = { content, votes: 0 };
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(object)
  });
  if (response.ok) return response.json();
  else console.log(response.statusText);
};

const upvote = async (anecdote) => {
  const { id, votes } = anecdote;
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ votes: votes + 1 })
  });
  if (response.ok) return response.json();
  else console.log(response.statusText);
};

const anecdotesService = { getAll, create, upvote };
export default anecdotesService;