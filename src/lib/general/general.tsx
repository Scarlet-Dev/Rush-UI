import * as React from "react";

interface Props{
    name: string;
    method: () => {};
    message: string;
}

export default class GeneralElements{
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
    Card (props: Props){

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
    Table (props: Props){

    }
}
