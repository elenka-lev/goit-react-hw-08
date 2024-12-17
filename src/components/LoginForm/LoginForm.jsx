import s from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { login } from '../../redux/auth/operations';
import { selectLoggedIn } from '../../redux/auth/selectors';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelSubmit = (values, options) => {
    dispatch(login(values))
    .unwrap()
      .then(res => {
        toast(`Welcome, ${res?.user?.name}`);
        navigate('/contacts')
      }).catch(() => {
        toast.error('Incorrect email or password. Please try again.')
      });
    options.resetForm()
  }
    const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Name is required')
    .min(5, 'Name must be at least 5 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Phone must be at least 6 digits'),
});
    const userLogin = useId();
    const userPassword = useId();
    const initialValues = {
        email: '',
        password: '',
  }
  
  if (isLoggedIn) {
    return <Navigate to='/contacts'/>
  }
  
    return (
       <div className={s.wrapForm}>
            <h2 className={s.formTitle}>Login to Phonebook</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handelSubmit}>
                <Form className={s.form}>
                    <label className={s.label} htmlFor={userLogin}>Enter your email</label>
                    <Field type='text' className={s.input} name='email' id={userLogin} />
                    <ErrorMessage name="email" component="span" className={s.error} />
                    <label className={s.label} htmlFor={userPassword}>Enter your password</label>
                    <Field type='password' className={s.input} name='password' id={userPassword} />
                    <ErrorMessage name="password" component="span" className={s.error} />
                    <button type='submit' className={s.btn}>Login</button>
                </Form>
        </Formik>
       </div>
)

}

export default LoginForm;
