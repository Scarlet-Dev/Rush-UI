import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { GeneralComponentFactory } from '../../components/gen/general'
import { GeneralProps } from "../../components/baseComponents";

// const compCategory = 'general'
const compType = 'comments'
var buttonType: GeneralProps = {}

const elFab = new GeneralComponentFactory();
const BasicComment = () => elFab.createComponent(compType, buttonType)

storiesOf('Rush UI/General Components/Comments', module)
.add('with basic properties', () => <BasicComment />)