import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';
const AuthNav = () => {
        const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
  return (
    <>
        <NavLink to="/login" className={buildLinkClass}>Login</NavLink>
        <NavLink to="/register" className={buildLinkClass }>Register</NavLink>
    </>
  )
}

export default AuthNav
