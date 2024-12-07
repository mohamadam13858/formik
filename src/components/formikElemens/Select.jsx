import React from "react";
import { FastField , ErrorMessage } from "formik";


const Select = (props) => {
    const {name , label , options} = props
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField as="select" className="form-control" id={name} name={name} >
                {
                options.map(o=>(
                <option key={o.id} value={o.id}>{o.values}</option>
                ))
                }
            </FastField>
            <ErrorMessage name={name}>
                {error => <small className='d-block text-center text-warning'>{error}</small>}
            </ErrorMessage>
        </div>
    )
}

export default Select;