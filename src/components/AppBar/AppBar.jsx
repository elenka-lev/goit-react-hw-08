import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectUser, selectLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const user = useSelector(selectUser);
    


    const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
    return (
        <header className={s.container}>
            {isLoggedIn && <div className={s.user}>Welcome, {user.name}!</div>}
            <div className={s.wrapper}>
                <h2 className={s.title}>Phonebook</h2>
                <nav className={s.nav}>
                    <NavLink to="/" className={buildLinkClass}>
              Home
                    </NavLink>
                    <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
                    </NavLink>
                    {!isLoggedIn && (
                    <>
                        <NavLink to="/login" className={buildLinkClass}>Login</NavLink>
                        <NavLink to="/register" className={buildLinkClass }>Register</NavLink>
                        </>)}
                    {isLoggedIn && <UserMenu/>}
                </nav>
            </div>
        </header>
    )
}

export default AppBar;