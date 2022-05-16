import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilterValue] = useState('');
  useEffect(() => {
    dispatch(setFilter(filter));
  }, [dispatch, filter]);
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor='filter-input'>Filter</label>
      <input
        id='filter-input'
        type='text'
        value={filter}
        onChange={({ target }) => setFilterValue(target.value)}
      />
    </div>
  );
};

export default Filter;