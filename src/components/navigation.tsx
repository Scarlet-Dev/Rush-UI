import React, {FunctionComponent} from 'react';
import { NavigationProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";

/**
 * 
 */
export class NavigationComponentFactory implements IBaseComponentFactory{

    createComponent(componentType: string, props: NavigationProps){
        switch(componentType.toLowerCase()){
            case 'basic-nav':
                return BasicNav(props);
            case '':
                return null;
            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }
}

const BasicNav: FunctionComponent<any> = () => {
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


