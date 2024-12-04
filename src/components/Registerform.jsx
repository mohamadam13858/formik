import React from 'react';
import { ErrorMessage, FastField, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import PersonField from './PersonField';
import Favoritsfield from './Favoritsfield';
import PersonError from './PersonError';

const RegisterForm = () => {

    const initialValues = {
        name: 'qasem',
        email: '',
        password: '',
        bio: '',
        address: {
            city: '',
            postalcode: '',
        },
        phone: ['', ''],
        favorits: ['']
    };

    const onSubmit = (values, submitProps) => {
        console.log(values);
        setTimeout(() => {
            submitProps.setSubmitting(false);
        }, 5000);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('لطفا این قسمت را پر کنید'),
        email: Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را درست وارد کنید مثال : mh711748@gmail.com"),
        password: Yup.string().required('لطفا این قسمت را پر کنید').min(8, "لطفا هشت کاراکتر بزنید"),
        bio: Yup.string().required('لطفا این قسمت را پر کنید'),
        address: Yup.object({
            city: Yup.string().required('لطفا این قسمت را پر کنید'),
            postalcode: Yup.string().required('لطفا این قسمت را پر کنید')
        }),
        phone: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید')),
        favorits: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید'))
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formik => (
                <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                    <div className="row w-100 justify-content-center align-items-center">
                        <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                            <Form className='row'>
                                <h1 className='text-center'>
                                    <i className='fas fa-user-plus text-primary'></i>
                                </h1>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">نام</label>
                                    <FastField type="text" className="form-control" id="name" name='name' />
                                    <ErrorMessage name='name'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">ایمیل</label>
                                    <FastField type="email" className="form-control" id="email" name='email' />
                                    <ErrorMessage name='email'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">رمز عبور</label>
                                    <FastField name='password'>
                                        {props => <PersonField {...props} />}
                                    </FastField>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bio" className="form-label">بیوگرافی</label>
                                    <FastField type="text" className="form-control" id="bio" name='bio' component="textarea" />
                                    <ErrorMessage name='bio'>
                                        {error => <small className='d-block text-center text-warning'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="postalcode" className="form-label">کد پستی</label>
                                    <FastField type="text" className="form-control" id="postalcode" name='address.postalcode' />
                                    <ErrorMessage name='address.postalcode'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="city" className="form-label">شهر</label>
                                    <FastField type="text" className="form-control" id="city" name='address.city' />
                                    <ErrorMessage name='address.city'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="phone[0]" className="form-label">تلفن</label>
                                    <FastField type="text" className="form-control" id="phone[0]" name='phone[0]' />
                                    <ErrorMessage name='phone[0]'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="phone[1]" className="form-label">تلفن1</label>
                                    <FastField type="text" className="form-control" id="phone[1]" name='phone[1]' />
                                    <ErrorMessage name='phone[1]'>
                                        {error => <small className='d-block text-center text-danger'>{error}</small>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <FieldArray name='favorits'>
                                        {props => <Favoritsfield {...props} />}
                                    </FieldArray>
                                </div>
                                <div className='text-center w-100'>
                                    <button type="submit" className="btn btn-primary" disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
                                        {
                                            formik.isSubmitting ? (
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : 
                                            ("ثبت نام")
                                        }
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    );
}

export default RegisterForm;
