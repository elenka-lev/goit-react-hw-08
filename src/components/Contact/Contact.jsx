import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number}) => {
    const dispatch = useDispatch();

    return (
        <ul className={s.wrap}>
            
            <li className={s.item}>
                <div className={s.container}>
                    <p className={s.name}>{name}</p>
                    <p className={s.phone}>{number}</p>
                </div>
                <div className={s.descr}>
                    <button className={s.btn} type='submit' onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </div>
            </li>
            
        </ul>
    )
}

export default Contact