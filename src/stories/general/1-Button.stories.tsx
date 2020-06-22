import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { GeneralComponentFactory } from '../../components/gen/general'
import { GeneralProps } from "../../components/baseComponents";

// const compCategory = 'general'
const compType = 'button'
var buttonType: GeneralProps = {}

const elFab = new GeneralComponentFactory();
const BasicButton = () => elFab.createComponent(compType, buttonType)

storiesOf('Rush UI/General Components/Buttons', module)
.add('with basic text', () => <BasicButton /> )

