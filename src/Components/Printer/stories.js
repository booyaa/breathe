import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Printer from '.';
import Child from '../Child';

storiesOf('Printer', module)
.addDecorator(withKnobs)
.add('default', () => <Printer value={object('value')}/>)
.add('string', () => <Printer value='i am a string'/>)
.add('boolean', () => <Printer value={true}/>)
.add('children prop', () => <Printer><Child /></Printer>);