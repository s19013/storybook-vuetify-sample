import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)