import React from 'react';
import { storiesOf } from '@storybook/react';

import CountdownTimer from '.';

storiesOf('CountdownTimer', module)
.add('default', () => <CountdownTimer />);