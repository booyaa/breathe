import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberWang from '.';

const numbers = [1,2,3,4,5];

storiesOf('NumberWang', module)
.add('default', () => <NumberWang numbers={numbers} />);