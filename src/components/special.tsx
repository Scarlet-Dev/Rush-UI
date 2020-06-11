import React, {FunctionComponent} from 'react';
import { SpecialProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";

/**
 * 
 */
export class SpecialComponentFactory implements IBaseComponentFactory{
    
    createComponent(componentType: string, props: SpecialProps){
        switch(componentType){
            case 'carousel':{
                return Carousel(props);
            }
            case 'grid-expanding':{
                return GridExpanding(props);
            }
            case 'lightbox':{
                return Lightbox(props);
            }
            case 'Tile':{
                return Tile(props);
            }
            default:{
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
            }
        }
    }
}


export const Carousel: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <div></div>
    );

}

export const GridExpanding: FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <></>
    )
}

export const Lightbox:FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return (
        <></>
    )
}

export const Tile:FunctionComponent<SpecialProps> = (props: SpecialProps) => {
    return(
        <></>
    )
}

