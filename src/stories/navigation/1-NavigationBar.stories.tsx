import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { NavigationComponentFactory } from "../../components/nav/navigation";
import { NavigationProps } from "../../components/baseComponents";

const compType = '';
var navType: NavigationProps = {}

const elFab = new NavigationComponentFactory()
const BasicNavigation = () => elFab.createComponent(compType, navType)

storiesOf('Rush UI/Navigation Components/Navigation', module)
.add('with basic text', () => <BasicNavigation />)