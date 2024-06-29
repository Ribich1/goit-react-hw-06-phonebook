import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/phonebookSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filterel).toLowerCase();
  const contactAll = useSelector(state => state.phonebook);
  const contactFilter=contactAll.filter(contact=>contact.name.toLowerCase().includes(filter))
  return(
  <div>
    <ul className="ContactsList">
      {contactFilter.map(({ id, name, number }) => (
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
