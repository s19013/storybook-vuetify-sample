/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { withVuetifyTheme } from './withVeutifyTheme.decorator';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

setup((app) => {
  app.use(vuetify)
});

export const decorators = [withVuetifyTheme];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;

