import React from 'react';
import { filterContact} from 'components/redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filterEl=useSelector(state=>state.filter.filterel)
  return (
    <label>
      Find contacts by Name
      <input
        type="text"
        value={filterEl}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
