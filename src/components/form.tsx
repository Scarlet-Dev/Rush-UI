import React, {FunctionComponent} from 'react';
import './_form.scss';

/**
 * 
 */
export type FormProps = {
    id?: string;
    type?: string;
    for?: string;
    text?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    pattern?: string;
    rows?: number;
    cols?: number;
    dataArray?: [];
    children?: React.ReactNode;
}

/**
 * 
 * @param props 
 */
export const Input:FunctionComponent<FormProps> = (props: FormProps) => {
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
export const Label:FunctionComponent<FormProps> = (props: FormProps) =>{
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
export const TextArea:FunctionComponent<FormProps> = (props: FormProps) => {
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
export const Dropdown: FunctionComponent<FormProps> = (props: FormProps) => {

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
