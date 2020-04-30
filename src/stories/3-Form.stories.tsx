import * as React from 'react';
import FormElements from '../lib/Form/Form';

export default {
    title:'',
    component: FormElements,
}

const fe = new FormElements();

export const Form = () => <fe.Input />