import React from "react";
import { FastField , ErrorMessage } from "formik";


const Inpuuut = (props) => {
    const {name , type , label} = props
        return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" id={name} name={name} />
            <ErrorMessage name={name}>
                {error => <small className='d-block text-center text-danger'>{error}</small>}
            </ErrorMessage>
        </div>
    )
}
export default Inpuuut