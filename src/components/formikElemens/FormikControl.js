import React from "react";
import Inpuuut from "./Inpuuut";
import Textarea from "./Textarea";


const FormikControl = (props)=>{
    switch (props.control) {
        case "input":
            return <Inpuuut {...props}/>
        case "textarea":
            return <Textarea {...props}/>
    
        default:
    }
}


export default FormikControl;