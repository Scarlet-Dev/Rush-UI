import * as React from 'react';
import { GeneralComponentFactory } from "../../components/gen/general";
import { GeneralProps } from "../../components/baseComponents";

export const generalProps: GeneralProps = {};
export const generalCompFactory = new GeneralComponentFactory();

export const GeneralPage = () => {
    return (
        <>
            <h1>General Page</h1>
        </>
    )
}

export default {
    title: 'Rush UI | General Components',
    component: GeneralPage
}
