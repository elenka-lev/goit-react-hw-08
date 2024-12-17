import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    return (
        <button type='submit' onClick={()=>dispatch(logout())} className={s.btn}>Logout</button>
    )
}

export default UserMenu;