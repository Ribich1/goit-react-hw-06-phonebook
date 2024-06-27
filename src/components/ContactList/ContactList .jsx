import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/phonebookSlice';

const ContactList = ({ onDeleteContact }) => {
  const dispatch = useDispatch();
  return(
  <div>
    <ul className="ContactsList">
      {useSelector(state => state.phonebook).map(({ id, name, number }) => (
        <li key={id} className={css.ContactsList__item}>
          {name}: {number}
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css.BtnDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>);
};

export default ContactList;
