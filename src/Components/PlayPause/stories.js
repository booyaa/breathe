import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PlayPause from '.';

export const mode = {
    isPlaying: true
}

export const actions = {
    onPressed: action('onPressed')
}

storiesOf('PlayPause', module)
.add('default', () => <PlayPause mode={mode} {...actions}/>)
.add('paused', () => <PlayPause mode={{...mode, isPlaying: false}} {...actions} />)
;