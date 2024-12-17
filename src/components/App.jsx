// import s from '../components/App.module.css';
// import Header from './Header/Header';
// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import ContactList from './ContactList/ContactList';
// import Loading from './Loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import Loading from './Loading/Loading';
import { selectIsRefreshig } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));

const App = () => {
    // const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshig)
    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

    return isRefreshing ? <Loading /> : (
        
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegistrationPage/>}/>
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
       </Suspense>
     
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
