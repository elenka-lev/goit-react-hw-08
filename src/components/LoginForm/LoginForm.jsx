import s from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";

const LoginForm = () => {
    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(5, 'Name must be at least 5 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Phone must be at least 6 digits'),
});
    const userLogin = useId();
    const userPassword = useId();
    const initialValues = {
        name: '',
        password: '',
    }
    return (
       <div className={s.wrapForm}>
            <h2 className={s.formTitle}>Login to Phonebook</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form className={s.form}>
                    <label className={s.label} htmlFor={userLogin}>Enter your login</label>
                    <Field type='text' className={s.input} name='name' id={userLogin} />
                    <ErrorMessage name="name" component="span" className={s.error} />
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
