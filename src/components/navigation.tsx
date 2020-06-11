import React, {FunctionComponent} from 'react';
import "./index.scss";

interface INavigationFactory{
    createComponent(componentType:string, props:NavigationProps) : React.ReactElement | null;
}
const BasicNav:FunctionComponent<any> = () => {
    return(
        <>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </>
    )
}


