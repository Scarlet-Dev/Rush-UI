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
    Button(props: Props){
        return(
            <button name={props.name} onClick={props.method || null}>
                {props.message}
            </button>
            )
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
    Comments (props: Props){

    }

    /**
     * 
     * @param props
     */
    Footer(props: Props) {
        return(
            <footer>
                <span>
                    Footer Here
                </span>
            </footer>
            )
    }

    /**
     * 
     * @param props 
     */
    GridBasic(props: Props){

    }
    
    /**
     * @whatItDoes Readily available header component
     * 
     * @param props 
     */
    Header(props: Props){
        return(
            <header>
                <h1></h1>
            </header>
        )
    }

    /**
     * 
     * @param props 
     */
    Modal (props: Props){
    
    }
    
    /**
     * 
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

    Tooltip (props: any){
        return(
            <div className="tooltip">
                {props.message || <span className="tooltiptext">Tooltip Text.</span>}
            </div>
        )
    }
}
