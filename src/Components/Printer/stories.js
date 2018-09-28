import React from 'react';
import { storiesOf } from '@storybook/react';

import Printer from '.';
import Child from '../Child';

storiesOf('Printer', module)
.add('default', () => <Printer />)
.add('string', () => <Printer value='i am a string'/>)
.add('boolean', () => <Printer value={true}/>)
.add('children prop', () => <Printer><Child /></Printer>);