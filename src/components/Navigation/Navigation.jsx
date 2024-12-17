import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/selectors';
const Navigation = () => {
    const isLoggedIn = useSelector(selectLoggedIn)
     const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
    return (
       <>
            <NavLink to="/" className={buildLinkClass}>
                  Home
            </NavLink>
            {isLoggedIn &&
                <NavLink to="/contacts" className={buildLinkClass}>
                    Contacts
                </NavLink>}
       </>
    )
}

export default Navigation;