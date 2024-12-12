import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

const AppBar = () => {
    const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
    return (
        <header className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Phonebook</h2>
                <nav className={s.nav}>
                    <NavLink to="/" className={buildLinkClass}>
              Home
                    </NavLink>
                    <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
                    </NavLink>
                    <NavLink to="/login" className={buildLinkClass}>Login</NavLink>
                    <NavLink to="/register" className={buildLinkClass }>Register</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default AppBar;