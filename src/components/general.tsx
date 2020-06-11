import React, {FunctionComponent} from "react";
import { GeneralProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";


/**
 * 
 */
export class GeneralComponentFactory implements IBaseComponentFactory{
    createComponent(componentType: string, props:GeneralProps){
        switch (componentType){
            case 'button':{
                return Button(props);
            }
            case 'Card':{
                return Card(props); 
            }

            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }
}

/**
 * @whatItDoes
 * 
 * @param props 
 */
const Button: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Card: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
    return(
        <div className="card">
            {props.children ||
            <span>
                <img src={props.src || ''} alt="Card Avatar" style={{width: '100%'}}/>
                <div className="card-container">
                    <h4></h4>
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
const Collapsible: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Comments: FunctionComponent<GeneralProps> = (props: GeneralProps, opts:any) => {
    return(
        <div>
            <img src={props.src} />
            <div>
                <h1>Username Here</h1>
                <p>Commenter's comment here.</p>
                <i>Like: <span>{opts.count}</span></i>
                <i>Dislike: <span>{opts.count}</span></i>
            </div>
        </div>
    );
}

/**
 * 
 * @param props
 */
const Footer: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Section: FunctionComponent<GeneralProps> = (props:GeneralProps) => {
    return(
        <section>
            <div>
                <h3></h3>
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
const GridBasic: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Header: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
    return(
        <header className="header">
            {props.message || <h1></h1>}
        </header>
    );
}

/**
 * 
 * @param props 
 */
const Loader: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Modal: FunctionComponent<GeneralProps> = (props: GeneralProps) => {

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
const Overlay: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Table: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
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
const Tooltip: FunctionComponent<GeneralProps> = (props: GeneralProps) => {
    return(
        <div className="tooltip">
            {props.message || <span className="tooltiptext">Tooltip Text.</span>}
        </div>
    )
}
