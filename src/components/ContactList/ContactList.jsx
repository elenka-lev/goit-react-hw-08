import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/contacts/selectors';


const ContactList = () => {
   
    
    const filter = useSelector(selectFilteredContacts);
    
    return (
        <div className={s.container}>
            <ul className={s.wrapper}>
                {filter.map((contact) => (
                    <li key={contact.id} className={s.item}>
                        <Contact contact={contact} id={contact.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactList;