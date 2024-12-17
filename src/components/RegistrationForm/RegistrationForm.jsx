import s from './RegistrationForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    //unwrap перевіряє, чи новий користувач, буде або помилка, або перехід до контактів 
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast(`Welcome, ${res?.user?.name}`);
        navigate('/contacts')
      }).catch(() => {
        toast.error('There is such a user, try again or login')
      });
    options.resetForm()
  }

    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
            .min(3, 'Name must be at least 3 characters'),
  email: Yup.string()
    .email('Enter a valid e-mail address')
    .required('This field is required'),
  password: Yup.string()
    .required('Password is required')
            .min(6, 'Phone must be at least 6 digits'),
  
});
    const userLogin = useId();
    const userPassword = useId();
  const userName = useId()
  
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }
    return (
       <div className={s.wrapForm}>
            <h2 className={s.formTitle}>Register a new account</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <label className={s.label} htmlFor={userName}>Enter your name</label>
                    <Field type='text' className={s.input} name='name' id={userName} />
                    <ErrorMessage name="password" component="span" className={s.error} />

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

export default RegistrationForm;