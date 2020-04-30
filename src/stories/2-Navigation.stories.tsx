import * as React from 'react';
import NavigationElement from '../lib/navigation/navigation';

export default {
    title:'',
    component: NavigationElement,
}

const ne = new NavigationElement();

export const Form = () => <ne.BasicNav />