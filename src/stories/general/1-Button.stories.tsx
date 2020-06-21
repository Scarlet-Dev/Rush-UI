import { ElementFabricatory } from '../../components/index'
import { GeneralProps } from "../../components/baseComponents";


const elFab = new ElementFabricatory();
const compType = 'general'

var buttonType: GeneralProps = {
}

export const BasicButton = elFab.createElement(compType, 'button', buttonType)


export default {
    title: 'RushUI | General Elements & Components',
    component: BasicButton
}



// export const Button = () => <GeneralElements.Button />
