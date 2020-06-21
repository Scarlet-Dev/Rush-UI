import React from "react";
import { GeneralProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";


/**
 * 
 */
export class GeneralComponentFactory implements IBaseComponentFactory{
    createComponent(componentType: string, props:GeneralProps){
        switch (componentType.toLowerCase()){
            case 'button':
                return Button(props);
            case 'card':
                return Card(props); 
            case 'collapsible':
                return Collapsible(props);
            case 'comments':
                return Comments(props);
            case 'footer':
                return Footer(props);
            case 'section':
                return Section(props);
            case 'grid-basic':
                return GridBasic(props);
            case 'header':
                return Header(props)
            case 'loader':
                return Loader(props);
            case 'modal':
                return Modal(props);
            case 'overlay':
                return Overlay(props);
            case 'table':
                return Table(props);
            case 'tooltip':
                return Tooltip(props)
            case '':
                return null;
            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }

    getComponentType(component: JSX.Element){
        return "";
    }
}

/**
 * @whatItDoes
 * 
 * @param props 
 */
const Button = (props: GeneralProps) => {
    return(
        <button name={props.name} onClick={props.onClick}>
            {props.message}
        </button>
    );
}

/**
 * 
 * @param props 
 */
const Card  = (props: GeneralProps) => {
    return(
        <div className="card">
            {props.children ||
            <span>
                <img src={props.src || ''} alt="Card Avatar" style={{width: '100%'}}/>
                <div className="card-container">
                    <h4>Card Title</h4>
                    <p>Card content goes here.</p>
                </div>
            </span>
        }
        </div>
    );
}

/**
 * 
 * @param props 
 */
const Collapsible  = (props: GeneralProps) => {
    return(
        <Button onClick={props.onClick}>
            {props.children ||
            <div >
                {props.message || <p>Content here.</p>}
            </div>
            }
        </Button>
    );
}

/**
 * 
 * @param props 
 */
const Comments  = (props: GeneralProps) => {
    return(
        <div>
            <img src={props.src} alt='Alt here'/>
            <div>
                <h1>Username Here</h1>
                <p>Commenter's comment here.</p>
                <i>Like: <span>{props.value}</span></i>
                <i>Dislike: <span>{props.value}</span></i>
            </div>
        </div>
    );
}

/**
 * 
 * @param props
 */
const Footer  = (props: GeneralProps) => {
    return(
        <footer>
            <GridBasic>
                <div>
                    {props.message}
                </div>
            </GridBasic>
        </footer>
    );
}

/**
 * 
 * @param props 
 */
const Section  = (props:GeneralProps) => {
    return(
        <section>
            <div>
                <h3>Section Title</h3>
            </div>
            <div>
                {props.children}
            </div>
        </section>
    )
}

/**
 * 
 * @param props 
 */
const GridBasic  = (props: GeneralProps) => {
    return(
        <div className="grid-row">
            <div className="grid-column"></div>
            <div className="grid-column"></div>
            <div className="grid-column"></div>
        </div>
    );

}

/**
 * @whatItDoes Readily available header component
 * 
 * @param props 
 */
const Header  = (props: GeneralProps) => {
    return(
        <header className="header">
            {props.message || <h1>Header Title</h1>}
        </header>
    );
}

/**
 * 
 * @param props 
 */
const Loader  = (props: GeneralProps) => {
    return(
        <div className="loader">
            {props.children}
        </div>
    );
}

/**
 * 
 * @param props 
 */
const Modal  = (props: GeneralProps) => {

    return(
        <Overlay onClick={props.onClick}>
            <div>
                <h1>{'Modal Header goes here'}</h1>
                <hr/>
                <p>{'Enter modal content here'}</p>
                <div>
                    <Button onClick={props.onClick}></Button>
                    <Button onClick={props.onClick}></Button>
                </div>
            </div>
        </Overlay>
    );

}

/**
 * 
 * @param props 
 */
const Overlay  = (props: GeneralProps) => {
    return(
    <div className="overlay">
        {props.children}
    </div>
    );
}

/**
 * 
 * @param props
 */
const Table  = (props: GeneralProps) => {
    return(
        <table className="table">
            <caption></caption>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    )
}

/**
 * 
 * @param props 
 */
const Tooltip  = (props: GeneralProps) => {
    return(
        <div className="tooltip">
            {props.message || <span className="tooltiptext">Tooltip Text.</span>}
        </div>
    )
}
