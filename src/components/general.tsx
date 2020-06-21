import * as React from "react";
import { GeneralProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";


/**
 * 
 */
export class GeneralComponentFactory implements IBaseComponentFactory{
    createComponent(componentType: string, props:GeneralProps){
        switch (componentType.toLowerCase()){
            case 'button':
                return this.Button(props);
            case 'card':
                return this.Card(props); 
            case 'collapsible':
                return this.Collapsible(props);
            case 'comments':
                return this.Comments(props);
            case 'footer':
                return this.Footer(props);
            case 'section':
                return this.Section(props);
            case 'grid-basic':
                return this.GridBasic(props);
            case 'header':
                return this.Header(props)
            case 'loader':
                return this.Loader(props);
            case 'modal':
                return this.Modal(props);
            case 'overlay':
                return this.Overlay(props);
            case 'table':
                return this.Table(props);
            case 'tooltip':
                return this.Tooltip(props)
            case '':
                return null;
            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }

    getComponentType(component: JSX.Element){
        return "";
    }


    /**
     * @whatItDoes
     * 
     * @param props 
     */
    Button = (props: GeneralProps) => {
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
    Card = (props: GeneralProps) => {
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
    Collapsible = (props: GeneralProps) => {
        return(
            <this.Button onClick={props.onClick}>
                {props.children ||
                <div >
                    {props.message || <p>Content here.</p>}
                </div>
                }
            </this.Button>
        );
    }

    /**
     * 
     * @param props 
     */
    Comments = (props: GeneralProps) => {
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
    Footer = (props: GeneralProps) => {
        return(
            <footer>
                <this.GridBasic>
                    <div>
                        {props.message}
                    </div>
                </this.GridBasic>
            </footer>
        );
    }

    /**
     * 
     * @param props 
     */
    Section = (props:GeneralProps) => {
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
    GridBasic = (props: GeneralProps) => {
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
    Header = (props: GeneralProps) => {
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
    Loader = (props: GeneralProps) => {
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
    Modal = (props: GeneralProps) => {

        return(
            <this.Overlay onClick={props.onClick}>
                <div>
                    <h1>{'Modal Header goes here'}</h1>
                    <hr/>
                    <p>{'Enter modal content here'}</p>
                    <div>
                        <this.Button onClick={props.onClick}></this.Button>
                        <this.Button onClick={props.onClick}></this.Button>
                    </div>
                </div>
            </this.Overlay>
        );

    }

    /**
     * 
     * @param props 
     */
    Overlay = (props: GeneralProps) => {
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
    Table = (props: GeneralProps) => {
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
    Tooltip = (props: GeneralProps) => {
        return(
            <div className="tooltip">
                {props.message || <span className="tooltiptext">Tooltip Text.</span>}
            </div>
        )
    }
}
