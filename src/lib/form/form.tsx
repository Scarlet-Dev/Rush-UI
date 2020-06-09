import React, {FunctionComponent} from 'react';
import './_form.scss';

export interface FormProps{
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
    dataArray: [];
    children?: React.ReactNode;
}


export function Input(props: FormProps): any{
    switch (props.type) {
        case 'text':
            return(
                <input type={props.type} id={props.id} minLength={props.min} maxLength={props.max} 
                placeholder={props.placeholder}/>
            );
        case 'range':
        case 'number':
            return(
                <input type={props.type} id={props.id} min={props.min || 1} max={props.max || 100} 
                step={props.step} />
            );
        case 'date':
        case 'datetime-local':
        case 'month':
        case 'week':
            return(
                <input type={props.type} id={props.id} min={props.min} max={props.max}/>
            );
        case 'email':
        case 'tel':
            return(
                <input type={props.type} id={props.id} pattern={props.pattern} 
                placeholder={props.placeholder}/>
            );
        case 'password':
        case 'radio':
        case 'checkbox':
        case 'file':
        case 'reset':
        case 'url':
            default:
            return(
                <input type={props.type} id={props.id}/>
            );
    }
}


export function Label(props: FormProps){
    return(
        <label id={props.id} htmlFor={props.for}>
            {props.text}
        </label>
    )
}

export function TextArea(props: FormProps){
    return(
        <textarea id={props.id} rows={props.rows} cols={props.cols} placeholder={props.placeholder}></textarea>
    )
}


export function Dropdown(props: FormProps){

    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        let selectedValue = event.target.value;
        props.onSelectChange(selectedValue);
    }

    let arrayOfData = props.dataArray;
    let options = arrayOfData.map(
        (data: any) =>
        {
            return(
                <option key={data.id} value={data.value}>
                {data.name}
                </option>
            )
    });

    return(
        <select id={props.id} onChange={handleChange}>
            {options}
        </select>
    )
}
