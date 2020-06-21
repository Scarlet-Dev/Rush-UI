import * as React from 'react';
import { NavigationProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";

/**
 * 
 */
export class NavigationComponentFactory implements IBaseComponentFactory{

    createComponent(componentType: string, props: NavigationProps){
        switch(componentType.toLowerCase()){
            case 'basic-nav':
                return this.BasicNav(props);
            case '':
                return null;
            default:
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
        }
    }

    getComponentType(component: JSX.Element){
        return "";
    }

    BasicNav = (props: NavigationProps) => {
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
    
    
    
}
