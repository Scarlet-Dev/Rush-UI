import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ElementFabricatory } from '../../components/index'
import { GeneralProps } from "../../components/baseComponents";

const compCategory = 'general'
const compType = 'section'
var buttonType: GeneralProps = {}

const elFab = new ElementFabricatory();
const BasicNavigation = () => elFab.createElement(compCategory, compType, buttonType)

storiesOf('Rush UI/General Components/Sections', module)
.add('with basic properties', () => <BasicNavigation />)