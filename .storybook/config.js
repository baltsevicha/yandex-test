import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import StyledCaptureAreaContainer from './decorators/StyledCaptureAreaContainer';

addDecorator(StyledCaptureAreaContainer);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
