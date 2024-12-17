import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import Loading from './Loading/Loading';
import { selectIsRefreshig } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));

const App = () => {
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
                    <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
                    <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />}/>
                    <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />}/>
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
       </Suspense>
     
)
}
export default App;
