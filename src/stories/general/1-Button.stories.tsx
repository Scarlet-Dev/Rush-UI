import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ElementFabricatory } from '../../components/index'
import { GeneralProps } from "../../components/baseComponents";

const compCategory = 'general'
const compType = 'button'
var buttonType: GeneralProps = {}

const elFab = new ElementFabricatory();
const BasicButton = () => elFab.createElement(compCategory, compType, buttonType)

storiesOf('Rush UI/General Components/Buttons', module)
.add('with basic text', () => <BasicButton /> )

