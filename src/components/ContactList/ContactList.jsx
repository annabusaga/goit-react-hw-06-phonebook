import React from 'react';
import css from './ContactList.module.css';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);
  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <>
      <ul className={css.list}>
        {getFilteredContacts().map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
}
