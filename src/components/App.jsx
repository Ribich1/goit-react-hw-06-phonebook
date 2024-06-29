import ContactForm from './ContactForm/ContactForm ';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter ';
import css from './App.module.css';

export default function App() {
 
  // const isFirstRender = useRef(true);
 
  // useEffect(() => {
  //   if (isFirstRender.current && contacts.length === 0) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
    </>
  );
}
