import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectUser, selectLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';


const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const user = useSelector(selectUser);
    
    return (
       <>
            <header className={s.container}>
                {isLoggedIn && <div className={s.user}>Welcome, {user.name}!</div>}
                <div className={s.wrapper}>
                    <h2 className={s.title}>Phonebook</h2>
                    <nav className={s.nav}>
                        <Navigation />
                        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                    </nav>
                </div>
            </header>
            
       </>
    )
}

export default AppBar;