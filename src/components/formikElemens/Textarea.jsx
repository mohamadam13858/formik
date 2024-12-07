import React from "react";
import { ErrorMessage , FastField } from "formik";



const Textarea = (props) => {
    const { name , label}= props
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField as="textarea" className="form-control" id={name} name={name}/>
            <ErrorMessage name={name}>
                {error => <small className='d-block text-center text-warning'>{error}</small>}
            </ErrorMessage>
        </div>
    )
}
export default Textarea