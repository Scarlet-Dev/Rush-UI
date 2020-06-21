import React, {FunctionComponent} from 'react';
import { SpecialProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";

/**
 * 
 */
export class SpecialComponentFactory implements IBaseComponentFactory{
    
    createComponent(componentType: string, props: SpecialProps){
        switch(componentType.toLowerCase()){
            case 'carousel':
                return Carousel(props);
            case 'grid-expanding':
                return GridExpanding(props);
            case 'lightbox':
                return Lightbox(props);
            case 'Tile':
                return Tile(props);
            case '':
                return null;
            default:{
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
            }
        }
    }

    getComponentType(component: FunctionComponent){
        return "";
    }
}

const Carousel: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <div></div>
    );

}

const GridExpanding: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <></>
    )
}

const Lightbox: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return (
        <></>
    )
}

const Tile: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <></>
    )
}

