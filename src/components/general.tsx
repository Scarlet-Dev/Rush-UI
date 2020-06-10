import * as React from "react";
import "./index.scss";

export interface GeneralProps{
    name?: string;
    onClick?: () => {};
    message?: string;
    src?: string;
    children?: React.ReactNode;
}


/**
 * @whatItDoes
 * 
 * @param props 
 */
export function Button(props: GeneralProps){
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
export function Card (props: GeneralProps){
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
export function Collapsible (props: GeneralProps){
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
export function Comments (props: any){
    return(
        <div>
            <img src={props.src} />
            <div>
                <h1>Username Here</h1>
                <p>Commenter's comment here.</p>
                <i>Like: <span>{props.count}</span></i>
                <i>Dislike: <span>{props.count}</span></i>
            </div>
        </div>
    );
}

/**
 * 
 * @param props
 */
export function Footer(props: any) {
    return(
        <footer>
            <GridBasic>
                <div>
                    {props.footerText}
                </div>
            </GridBasic>
        </footer>
    );
}

/**
 * 
 * @param props 
 */
export function Section(props:GeneralProps){
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
export function GridBasic(props: GeneralProps){
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
export function Header(props: GeneralProps){
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
export function Loader (props: GeneralProps){
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
export function Modal (props: GeneralProps){

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
export function Overlay(props: GeneralProps){
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
export function Table (props: GeneralProps){
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
export function Tooltip (props: GeneralProps){
    return(
        <div className="tooltip">
            {props.message || <span className="tooltiptext">Tooltip Text.</span>}
        </div>
    )
}
