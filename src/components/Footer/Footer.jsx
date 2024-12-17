import s from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import clsx from 'clsx';
const Footer = () => {
    const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
    return (
        <footer className={s.footer}>
      
      <div className={s.links}>
        <NavLink
          to="https://github.com/elenka-lev"
          target="_blank"
          rel="noopener noreferrer"
          className={buildLinkClass}
        >
          <FaGithub className={s.icon} />
        </NavLink>

        <NavLink
          to="https://www.linkedin.com/in/olena-sorokina-7b4649151/"
          target="_blank"
          rel="noopener noreferrer"
          className={buildLinkClass}
        >
          <FaLinkedin className={s.icon} />
        </NavLink>
            </div>
            <p>© 2024 Olena Sorokina</p>
    </footer>
    )
}

export default Footer;