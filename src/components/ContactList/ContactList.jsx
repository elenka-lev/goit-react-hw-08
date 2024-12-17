import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';


const ContactList = () => {
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    const filter = useSelector(selectFilteredContacts);
    
    return (
        <div className={s.container}>
            <ul className={s.wrapper}>
                {filter.map((contact) => (
                    <li key={contact.id} className={s.item}>
                        <Contact name={contact.name} number={contact.number} id={contact.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactList;