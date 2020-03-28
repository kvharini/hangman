import { configure } from '@storybook/react';

// Load stories dynamically
// See: https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
const req = require.context('../src', true, /\.stories\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
