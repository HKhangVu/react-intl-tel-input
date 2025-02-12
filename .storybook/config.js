import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { version } from '../package.json';

const req = require.context('./stories', true, /.js*/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));

  require('./styles/styles.scss');
}

addDecorator(
  withOptions({
    name: `react-intl-tel-input v${version}`,
    url: 'https://github.com:HKhangVu/react-intl-tel-input.git#7.0.2',
    sidebarAnimations: true,
  })
);

configure(loadStories, module);
