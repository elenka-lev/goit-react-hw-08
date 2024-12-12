// import s from '../components/App.module.css';
// import Header from './Header/Header';
// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import ContactList from './ContactList/ContactList';
// import Loading from './Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
// import { selectIsLoading } from '../redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

const App = () => {
    // const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/contacts' element={<ContactsPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegistrationPage/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
     
)
}
export default App;

   {/* <>
            <Header />
            <div className={s.container}>
                <ContactForm />
                <SearchBox />
                {isLoading && <Loading/>}
                <ContactList/>
            </div>
        </> */}
