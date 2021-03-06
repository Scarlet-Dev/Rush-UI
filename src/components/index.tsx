import React from 'react';
import {GeneralComponentFactory} from './gen/general';
import {NavigationComponentFactory} from './nav/navigation';
import {SpecialComponentFactory} from './spec/special';
import {FormComponentFactory} from './form/form';

export class ElementFabricatory{

  private generalFactory: GeneralComponentFactory;
  private navigationFactory: NavigationComponentFactory;
  private formFactory: FormComponentFactory;
  private specialFactory: SpecialComponentFactory;

  constructor(){
    this.generalFactory = new GeneralComponentFactory();
    this.navigationFactory = new NavigationComponentFactory();
    this.formFactory = new FormComponentFactory();
    this.specialFactory = new SpecialComponentFactory();
  }

  createElement = (componentCategory:string, componentType: string, props: any) => {
    switch (componentCategory.toLocaleLowerCase()){
      case 'general':
        return this.generalFactory.createComponent(componentType, props);
      
      case 'navigation':
        return this.navigationFactory.createComponent(componentType, props);

      case 'form':
        return this.formFactory.createComponent(componentType, props);
      
      case 'special':
        return this.specialFactory.createComponent(componentType, props);

      default:
        return (<>Unable to find {componentCategory}, please be sure this type exists or create an extension of it.</>);
    }
  }
}  