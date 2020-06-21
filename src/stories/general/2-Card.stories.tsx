import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ElementFabricatory } from '../../components/index'
import { GeneralProps } from "../../components/baseComponents";

const compCategory = 'general'
const compType = 'card'
var cardType: GeneralProps = {}

const elFab = new ElementFabricatory();
const BasicCards = () => elFab.createElement(compCategory, compType, cardType)

storiesOf('Rush UI/General Components/Cards', module)
.add('with basic properties', () => <BasicCards />)