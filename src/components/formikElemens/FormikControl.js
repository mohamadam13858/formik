import React from "react";
import Inpuuut from "./Inpuuut";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";


const FormikControl = (props)=>{
    switch (props.control) {
        case "input":
            return <Inpuuut {...props}/>
        case "textarea":
            return <Textarea {...props}/>
        case "select":
            return <Select {...props}/>
        case "radio":
            return <Radio {...props}/>
        case "skill":
            return <Checkbox {...props}/>
    
        default:
    }
}


export default FormikControl;