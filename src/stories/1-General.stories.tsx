import * as React from 'react';
import GeneralElements from '../lib/General/General';

export default {
    title: '',
    component: GeneralElements,
}

const ge = new GeneralElements();

export const button = () => <ge.Button></ge.Button>