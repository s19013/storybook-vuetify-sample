/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { withVuetifyTheme } from './withVeutifyTheme.decorator';
import vuetify from '@/plugins/vuetify'

// このsetupがなにやってるのか説明できない｡｢前もってなんか準備してるとしか説明できない｣
setup((app) => {
  app.use(vuetify)
});

export const decorators = [withVuetifyTheme]

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

