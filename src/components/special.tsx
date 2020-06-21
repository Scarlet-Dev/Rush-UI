import * as React from 'react';
import { SpecialProps, IBaseComponentFactory } from "./baseComponents";
import "./index.scss";

/**
 * 
 */
export class SpecialComponentFactory implements IBaseComponentFactory{
    
    createComponent(componentType: string, props: SpecialProps){
        switch(componentType.toLowerCase()){
            case 'carousel':
                return this.Carousel(props);
            case 'grid-expanding':
                return this.GridExpanding(props);
            case 'lightbox':
                return this.Lightbox(props);
            case 'Tile':
                return this.Tile(props);
            case '':
                return null;
            default:{
                return (<>Unable to find {componentType}, please be sure this type exists or create an extension of it.</>)
            }
        }
    }

    getComponentType(component: JSX.Element){
        return "";
    }

    /**
     * 
     * @param props 
     */
     Carousel = (props: SpecialProps) => {
        return(
            <div></div>
        );
    
    }
    
    /**
     * 
     * @param props 
     */
     GridExpanding = (props: SpecialProps) => {
        return(
            <></>
        )
    }
    
    /**
     * 
     * @param props 
     */
     Lightbox = (props: SpecialProps) => {
        return (
            <></>
        )
    }
    
    /**
     * 
     * @param props 
     */
    Tile = (props: SpecialProps) => {
        return(
            <></>
        )
    }
      
}
