import React from "react";
import { FastField , ErrorMessage } from "formik";
import { Fragment } from "react";

const Checkbox = (props)=>{
    const {name , label , options} = props
    return(
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField  className="form-control" id={name} name={name} >
            {   
                ({field})=>{
                    console.log(field);
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input type="checkbox" className=" form-check-input me-4"

                            id={o.value}
                            {...field}
                            value={o.value}
                            checked={o.values.includes(o.values)}/>

                            <label htmlFor={o.values} className=" ms-ms-4">{o.values}</label>

                        </Fragment>
                    ))
                }
                
            }
        </FastField>
        <ErrorMessage name={name}>
            {error => <small className='d-block text-center text-warning'>{error}</small>}
        </ErrorMessage>
    </div>
    )
}

export default Checkbox;