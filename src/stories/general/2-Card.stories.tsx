import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { GeneralComponentFactory } from '../../components/gen/general'
import { GeneralProps } from "../../components/baseComponents";

// const compCategory = 'general'
const compType = 'card'
var cardType: GeneralProps = {}

const elFab = new GeneralComponentFactory();
const BasicCards = () => elFab.createComponent(compType, cardType)

storiesOf('Rush UI/General Components/Cards', module)
.add('with basic properties', () => <BasicCards />)