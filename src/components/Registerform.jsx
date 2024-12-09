import React, { useEffect, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Favoritsfield from './Favoritsfield';
import FormikControl from './formikElemens/FormikControl';

const RegisterForm = () => {
    const [savedData, setSavedData] = useState(null);
    

    const initialValues = {
        name: '',
        email: '',
        password: '',
        bio: '',
        address: {
            city: '',
            postalcode: '',
        },
        phone: ['', ''],
        favorits: [''],
        education: 1 , 
        gender:1,
        skills:[]

    };
    const education = [
        {id:1 , values:"ابتدایی"},
        {id:2 , values:"سیکل"},
        {id:3 , values:"دیپلم"},
        {id:4 , values:"لیسانس"},
    ]

    const gender = [
        {id:1 , values:"مرد"},
        {id:2 , values:"زن"}
    ]

    const skills = [
        {id:1 , values:'html'},
        {id:2 , values:'css'},
        {id:3 , values:'js'},
        {id:4 , values:'react'}
    ]

    const handleSaveData = (formik) => {
        localStorage.setItem('savedData', JSON.stringify(formik.values));
    };

    const handleGetSaveData = (setValues) => {
        if (savedData) {
            setValues(savedData);
        }
    };

    useEffect(() => {
        const localSavedData = JSON.parse(localStorage.getItem('savedData'));
        setSavedData(localSavedData);
    }, []);

    const onSubmit = (values, submitProps) => {
        console.log(values);
        setTimeout(() => {
            submitProps.setSubmitting(false);
            submitProps.resetForm(); // Reset the form after submission
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
                                <FormikControl
                                    control="input"
                                    type="text"
                                    label="نام"
                                    name="name" />
                                <FormikControl
                                    control="input"
                                    type="email"
                                    label="ایمیل"
                                    name="email" />
                                <FormikControl
                                    control="input"
                                    type="password"
                                    label="رمز عبور"
                                    name="password" />
                                <FormikControl
                                    control="textarea"
                                    label="بیوگرافی"
                                    name="bio" />
                                <div className=' col-6'>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="گد پستی"
                                        name="address.postalcode" />
                                </div>
                                <div className=' col-6'>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="شهر"
                                        name="address.city" />
                                </div>
                                <div className=' col-6'>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="تلفن"
                                        name="phone[0]" />
                                </div>
                                <div className=' col-6'>
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="تلفن1"
                                        name="phone[1]" />
                                </div>
                                <FormikControl
                                    control="select"
                                    label="تحصیلات"
                                    name="education"
                                    options={education} />
                                <FormikControl
                                    control="radio"
                                    label="جنسیت"
                                    name="radio"
                                    options={gender} />
                                <FormikControl
                                    control="checkbox"
                                    label="تخصص"
                                    name="skill"
                                    options={skills} />
                                    

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
                                    {(formik.isValid && formik.dirty) ? (
                                        <button type='button' className=' btn btn-warning mx-3' onClick={() => handleSaveData(formik)}>ذخیره فرم</button>
                                    ) : null}
                                    {savedData ? (
                                        <button type='button' className=' btn btn-success mx-3' onClick={() => handleGetSaveData(formik.setValues)}>پر شدن فرم</button>
                                    ) : null}
                                    {formik.dirty ? (
                                        <button type='reset' className=' btn btn-danger mx-3'>پاکسازی</button>
                                    ) : null}
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
