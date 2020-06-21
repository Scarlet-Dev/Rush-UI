import React, {FunctionComponent} from 'react';
import { FormProps, IBaseComponentFactory } from "./baseComponents";
import './index.scss';

/**
 * 
 */
export class FormComponentFactory implements IBaseComponentFactory{
    createComponent(componentType: string, props: FormProps){
        switch(componentType.toLowerCase()){
            case 'input':
                return Input(props);
            case 'label':
                return Label(props);
            case 'text-area':
                return TextArea(props);
            case 'dropdown':
                return Dropdown(props);
            case '':
                return null;
            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }

    getComponentType(component: FunctionComponent){
        return "";

    }
}

/**
 * 
 * @param props 
 */
const Input:FunctionComponent<FormProps> = (props: FormProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let target = event.target;
        console.log(target.value);
        event.preventDefault();
    }

    switch (props.type) {
        case 'text':
            return(
                <input type={props.type} id={props.id} minLength={props.min} maxLength={props.max} 
                placeholder={props.placeholder} onChange={handleChange}/>
            );
        case 'range':
        case 'number':
            return(
                <input type={props.type} id={props.id} min={props.min || 1} max={props.max || 100} 
                step={props.step} onChange={handleChange}/>
            );
        case 'date':
        case 'datetime-local':
        case 'month':
        case 'week':
            return(
                <input type={props.type} id={props.id} min={props.min} max={props.max} onChange={handleChange}/>
            );
        case 'email':
        case 'tel':
            return(
                <input type={props.type} id={props.id} pattern={props.pattern} 
                placeholder={props.placeholder} onChange={handleChange}/>
            );
        case 'password':
        case 'radio':
        case 'checkbox':
        case 'file':
        case 'reset':
        case 'url':
            default:
            return(
                <input type={props.type} id={props.id} onChange={handleChange}/>
            );
    }
}

/**
 * 
 * @param props 
 */
const Label:FunctionComponent<FormProps> = (props: FormProps) =>{
    return(
        <label id={props.id} htmlFor={props.for}>
            {props.text}
        </label>
    )
}

/**
 * 
 * @param props 
 */
const TextArea:FunctionComponent<FormProps> = (props: FormProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let target = event.target;
        console.log(target.value);
        event.preventDefault();
    }
    return(
        <textarea id={props.id} rows={props.rows} cols={props.cols} placeholder={props.placeholder} onChange={handleChange}></textarea>
    )
}

/**
 * 
 * @param props 
 */
const Dropdown: FunctionComponent<FormProps> = (props: FormProps) => {

    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        let target = event.target;
        console.log(target.value)
    }

    let arrayOfData = props.dataArray;
    let options = () => {
        if(arrayOfData){
            return arrayOfData.map(
                (data: any) =>
                {
                    return(
                        <option key={data.id} value={data.value}>
                            {data.name}
                        </option>
                    )
                }
            )
        }
        else{
            return (
                <option>
                    No values in data Array.
                </option>
            )
        }
    }
    
    return(
        <select id={props.id} onChange={handleChange}>
            {options}
        </select>
    )
}
