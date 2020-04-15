import * as React from "react";

// interface Props{
//     name: string;
//     method: () => {};
//     message: string;
//     children: any;
// }

export default class GeneralComponents{
    constructor(){}

    /**
     * @whatItDoes
     * 
     * @param props 
     */
    Button(props: any){
        return(
            <button name={props.name} onClick={props.method || null}>
                {props.message}
            </button>
        );
    }

    /**
     * 
     * @param props 
     */
    Card (props: any){
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
    Collapsible (props: any){
        return(
            <this.Button>
                {props.children ||
                <div>
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
    Comments (props: any){
        return(
            <div>
                <img src={props.src || ''} />
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
    Footer(props: any) {
        return(
            <footer>
                <this.GridBasic>
                    <div>
                        Footer Here
                    </div>
                </this.GridBasic>
            </footer>
        );
    }

    /**
     * 
     * @param props 
     */
    GridBasic(props: any){
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
    Header(props: any){
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
    Loader (props: any){
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
    Modal (props: any){

        return(
            <this.Overlay>
                <div>
                    <h1>{'Modal Header goes here'}</h1>
                    <hr/>
                    <p>{'Enter modal content here'}</p>
                    <div>
                        <this.Button></this.Button>
                        <this.Button></this.Button>
                    </div>
                </div>
            </this.Overlay>
        );
    
    }
    
    /**
     * 
     * @param props 
     */
    Overlay(props: any){
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
    Table (props: any){
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
    Tooltip (props: any){
        return(
            <div className="tooltip">
                {props.message || <span className="tooltiptext">Tooltip Text.</span>}
            </div>
        )
    }
}
