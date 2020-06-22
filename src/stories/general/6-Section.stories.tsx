import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { GeneralComponentFactory } from '../../components/gen/general'
import { GeneralProps } from "../../components/baseComponents";

// const compCategory = 'general'
const compType = 'section'
var buttonType: GeneralProps = {}

const elFab = new GeneralComponentFactory();
const BasicNavigation = () => elFab.createComponent(compType, buttonType)

storiesOf('Rush UI/General Components/Sections', module)
.add('with basic properties', () => <BasicNavigation />)