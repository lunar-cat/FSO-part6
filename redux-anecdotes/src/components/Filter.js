import { useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const [filter, setFilterValue] = useState('');
  const handleChange = (target) => {
    setFilterValue(target.value);
    props.setFilter(target.value);
  };
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor='filter-input'>Filter</label>
      <input
        id='filter-input'
        type='text'
        value={filter}
        onChange={({ target }) => handleChange(target)}
      />
    </div>
  );
};

const mapDispatch = { setFilter };
const ConnectedFilter = connect(null, mapDispatch)(Filter);
export default ConnectedFilter;