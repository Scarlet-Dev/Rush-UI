export type GeneralProps = {
    name?: string;
    value?: string;
    onClick?: () => {};
    message?: string;
    src?: string;
    children?: React.ReactNode;
}

export type NavigationProps = {
    id?: string,
    name?: string,
    value?: string;
    data?: {};
}

export type FormProps = {
    id?: string;
    type?: string;
    for?: string;
    text?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    pattern?: string;
    rows?: number;
    cols?: number;
    dataArray?: [];
    children?: React.ReactNode;
}

export type SpecialProps = {
    id?: string;
    name?: string;
    style?: [];
}



export interface IBaseComponentFactory{
    createComponent(componentType: string, props: any): React.ReactElement | null;
}